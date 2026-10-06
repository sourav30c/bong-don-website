'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function TestimonialsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollPosition();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            window.addEventListener('resize', checkScrollPosition);
            return () => {
                container.removeEventListener('scroll', checkScrollPosition);
                window.removeEventListener('resize', checkScrollPosition);
            };
        }
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
    };

    const testimonials = [
        {
            quote: "Dr. Sourav Sarkar is exceptionally patient and thorough. He explained my father's chronic kidney disease stages in simple terms and guided us through the exact dietary and medication adjustments needed. Truly a blessing for our family.",
            name: "A. Mukherjee",
            location: "Patient Family Member, Kolkata"
        },
        {
            quote: "Finding a nephrologist who listens without rushing you is rare. Dr. Sarkar managed my fluctuating blood pressure and renal parameters with immense care. His YouTube channel (BongDoc) also gave me so much confidence.",
            name: "Rajesh Sengupta",
            location: "Barasat Chamber Patient"
        },
        {
            quote: "Consulted him at Galaxy Hospital in Barrackpur for recurrent urinary and renal issues. His diagnosis was spot on, and the treatment plan worked wonders. Highly professional and humble doctor.",
            name: "Suman Roy",
            location: "Barrackpur Patient"
        },
        {
            quote: "His ability to break down complex medical terms in Bengali through BongDoc is amazing. When we visited him at Phoolbagan, he gave us complete time and addressed all our anxiety regarding dialysis care.",
            name: "Debasish Chatterjee",
            location: "Phoolbagan Patient"
        },
        {
            quote: "One of the best internal medicine specialists in Kolkata. His calm demeanor and accurate diagnosis for persistent fever and weakness helped me recover very quickly.",
            name: "Priyanka Banerjee",
            location: "Kolkata"
        },
        {
            quote: "Very structured approach to kidney stone prevention and lifestyle counseling. We travel from outstation for his weekend consultations because his treatment makes a genuine difference.",
            name: "Amitava Ghosh",
            location: "Burdwan Patient"
        }
    ];

    return (
        <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header with Arrow Controls */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-6">
                    <div className="space-y-3">
                        <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
                            Patient Experiences
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                            What Our Patients Say
                        </h2>
                        <p className="text-slate-600 max-w-xl text-sm sm:text-base">
                            Your trust is our greatest reward. Read what our valued patients have to say about their journey to better health with us.
                        </p>
                    </div>

                    {/* Dynamic Arrow Controls */}
                    <div className="flex items-center gap-3">
                        {showLeftArrow && (
                            <button
                                onClick={scrollLeft}
                                aria-label="Scroll left"
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition text-base sm:text-lg font-bold"
                            >
                                ←
                            </button>
                        )}
                        {showRightArrow && (
                            <button
                                onClick={scrollRight}
                                aria-label="Scroll right"
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition text-base sm:text-lg font-bold"
                            >
                                →
                            </button>
                        )}
                        <Link
                            href="/testimonials"
                            className="text-xs font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wider ml-4 hidden sm:inline-block"
                        >
                            View All &rarr;
                        </Link>
                    </div>
                </div>

                {/* Horizontal Scrolling Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[280px] min-[400px]:w-80 sm:w-96 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 snap-start hover:shadow-md transition"
                        >
                            <div className="space-y-4">
                                <div className="flex text-amber-400 gap-1 text-lg">
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed italic">
                                    &quot;{item.quote}&quot;
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                                <p className="text-slate-500 text-xs">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}