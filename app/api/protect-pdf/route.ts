import { NextRequest, NextResponse } from "next/server";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const execFileAsync = promisify(execFile);

/**
 * Protects a completed PDF after all report/disclaimer/photo pages are merged.
 * Server prerequisite: qpdf must be installed and available on PATH.
 * Configure PDF_OWNER_PASSWORD as a strong secret environment variable.
 * The user password is empty (opens without a password); extraction/copying
 * and modifications are disabled in PDF readers that honor PDF permissions.
 */
export async function POST(request: NextRequest) {
  const ownerPassword = process.env.PDF_OWNER_PASSWORD;
  if (!ownerPassword || ownerPassword.length < 12) {
    return NextResponse.json(
      { error: "Set PDF_OWNER_PASSWORD to a strong secret of at least 12 characters on the server." },
      { status: 500 },
    );
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/pdf")) {
    return NextResponse.json({ error: "Expected application/pdf data." }, { status: 415 });
  }

  const input = Buffer.from(await request.arrayBuffer());
  if (input.length < 5 || input.subarray(0, 5).toString("ascii") !== "%PDF-") {
    return NextResponse.json({ error: "The uploaded content is not a valid PDF." }, { status: 400 });
  }
  if (input.length > 40 * 1024 * 1024) {
    return NextResponse.json({ error: "PDF exceeds the 40 MB protection limit." }, { status: 413 });
  }

  const workDir = await mkdtemp(path.join(tmpdir(), "protect-pdf-"));
  const inputPath = path.join(workDir, "input.pdf");
  const outputPath = path.join(workDir, "protected.pdf");

  try {
    await writeFile(inputPath, input, { mode: 0o600 });
    // qpdf's 256-bit encryption; blank user password allows opening, while
    // owner password controls permissions. --extract=n disables text extraction.
    await execFileAsync(
      "qpdf",
      [
        "--encrypt", "", ownerPassword, "256",
        "--print=full", "--modify=none", "--extract=n", "--annotate=n",
        "--", inputPath, outputPath,
      ],
      { timeout: 60_000, maxBuffer: 1024 * 1024 },
    );

    const protectedPdf = await readFile(outputPath);
    return new NextResponse(new Uint8Array(protectedPdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=protected-report.pdf",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("PDF encryption failed:", error);
    return NextResponse.json(
      { error: "PDF protection failed. Confirm qpdf is installed and PDF_OWNER_PASSWORD is configured." },
      { status: 500 },
    );
  } finally {
    await rm(workDir, { recursive: true, force: true }).catch(() => undefined);
  }
}
