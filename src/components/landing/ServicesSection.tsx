'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export default function ServicesSection() {
    const { t } = useLanguage();

    return (
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        {t.services.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                        {t.services.subtitle}
                    </p>
                    <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
                </div>

                {/* Responsive Layout: Mobile Horizontal Swipe Carousel / Desktop Grid */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {t.services.items.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[260px] min-[400px]:min-w-[290px] sm:min-w-[320px] md:min-w-0 snap-center bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                {/* Circular Image Badge */}
                                <div className="w-16 h-16 mx-auto rounded-2xl border-2 border-blue-100 overflow-hidden relative shadow-md bg-slate-100 flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-center"
                                        sizes="64px"
                                    />
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 text-center">{item.title}</h3>

                                <p className="text-slate-600 text-sm leading-relaxed text-center line-clamp-3">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
                                <Link href="/services" className="text-xs font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wider transition">
                                    {t.services.learnMore} &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swipe Hint Dots */}
                <div className="flex md:hidden justify-center items-center gap-1.5 pt-6">
                    {t.services.items.map((_, i) => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    ))}
                </div>

            </div>
        </section>
    );
}