import Image from "next/image";
import { Award, MapPin, Clock, Trophy } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pb-10">
            {/* Header */}
            <section className="bg-zinc-900 py-10 md:py-16 px-4 md:px-6 border-b border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-6xl font-black uppercase text-white mb-3">About Us</h1>
                    <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto">
                        Exemplifying the tradition of service excellence in the Anthracite Coal Region since 1951.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-10">
                {/* Image + Intro */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                    <div className="w-full md:w-auto md:shrink-0 md:sticky md:top-28">
                        <div className="w-full md:max-w-[500px] rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                            <Image
                                src="/images/aboutus_image1.jpg"
                                alt="Ashland Diesel Facility"
                                width={500}
                                height={340}
                                className="w-full h-auto block"
                                unoptimized
                            />
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-diesel-yellow text-xs font-bold uppercase tracking-widest">
                            <MapPin className="w-3.5 h-3.5" /> Ashland, Pennsylvania
                        </div>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                        <h2 className="text-xl md:text-2xl font-bold text-diesel-yellow uppercase">Our History</h2>
                        <p>
                            Located in the heart of the Anthracite Coal Region of Pennsylvania, <span className="text-white font-bold">Ashland Diesel Engines Inc.</span> exemplifies the tradition of service excellence that the former company Cummins Diesel Engines of Ashland was known for since its conception in 1951.
                        </p>
                        <p>
                            Since its acquisition in 1991, A.D.E. Inc. not only meets but far exceeds the expectations of the rigid demands in the Cummins Diesel Engines sales and service arena for automotive, industrial, construction, and mining.
                        </p>
                        <p>
                            As a Nelson distributor, plus the addition of three new Mohawk vehicle lifts, and five lengthened truck bays, A.D.E. Inc. can now offer its customers a wider range of services including transmission, differential, suspension, frame, and brake repairs.
                        </p>
                    </div>
                </div>

                {/* Award callout */}
                <div className="bg-zinc-900/50 p-4 md:p-8 rounded-xl border-l-4 border-diesel-yellow">
                    <div className="flex items-start gap-3 md:gap-4">
                        <Award className="w-6 h-6 md:w-8 md:h-8 text-diesel-yellow shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-bold text-white uppercase text-base md:text-lg mb-1.5">Award Winning Service</h3>
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                Winning the prestigious <span className="text-white">Cummins Dealer Quest Award</span> every year since its introduction in 1993, and named <span className="text-diesel-yellow">&quot;The #1 Cummins Quest Dealership in the Nation&quot;</span> in 1994, has brought A.D.E. Inc. a national notoriety that has helped it become the largest Cummins Dealership in the Tri-State (PA, NY, &amp; NJ) area.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center gap-3 bg-zinc-900/40 border border-white/5 rounded-lg p-4">
                        <Clock className="w-5 h-5 text-diesel-yellow shrink-0" />
                        <div>
                            <p className="text-white font-bold">Since 1951</p>
                            <p className="text-gray-500 text-xs uppercase tracking-wide">Years of Service</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-zinc-900/40 border border-white/5 rounded-lg p-4">
                        <Trophy className="w-5 h-5 text-diesel-yellow shrink-0" />
                        <div>
                            <p className="text-white font-bold">#1 in Nation</p>
                            <p className="text-gray-500 text-xs uppercase tracking-wide">Cummins Quest Award</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-zinc-900/40 border border-white/5 rounded-lg p-4">
                        <MapPin className="w-5 h-5 text-diesel-yellow shrink-0" />
                        <div>
                            <p className="text-white font-bold">Tri-State</p>
                            <p className="text-gray-500 text-xs uppercase tracking-wide">PA, NY &amp; NJ Coverage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
