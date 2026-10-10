'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

const badges = [
    "bg-blue-100 text-blue-800",
    "bg-emerald-100 text-emerald-800",
    "bg-purple-100 text-purple-800"
];

export default function ClinicsSection() {
    const { t } = useLanguage();

    return (
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3 max-w-2xl">
                        <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-blue-200">
                            {t.clinics.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                            {t.clinics.title}
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                            {t.clinics.subtitle}
                        </p>
                    </div>
                    <div>
                        <Link
                            href="/clinics"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition shadow text-xs sm:text-sm"
                        >
                            <span>{t.clinics.viewAllButton}</span>
                            <span>&rarr;</span>
                        </Link>
                    </div>
                </div>

                {/* Responsive Layout: Mobile Horizontal Swipe Carousel / Desktop 3-Column Grid */}
                <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {t.clinics.items.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[260px] min-[400px]:min-w-[300px] md:min-w-0 snap-center bg-slate-50 border border-slate-200 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition space-y-5 sm:space-y-6 flex flex-col justify-between"
                        >
                            <div className="space-y-3.5 sm:space-y-4">
                                <span className={`inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${badges[index % badges.length]}`}>
                                    {item.type}
                                </span>

                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.name}</h3>
                                    <p className="text-slate-500 text-xs sm:text-sm">{item.location}</p>
                                </div>

                                <div className="pt-3 sm:pt-4 border-t border-slate-200 space-y-1.5 text-xs sm:text-sm text-slate-700">
                                    <p><strong className="text-slate-900">{t.clinics.daysLabel}</strong> {item.days}</p>
                                    <p><strong className="text-slate-900">{t.clinics.timingsLabel}</strong> {item.timings}</p>
                                </div>

                                {/* Embedded Map Preview */}
                                <div className="h-36 sm:h-40 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 relative">
                                    <iframe
                                        title={`${item.name} Map`}
                                        src={item.mapEmbed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                    ></iframe>
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow border border-slate-200 text-[11px] sm:text-xs font-semibold text-blue-600">
                                        <a href={item.mapUrl} target="_blank" rel="noopener noreferrer">
                                            {t.clinics.mapLabel}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link
                                    href="/contacts"
                                    className="block w-full bg-white hover:bg-blue-600 hover:text-white text-slate-800 text-center font-medium py-2.5 rounded-xl border border-slate-200 transition text-xs sm:text-sm shadow-sm"
                                >
                                    {t.clinics.bookSlot}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swipe Hint Dots */}
                <div className="flex md:hidden justify-center items-center gap-1.5 pt-4">
                    {t.clinics.items.map((_, i) => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    ))}
                </div>

            </div>
        </section>
    );
}