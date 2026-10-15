"use client";



import { useBooking } from "@/app/context/BookingContext";

import {

    CITY_PRICING,

    useCityPricing,

    formatPrice,

    type CityName,

} from "@/app/components/city_price";

import Link from "next/link";



export default function UsedCarsPage() {

    const { openUsedCarBooking } = useBooking();



    /**

     * ========================================================

     * CENTRALIZED CITY + PRICING

     * ========================================================

     *

     * City is loaded from the shared city_price.tsx helper.

     *

     * - Defaults to Pune

     * - Reads selectedCity from localStorage

     * - Automatically reacts to city changes

     * - Used-car price comes from CITY_PRICING

     */

    const {

        selectedCity,

        cityPricing,

        cities,

        setCity,

    } = useCityPricing();



    return (

        <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-indigo-50/40 text-slate-900">



            {/* =================================================

                BACKGROUND

            \================================================= */}



            <div className="absolute inset-0 -z-10 overflow-hidden">



                <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-indigo-400/20 blur-[120px] animate-pulse" />



                <div

                    className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-indigo-400/20 blur-[120px] animate-pulse"

                    style={{ animationDelay: "2s" }}

                />



                <div className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-indigo-300/20 blur-[120px]" />



                <div

                    className="absolute inset-0 opacity-[0.03]"

                    style={{

                        backgroundImage:

                            "linear-gradient(#000 1px, transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",

                        backgroundSize: "60px 60px",

                    }}

                />



            </div>



            {/* =================================================

                CITY SELECTOR

            \================================================= */}



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

                            className="cursor-pointer bg-transparent text-sm font-black text-indigo-600 focus:outline-none"

                        >

                            {cities.map((cityName) => (

                                <option

                                    key={cityName}

                                    value={cityName}

                                >

                                    {CITY_PRICING[cityName].name}

                                </option>

                            ))}

                        </select>



                    </div>



                </div>



            </section>



            {/* =================================================

                HERO

            \================================================= */}



            <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24">



                <div className="grid lg:grid-cols-2 gap-20 items-center">



                    {/* =================================================

                        LEFT

                    \================================================= */}



                    <div>



                        <div className="inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-white/80 backdrop-blur-xl px-5 py-2 shadow-lg">



                            <span className="relative flex h-3 w-3">



                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />



                                <span className="relative inline-flex h-3 w-3 rounded-full bg-indigo-500" />



                            </span>



                            <span className="text-xs font-black uppercase tracking-[0.25em] text-indigo-600">

                                {selectedCity} • Used Car Inspection

                            </span>



                        </div>



                        <h1 className="mt-10 text-5xl md:text-7xl font-black leading-[0.92] tracking-tight">



                            Don't Buy



                            <br />



                            <span className="bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500 bg-clip-text text-transparent">

                                Someone Else's

                            </span>



                            <br />



                            Problems.



                        </h1>



                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">



                            Our independent Pre-Purchase Inspection uncovers

                            hidden accident repairs, flood damage, engine

                            issues, odometer tampering and expensive

                            mechanical faults before you pay in{" "}

                            {selectedCity}.



                        </p>



                        {/* PRICE SUMMARY */}



                        <div className="mt-8 inline-flex flex-wrap items-center gap-4 rounded-2xl border border-indigo-100 bg-white/90 px-5 py-4 shadow-lg">



                            <div>



                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">

                                    Used Car Inspection

                                </p>



                                <p className="mt-1 text-3xl font-black text-slate-900">

                                    ₹

                                    {formatPrice(

                                        cityPricing.usedCar

                                    )}

                                </p>



                            </div>



                            <div className="h-10 w-px bg-slate-200" />



                            <div>



                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">

                                    Location

                                </p>



                                <p className="mt-1 font-black text-indigo-600">

                                    {selectedCity}

                                </p>



                            </div>



                        </div>



                        <div className="mt-10 flex flex-col sm:flex-row gap-5">



                            <button

                                onClick={() =>

                                    openUsedCarBooking(

                                        "Standard"

                                    )

                                }

                                className="group rounded-2xl bg-gradient-to-r from-indigo-800 via-indigo-600 to-indigo-500 px-8 py-5 font-bold text-white shadow-2xl shadow-indigo-300/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"

                            >

                                Book Inspection in{" "}

                                {selectedCity}



                                <span className="ml-2 inline-block transition group-hover:translate-x-1">

                                    →

                                </span>



                            </button>



                            <a

                                href="tel:+919975934213"

                                className="rounded-2xl border border-slate-200 bg-white px-8 py-5 font-bold text-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"

                            >

                                📞 Talk to Inspector

                            </a>



                        </div>



                        {/* QUICK STATS */}



                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">



                            {[

                                ["400", "Checks"],

                                ["5000+", "Inspected Cars"],

                                ["4.9★", "Rating"],

                                ["100%", "Independent"],

                            ].map(([value, label]) => (



                                <div

                                    key={label}

                                    className="rounded-3xl border border-white bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"

                                >



                                    <div className="text-3xl font-black text-indigo-600">

                                        {value}

                                    </div>



                                    <div className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">

                                        {label}

                                    </div>



                                </div>



                            ))}



                        </div>



                    </div>



                    {/* =================================================

                        RIGHT

                    \================================================= */}



                    <div className="relative">



                        <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-indigo-700/20 to-indigo-500/20 blur-3xl" />



                        <div className="relative overflow-hidden rounded-[3rem] border border-white bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">



                            <div className="used-scan-stage relative h-[320px] sm:h-[450px] lg:h-[650px] w-full overflow-hidden rounded-[2rem] lg:rounded-[2.3rem] bg-[#07152f]">
                                <div className="used-scan-grid absolute inset-0" />
                                <div className="used-scan-orbit used-scan-orbit-a" />
                                <div className="used-scan-orbit used-scan-orbit-b" />
                                <div className="used-scan-beam" />
                                <div className="used-scan-car used-view-front" aria-label="Front view of used car">
                                    <svg viewBox="0 0 600 360" role="img" aria-hidden="true">
                                        <defs><linearGradient id="usedFrontPaint" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a5b4fc"/><stop offset=".45" stopColor="#4f46e5"/><stop offset="1" stopColor="#1e1b4b"/></linearGradient><linearGradient id="usedGlass" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#67e8f9" stopOpacity=".8"/><stop offset="1" stopColor="#0f2747"/></linearGradient></defs>
                                        <ellipse cx="300" cy="290" rx="205" ry="25" fill="#22d3ee" opacity=".15"/><path d="M145 155 Q158 100 220 83 L380 83 Q442 100 455 155 L485 188 Q501 202 497 244 L472 268 L128 268 L103 244 Q99 202 115 188Z" fill="url(#usedFrontPaint)" stroke="#a5f3fc" strokeWidth="3"/><path d="M195 151 L220 103 Q228 94 245 94 L355 94 Q372 94 380 103 L405 151Z" fill="url(#usedGlass)" stroke="#bae6fd" strokeWidth="3"/><path d="M205 161 L395 161 L420 183 L180 183Z" fill="#111827" stroke="#818cf8" strokeWidth="3"/><path d="M220 190 L380 190 L366 235 L234 235Z" fill="#0b1228" stroke="#67e8f9" strokeWidth="3"/><path d="M235 200 L365 200" stroke="#64748b" strokeWidth="3"/><path d="M121 177 L184 166 L173 195 L116 205Z" fill="#ecfeff" stroke="#67e8f9" strokeWidth="3"/><path d="M479 177 L416 166 L427 195 L484 205Z" fill="#ecfeff" stroke="#67e8f9" strokeWidth="3"/><rect x="116" y="218" width="30" height="38" rx="8" fill="#111827" stroke="#94a3b8" strokeWidth="3"/><rect x="454" y="218" width="30" height="38" rx="8" fill="#111827" stroke="#94a3b8" strokeWidth="3"/><path d="M250 247 L350 247" stroke="#c7d2fe" strokeWidth="4"/><rect x="275" y="252" width="50" height="13" rx="3" fill="#e2e8f0"/><path d="M140 274 L460 274" stroke="#22d3ee" strokeWidth="3" opacity=".8"/>
                                    </svg>
                                </div>
                                <div className="used-scan-car used-view-right" aria-label="Right side view of used car">
                                    <svg viewBox="0 0 600 360" role="img" aria-hidden="true"><defs><linearGradient id="usedSidePaint" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#3730a3"/></linearGradient></defs><ellipse cx="300" cy="285" rx="235" ry="22" fill="#22d3ee" opacity=".15"/><path d="M72 238 L88 190 Q99 178 145 172 L215 110 Q235 94 280 94 L376 100 Q411 104 442 154 L500 178 Q522 187 528 215 L522 248 L76 248Z" fill="url(#usedSidePaint)" stroke="#a5f3fc" strokeWidth="3"/><path d="M164 169 L224 118 Q237 108 274 108 L290 108 L290 168Z" fill="#102b4a" stroke="#67e8f9" strokeWidth="3"/><path d="M303 108 L372 113 Q396 117 421 168 L303 168Z" fill="#102b4a" stroke="#67e8f9" strokeWidth="3"/><path d="M296 174 L296 239 M420 174 L433 238 M174 176 L160 238" stroke="#c7d2fe" strokeWidth="3"/><path d="M307 181 L402 181" stroke="#818cf8" strokeWidth="2"/><rect x="442" y="181" width="48" height="12" rx="5" fill="#ecfeff"/><circle cx="169" cy="244" r="39" fill="#080f20" stroke="#94a3b8" strokeWidth="5"/><circle cx="169" cy="244" r="20" fill="#64748b" stroke="#cbd5e1" strokeWidth="4"/><circle cx="169" cy="244" r="7" fill="#0f172a"/><circle cx="438" cy="244" r="39" fill="#080f20" stroke="#94a3b8" strokeWidth="5"/><circle cx="438" cy="244" r="20" fill="#64748b" stroke="#cbd5e1" strokeWidth="4"/><circle cx="438" cy="244" r="7" fill="#0f172a"/><path d="M91 205 L112 203 L112 220 L84 220Z" fill="#fb7185"/><path d="M492 202 L518 209 L519 222 L491 220Z" fill="#fde68a"/></svg>
                                </div>
                                <div className="used-scan-car used-view-rear" aria-label="Rear view of used car">
                                    <svg viewBox="0 0 600 360" role="img" aria-hidden="true"><defs><linearGradient id="usedRearPaint" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a5b4fc"/><stop offset=".5" stopColor="#4f46e5"/><stop offset="1" stopColor="#1e1b4b"/></linearGradient></defs><ellipse cx="300" cy="290" rx="205" ry="25" fill="#22d3ee" opacity=".15"/><path d="M145 155 Q158 100 220 83 L380 83 Q442 100 455 155 L485 188 Q501 202 497 244 L472 268 L128 268 L103 244 Q99 202 115 188Z" fill="url(#usedRearPaint)" stroke="#a5f3fc" strokeWidth="3"/><path d="M195 151 L220 103 Q228 94 245 94 L355 94 Q372 94 380 103 L405 151Z" fill="#102b4a" stroke="#67e8f9" strokeWidth="3"/><path d="M120 176 L183 166 L173 199 L115 207Z" fill="#fb7185" stroke="#fecdd3" strokeWidth="3"/><path d="M480 176 L417 166 L427 199 L485 207Z" fill="#fb7185" stroke="#fecdd3" strokeWidth="3"/><rect x="205" y="187" width="190" height="46" rx="8" fill="#111827" stroke="#818cf8" strokeWidth="3"/><rect x="258" y="198" width="84" height="24" rx="3" fill="#e2e8f0"/><path d="M225 241 L375 241" stroke="#c7d2fe" strokeWidth="4"/><rect x="116" y="218" width="30" height="38" rx="8" fill="#111827" stroke="#94a3b8" strokeWidth="3"/><rect x="454" y="218" width="30" height="38" rx="8" fill="#111827" stroke="#94a3b8" strokeWidth="3"/><path d="M140 274 L460 274" stroke="#22d3ee" strokeWidth="3" opacity=".8"/></svg>
                                </div>
                                                                <div className="absolute bottom-5 left-0 right-0 z-10 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.18em] text-blue-100 sm:bottom-7 sm:text-xs sm:tracking-[0.22em]"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-600 shadow-[0_0_14px_#6366f1]" /> <span className="text-indigo-600">SCANNING VEHICLE</span> <span className="mx-1 h-4 w-px bg-indigo-400" /> <span className="text-indigo-600">360° ACTIVE</span></div>

                                <div className="used-scan-car used-view-left" aria-label="Left side view of used car"><svg viewBox="0 0 600 360" role="img" aria-hidden="true"><g transform="translate(600 0) scale(-1 1)"><defs><linearGradient id="usedLeftPaint" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#a5b4fc"/><stop offset="1" stopColor="#3730a3"/></linearGradient></defs><ellipse cx="300" cy="285" rx="235" ry="22" fill="#22d3ee" opacity=".15"/><path d="M72 238 L88 190 Q99 178 145 172 L215 110 Q235 94 280 94 L376 100 Q411 104 442 154 L500 178 Q522 187 528 215 L522 248 L76 248Z" fill="url(#usedLeftPaint)" stroke="#a5f3fc" strokeWidth="3"/><path d="M164 169 L224 118 Q237 108 274 108 L290 108 L290 168Z" fill="#102b4a" stroke="#67e8f9" strokeWidth="3"/><path d="M303 108 L372 113 Q396 117 421 168 L303 168Z" fill="#102b4a" stroke="#67e8f9" strokeWidth="3"/><path d="M296 174 L296 239 M420 174 L433 238 M174 176 L160 238" stroke="#c7d2fe" strokeWidth="3"/><circle cx="169" cy="244" r="39" fill="#080f20" stroke="#94a3b8" strokeWidth="5"/><circle cx="169" cy="244" r="20" fill="#64748b" stroke="#cbd5e1" strokeWidth="4"/><circle cx="438" cy="244" r="39" fill="#080f20" stroke="#94a3b8" strokeWidth="5"/><circle cx="438" cy="244" r="20" fill="#64748b" stroke="#cbd5e1" strokeWidth="4"/></g></svg></div>
                                <div className="used-scan-hud absolute left-4 top-4 rounded-xl border border-cyan-300/40 bg-slate-950/70 px-3 py-2 text-[9px] font-black uppercase tracking-[.2em] text-cyan-200 sm:left-6 sm:top-6 sm:text-xs">Pre-purchase scan <span className="ml-2 inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /></div>
                                <div className="used-scan-label used-label-body"> <span /> BODY & PAINT</div>
                                <div className="used-scan-label used-label-engine"><span /> ENGINE</div>
                                <div className="used-scan-label used-label-wheel"><span /> TYRES</div>
                                <div className="used-scan-label used-label-obd"><span /> OBD SCAN</div>
                                <div className="used-scan-label used-label-accident"><span /> ACCIDENT CHECK</div>
                                <div className="used-scan-caption absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-300/30 bg-slate-950/70 px-4 py-2 text-[9px] font-black uppercase tracking-[.18em] text-cyan-100 sm:bottom-6 sm:text-xs"> <span className="used-view-name-front">Front view</span><span className="used-view-name-right">Right-side view</span><span className="used-view-name-rear">Rear view</span><span className="used-view-name-left">Left-side view</span></div>
                            </div>






                        </div>



                    </div>



                </div>



            </section>



            {/* =================================================

                TRUST STATS

            \================================================= */}



            <section className="px-6 pb-24">



                <div className="max-w-7xl mx-auto">



                    <div className="rounded-[3rem] border border-white bg-white/80 backdrop-blur-xl p-10 shadow-2xl">



                        <div className="grid gap-8 md:grid-cols-4">



                            {[

                                {

                                    icon: "🛡️",

                                    value: "Independent",

                                    label: "We work only for buyers.",

                                },

                                {

                                    icon: "📍",

                                    value: "On-site",

                                    label: "No need to move the vehicle.",

                                },

                                {

                                    icon: "⚡",

                                    value: "Same Day",

                                    label: "Receive a detailed report.",

                                },

                                {

                                    icon: "👨‍🔧",

                                    value: "Experts",

                                    label: "Experienced PDI specialists.",

                                },

                            ].map((item) => (



                                <div

                                    key={item.label}

                                    className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"

                                >



                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-500 text-3xl shadow-lg transition-all duration-300 group-hover:scale-110">

                                        {item.icon}

                                    </div>



                                    <div className="text-4xl font-black text-slate-900">

                                        {item.value}

                                    </div>



                                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">

                                        {item.label}

                                    </p>



                                </div>



                            ))}



                        </div>



                    </div>



                </div>



            </section>



            {/* =================================================

                WHY CHOOSE

            \================================================= */}



            <section className="px-6 pb-28">



                <div className="max-w-7xl mx-auto">



                    <div className="text-center">



                        <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-indigo-600">

                            Why InspectMyCar

                        </span>



                        <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">

                            Buy With Confidence in {selectedCity},

                            <br />

                            Not Guesswork.

                        </h2>



                        <p className="mt-6 max-w-3xl mx-auto text-xl leading-9 text-slate-600">

                            Every used vehicle has a story. Our independent

                            inspection helps you uncover hidden repairs,

                            mechanical issues and expensive surprises before

                            making the payment.

                        </p>



                    </div>



                    <div className="mt-20 grid gap-8 lg:grid-cols-3">



                        {[

                            {

                                icon: "🚘",

                                title: "Accident Detection",

                                desc: "Identify repaired panels, structural damage, welding marks and repaint work before purchasing.",

                            },

                            {

                                icon: "⚙️",

                                title: "Engine & Gearbox",

                                desc: "Inspect engine performance, leaks, transmission health and mechanical condition.",

                            },

                            {

                                icon: "💻",

                                title: "OBD Diagnostics",

                                desc: "Professional computer diagnostics reveal hidden fault codes and electronic issues.",

                            },

                            {

                                icon: "🛞",

                                title: "Tyres & Suspension",

                                desc: "Check suspension, brakes, steering, tyres and wheel alignment for costly repairs.",

                            },

                            {

                                icon: "📋",

                                title: "Document Verification",

                                desc: "Verify VIN, engine number and inspect for signs of odometer tampering.",

                            },

                            {

                                icon: "📄",

                                title: "Detailed Report",

                                desc: "Receive a complete digital inspection report with photos and expert recommendations.",

                            },

                        ].map((card) => (



                            <div

                                key={card.title}

                                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"

                            >



                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-500 text-3xl text-white shadow-lg transition-all duration-300 group-hover:scale-110">

                                    {card.icon}

                                </div>



                                <h3 className="text-2xl font-black text-slate-900">

                                    {card.title}

                                </h3>



                                <p className="mt-5 leading-8 text-slate-600">

                                    {card.desc}

                                </p>



                            </div>



                        ))}



                    </div>



                </div>



            </section>



            {/* =================================================

                WHY USED CAR INSPECTION

            \================================================= */}



            <section className="px-6 py-28 bg-slate-50">



                <div className="max-w-7xl mx-auto">



                    <div className="text-center">



                        <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-indigo-600">

                            Before You Buy

                        </span>



                        <h2 className="mt-8 text-5xl md:text-6xl font-black tracking-tight text-slate-900">

                            One Inspection Can Save

                            <br />

                            Lakhs in Repairs

                        </h2>



                        <p className="mt-6 max-w-3xl mx-auto text-xl leading-9 text-slate-600">

                            A used car may look perfect on the outside while

                            hiding accident repairs, flood damage or major

                            mechanical issues underneath.

                        </p>



                    </div>



                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">



                        {[

                            {

                                icon: "🚗",

                                title: "Accident Repairs",

                                desc: "Detect replaced panels, welding, repaint work and structural repairs that affect safety and resale value.",

                            },

                            {

                                icon: "🌊",

                                title: "Flood Damage",

                                desc: "Identify corrosion, water intrusion and electrical damage that can cause future failures.",

                            },

                            {

                                icon: "⚙️",

                                title: "Engine Health",

                                desc: "Check leaks, unusual noises, smoke, cooling system and overall engine condition.",

                            },

                            {

                                icon: "🔋",

                                title: "Electronics",

                                desc: "Scan ECU modules, ABS, airbags and other systems for hidden fault codes.",

                            },

                            {

                                icon: "📉",

                                title: "Odometer Fraud",

                                desc: "Spot signs of tampered mileage through wear patterns and diagnostic verification.",

                            },

                            {

                                icon: "💰",

                                title: "Negotiation Power",

                                desc: "Use our inspection report to negotiate a fair purchase price with confidence.",

                            },

                        ].map((item) => (



                            <div

                                key={item.title}

                                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"

                            >



                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-500 text-3xl text-white shadow-lg transition group-hover:scale-110">

                                    {item.icon}

                                </div>



                                <h3 className="mt-8 text-2xl font-black text-slate-900">

                                    {item.title}

                                </h3>



                                <p className="mt-5 leading-8 text-slate-600">

                                    {item.desc}

                                </p>



                            </div>



                        ))}



                    </div>



                    {/* =================================================

                        PROCESS

                    \================================================= */}



                    <div className="mt-32">



                        <div className="text-center">



                            <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-indigo-600">

                                Inspection Process

                            </span>



                            <h2 className="mt-8 text-5xl font-black text-slate-900">

                                How It Works

                            </h2>



                            <p className="mt-5 text-lg text-slate-600">

                                Book in minutes. Buy with confidence.

                            </p>



                        </div>



                        <div className="relative mt-20">



                            <div className="absolute left-8 top-0 hidden h-full w-px bg-slate-300 lg:block" />



                            <div className="space-y-10">



                                {[

                                    {

                                        step: "01",

                                        title: "Book Your Inspection",

                                        desc: "Choose your preferred date, time and inspection location online.",

                                    },

                                    {

                                        step: "02",

                                        title: "Inspector Visits",

                                        desc: `Our expert reaches the seller or dealership in ${selectedCity} with professional inspection equipment.`,

                                    },

                                    {

                                        step: "03",

                                        title: "400 Point Inspection",

                                        desc: "Engine, gearbox, suspension, brakes, electronics, body, paint, tyres and documentation are thoroughly checked.",

                                    },

                                    {

                                        step: "04",

                                        title: "Receive Digital Report",

                                        desc: "Review the complete vehicle condition and make an informed buying decision.",

                                    },

                                ].map((item) => (



                                    <div

                                        key={item.step}

                                        className="relative flex items-start gap-8"

                                    >



                                        <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-500 text-xl font-black text-white shadow-lg">

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



                                ))}



                            </div>



                        </div>



                    </div>



                </div>



            </section>



            {/* =================================================

                TESTIMONIALS

            \================================================= */}



            <section className="px-6 py-28">



                <div className="max-w-7xl mx-auto">



                    <div className="text-center">



                        <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-indigo-600">

                            Customer Reviews

                        </span>



                        <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">

                            Thousands of Buyers

                            <br />

                            Avoided Expensive Mistakes

                        </h2>



                        <p className="mt-6 max-w-3xl mx-auto text-xl leading-9 text-slate-600">

                            Our inspections have helped buyers uncover hidden

                            accident repairs, flood damage and mechanical issues

                            before making the payment.

                        </p>



                    </div>



                    <div className="mt-20 grid gap-8 lg:grid-cols-3">



                        {[

                            {

                                name: "Rahul P.",

                                car: "2019 Hyundai Creta",

                                text: "The report revealed accident repairs on two doors. I negotiated ₹95,000 off the asking price.",

                            },

                            {

                                name: "Sneha M.",

                                car: "Honda City",

                                text: "Engine oil leakage and suspension issues were identified. It saved me from buying a problematic car.",

                            },

                            {

                                name: "Amit S.",

                                car: "Volkswagen Polo",

                                text: "Excellent inspection with detailed photos and OBD diagnostics. Completely worth it.",

                            },

                        ].map((review) => (



                            <div

                                key={review.name}

                                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"

                            >



                                <div className="flex items-center gap-1 text-yellow-400 text-xl">

                                    ★★★★★

                                </div>



                                <p className="mt-6 text-lg italic leading-8 text-slate-600">

                                    "{review.text}"

                                </p>



                                <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">



                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-500 text-lg font-black text-white">

                                        {review.name.charAt(0)}

                                    </div>



                                    <div>



                                        <h4 className="font-black text-slate-900">

                                            {review.name}

                                        </h4>



                                        <p className="text-sm font-semibold text-indigo-600">

                                            {review.car}

                                        </p>



                                    </div>



                                </div>



                            </div>



                        ))}



                    </div>



                </div>



            </section>



            {/* =================================================

                FAQ

            \================================================= */}



            <section className="px-6 pb-28">



                <div className="max-w-6xl mx-auto rounded-[3rem] border border-slate-200 bg-white p-12 shadow-xl">



                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">



                        <div>



                            <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-indigo-600">

                                Frequently Asked Questions

                            </span>



                            <h2 className="mt-6 text-5xl font-black text-slate-900">

                                Buying a Used Car?

                            </h2>



                        </div>



                        <Link

                            href="/faqs"

                            className="rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition hover:bg-indigo-600"

                        >

                            View All FAQs →

                        </Link>



                    </div>



                    <div className="mt-14 grid gap-6">



                        {[

                            {

                                q: "Can you inspect a car at the seller's location?",

                                a: `Yes. We inspect vehicles at dealerships, private sellers' locations, offices or residences across ${selectedCity}.`,

                            },

                            {

                                q: "How long does the inspection take?",

                                a: "A complete inspection usually takes between 60 and 90 minutes depending on the vehicle.",

                            },

                            {

                                q: "Will I receive a report immediately?",

                                a: "Yes. A detailed digital inspection report with photographs is shared after the inspection.",

                            },

                            {

                                q: "Can your report help negotiate the price?",

                                a: "Absolutely. Many buyers successfully negotiate using the defects identified in our inspection report.",

                            },

                        ].map((faq) => (



                            <div

                                key={faq.q}

                                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg"

                            >



                                <h3 className="text-2xl font-black text-slate-900">

                                    {faq.q}

                                </h3>



                                <p className="mt-4 leading-8 text-slate-600">

                                    {faq.a}

                                </p>



                            </div>



                        ))}



                    </div>



                </div>



            </section>



            {/* =================================================

                FINAL CTA

            \================================================= */}



            <section className="px-6 pb-32">



                <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-800 shadow-[0_40px_120px_rgba(79,70,229,0.30)]">



                    <div className="grid lg:grid-cols-2 items-center">



                        {/* =================================================

                            LEFT

                        \================================================= */}



                        <div className="min-w-0 p-5 sm:p-8 lg:p-16 text-white">



                            <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-xl">

                                Ready to Buy in {selectedCity}?

                            </span>



                            <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">



                                Spend ₹

                                {formatPrice(

                                    cityPricing.usedCar

                                )}



                                <br />



                                Today.



                                <br />



                                Save Lakhs Later.



                            </h2>



                            <p className="mt-8 max-w-xl text-lg leading-8 text-white/85">

                                Hidden accident repairs, engine issues,

                                odometer fraud and flood damage can cost you

                                thousands after purchase in {selectedCity}.

                                Inspect first, buy with confidence.

                            </p>



                            <div className="mt-10 flex flex-col gap-3">



                                {[

                                    "400 Inspection Points",

                                    "Accident Detection",

                                    "Engine & Gearbox Check",

                                    "OBD Diagnostics",

                                    "Negotiation Report",

                                    "Independent Experts",

                                ].map((item) => (



                                    <div

                                        key={item}

                                        className="flex items-center gap-3 text-white/90 font-semibold"

                                    >



                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs text-white">

                                            ✓

                                        </div>



                                        <span>

                                            {item}

                                        </span>



                                    </div>



                                ))}



                            </div>



                            <div className="mt-12 flex flex-wrap gap-5">



                                <button

                                    onClick={() =>

                                        openUsedCarBooking(

                                            "Standard"

                                        )

                                    }

                                    className="rounded-2xl bg-white px-10 py-5 font-black text-slate-900 shadow-2xl transition hover:bg-slate-100 hover:scale-105"

                                >

                                    Book Inspection in{" "}

                                    {selectedCity}

                                </button>



                                <a

                                    href="tel:+919975934213"

                                    className="rounded-2xl border border-white/30 bg-white/10 px-10 py-5 font-black text-white backdrop-blur-xl transition hover:bg-white/20"

                                >

                                    📞 Call Expert

                                </a>



                            </div>



                        </div>



                        {/* =================================================

                            RIGHT

                        \================================================= */}



                        <div className="relative p-6 lg:p-16 flex items-center justify-center">



                            <div className="relative w-full max-w-md rounded-[2.5rem] border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl">



                                <div className="text-4xl">

                                    🚙

                                </div>



                                <h3 className="mt-6 text-3xl font-black text-white">

                                    Used Car Inspection in{" "}

                                    {selectedCity}

                                </h3>



                                <p className="mt-4 text-white/80 leading-relaxed">

                                    Get professional on-site inspection

                                    for any used car across{" "}

                                    {selectedCity} and surrounding areas.

                                </p>



                                <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">



                                    <span className="text-xs uppercase tracking-widest text-white/70 font-bold">

                                        Starts from

                                    </span>



                                    <span className="text-2xl font-black text-white">

                                        ₹

                                        {formatPrice(

                                            cityPricing.usedCar

                                        )}

                                    </span>



                                </div>



                            </div>



                        </div>



                    </div>



                </div>



            </section>




            <style jsx>{`
              .used-scan-grid { background-image:linear-gradient(rgba(103,232,249,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(103,232,249,.09) 1px,transparent 1px); background-size:28px 28px; mask-image:linear-gradient(transparent,black 18%,black 86%,transparent); }
              .used-scan-orbit { position:absolute; left:50%; top:52%; border:1px dashed rgba(103,232,249,.38); border-radius:50%; transform:translate(-50%,-50%); pointer-events:none; }
              .used-scan-orbit-a { width:78%; height:36%; animation:usedOrbit 16s linear infinite; }
              .used-scan-orbit-b { width:62%; height:58%; border-color:rgba(129,140,248,.35); animation:usedOrbit 22s linear infinite reverse; }
              .used-scan-beam { position:absolute; z-index:3; top:14%; bottom:15%; left:12%; width:2px; background:#67e8f9; box-shadow:0 0 12px #22d3ee,0 0 28px #0891b2; animation:usedBeam 4.5s ease-in-out infinite alternate; }
              .used-scan-car { position:absolute; inset:12% 5% 10%; display:flex; align-items:center; justify-content:center; opacity:0; animation-duration:12s; animation-timing-function:steps(1,end); animation-iteration-count:infinite; }
              .used-scan-car svg { display:block; width:100%; height:100%; overflow:visible; filter:drop-shadow(0 14px 24px rgba(34,211,238,.12)); }
              .used-view-front { animation-name:usedFront; } .used-view-right { animation-name:usedRight; } .used-view-rear { animation-name:usedRear; } .used-view-left { animation-name:usedLeft; }
              .used-scan-label { position:absolute; z-index:5; display:flex; align-items:center; gap:6px; padding:7px 9px; border:1px solid rgba(103,232,249,.42); border-radius:10px; background:rgba(2,18,43,.78); color:#cffafe; font-size:8px; font-weight:900; letter-spacing:.06em; box-shadow:0 0 18px rgba(8,145,178,.12); }
              .used-scan-label span { display:inline-block; width:6px; height:6px; flex:none; border-radius:50%; background:#22d3ee; box-shadow:0 0 8px #22d3ee; }
              .used-label-body { left:3%; top:31%; animation:usedFloat 3.1s ease-in-out infinite; } .used-label-engine { left:4%; bottom:22%; animation:usedFloat 3.4s ease-in-out infinite reverse; } .used-label-wheel { right:3%; bottom:28%; animation:usedFloat 3.2s ease-in-out infinite; } .used-label-obd { right:4%; top:38%; animation:usedFloat 3.6s ease-in-out infinite reverse; } .used-label-accident { right:4%; top:17%; animation:usedFloat 3.3s ease-in-out infinite; }
              .used-view-name-front,.used-view-name-right,.used-view-name-rear,.used-view-name-left { display:none; }
              .used-view-name-front { animation:usedCaptionFront 12s steps(1,end) infinite; } .used-view-name-right { animation:usedCaptionRight 12s steps(1,end) infinite; } .used-view-name-rear { animation:usedCaptionRear 12s steps(1,end) infinite; } .used-view-name-left { animation:usedCaptionLeft 12s steps(1,end) infinite; }
              @keyframes usedCaptionFront { 0%,24.99% {display:inline} 25%,100% {display:none} } @keyframes usedCaptionRight { 0%,24.99% {display:none} 25%,49.99% {display:inline} 50%,100% {display:none} } @keyframes usedCaptionRear { 0%,49.99% {display:none} 50%,74.99% {display:inline} 75%,100% {display:none} } @keyframes usedCaptionLeft { 0%,74.99% {display:none} 75%,99.99% {display:inline} 100% {display:none} }
              .used-scan-caption { z-index:6; }
              @keyframes usedFront { 0%,24.99% {opacity:1} 25%,100% {opacity:0} }
              @keyframes usedRight { 0%,24.99% {opacity:0} 25%,49.99% {opacity:1} 50%,100% {opacity:0} }
              @keyframes usedRear { 0%,49.99% {opacity:0} 50%,74.99% {opacity:1} 75%,100% {opacity:0} }
              @keyframes usedLeft { 0%,74.99% {opacity:0} 75%,99.99% {opacity:1} 100% {opacity:0} }
              @keyframes usedBeam { from {left:12%;opacity:.55} to {left:88%;opacity:1} }
              @keyframes usedOrbit { to { rotate:360deg } }
              @keyframes usedFloat { 0%,100% {translate:0 0} 50% {translate:0 -5px} }
              @media(min-width:640px) { .used-scan-label {font-size:10px;padding:9px 12px} }
              @media(max-width:639px) { .used-scan-label {font-size:7px;gap:4px;padding:6px 7px;letter-spacing:.025em} .used-label-body {left:1%;top:32%} .used-label-engine {left:1%;bottom:21%} .used-label-wheel {right:1%;bottom:27%} .used-label-obd {right:1%;top:39%} .used-label-accident {right:1%;top:16%} }
              @media(prefers-reduced-motion:reduce) { .used-scan-beam,.used-scan-orbit,.used-scan-label,.used-scan-car {animation:none!important} .used-scan-car {opacity:0!important} .used-view-front {opacity:1!important} }
            `}</style>
        </main>

    );

}