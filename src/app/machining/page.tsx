import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function MachiningPage() {
    const services = [
        "Line Boring",
        "Block & Head Resurfacing",
        "Crank & Cam Polishing",
        "Magnafluxing",
        "Connecting Rod Re-sleeving",
        "Front Gear Cover Re-sleeving",
        "Flywheel Grinding",
        "Air Compressor Cylinder Boring"
    ];

    return (
        <div className="min-h-screen bg-background pb-10">
            <section className="bg-zinc-900 py-10 md:py-16 px-4 md:px-6 border-b border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-6xl font-black uppercase text-white mb-3">Machining & Welding</h1>
                    <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto">
                        Why Replace When You Can Repair? Significant savings with our Dealer Exchange Program.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-10 md:space-y-14">
                {/* Section 1: Image + Text */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <div className="w-full md:w-auto md:shrink-0">
                        <div className="w-full md:max-w-[480px] rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                            <Image
                                src="/images/machining_image1.jpg"
                                alt="Machining Operations"
                                width={500}
                                height={326}
                                className="w-full h-auto block"
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-white uppercase">Precision Technology</h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Driven by ever changing customer needs, our machine and welding shops are the fastest growing divisions at our facility.
                            The addition of several new computerized CNC machining centers to our already fully equipped machine and welding shops allows us to offer a wider range of services.
                        </p>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            From the smallest gear to the largest engine block, we can <span className="text-diesel-yellow font-bold">REPAIR, REPLACE, or MANUFACTURE</span> the highest quality parts to meet your Diesel Engine needs.
                        </p>
                    </div>
                </div>

                {/* Section 2: Services Grid */}
                <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-4 md:p-10">
                    <h2 className="text-xl md:text-2xl font-bold text-white uppercase mb-6 text-center">Available Machining Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {services.map((service) => (
                            <div key={service} className="flex items-center gap-2.5 bg-black/40 p-3 rounded-lg border border-white/5 hover:border-diesel-yellow/30 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-diesel-yellow shrink-0" />
                                <span className="text-gray-200 text-sm font-medium">{service}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-center text-xs md:text-sm text-diesel-red font-bold uppercase tracking-widest">
                        Now offering machining on all engine models including Cummins & Caterpillar
                    </p>
                </div>

                {/* Section 3: Bottom image */}
                <div className="w-full md:max-w-[500px] md:mx-auto relative rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                    <Image
                        src="/images/machining_image3.jpg"
                        alt="CNC Machinery"
                        width={500}
                        height={298}
                        className="w-full h-auto block"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 md:p-5">
                        <p className="text-white font-bold text-xs md:text-sm leading-snug">
                            Fully equipped for Block &amp; Head Resurfacing and Component Manufacturing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
