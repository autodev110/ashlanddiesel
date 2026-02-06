import Image from "next/image";
import { Package, Truck, Clock, ShieldCheck } from "lucide-react";

export default function PartsPage() {
    return (
        <div className="min-h-screen bg-background pb-10">
            <section className="bg-zinc-900 py-10 md:py-16 px-4 md:px-6 border-b border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-6xl font-black uppercase text-white mb-3">Parts Department</h1>
                    <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto">
                        Large Inventory of New Cummins, Caterpillar, & Certified Used Parts. Over 60 Years of Parts Experience.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8">

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <StatCard icon={<Truck className="w-5 h-5 text-diesel-yellow" />} title="Free Delivery" desc="Orders over $500" />
                    <StatCard icon={<Clock className="w-5 h-5 text-diesel-yellow" />} title="Next Day" desc="Non-Stocked Items" />
                    <StatCard icon={<Package className="w-5 h-5 text-diesel-yellow" />} title="5,000 sq.ft." desc="Used Parts Storage" />
                    <StatCard icon={<ShieldCheck className="w-5 h-5 text-diesel-yellow" />} title="2,500 sq.ft." desc="New Parts Storage" />
                </div>

                {/* Old vs New */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-card border border-white/5 rounded-xl p-4 md:p-6 hover:border-diesel-yellow/20 transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-white uppercase mb-3 pb-2 border-b border-white/10">The Oldest of the Old</h3>
                        <div className="space-y-3">
                            <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-zinc-900">
                                <Image src="/images/parts_image1.jpg" alt="Old parts" width={250} height={155} className="w-full h-auto block" unoptimized />
                            </div>
                            <p className="text-gray-400 text-xs font-mono leading-relaxed">
                                L, LR/C, J/H, NH, NT/SM. V6, V8/NVH, V & VT 1710, V28/V & VT 903/L10/K, KT, KTA 19/KTA, KTTA, 38, 50/4BT 3.9/6BT 5.9/6CT 8.3/M11
                            </p>
                        </div>
                    </div>

                    <div className="bg-card border border-white/5 rounded-xl p-4 md:p-6 hover:border-diesel-red/20 transition-colors">
                        <h3 className="text-base md:text-lg font-bold text-white uppercase mb-3 pb-2 border-b border-white/10">The Newest of the New</h3>
                        <div className="space-y-3">
                            <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-zinc-900">
                                <Image src="/images/parts_image2.jpg" alt="New parts" width={350} height={159} className="w-full h-auto block" unoptimized />
                            </div>
                            <p className="text-gray-400 text-xs font-mono leading-relaxed">
                                ISB, ISC, ISL, ISM, ISX, Signature/QSK 19, 45, 60/QST 30/QSB 5.9/QSC 8.3/B 3.3
                            </p>
                        </div>
                    </div>
                </div>

                {/* Exchange Program */}
                <div className="bg-diesel-yellow text-black rounded-xl p-6 md:p-10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-xl md:text-3xl font-black uppercase mb-3">Dealer Parts Exchange Program</h2>
                        <p className="text-sm md:text-lg font-bold mb-4 max-w-2xl mx-auto">
                            Minimize downtime on repairs. Just drop off cores & pick up parts & exchange assemblies.
                        </p>
                        <p className="text-xs md:text-sm font-medium opacity-80 max-w-xl mx-auto">
                            For engines, cyl. heads, connecting rods, single & double air compressors, fuel pumps, water & lube pumps/accessory drives.
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-black border border-white/10 p-3 md:p-4 rounded-lg flex items-center gap-2.5 hover:border-diesel-yellow/50 transition-colors group">
            <div className="p-1.5 bg-white/5 rounded-full group-hover:scale-110 transition-transform shrink-0">{icon}</div>
            <div>
                <p className="text-xs md:text-sm font-bold text-white uppercase">{title}</p>
                <p className="text-gray-500 text-[10px] md:text-xs">{desc}</p>
            </div>
        </div>
    )
}
