"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoStitch } from "@/components/ui/LogoStitch";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
    ["About Us", "/about"],
    ["Machining", "/machining"],
    ["Parts", "/parts"],
    ["Service", "/service"],
] as const;

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-1">
                <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
                    <div className="relative transition-transform duration-300 group-hover:scale-105 shrink-0">
                        <LogoStitch width={100} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-xl tracking-tight uppercase text-foreground group-hover:text-diesel-yellow transition-colors leading-tight">
                            Ashland Diesel
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium hidden sm:block">
                            Engines Inc.
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            className="relative text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-diesel-yellow transition-colors group"
                        >
                            {label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-diesel-yellow transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/quote"
                        className="ml-2 px-5 py-2 bg-diesel-yellow text-black text-sm font-bold uppercase tracking-wide rounded hover:bg-[#ffe066] transition-all flex items-center gap-2"
                    >
                        <FileText className="w-3.5 h-3.5" />
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Panel */}
            {open && (
                <nav className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-md px-4 py-4 space-y-1">
                    {navLinks.map(([label, href]) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="block py-3 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-diesel-yellow transition-colors border-b border-white/5 last:border-0"
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/quote"
                        onClick={() => setOpen(false)}
                        className="block mt-3 py-3 px-4 bg-diesel-yellow text-black text-sm font-bold uppercase tracking-widest text-center rounded flex items-center justify-center gap-2"
                    >
                        <FileText className="w-4 h-4" />
                        Get a Quote
                    </Link>
                    <div className="pt-3 text-xs text-gray-500 space-y-1">
                        <p>(570) 875-2300</p>
                        <p>32 Lehigh Street, Ashland, PA 17921</p>
                    </div>
                </nav>
            )}
        </header>
    );
}
