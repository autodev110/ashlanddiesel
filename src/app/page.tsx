"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Settings, Truck, Award, Phone, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#050505]">

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />

        {/* Radial Glow - more subtle */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-diesel-yellow/8 blur-[150px] rounded-full" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-diesel-yellow/20 bg-diesel-yellow/5 text-diesel-yellow text-xs font-bold uppercase tracking-widest mb-8">
            <Award className="w-3.5 h-3.5" /> Est. 1951 &bull; Pennsylvania
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-6 md:mb-8">
            Power.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-diesel-yellow to-[#ffe066]">Precision.</span><br />
            Performance.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            The <span className="text-white font-semibold">#1 Cummins Quest Dealership in the Nation</span>.
            Factory-authorized service, precision machining, and extensive parts inventory.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/service"
              className="px-8 py-3.5 bg-diesel-yellow text-black font-bold uppercase tracking-wide text-sm rounded hover:bg-[#ffe066] transition-all flex items-center justify-center gap-2 group"
            >
              Our Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/parts"
              className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-sm"
            >
              Search Inventory
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-medium">(570) 875-2300</span>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-14 px-6 relative z-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-diesel-yellow text-xs font-bold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">Our Departments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Precision Machining"
              icon={<Settings className="w-6 h-6 text-black" />}
              description="From smallest gears to largest blocks. CNC machining & line boring."
              href="/machining"
              image="/images/machining_image3.jpg"
              idx={0}
            />
            <ServiceCard
              title="Parts Inventory"
              icon={<Truck className="w-6 h-6 text-white" />}
              description="60+ years of parts. 7,500 sq.ft storage for New & Used parts."
              href="/parts"
              image="/images/parts_image2.jpg"
              accent="red"
              idx={1}
            />
            <ServiceCard
              title="Service & Repair"
              icon={<Wrench className="w-6 h-6 text-black" />}
              description="33k sq.ft authorized facility. Cummins, International, & CAT."
              href="/service"
              image="/images/service_image2.jpg"
              idx={2}
            />
          </div>
        </div>
      </section>

      {/* CTA - Get Your Quote */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-diesel-yellow/10 via-diesel-yellow/5 to-diesel-yellow/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-diesel-yellow/20 bg-diesel-yellow/5 text-diesel-yellow text-xs font-bold uppercase tracking-widest mb-6">
            <FileText className="w-3.5 h-3.5" /> Free Estimate
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Get Your Quote{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-diesel-yellow to-[#ffe066]">Now</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Tell us about your project and we&apos;ll get back to you with a detailed estimate. Fast turnaround, no obligation.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-diesel-yellow text-black font-bold uppercase tracking-wide text-sm rounded hover:bg-[#ffe066] transition-all group"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* Brand Partners */}
      <section className="py-10 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-8">Authorized Factory Dealer</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <Image src="/images/logo_cummins.jpg" alt="Cummins" width={206} height={127} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" unoptimized />
            <Image src="/images/logo_cat.jpg" alt="Caterpillar" width={206} height={107} className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" unoptimized />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, icon, description, href, image, accent = "yellow", idx }: { title: string, icon: React.ReactNode, description: string, href: string, image: string, accent?: "yellow" | "red", idx: number }) {
  const accentColor = accent === "yellow" ? "bg-diesel-yellow" : "bg-diesel-red";
  const hoverBorder = accent === "yellow" ? "hover:border-diesel-yellow/30" : "hover:border-diesel-red/30";
  const accentText = accent === "yellow" ? "text-diesel-yellow" : "text-diesel-red";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
    >
      <Link href={href} className={cn("group relative block h-full overflow-hidden rounded-lg bg-card border border-white/10 transition-all duration-300", hoverBorder)}>
        {/* Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 z-10 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg font-bold uppercase tracking-tight text-gray-200 group-hover:text-white transition-colors">
              {title}
            </h3>
            <div className={cn("shrink-0 w-10 h-10 flex items-center justify-center rounded", accentColor)}>
              {icon}
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className={cn("text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors", accentText)}>
            Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
