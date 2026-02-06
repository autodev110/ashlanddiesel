import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Phone, MapPin } from "lucide-react";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashland Diesel Engines Inc.",
  description: "Premier diesel engine sales and service in PA, NY, and NJ since 1951.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        {/* Top Bar - Contact Info */}
        <div className="bg-diesel-yellow text-black py-1.5 px-4 text-[11px] font-bold uppercase tracking-wider hidden md:flex justify-between items-center z-50 relative">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" /> (570) 875-2300
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> 32 Lehigh Street, Ashland, PA 17921
            </span>
          </div>
          <div className="flex gap-4">
            <span>Factory Authorized: Cummins • International • Caterpillar</span>
          </div>
        </div>

        <Header />

        <main className="flex-1 w-full max-w-[1920px] mx-auto overflow-x-hidden">
          {children}
        </main>

        <footer className="border-t border-white/10 bg-black py-8 md:py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold text-diesel-yellow mb-3 md:mb-4 uppercase">Ashland Diesel Engines</h3>
              <p className="text-gray-400 text-sm md:text-base max-w-md">
                The #1 Cummins Quest Dealership in the Nation. Serving the Tri-State area with excellence in diesel repair, machining, and parts since 1951.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 md:mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">32 Lehigh Street, Ashland, PA 17921</p>
              <p className="text-gray-400 text-sm mb-2">Phone: (570) 875-2300</p>
              <p className="text-gray-400 text-sm">Fax: (570) 875-3426</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 md:mb-4 uppercase tracking-wider text-sm">Departments</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/machining" className="hover:text-diesel-yellow">Machining & Welding</Link></li>
                <li><Link href="/parts" className="hover:text-diesel-yellow">Parts Inventory</Link></li>
                <li><Link href="/service" className="hover:text-diesel-yellow">Service & Repair</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Ashland Diesel Engines, Inc. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
