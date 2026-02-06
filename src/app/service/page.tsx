import Image from "next/image";
import { Wrench, CheckCircle } from "lucide-react";

export default function ServicePage() {
    const capabilities = [
        "PA State & ICC Federal Inspections",
        "Bosch Opacity Meter (NJ smoke tests)",
        "Cummins Certified PT Fuel Pump & Injector Room",
        "In-House & On-Site Block Machining",
        "Fully Equipped Cylinder Head & Components Rebuilding Center",
        "Electronic Engine Troubleshooting",
        "Eaton, Fuller & Spicer Transmission",
        "Frame Stretching Capabilities",
        "Full Mid-Range Engine Service",
        "In-House & On-Site R134A Air Conditioning Service",
        "Pressure Testing Benches",
        "Magnafluxing",
        "Glider Kits",
        "Loan Vehicles for Customer Drop Offs"
    ];

    return (
        <div className="min-h-screen bg-background pb-10">
            <section className="bg-zinc-900 py-10 md:py-16 px-4 md:px-6 border-b border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-6xl font-black uppercase text-white mb-3">Service Department</h1>
                    <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto">
                        33,000 sq.ft. State-of-the-Art Factory Authorized Full Warranty Repair Facility.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-10">

                {/* Photo gallery - stacks on mobile, row on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg">
                        <Image src="/images/service_image1.jpg" alt="Service Bay" width={300} height={370} className="w-full h-auto block" unoptimized />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg">
                        <Image src="/images/service_image2.jpg" alt="Equipment" width={500} height={342} className="w-full h-auto block" unoptimized />
                    </div>
                    <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg">
                        <Image src="/images/service_image3.jpg" alt="Dynamometer" width={500} height={286} className="w-full h-auto block" unoptimized />
                    </div>
                </div>

                {/* Facility specs + Dynamometer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-diesel-yellow uppercase mb-4">Facility Specifications</h2>
                        <ul className="space-y-2.5 text-gray-300 text-sm">
                            <li className="flex gap-3 p-3 bg-zinc-900/50 rounded-lg border border-white/5">
                                <span className="font-bold text-white text-lg leading-none">4</span>
                                <span>14&apos; x 60&apos; truck bays for motor homes, buses, tankers, &amp; fire trucks w/four 18,000 lb. Mohawk Wheel Lifts</span>
                            </li>
                            <li className="flex gap-3 p-3 bg-zinc-900/50 rounded-lg border border-white/5">
                                <span className="font-bold text-white text-lg leading-none">2</span>
                                <span>Steam bays for trucks &amp; engines w/pressure washers &amp; steam cabinets</span>
                            </li>
                            <li className="flex gap-3 p-3 bg-zinc-900/50 rounded-lg border border-white/5">
                                <span className="font-bold text-white text-lg leading-none">1</span>
                                <span>60&apos; x 120&apos; main shop for engine rebuilds &amp; 8 trucks</span>
                            </li>
                            <li className="flex gap-3 p-3 bg-zinc-900/50 rounded-lg border border-white/5">
                                <span className="font-bold text-white text-lg leading-none">4</span>
                                <span>14&apos; x 50&apos; truck bays for tractors &amp; 10 wheelers w/two Mohawk Frame Lifts</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-diesel-red/10 border border-diesel-red/20 rounded-xl p-5 flex flex-col justify-center">
                        <h2 className="text-lg md:text-xl font-bold text-white uppercase mb-2">Power Testing</h2>
                        <p className="text-gray-300 text-sm mb-3">
                            We verify our work with precision power testing equipment.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-white text-sm font-bold">
                                <CheckCircle className="w-4 h-4 text-diesel-red shrink-0" /> 1000 HP Taylor Chassis Dynamometer
                            </li>
                            <li className="flex items-center gap-2 text-white text-sm font-bold">
                                <CheckCircle className="w-4 h-4 text-diesel-red shrink-0" /> 1200 HP Taylor Engine Dynamometer
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Full Capabilities */}
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white uppercase mb-5 text-center">Comprehensive Capabilities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {capabilities.map((cap) => (
                            <div key={cap} className="flex items-start gap-2 p-2.5 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
                                <Wrench className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-xs md:text-sm">{cap}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center p-5 bg-zinc-900 rounded-xl border border-white/10">
                    <h3 className="text-lg md:text-xl font-bold text-diesel-yellow uppercase mb-1">Fully Equipped Service Trucks</h3>
                    <p className="text-gray-400 text-xs md:text-sm">Available for on-site repairs and maintenance.</p>
                </div>
            </div>
        </div>
    );
}
