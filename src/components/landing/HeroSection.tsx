'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
    {
        image: "/banner-slide-11.png",
        tag: "Gold Medalist • DM Nephrology & MD Medicine",
        titlePre: "Advanced Kidney Care &",
        titleHighlight: "Internal Medicine",
        description: "Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc."
    },
    {
        image: "/banner-slide-2.png",
        tag: "SSKM (PG) Hospital Alumni • MRCP London",
        titlePre: "Expert Kidney Disease &",
        titleHighlight: "Transplant Care",
        description: "Providing world-class evaluation for kidney transplantation, glomerular disorders, diabetic nephropathy, and personalized renal replacement therapies."
    },
    {
        image: "/banner-slide-3.png",
        tag: "BongDoc Digital Outreach • 16K+ Followers",
        titlePre: "Patient Education &",
        titleHighlight: "Health Awareness",
        description: "Bridging the gap between complex medical science and everyday patients through expert health talks, vlogs, and transparent clinical guidance."
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const activeSlide = slides[currentSlide] || slides[0];

    return (
        <section className="relative overflow-hidden bg-slate-950 w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] flex items-end sm:items-center">

            {/* Background Banner Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                >
                    <div className="absolute inset-0">
                        <Image
                            src={slide.image}
                            alt={`Banner Slide ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover object-right-top"
                            sizes="100vw"
                        />
                    </div>

                    {/* Gradient Overlay: Deep at top/bottom for readability while keeping upper doctor image clear */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/40 sm:bg-gradient-to-r sm:from-slate-950 sm:via-slate-950/85 sm:to-transparent lg:w-4/5 z-10"></div>
                </div>
            ))}

            {/* Foreground Content */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-14 w-full">
                <div className="max-w-2xl space-y-3 sm:space-y-6 text-left">

                    {/* Top Pill Tag */}
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600/90 text-white px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
                        <span>{activeSlide.tag}</span>
                    </div>

                    {/* Main Title and Description */}
                    <div className="space-y-1.5 sm:space-y-3">
                        <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                            {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
                        </h1>
                        <p className="text-[11px] sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                            {activeSlide.description}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 pt-1">
                        <Link
                            href="/contacts"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-2 min-h-[40px] sm:min-h-[44px]"
                        >
                            <span>Book Consultation</span>
                            <span>&rarr;</span>
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm shadow-sm text-center flex items-center justify-center min-h-[40px] sm:min-h-[44px]"
                        >
                            View Profile & Credentials
                        </Link>
                    </div>

                    {/* Quick Trust Bar */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4 border-t border-white/15 max-w-md">
                        <div>
                            <p className="text-base sm:text-2xl font-extrabold text-blue-300">10+</p>
                            <p className="text-[9px] sm:text-xs text-slate-300 font-medium">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-base sm:text-2xl font-extrabold text-blue-300">9,000+</p>
                            <p className="text-[9px] sm:text-xs text-slate-300 font-medium">Patients Treated</p>
                        </div>
                        <div>
                            <p className="text-base sm:text-2xl font-extrabold text-blue-300">16K+</p>
                            <p className="text-[9px] sm:text-xs text-slate-300 font-medium">BongDoc Followers</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Slider Indicators */}
            {slides.length > 1 && (
                <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-4 sm:w-7 bg-blue-500' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}