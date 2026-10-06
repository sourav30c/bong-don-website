'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Static slides array with distinct professional headings and descriptions
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
        <section className="relative overflow-hidden bg-slate-950 min-h-[500px] sm:min-h-[580px] lg:min-h-[680px] flex items-center">

            {/* Background Banner Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                >
                    {/* Banner Image Background pinned to right center so the doctor is never cut off */}
                    <div
                        className="absolute inset-0 bg-cover lg:bg-[center_right] bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Soft left gradient overlay to ensure text readability on all screen sizes */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60 sm:bg-gradient-to-r sm:from-slate-950/95 sm:via-slate-900/80 sm:to-transparent lg:w-3/5"></div>
                    </div>
                </div>
            ))}

            {/* Foreground Content (Left-Aligned over the blank space of the banner) */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
                <div className="max-w-2xl space-y-5 sm:space-y-8 text-left">

                    {/* Top Pill Tag */}
                    <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30 max-w-[290px] sm:max-w-none text-center leading-tight">
                        <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
                        <span className="truncate sm:whitespace-normal">{activeSlide.tag}</span>
                    </div>

                    {/* Main Title */}
                    <div className="space-y-3 sm:space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                            {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
                        </h1>
                        <p className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal pr-2 sm:pr-0">
                            {activeSlide.description}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                        <Link
                            href="/contacts"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base flex items-center justify-center gap-2 min-h-[44px]"
                        >
                            <span>Book Consultation</span>
                            <span>&rarr;</span>
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base shadow-sm text-center min-h-[44px] flex items-center justify-center"
                        >
                            View Profile & Credentials
                        </Link>
                    </div>

                    {/* Quick Trust Bar */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/15 max-w-lg">
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-300">10+</p>
                            <p className="text-[10px] sm:text-xs text-slate-300 font-medium">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-300">9,000+</p>
                            <p className="text-[10px] sm:text-xs text-slate-300 font-medium">Patients Treated</p>
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-300">16K+</p>
                            <p className="text-[10px] sm:text-xs text-slate-300 font-medium">BongDoc Followers</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Slider Indicators */}
            {slides.length > 1 && (
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 sm:w-8 bg-blue-500' : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}