"use client";

import Link from "next/link";

import { useBooking } from "@/app/context/BookingContext";

import {

    CITY_PRICING,

    useCityPricing,

    formatPrice,

    type CityName,

} from "@/app/components/city_price";

export default function Home() {

    const { openNewCarBooking } = useBooking();

    /**

     * ========================================================

     * CENTRALIZED CITY + PRICING

     * ========================================================

     *

     * All city selection and pricing comes from city_price.tsx.

     *

     * Default:

     * Pune

     *

     * City is also persisted in localStorage.

     */

    const {

        selectedCity,

        cities,

        setCity,

        newCarFuelPrice,

        newCarEvPrice,

    } = useCityPricing();

    /**

     * ========================================================

     * PRICING

     * ========================================================

     */

    /**

     * Standard new-car PDI price.

     *

     * This is the "With Gauge" price.

     */

    const standardFuelPrice =

        newCarFuelPrice("withGauge");

    /**

     * EV standard PDI price.

     */

    const standardEvPrice =

        newCarEvPrice();

    /**

     * New-car pricing options.

     */

    const withoutGaugePrice =

        newCarFuelPrice("withoutGauge");

    const withObdPrice =

        newCarFuelPrice("withOBD");

    const isPune =

        selectedCity === "Pune";

    return (

        <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-[#EEF2FF]/40 text-slate-900">

            {/* =====================================================

                BACKGROUND

            \===================================================== */}

            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-[#818CF8]/20 blur-[120px] animate-pulse" />

                <div

                    className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-[#818CF8]/20 blur-[120px] animate-pulse"

                    style={{

                        animationDelay: "1s",

                    }}

                />

                <div className="absolute bottom-0 left-1/2 h-[25rem] w-[25rem] -translate-x-1/2 rounded-full bg-[#C7D2FE]/30 blur-[120px]" />

                <div

                    className="absolute inset-0 opacity-[0.03]"

                    style={{

                        backgroundImage:

                            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)",

                        backgroundSize:

                            "60px 60px",

                    }}

                />

            </div>

            {/* =====================================================

                CITY SELECTOR

            \===================================================== */}

            <section className="relative max-w-7xl mx-auto px-6 pt-28">

                <div className="flex justify-end">

                    <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">

                        <span className="text-xs font-black uppercase tracking-wider text-slate-500">

                            📍 Select City

                        </span>

                        <select

                            value={selectedCity}

                            onChange={(e) =>

                                setCity(

                                    e.target.value as CityName

                                )

                            }

                            className="cursor-pointer bg-transparent text-sm font-black text-[#6366F1] focus:outline-none"

                        >

                            {cities.map(

                                (cityName) => (

                                    <option

                                        key={cityName}

                                        value={cityName}

                                    >

                                        {

                                            CITY_PRICING[

                                                cityName

                                            ].name

                                        }

                                    </option>

                                )

                            )}

                        </select>

                    </div>

                </div>

            </section>

            {/* =====================================================

                HERO

            \===================================================== */}

            <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* =================================================

                        LEFT

                    \================================================= */}

                    <div>

                        <div className="inline-flex items-center gap-3 rounded-full border border-[#E0E7FF] bg-white/70 backdrop-blur-xl px-5 py-2 shadow-lg">

                            <span className="relative flex h-3 w-3">

                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#818CF8] opacity-75" />

                                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6366F1]" />

                            </span>

                            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#4F46E5]">

                                {selectedCity} • Live Booking Open

                            </span>

                        </div>

                        <h1 className="mt-10 text-5xl md:text-7xl font-black tracking-tight leading-[0.92]">

                            Your New Car

                            <br />

                            <span className="bg-gradient-to-r from-[#3730A3] via-[#4F46E5] to-[#818CF8] bg-clip-text text-transparent">

                                Deserves One

                            </span>

                            <br />

                            Final Inspection.

                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

                            Independent 400 point

                            Pre-Delivery Inspection

                            that uncovers transport

                            damage, repaint jobs,

                            manufacturing defects and

                            hidden electronic issues

                            before you accept delivery

                            in{" "}

                            {selectedCity}.

                        </p>

                        {/* =================================================

                            PRICE SUMMARY

                        \================================================= */}

                        <div

                            className={`mt-8 grid grid-cols-1 ${isPune ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-3 max-w-2xl`}

                        >

                            {/* WITHOUT GAUGE — PUNE ONLY */}

                            {isPune && (

                                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg backdrop-blur-xl">

                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">

                                        Without Gauge

                                    </p>

                                    <p className="mt-2 text-2xl font-black text-slate-900">

                                        ₹

                                        {formatPrice(

                                            withoutGaugePrice

                                        )}

                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">

                                        Basic PDI

                                    </p>

                                </div>

                            )}

                            {/* WITH GAUGE — ALL CITIES */}

                            {(

                                <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg backdrop-blur-xl">

                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">

                                        With Gauge

                                    </p>

                                    <p className="mt-2 text-2xl font-black text-[#4F46E5]">

                                        ₹

                                        {formatPrice(

                                            standardFuelPrice

                                        )}

                                    </p>

                                    <p className="mt-1 text-xs text-[#6366F1]">

                                        Standard PDI

                                    </p>

                                </div>

                            )}

                            {/* WITH OBD — ALL CITIES */}

                            {isPune ? (

                                <div className="rounded-2xl border-2 border-[#C7D2FE] bg-[#EEF2FF]/80 p-4 shadow-lg">

                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6366F1]">

                                        With OBD Dignostics

                                    </p>

                                    <p className="mt-2 text-2xl font-black text-slate-900">

                                        ₹

                                        {formatPrice(

                                            withObdPrice

                                        )}

                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">

Recommended PDI

                                    </p>

                                </div>

                            ) : (

                                <div className="rounded-2xl border-2 border-[#C7D2FE] bg-[#EEF2FF]/80 p-5 shadow-lg">

                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6366F1]">

                                        With OBD Dignostics

                                    </p>

                                    <p className="mt-2 text-3xl font-black text-[#4F46E5]">

                                        ₹

                                        {formatPrice(

                                            withObdPrice

                                        )}

                                    </p>

                                    <p className="mt-1 text-xs font-semibold text-[#6366F1]">

                                        Recommended PDI

                                    </p>

                                </div>

                            )}

                        </div>

                        {/* EV PRICE */}

                        <div className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-[#C7D2FE] bg-[#EEF2FF]/80 px-5 py-3 shadow-sm">

                            <span className="text-lg">

                                ⚡

                            </span>

                            <div>

                                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#6366F1]">

                                    EV Inspection

                                </p>

                                <p className="text-lg font-black text-[#4F46E5]">

                                    ₹

                                    {formatPrice(

                                        standardEvPrice

                                    )}

                                </p>

                            </div>

                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-5">

                            <button

                                onClick={() =>

                                    openNewCarBooking()

                                }

                                className="group rounded-2xl bg-gradient-to-r from-[#3730A3] to-[#6366F1] px-8 py-5 font-bold text-white shadow-2xl shadow-[#6366F1]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"

                            >

                                Book PDI in{" "}

                                {selectedCity}

                                <span className="ml-2 inline-block transition group-hover:translate-x-1">

                                    →

                                </span>

                            </button>

                            <a

                                href="tel:+919975934213"

                                className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl px-8 py-5 font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#818CF8] hover:shadow-xl"

                            >

                                📞 Talk to an Expert

                            </a>

                        </div>

                        {/* QUICK STATS */}

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">

                            {[

                                ["400", "Checks"],

                                ["5000+", "Cars"],

                                ["4.9★", "Rating"],

                                ["100%", "Independent"],

                            ].map(

                                ([v, l]) => (

                                    <div

                                        key={l}

                                        className="rounded-2xl border border-white/60 bg-white/70 p-5 backdrop-blur-xl shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"

                                    >

                                        <div className="text-2xl font-black text-[#6366F1]">

                                            {v}

                                        </div>

                                        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">

                                            {l}

                                        </div>

                                    </div>

                                )

                            )}

                        </div>

                    </div>

                    {/* =================================================

                        RIGHT

                    \================================================= */}

                    <div className="relative">

                        <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-[#6366F1]/20 to-[#818CF8]/20 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

                            <div className="car-scan-stage relative h-[320px] sm:h-[450px] lg:h-[650px] w-full overflow-hidden rounded-[2rem] lg:rounded-[2.3rem] bg-slate-950 text-white">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(14,116,214,0.5),transparent_60%),linear-gradient(135deg,#020617,#0b2a59_55%,#06142c)]" />
                                <div className="scan-grid absolute inset-0 opacity-30" />
                                <div className="scan-orbit scan-orbit-one" />
                                <div className="scan-orbit scan-orbit-two" />
                                <div className="scan-ring" />
                                <div className="scan-beam" />
                                <div className="absolute inset-x-4 top-5 z-10 text-center sm:top-7">
                                    <p className="text-[9px] font-black uppercase tracking-[0.35em] text-cyan-300 sm:text-xs">InspectMyCar • Advanced Scan</p>
                                    <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-3xl">360° Vehicle Inspection</h3>
                                    <p className="mt-1 text-xs text-blue-100 sm:text-sm">Every angle. Every detail.</p>
                                </div>
                                <div className="scan-car-anchor absolute z-[2] w-[94%] max-w-[620px]">
                                <div className="scan-view-stack relative w-full" role="img" aria-label="Blue sedan shown from front, right side, rear, and left side during a 360 degree vehicle scan">
                                  {/* RIGHT SIDE VIEW */}
                                  <svg className="scan-view scan-view-side scan-sedan block w-full" viewBox="0 0 760 360" aria-hidden="true">
                                    <defs>
                                      <linearGradient id="sideBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b8efff"/><stop offset="22%" stopColor="#32b9f4"/><stop offset="58%" stopColor="#1676c8"/><stop offset="100%" stopColor="#07366f"/></linearGradient>
                                      <linearGradient id="sideGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#123d68"/><stop offset="55%" stopColor="#06172f"/><stop offset="100%" stopColor="#2786b8"/></linearGradient>
                                      <filter id="sideGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                    </defs>
                                    <ellipse cx="380" cy="292" rx="290" ry="28" fill="#168bff" opacity=".25" />
                                    <path d="M82 232 L108 183 Q119 166 157 160 L231 151 L292 85 Q314 61 358 57 L488 57 Q530 59 556 91 L609 155 L654 171 Q680 181 695 211 L710 236 Q715 251 697 258 L652 264 L118 264 L82 252 Q73 245 82 232Z" fill="url(#sideBody)" stroke="#54dcff" strokeWidth="5" filter="url(#sideGlow)"/>
                                    <path d="M246 146 L304 88 Q320 72 358 70 L408 70 L408 148Z" fill="url(#sideGlass)" stroke="#79e6ff" strokeWidth="3"/><path d="M422 70 L486 70 Q517 72 536 98 L574 148 L422 148Z" fill="url(#sideGlass)" stroke="#79e6ff" strokeWidth="3"/><path d="M413 70 L413 151" stroke="#9cecff" strokeWidth="5"/>
                                    <path d="M112 190 Q166 173 222 171 L594 171 Q636 174 666 202 L682 224 L626 229 L128 229 L95 220Z" fill="#197dcc" opacity=".6"/><path d="M420 157 L420 251 M553 161 L573 226" stroke="#8feaff" strokeWidth="3"/><path d="M458 185 L489 185 M523 185 L554 185" stroke="#d5f8ff" strokeWidth="5" strokeLinecap="round"/><path d="M92 219 L126 208 L133 225 L95 235Z" fill="#ff6983"/><path d="M650 205 L681 215 L688 232 L658 226Z" fill="#d7fbff"/><path d="M150 263 L620 263" stroke="#69e8ff" strokeWidth="5"/>
                                    {[220,575].map((cx) => <g key={cx}><circle cx={cx} cy="260" r="56" fill="#06182e" stroke="#4bdcff" strokeWidth="7"/><circle cx={cx} cy="260" r="39" fill="#102f4b" stroke="#b3f4ff" strokeWidth="4"/>{Array.from({length:8},(_,i)=><line key={i} x1={cx} y1="225" x2={cx} y2="295" stroke="#8cecff" strokeWidth="4" transform={`rotate(${i*45} ${cx} 260)`}/>)}<circle cx={cx} cy="260" r="10" fill="#45d9ff"/></g>)}
                                  </svg>
                                  {/* FRONT VIEW */}
                                  <svg className="scan-view scan-view-front scan-sedan block w-full" viewBox="0 0 760 360" aria-hidden="true">
                                    <defs><linearGradient id="frontBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b8efff"/><stop offset=".4" stopColor="#32b9f4"/><stop offset="1" stopColor="#07366f"/></linearGradient><linearGradient id="frontGlass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#287ba8"/><stop offset="1" stopColor="#06172f"/></linearGradient></defs>
                                    <ellipse cx="380" cy="300" rx="190" ry="22" fill="#168bff" opacity=".3"/><path d="M205 276 L220 209 Q230 174 268 150 L296 91 Q309 65 344 58 L416 58 Q451 65 464 91 L492 150 Q530 174 540 209 L555 276 Q510 303 380 306 Q250 303 205 276Z" fill="url(#frontBody)" stroke="#54dcff" strokeWidth="5"/>
                                    <path d="M287 151 L309 94 Q317 77 345 74 L415 74 Q443 77 451 94 L473 151 Q380 139 287 151Z" fill="url(#frontGlass)" stroke="#8feaff" strokeWidth="4"/><path d="M245 184 Q286 166 323 178 L309 209 Q277 217 237 208Z" fill="#e7fbff" stroke="#55ddff" strokeWidth="4"/><path d="M515 184 Q474 166 437 178 L451 209 Q483 217 523 208Z" fill="#e7fbff" stroke="#55ddff" strokeWidth="4"/><path d="M302 224 Q380 211 458 224 L447 266 Q380 279 313 266Z" fill="#06213d" stroke="#72e5ff" strokeWidth="4"/><path d="M321 237 L439 237 M328 248 L432 248 M338 259 L422 259" stroke="#2ba8df" strokeWidth="4"/><rect x="352" y="274" width="56" height="12" rx="4" fill="#d7fbff"/><path d="M224 253 L252 267 M536 253 L508 267" stroke="#b8efff" strokeWidth="5"/><path d="M246 290 Q380 316 514 290" fill="none" stroke="#69e8ff" strokeWidth="5"/>
                                  </svg>
                                  {/* REAR VIEW */}
                                  <svg className="scan-view scan-view-rear scan-sedan block w-full" viewBox="0 0 760 360" aria-hidden="true">
                                    <defs><linearGradient id="rearBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b8efff"/><stop offset=".4" stopColor="#238ed9"/><stop offset="1" stopColor="#062c60"/></linearGradient><linearGradient id="rearGlass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2786b8"/><stop offset="1" stopColor="#06172f"/></linearGradient></defs>
                                    <ellipse cx="380" cy="300" rx="190" ry="22" fill="#168bff" opacity=".3"/><path d="M205 276 L220 209 Q230 174 268 150 L296 91 Q309 65 344 58 L416 58 Q451 65 464 91 L492 150 Q530 174 540 209 L555 276 Q510 303 380 306 Q250 303 205 276Z" fill="url(#rearBody)" stroke="#54dcff" strokeWidth="5"/>
                                    <path d="M287 151 L309 94 Q317 77 345 74 L415 74 Q443 77 451 94 L473 151 Q380 139 287 151Z" fill="url(#rearGlass)" stroke="#8feaff" strokeWidth="4"/><path d="M237 184 Q277 166 311 178 L300 213 Q267 221 230 207Z" fill="#ff667e" stroke="#ffb4c2" strokeWidth="4"/><path d="M523 184 Q483 166 449 178 L460 213 Q493 221 530 207Z" fill="#ff667e" stroke="#ffb4c2" strokeWidth="4"/><path d="M275 229 Q380 214 485 229 L477 252 Q380 266 283 252Z" fill="#0b4779" stroke="#69dfff" strokeWidth="3"/><rect x="328" y="257" width="104" height="26" rx="4" fill="#d8f7ff" stroke="#58d8ff" strokeWidth="3"/><path d="M224 253 L252 267 M536 253 L508 267" stroke="#b8efff" strokeWidth="5"/><path d="M246 290 Q380 316 514 290" fill="none" stroke="#69e8ff" strokeWidth="5"/><path d="M302 278 L458 278" stroke="#ff667e" strokeWidth="5"/>
                                  </svg>
                                  {/* LEFT SIDE VIEW */}
                                  <svg className="scan-view scan-view-left scan-sedan block w-full" viewBox="0 0 760 360" aria-hidden="true">
                                    <defs><linearGradient id="leftBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b8efff"/><stop offset="22%" stopColor="#32b9f4"/><stop offset="58%" stopColor="#1676c8"/><stop offset="100%" stopColor="#07366f"/></linearGradient><linearGradient id="leftGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#123d68"/><stop offset="55%" stopColor="#06172f"/><stop offset="100%" stopColor="#2786b8"/></linearGradient></defs>
                                    <g transform="translate(760 0) scale(-1 1)"><ellipse cx="380" cy="292" rx="290" ry="28" fill="#168bff" opacity=".25"/><path d="M82 232 L108 183 Q119 166 157 160 L231 151 L292 85 Q314 61 358 57 L488 57 Q530 59 556 91 L609 155 L654 171 Q680 181 695 211 L710 236 Q715 251 697 258 L652 264 L118 264 L82 252 Q73 245 82 232Z" fill="url(#leftBody)" stroke="#54dcff" strokeWidth="5"/><path d="M246 146 L304 88 Q320 72 358 70 L408 70 L408 148Z" fill="url(#leftGlass)" stroke="#79e6ff" strokeWidth="3"/><path d="M422 70 L486 70 Q517 72 536 98 L574 148 L422 148Z" fill="url(#leftGlass)" stroke="#79e6ff" strokeWidth="3"/><path d="M413 70 L413 151" stroke="#9cecff" strokeWidth="5"/><path d="M112 190 Q166 173 222 171 L594 171 Q636 174 666 202 L682 224 L626 229 L128 229 L95 220Z" fill="#197dcc" opacity=".6"/><path d="M420 157 L420 251 M553 161 L573 226" stroke="#8feaff" strokeWidth="3"/><path d="M458 185 L489 185 M523 185 L554 185" stroke="#d5f8ff" strokeWidth="5" strokeLinecap="round"/><path d="M92 219 L126 208 L133 225 L95 235Z" fill="#ff6983"/><path d="M650 205 L681 215 L688 232 L658 226Z" fill="#d7fbff"/><path d="M150 263 L620 263" stroke="#69e8ff" strokeWidth="5"/>{[220,575].map((cx) => <g key={cx}><circle cx={cx} cy="260" r="56" fill="#06182e" stroke="#4bdcff" strokeWidth="7"/><circle cx={cx} cy="260" r="39" fill="#102f4b" stroke="#b3f4ff" strokeWidth="4"/><circle cx={cx} cy="260" r="10" fill="#45d9ff"/></g>)}</g>
                                  </svg>
                                </div>
                                </div>
<div className="scan-label scan-label-body">
  <span />BODY SCAN
</div>

<div className="scan-label scan-label-analysis">
  <span />VEHICLE ANALYSIS
</div>

<div className="scan-label scan-label-wheel">
  <span />WHEEL CHECK
</div>

<div className="scan-label scan-label-interior">
  <span />INTERIOR SCAN
</div>

<div className="scan-label scan-label-underbody">
  <span />UNDERBODY ANALYSIS
</div>

<div className="scan-label scan-label-engine">
  <span />ENGINE CHECK
</div>
                                <div className="absolute bottom-5 left-0 right-0 z-10 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-blue-100 sm:bottom-7 sm:text-xs sm:tracking-[0.22em]"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-600 shadow-[0_0_14px_#6366f1]" /> <span className="text-indigo-600">SCANNING VEHICLE</span> <span className="mx-1 h-4 w-px bg-indigo-400" /> <span className="text-indigo-600">360° ACTIVE</span></div>
                                <style jsx>{`
                                    .scan-grid { background-image: linear-gradient(rgba(56,189,248,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.12) 1px, transparent 1px); background-size: 28px 28px; mask-image: linear-gradient(transparent, black 25%, black 85%, transparent); }
                                    .scan-beam { position:absolute; z-index:4; top:30%; bottom:18%; left:18%; width:3px; background:#67e8f9; box-shadow:0 0 12px #22d3ee,0 0 32px #0891b2; animation:beamSweep 4.5s ease-in-out infinite alternate; }
                                    .scan-beam:before { content:''; position:absolute; top:0; bottom:0; left:-42px; width:44px; background:linear-gradient(90deg,transparent,rgba(34,211,238,.22)); }
                                    .scan-orbit { position:absolute; left:50%; top:56%; width:86%; height:24%; border:1px dashed rgba(34,211,238,.65); border-radius:50%; transform:translate(-50%,-50%) rotate(-13deg); }
                                    .scan-orbit-one { animation:orbitSpin 14s linear infinite; } .scan-orbit-two { width:65%; height:38%; border-color:rgba(59,130,246,.55); transform:translate(-50%,-50%) rotate(27deg); animation:orbitSpin 18s linear infinite reverse; }
                                    .scan-ring { position:absolute; left:68%; top:58%; width:90px; height:90px; border:2px dashed rgba(34,211,238,.6); border-radius:50%; animation:ringPulse 2.2s ease-in-out infinite; }
                                    .scan-target { transform-origin:413px 70px; animation:ringPulse 1.8s ease-in-out infinite; }
                                    .scan-label { position:absolute; z-index:5; display:flex; align-items:center; gap:7px; border:1px solid rgba(34,211,238,.5); border-radius:9px; background:rgba(2,18,43,.82); padding:7px 9px; color:#dbeafe; font-size:8px; font-weight:900; letter-spacing:.08em; box-shadow:0 0 18px rgba(8,145,178,.12); }
                                    .scan-label span { width:7px; height:7px; flex:none; border-radius:50%; background:#22d3ee; box-shadow:0 0 9px #22d3ee; }
                                    /* Each inspection label has its own anchor around the vehicle. */
                                    .scan-label-body { left:2%; top:42%; animation:labelFloat 3s ease-in-out infinite; }
                                    .scan-label-analysis { right:2%; top:30%; animation:labelFloat 3.4s ease-in-out infinite reverse; }
                                    .scan-label-wheel { right:2%; bottom:24%; animation:labelFloat 3.2s ease-in-out infinite; }
                                    .scan-label-interior { left:3%; top:23%; animation:labelFloat 3.6s ease-in-out infinite reverse; }
                                    .scan-label-underbody { right:8%; bottom:9%; animation:labelFloat 3.1s ease-in-out infinite; }
                                    .scan-label-engine { left:8%; bottom:10%; animation:labelFloat 3.3s ease-in-out infinite reverse; }
                                    .scan-car-anchor { left:50%; top:53%; perspective:1000px; transform:translate3d(-50%,-50%,0) !important; transform-origin:center center; }
                                    .scan-view-stack { aspect-ratio: 760 / 360; }
                                    .scan-view { position:absolute; inset:0; width:100%; height:100%; object-fit:contain; opacity:0; animation-duration:12s; animation-timing-function:steps(1,end); animation-iteration-count:infinite; }
                                    .scan-view-side { animation-name: sideCycle; }
                                    .scan-view-front { animation-name: frontCycle; }
                                    .scan-view-rear { animation-name: rearCycle; }
                                    .scan-view-left { animation-name: leftCycle; }
                                    @keyframes sideCycle { 0%,24.99% { opacity:0; } 25%,49.99% { opacity:1; } 50%,100% { opacity:0; } }
                                    @keyframes frontCycle { 0%,24.99% { opacity:1; } 25%,100% { opacity:0; } }
                                    @keyframes rearCycle { 0%,49.99% { opacity:0; } 50%,74.99% { opacity:1; } 75%,100% { opacity:0; } }
                                    @keyframes leftCycle { 0%,74.99% { opacity:0; } 75%,99.99% { opacity:1; } 100% { opacity:0; } }
                                    /* Fixed center anchor; only the separate vehicle illustrations cross-fade. */
                                    @keyframes beamSweep { from { left:18%; opacity:.65; } to { left:82%; opacity:1; } }
                                    @keyframes orbitSpin { to { rotate:360deg; } } @keyframes ringPulse { 0%,100% { opacity:.45; scale:.92; } 50% { opacity:1; scale:1.08; } } @keyframes labelFloat { 0%,100% { translate:0 0; } 50% { translate:0 -5px; } }
                                    @media (min-width:640px) { .scan-label { font-size:10px; padding:9px 12px; } }
                                    @media (max-width:639px) {
                                      .scan-label { gap:4px; padding:6px 7px; font-size:7px; letter-spacing:.035em; }
                                      .scan-label-body { left:1%; top:42%; }
                                      .scan-label-analysis { right:1%; top:29%; }
                                      .scan-label-wheel { right:1%; bottom:23%; }
                                      .scan-label-interior { left:1%; top:20%; }
                                      .scan-label-underbody { right:1%; bottom:8%; }
                                      .scan-label-engine { left:1%; bottom:9%; }
                                    }
                                    @media (prefers-reduced-motion:reduce) { .scan-beam,.scan-orbit,.scan-ring,.scan-target,.scan-label,.scan-view { animation:none!important; } .scan-view { opacity:0!important; } .scan-view-front { opacity:1!important; } }
                                `}</style>
                            </div>

                            <div className="relative mt-4 lg:absolute lg:bottom-10 lg:left-10 lg:right-10 rounded-2xl lg:rounded-[2rem] border border-white/50 bg-white/90 p-4 sm:p-5 lg:p-6 backdrop-blur-xl shadow-xl">



                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================

                TRUST STATS

            \===================================================== */}

            <section className="px-6 pb-24">

                <div className="max-w-7xl mx-auto">

                    <div className="rounded-[3rem] border border-white bg-white/80 backdrop-blur-xl p-10 shadow-2xl">

                        <div className="grid gap-8 md:grid-cols-4">

                            {[

                                {

                                    icon: "🛡️",

                                    value: "Independent",

                                    label: "No Dealership TieUps.",

                                },

                                {

                                    icon: "🏢",

                                    value: "At Dealership",

                                    label: "Inspection before delivery.",

                                },

                                {

                                    icon: "⚡",

                                    value: "Instant Report",

                                    label: "Digital report with findings.",

                                },

                                {

                                    icon: "🎯",

                                    value: "400 Checks",

                                    label: "Professional PDI checklist.",

                                },

                            ].map(

                                (item) => (

                                    <div

                                        key={item.label}

                                        className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#818CF8] hover:shadow-2xl"

                                    >

                                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#818CF8] via-[#4F46E5] to-[#6366F1] text-3xl shadow-lg transition-all duration-300 group-hover:scale-110">

                                            {item.icon}

                                        </div>

                                        <div className="text-4xl font-black text-slate-900">

                                            {item.value}

                                        </div>

                                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">

                                            {item.label}

                                        </p>

                                    </div>

                                )

                            )}

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================

                WHY CHOOSE

            \===================================================== */}

            <section className="px-6 pb-28">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center">

                        <span className="rounded-full bg-[#E0E7FF] px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#6366F1]">

                            Why InspectMyCar

                        </span>

                        <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">

                            More Than Just a Checklist

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

                            Every inspection combines professional expertise,

                            specialized diagnostic equipment and a meticulous

                            400 point checklist to ensure your new car is

                            delivered exactly as it should be in{" "}

                            {selectedCity}.

                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 lg:grid-cols-3">

                        {[

                            {

                                icon: "🎨",

                                title: "Paint & Body Inspection",

                                desc: "Detect repainting, scratches, dents, panel mismatch and transport damage using professional inspection methods.",

                            },

                            {

                                icon: "💻",

                                title: "OBD & Electronics",

                                desc: "Advanced diagnostics for hidden ECU faults, warning lights, sensors, infotainment and electronic systems.",

                            },

                            {

                                icon: "📑",

                                title: "Documentation Review",

                                desc: "Verify VIN, engine number, manufacturing date, warranty documents and delivery paperwork.",

                            },

                            {

                                icon: "⚙️",

                                title: "Mechanical Check",

                                desc: "Inspect engine bay, suspension, battery, tyres, brakes and fluid levels before delivery.",

                            },

                            {

                                icon: "📸",

                                title: "Digital Report",

                                desc: "Receive a detailed inspection report with photos and findings immediately after inspection.",

                            },

                            {

                                icon: "🛡️",

                                title: "Independent Experts",

                                desc: "We work only for you—not the dealership—ensuring an unbiased and transparent inspection.",

                            },

                        ].map(

                            (card, index) => (

                                <div

                                    key={card.title}

                                    className="group relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 p-8 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"

                                    style={{

                                        animationDelay: `${index * 120}ms`,

                                    }}

                                >

                                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-[#6366F1]/10 to-[#818CF8]/10 blur-3xl transition group-hover:scale-150" />

                                    <div className="relative">

                                        <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#3730A3] to-[#818CF8] text-3xl text-white shadow-xl transition group-hover:rotate-6 group-hover:scale-110">

                                            {card.icon}

                                        </div>

                                        <h3 className="text-2xl font-black text-slate-900">

                                            {card.title}

                                        </h3>

                                        <p className="mt-5 leading-8 text-slate-600">

                                            {card.desc}

                                        </p>

                                    </div>

                                </div>

                            )

                        )}

                    </div>

                </div>

            </section>

            {/* =====================================================

                WHY PDI MATTERS

            \===================================================== */}

            <section className="px-6 py-28 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center">

                        <span className="inline-flex rounded-full bg-[#E0E7FF] px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#6366F1]">

                            Before Delivery

                        </span>

                        <h2 className="mt-8 text-5xl md:text-6xl font-black tracking-tight text-slate-900">

                            Why You Should Never Skip PDI

                        </h2>

                        <p className="mt-6 max-w-3xl mx-auto text-xl leading-9 text-slate-600">

                            Even a brand-new car can have transport damage,

                            repaint work, electrical faults or missing accessories.

                            A professional Pre-Delivery Inspection ensures these

                            issues are identified before you take delivery in{" "}

                            {selectedCity}.

                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {[

                            {

                                icon: "🚚",

                                title: "Transport Damage",

                                desc: "Vehicles travel hundreds of kilometres before reaching the dealership. Minor dents, scratches and cracked lights can occur during transit.",

                            },

                            {

                                icon: "🎨",

                                title: "Paint Defects",

                                desc: "Panels may be repainted after yard damage. Paint thickness inspection helps identify hidden repairs before delivery.",

                            },

                            {

                                icon: "⚡",

                                title: "Electronic Issues",

                                desc: "ECU faults, warning lights and sensor problems often remain unnoticed without professional diagnostics.",

                            },

                            {

                                icon: "🔧",

                                title: "Manufacturing Defects",

                                desc: "Loose fittings, fluid leaks, poor panel alignment and missing accessories are easier to fix before registration.",

                            },

                            {

                                icon: "📄",

                                title: "Documentation Check",

                                desc: "VIN, engine number, warranty booklet, invoice and registration details are verified before acceptance.",

                            },

                            {

                                icon: "🛡️",

                                title: "Peace of Mind",

                                desc: "Receive an independent inspection report so you can confidently accept or reject delivery.",

                            },

                        ].map(

                            (item) => (

                                <div

                                    key={item.title}

                                    className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#818CF8] hover:shadow-2xl"

                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3730A3] to-[#6366F1] text-3xl text-white shadow-lg transition group-hover:scale-110">

                                        {item.icon}

                                    </div>

                                    <h3 className="mt-8 text-2xl font-black text-slate-900">

                                        {item.title}

                                    </h3>

                                    <p className="mt-5 leading-8 text-slate-600">

                                        {item.desc}

                                    </p>

                                </div>

                            )

                        )}

                    </div>

                    {/* =================================================

                        TIMELINE

                    \================================================= */}

                    <div className="mt-32">

                        <div className="text-center">

                            <span className="inline-flex rounded-full bg-[#E0E7FF] px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#4F46E5]">

                                Our Process

                            </span>

                            <h2 className="mt-8 text-5xl font-black text-slate-900">

                                How Your Inspection Works

                            </h2>

                            <p className="mt-5 text-lg text-slate-600">

                                Four simple steps from booking to delivery.

                            </p>

                        </div>

                        <div className="relative mt-20">

                            <div className="absolute left-8 top-0 hidden h-full w-px bg-slate-300 lg:block" />

                            <div className="space-y-10">

                                {[

                                    {

                                        step: "01",

                                        title: "Book Your Slot",

                                        desc: `Choose your preferred date, dealership in ${selectedCity} and inspection slot online.`,

                                    },

                                    {

                                        step: "02",

                                        title: "Inspector Assigned",

                                        desc: "A certified PDI expert contacts you and coordinates with the dealership.",

                                    },

                                    {

                                        step: "03",

                                        title: "400 Point Inspection",

                                        desc: "Complete inspection covering paint, electronics, engine, tyres, body panels and documentation.",

                                    },

                                    {

                                        step: "04",

                                        title: "Receive Report",

                                        desc: "A detailed report with findings is shared before you accept delivery.",

                                    },

                                ].map(

                                    (item) => (

                                        <div

                                            key={item.step}

                                            className="relative flex items-start gap-8"

                                        >

                                            <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3730A3] to-[#6366F1] text-xl font-black text-white shadow-lg">

                                                {item.step}

                                            </div>

                                            <div className="flex-1 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                                                <h3 className="text-2xl font-black text-slate-900">

                                                    {item.title}

                                                </h3>

                                                <p className="mt-4 leading-8 text-slate-600">

                                                    {item.desc}

                                                </p>

                                            </div>

                                        </div>

                                    )

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================

                TESTIMONIALS

            \===================================================== */}

            <section className="px-6 py-28">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center">

                        <span className="inline-flex rounded-full bg-[#E0E7FF] px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#6366F1]">

                            Customer Stories

                        </span>

                        <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">

                            Thousands of Buyers

                            <br />

                            Trust InspectMyCar

                        </h2>

                        <p className="mt-6 max-w-3xl mx-auto text-xl leading-9 text-slate-600">

                            Our independent inspections have helped customers identify

                            repaint work, transport damage and hidden defects before

                            accepting delivery.

                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 lg:grid-cols-3">

                        {[

                            {

                                name: "Rahul Patil",

                                car: "Hyundai Creta",

                                text: "The inspector discovered that the front bumper had been repainted. The dealership replaced it before delivery. Best ₹1,499 I've spent.",

                            },

                            {

                                name: "Neha Kulkarni",

                                car: "Honda Elevate",

                                text: "Professional inspection with a detailed digital report. It gave me complete confidence before taking delivery.",

                            },

                            {

                                name: "Amit Shah",

                                car: "Tata Nexon",

                                text: "Hidden electronic fault detected during OBD diagnostics. The issue was fixed before registration.",

                            },

                        ].map(

                            (review) => (

                                <div

                                    key={review.name}

                                    className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"

                                >

                                    <div className="flex items-center gap-1 text-amber-400 text-xl">

                                        ★★★★★

                                    </div>

                                    <p className="mt-6 text-lg leading-8 text-slate-600 italic">

                                        "{review.text}"

                                    </p>

                                    <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">

                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#3730A3] to-[#6366F1] text-lg font-black text-white">

                                            {review.name.charAt(0)}

                                        </div>

                                        <div>

                                            <h4 className="font-black text-slate-900">

                                                {review.name}

                                            </h4>

                                            <p className="text-sm font-semibold text-[#6366F1]">

                                                {review.car}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            )

                        )}

                    </div>

                </div>

            </section>

            {/* =====================================================

                FAQ

            \===================================================== */}

            <section className="px-6 pb-28">

                <div className="max-w-6xl mx-auto rounded-[3rem] border border-slate-200 bg-white p-12 shadow-xl">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                        <div>

                            <span className="inline-flex rounded-full bg-[#E0E7FF] px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#4F46E5]">

                                Frequently Asked Questions

                            </span>

                            <h2 className="mt-6 text-5xl font-black text-slate-900">

                                Everything You Need to Know

                            </h2>

                        </div>

                        <Link

                            href="/faqs"

                            className="rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition hover:bg-[#3730A3]"

                        >

                            View All FAQs →

                        </Link>

                    </div>

                    <div className="mt-14 grid gap-6">

                        {[

                            {

                                q: "Can I inspect my new car before registration?",

                                a: "Yes. We recommend completing the inspection before registration and final delivery so any issues can be rectified by the dealership.",

                            },

                            {

                                q: "How long does the inspection take?",

                                a: "Most inspections are completed within 60–90 minutes depending on the vehicle and dealership.",

                            },

                            {

                                q: "Will I receive a report?",

                                a: "Yes. You'll receive a detailed digital report with photographs, observations and recommendations immediately after the inspection.",

                            },

                            {

                                q: "Can dealerships refuse a PDI?",

                                a: "Generally no. As the buyer, you are entitled to inspect the vehicle before accepting delivery.",

                            },

                        ].map(

                            (faq) => (

                                <div

                                    key={faq.q}

                                    className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-[#818CF8] hover:bg-white hover:shadow-lg"

                                >

                                    <h3 className="text-2xl font-black text-slate-900">

                                        {faq.q}

                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">

                                        {faq.a}

                                    </p>

                                </div>

                            )

                        )}

                    </div>

                </div>

            </section>

            {/* =====================================================

                FINAL CTA

            \===================================================== */}

            <section className="px-6 pb-32">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br from-[#3730A3] via-[#4F46E5] to-[#818CF8] shadow-[0_40px_120px_rgba(99,102,241,0.35)]">

                    <div className="grid lg:grid-cols-2 items-center">

                        {/* =================================================

                            LEFT

                        \================================================= */}

                        <div className="p-12 lg:p-16 text-white">

                            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-xl">

                                Book Your Inspection in{" "}

                                {selectedCity}

                            </span>

                            <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">

                                Don't Accept

                                <br />

                                A Defective

                                <br />

                                New Car.

                            </h2>

                            <p className="mt-8 text-lg leading-8 text-white/85 max-w-xl">

                                For less than the cost of a single dealership accessory,

                                ensure your vehicle is free from hidden defects, repaint

                                work and manufacturing issues before delivery in{" "}

                                {selectedCity}.

                            </p>

                            <div className="mt-10 flex flex-col gap-3">

                                {[

                                    "400 Inspection Points",

                                    "Accident Detection",

                                    "Engine & Gearbox Check",

                                    "OBD Diagnostics",

                                    "Negotiation Report",

                                    "Independent Experts",

                                ].map(

                                    (item) => (

                                        <div

                                            key={item}

                                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl"

                                        >

                                            <span className="text-[#C7D2FE] text-lg">

                                                ✓

                                            </span>

                                            <span className="text-sm font-medium">

                                                {item}

                                            </span>

                                        </div>

                                    )

                                )}

                            </div>

                        </div>

                        {/* =================================================

                            RIGHT - DYNAMIC PRICING CARD

                        \================================================= */}

                        <div className="bg-white p-5 sm:p-8 lg:p-16">

                            <div className="w-full rounded-[2rem] border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:p-10">

                                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6366F1]">

                                    Car PDI Pricing

                                </p>

                                <p className="mt-2 text-sm font-semibold text-slate-500">

                                    {selectedCity}

                                </p>

                                {/* MAIN PRICE */}

                                    <div className="mt-4">

                                        <div className="flex items-end gap-2">

                                            <span className="text-6xl font-black text-slate-900">

                                                ₹

                                                {formatPrice(

                                                    standardFuelPrice

                                                )}

                                            </span>

                                            <span className="pb-3 text-slate-500">

                                                with gauge

                                            </span>

                                        </div>

                                        <p className="mt-2 text-sm text-slate-500">

                                            Standard new-car PDI

                                        </p>

                                    </div>

                                {/* PRICE OPTIONS */}

                                <div className="mt-8 grid gap-3">

                                    {/* PUNE ONLY — WITHOUT GAUGE */}

                                    {isPune && (

                                        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">

                                            <div>

                                                <p className="font-bold text-slate-800">

                                                    Without Gauge

                                                </p>

                                                <p className="text-xs text-slate-500">

                                                    ₹200 less

                                                </p>

                                            </div>

                                            <span className="text-xl font-black text-slate-900">

                                                ₹

                                                {formatPrice(

                                                    withoutGaugePrice

                                                )}

                                            </span>

                                        </div>

                                    )}

                                    {/* WITH GAUGE — ALL CITIES */}

                                    {(

                                        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">

                                            <div>

                                                <p className="font-bold text-slate-800">

                                                    With Gauge

                                                </p>

                                                 <p className="text-xs text-slate-500">

                                                    Standard PDI

                                                </p>

                                            </div>

                                             <span className="text-xl font-black text-slate-900">

                                                ₹

                                                {formatPrice(

                                                    standardFuelPrice

                                                )}

                                            </span>

                                        </div>

                                    )}

                                    {/* WITH OBD — ALL CITIES */}

                                    {isPune ? (

                                        <div className="flex items-center justify-between rounded-2xl border-2 border-[#C7D2FE] bg-[#EEF2FF] p-4">

                                            <div>

                                                <p className="font-bold text-[#3730A3]">

                                                    With OBD

                                                </p>

                                                <p className="text-xs text-[#6366F1]">

                                                    Advanced Diagnostics

                                                </p>

                                                <p className="text-xs text-[#6366F1]">

                                                    Recommended PDI

                                                </p>

                                            </div>

                                            <span className="text-xl font-black text-[#4F46E5]">

                                                ₹

                                                {formatPrice(

                                                    withObdPrice

                                                )}

                                            </span>

                                        </div>

                                    ) : (

                                        <div className="flex items-center justify-between rounded-2xl border-2 border-[#C7D2FE] bg-[#EEF2FF] p-4">

                                            <div>

                                                <p className="font-bold text-[#3730A3]">

                                                    With OBD

                                                </p>

                                                <p className="text-xs text-[#6366F1]">

                                                    Advanced Diagnostics

                                                </p>

                                                <p className="text-xs text-[#6366F1]">

                                                    Recommended PDI

                                                </p>

                                            </div>

                                            <span className="text-xl font-black text-[#4F46E5]">

                                                ₹

                                                {formatPrice(

                                                    withObdPrice

                                                )}

                                            </span>

                                        </div>

                                    )}

                                    {/* EV — ALL CITIES */}

                                    <div className="flex items-center justify-between rounded-2xl border border-[#C7D2FE] bg-[#EEF2FF] p-4">

                                        <div>

                                            <p className="font-bold text-[#3730A3]">

                                                EV Inspection

                                            </p>

                                            <p className="text-xs text-[#6366F1]">

                                                Complete EV PDI

                                            </p>

                                        </div>

                                        <span className="text-xl font-black text-[#4F46E5]">

                                            ₹

                                            {formatPrice(

                                                standardEvPrice

                                            )}

                                        </span>

                                    </div>

                                </div>

                                {/* BENEFITS */}

                                <div className="mt-10 space-y-4">

                                    {[

                                        "Certified PDI Engineer",

                                        "Independent Inspection",

                                        "At Your Dealership",

                                        "Instant Digital Report",

                                    ].map(

                                        (item) => (

                                            <div

                                                key={item}

                                                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"

                                            >

                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0E7FF] text-[#6366F1] font-bold">

                                                    ✓

                                                </div>

                                                <span className="font-semibold text-slate-700">

                                                    {item}

                                                </span>

                                            </div>

                                        )

                                    )}

                                </div>

                                {/* ACTIONS */}

                                <div className="mt-10 flex flex-col gap-4">

                                    <button

                                        onClick={() =>

                                            openNewCarBooking(

                                                "Standard"

                                            )

                                        }

                                        className="rounded-2xl bg-gradient-to-r from-[#3730A3] to-[#6366F1] px-8 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"

                                    >

                                        Book PDI in{" "}

                                        {selectedCity} →

                                    </button>

                                    <Link

                                        href="/info/pricing#new-car-pricing"

                                        className="rounded-2xl border border-slate-300 px-8 py-5 text-center font-bold text-slate-700 transition hover:bg-slate-100"

                                    >

                                        View Pricing

                                    </Link>

                                    <a

                                        href="tel:+919975934213"

                                        className="rounded-2xl border border-[#C7D2FE] bg-[#EEF2FF] px-8 py-5 text-center font-bold text-[#4F46E5] transition hover:bg-[#E0E7FF]"

                                    >

                                        📞 Talk to an Expert

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );

}
