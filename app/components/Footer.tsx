"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    getCities,
    getSelectedCity,
} from "@/app/components/city_price";

const BRANDS = [
    "Tata",
    "Mahindra",
    "Hyundai",
    "Kia",
    "Maruti",
    "Toyota",
    "Skoda",
    "Volkswagen",
];

const SERVICE_AREAS: Record<string, string[]> = {
    Pune: [
        "Baner",
        "Hinjewadi",
        "Wakad",
        "Kharadi",
        "Hadapsar",
        "Kothrud",
        "Pimple Saudagar",
        "Viman Nagar",
        "Aundh",
        "Chinchwad",
    ],

    Kolhapur: [
        "Rajaram Puri",
        "Shahupuri",
        "Uchgaon",
        "Kadamwadi",
        "Shivaji Udyam Nagar",
    ],

    Mumbai: [
        "Andheri",
        "Borivali",
        "Kandivali",
        "Goregaon",
        "Malad",
        "Vashi",
        "Sanpada",
        "Prabhadevi",
        "Lower Parel",
        "Chembur",
        "Ghatkopar",
        "Thane",
        "Worli",
        "Dadar",
        "Kharghar",
        "Panvel",
        "Vasai",
        "Virar",
    ],

    ChhatrapatiSambhajinagar: [
        "CIDCO",
        "Jalana Road",
        "Beed Bypass Road",
        "Shendra",
        "Chikhalthana MIDC",
    ],

    Nashik: [
        "Ambad",
        "Trimbak Road",
        "Satpur MIDC",
        "Ambedkar Nagar",
        "Indira Nagar",
        "College Road",
        "CIDCO",
    ],

    Solapur: [
        "Vijapur Road",
        "Hotagi Road",
        "Sadar Bazar",
        "Navi Peth",
    ],

    Baramati: [
        "Baramati MIDC",
        "Phaltan",
        "Vidyanagari",
        "Kasaba",
    ],

    Satara: [
        "Vadhe Phata",
        "Bombay Restaurant",
        "Satara MIDC",
        "Godoli",
        "Powai Naka",
        "Rajwada",
    ],

    Sangli: [
        "Vishrambag",
        "Kupwad",
        "Miraj MIDC",
    ],

    Nagpur: [
        "Nagpur"
    ],
};

const getCityDisplayName = (city: string) => {
    if (city === "ChhatrapatiSambhajinagar") {
        return "Chhatrapati Sambhajinagar";
    }

    return city;
};

