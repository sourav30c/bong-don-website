'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        credentials: "Gold Medalist • DM Nephrology & MD Medicine",
        title: "Advanced Renal Care & Internal Medicine",
        subtitle: "Super Specialist Doctor dedicated to comprehensive kidney health, chronic disease management, and patient education on BongDoc.",
        doctorImage: "/LandingProfImage.jpg",
    },
    {
        id: 2,
        credentials: "MBBS (Hons) | MD (Medicine) | DM (Nephrology)",
        title: "Dr. Sourav Sarkar",
        subtitle: "Clinical Lead & Kidney Transplant Physician offering expert care in Dialysis, Renal Transplants, and Hypertension.",
        doctorImage: "/LandingProfImage.jpg",
    },
    {
        id: 3,
        credentials: "Director of Nephrology & Dialysis",
        title: "Comprehensive Kidney & Dialysis Care",
        subtitle: "State-of-the-art management for acute kidney injury, glomerular disorders, and long-term renal replacement therapy.",
        doctorImage: "/LandingProfImage.jpg",
    },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full overflow-hidden text-white bg-slate-950">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/80 z-10"></div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] z-10"></div>
            </div>

            {/* Carousel Track Container */}
            <div className="relative z-25 overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-700 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0 flex items-center">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 min-h-[580px] lg:min-h-[640px] flex items-center">

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                                    {/* Left Text Content */}
                                    <div className="lg:col-span-7 space-y-6">
                                        <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-blue-400/30">
                                            <span>{slide.credentials}</span>
                                        </div>

                                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                                            {slide.title}
                                        </h1>

                                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                                            {slide.subtitle}
                                        </p>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <Link
                                                href="/contacts"
                                                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg text-center transition flex items-center justify-center gap-2"
                                            >
                                                Book Consultation
                                            </Link>
                                            <Link
                                                href="/clinics"
                                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium px-8 py-3.5 rounded-xl border border-white/30 text-center transition flex items-center justify-center"
                                            >
                                                View Chambers & Timings
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Doctor Image Preview */}
                                    <div className="lg:col-span-5 flex justify-center">
                                        <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">
                                            <Image
                                                src={slide.doctorImage}
                                                alt="Dr. Sourav Sarkar"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 400px"
                                                className="object-cover object-top"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
                                                <div>
                                                    <p className="text-2xl font-bold text-white">Dr. Sourav Sarkar</p>
                                                    <p className="text-xs text-blue-300 font-medium tracking-wider uppercase">DM Nephrology (Gold Medalist)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-30 border border-white/10 hidden sm:flex items-center justify-center"
                aria-label="Previous Slide"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-30 border border-white/10 hidden sm:flex items-center justify-center"
                aria-label="Next Slide"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/40 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </section>
    );
}