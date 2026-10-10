'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export default function TestimonialsSection() {
    const { t } = useLanguage();
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

    return (
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header with Arrow Controls Shifted to Right */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-6">
                    <div className="space-y-3">
                        <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
                            {t.testimonials.badge}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                            {t.testimonials.title}
                        </h2>
                        <p className="text-slate-600 max-w-xl text-sm sm:text-base">
                            {t.testimonials.subtitle}
                        </p>
                    </div>

                    {/* Dynamic Arrow Controls (Shifted to Right on Mobile) */}
                    <div className="flex items-center justify-end gap-3 w-full sm:w-auto">
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
                            {t.testimonials.viewAll} &rarr;
                        </Link>
                    </div>
                </div>

                {/* Horizontal Scrolling Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
                >
                    {t.testimonials.items.map((item, index) => (
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