export default function Footer() {
    /*
     * IMPORTANT:
     * Do not call getSelectedCity() during the initial render.
     *
     * The server cannot access browser localStorage, while the client can.
     * Therefore reading it directly during render causes:
     *
     * Server  -> Pune
     * Client  -> Mumbai
     *
     * which produces a hydration mismatch.
     *
     * Start with the same deterministic value on both sides,
     * then load the actual selected city after hydration.
     */
    const [selectedCity, setSelectedCity] = useState("Pune");

    useEffect(() => {
        const city = getSelectedCity();

        if (city) {
            setSelectedCity(city);
        }
    }, []);

    const areas = SERVICE_AREAS[selectedCity] || [];
    const cities = getCities();
    const selectedCityDisplay = getCityDisplayName(selectedCity);

    return (
        <footer className="relative mt-24 bg-white/40 backdrop-blur-xl border-t border-white/60">

            {/* TOP GLOW LINE */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">

                {/* BRAND SEO LINKS */}
                <div className="mb-10 pb-6 border-b border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 text-center md:text-left">
                        PDI Inspection by Brand in Pune
                    </h4>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {BRANDS.map((brand) => (
                            <Link
                                key={brand}
                                href={`/pdi/${brand.toLowerCase()}-pune`}
                                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-[12px] font-semibold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-md transition-all"
                            >
                                {brand} PDI Pune
                            </Link>
                        ))}
                    </div>
                </div>

                {/* PRICING HIGHLIGHT */}
                <div className="text-center mb-14">
                    <p className="text-sm font-medium text-slate-600">
                        Prices start at{" "}
                        <span className="font-black text-indigo-600">
                            ₹1,299
                        </span>{" "}
                        for standard cars and{" "}
                        <span className="font-black text-pink-500">
                            ₹2,499
                        </span>{" "}
                        for luxury vehicles.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-2 mb-6 group"
                        >
                            <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-6 transition-transform">
                                <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center text-white font-black text-xs">
                                    I
                                </div>
                            </div>

                            <span className="font-black text-xl tracking-tight text-slate-900 uppercase">
                                Inspect
                                <span className="text-indigo-600">
                                    MyCar
                                </span>
                            </span>
                        </Link>

                        <p className="text-slate-500 text-sm leading-relaxed">
                            Pune’s trusted independent car inspection service.
                            We perform a detailed{" "}
                            <strong>400 point PDI</strong> so you take
                            delivery of a perfect car.
                        </p>

                        {/* CONTACT */}
                        <div className="mt-6 space-y-2 text-sm">
                            <a
                                href="tel:+919975934213"
                                className="block font-semibold text-slate-700 hover:text-indigo-600"
                            >
                                📞 +91 99759 34213
                            </a>

                            <a
                                href="https://wa.me/919975934213"
                                className="block font-semibold text-green-600"
                            >
                                💬 WhatsApp Chat
                            </a>
                        </div>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
                            Services
                        </h4>

                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                
                                <Link
                                
                                     href={`/locations`}
                                    className="hover:text-indigo-600"
                                >
                                    Locations
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/how-it-works"
                                    className="hover:text-indigo-600"
                                >
                                    How It Works
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/info/pricing"
                                    className="hover:text-indigo-600"
                                >
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/cancellation"
                                    className="hover:text-indigo-600"
                                >
                                    Cancellation Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* GUIDES */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
                            Guides
                        </h4>

                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link
                                    href="/pdi-checklist-for-new-car"
                                    className="hover:text-indigo-600"
                                >
                                    PDI Checklist
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/car-delivery-checklist-pune"
                                    className="hover:text-indigo-600"
                                >
                                    Delivery Checklist
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/top-10-mistakes-while-buying-car-in-pune"
                                    className="hover:text-indigo-600"
                                >
                                    Buying Mistakes Guide
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/faqs"
                                    className="hover:text-indigo-600"
                                >
                                    FAQs
                                </Link>
                            </li>

                            {/* <li>
                                <Link
                                    href="/blogs"
                                    className="hover:text-indigo-600"
                                >
                                    Blogs
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    {/* SERVICE AREAS */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">
                            Service Areas in {selectedCityDisplay}
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {areas.length > 0 ? (
                                areas.map((area) => (
                                    <span
                                        key={area}
                                        className="text-xs bg-white px-2 py-1 rounded-md border border-slate-200 text-slate-500"
                                    >
                                        {area}
                                    </span>
                                ))
                            ) : (
                                <span className="text-xs text-slate-400">
                                    Service areas coming soon
                                </span>
                            )}
                        </div>
                    </div>
                </div>

{/* CITIES SERVED */}

<div className="mt-14 pt-8 border-t border-slate-100">

    <h4 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-widest">
        Cities Served
    </h4>

    <div className="flex flex-wrap gap-2">

        {cities.map((city) => {
            const cityAreas = SERVICE_AREAS[city] || [];
            const isSelected = city === selectedCity;

const citySlug =
    city === "ChhatrapatiSambhajinagar"
        ? "chhatrapati-sambhajinagar"
        : city
              .trim()
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
                <Link
                    key={city}
                    href={`/${citySlug}/car-pdi`}
                    className={`px-3 py-2 rounded-lg border text-xs transition-all ${
                        isSelected
                            ? "bg-indigo-50 border-indigo-300 text-indigo-600 shadow-sm"
                            : "bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm"
                    }`}
                >
                    <span className="font-semibold">
                        {getCityDisplayName(city)}
                    </span>

                    <span className="ml-1.5 text-[10px] text-slate-400">
                        ({cityAreas.length})
                    </span>
                </Link>
            );
        })}

    </div>
</div>


                {/* FOOTER BOTTOM */}
                <div className="mt-12 flex flex-col gap-8 border-t border-black/10 pt-8 lg:flex-row lg:items-center lg:justify-between">

                    {/* COPYRIGHT */}
                    <div>
                        <p className="text-sm text-slate-400">
                            © {new Date().getFullYear()}{" "}
                            <span className="font-semibold text-black">
                                InspectMyCar
                            </span>
                            {" "}• Independent Car Inspection Specialists,
                            Pune.
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Designed &amp; Developed by{" "}

                            <a
                                href="https://techworks.3dvishwa.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-indigo-400 transition hover:text-pink-400"
                            >
                                3dVishwa Software Solutions
                            </a>
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="flex flex-wrap items-center gap-6 text-sm">

                        <Link
                            href="/privacy"
                            className="text-slate-400 transition hover:text-black"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-slate-400 transition hover:text-black"
                        >
                            Terms
                        </Link>

                        {/* <Link
                            href="/blogs"
                            className="text-slate-400 transition hover:text-black"
                        >
                            Blogs
                        </Link> */}

                        <Link
                            href="/faqs"
                            className="text-slate-400 transition hover:text-black"
                        >
                            FAQs
                        </Link>
                    </div>
                </div>
            </div>

            {/* BOTTOM GLOW */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-indigo-600/10 via-pink-500/5 to-transparent" />

        </footer>
    );
}