"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoStitchProps {
    className?: string;
    width?: number;
}

export function LogoStitch({ className, width = 130 }: LogoStitchProps) {
    return (
        <div
            className={cn(
                "flex flex-col select-none relative z-10 rounded-md overflow-hidden bg-white/5 ring-1 ring-white/10",
                className
            )}
            style={{ width, maxHeight: Math.round(width * 0.75) }}
        >
            <div className="flex flex-col w-full text-[0] leading-none">
                <Image
                    src="/images/logo1.jpg"
                    alt="Ashland Diesel Engines"
                    width={206}
                    height={76}
                    className="w-full h-auto block"
                    priority
                    quality={100}
                    unoptimized
                />
                <Image
                    src="/images/logo2.jpg"
                    alt=""
                    width={206}
                    height={37}
                    className="w-full h-auto block"
                    priority
                    quality={100}
                    unoptimized
                />
                <Image
                    src="/images/logo3.jpg"
                    alt=""
                    width={206}
                    height={21}
                    className="w-full h-auto block"
                    priority
                    quality={100}
                    unoptimized
                />
                <Image
                    src="/images/logo4.jpg"
                    alt=""
                    width={206}
                    height={79}
                    className="w-full h-auto block"
                    priority
                    quality={100}
                    unoptimized
                />
            </div>
        </div>
    );
}
