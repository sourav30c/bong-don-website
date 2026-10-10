'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <div className="bg-slate-50 py-10 sm:py-14 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
                    <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-blue-200">
                        {t.about.badge}
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                        {t.about.title}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed px-2 sm:px-0">
                        {t.about.subtitle}
                    </p>
                </div>

                {/* Main Equal-Height Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

                    {/* Right Column: Profile Image + Talks, Memberships & Languages (Span 5) - Order 1 on Mobile */}
                    <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between space-y-5 sm:space-y-6 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">

                        {/* Profile Image */}
                        <div className="relative w-full h-[240px] min-[400px]:h-[280px] sm:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200 shadow-md">
                            <Image
                                src="/LandingProfImage_2.jpg"
                                alt={t.brand.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover object-center"
                                priority
                            />
                        </div>

                        {/* Talks & Publications */}
                        <div className="space-y-1 bg-slate-50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200">
                            <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                {t.about.talksTitle}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                                {t.about.talksDesc}
                            </p>
                        </div>

                        {/* Fellowship & Membership */}
                        <div className="space-y-1 bg-slate-50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200">
                            <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                {t.about.fellowshipTitle}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                                {t.about.fellowshipDesc}
                            </p>
                        </div>

                        {/* Languages Spoken */}
                        <div className="space-y-1 bg-slate-50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200">
                            <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                {t.about.languagesTitle}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-700 font-medium">
                                {t.about.languagesList}
                            </p>
                        </div>

                    </div>

                    {/* Left Column: Clinical Philosophy & Table Structure (Span 7) - Order 2 on Mobile */}
                    <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-between space-y-6 sm:space-y-8">

                        {/* Doctor Intro & Bio */}
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                                {t.about.bioTitle}
                            </h2>
                            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                                {t.about.bioP1}
                            </p>
                            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                                {t.about.bioP2}
                            </p>
                        </div>

                        {/* Education & Training (Table Style) */}
                        <div className="space-y-2.5 sm:space-y-3">
                            <div className="bg-blue-600 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-t-xl">
                                {t.about.educationTitle}
                            </div>
                            <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
                                {t.about.education.map((item, idx) => (
                                    <div key={idx} className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                                        <strong className="text-slate-900 font-semibold">{item.degree}</strong>
                                        <span className="sm:col-span-2 text-slate-600">{item.institution}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Professional Experience (Table Style) */}
                        <div className="space-y-2.5 sm:space-y-3">
                            <div className="bg-blue-600 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-t-xl">
                                {t.about.experienceTitle}
                            </div>
                            <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
                                {t.about.experience.map((item, idx) => (
                                    <div key={idx} className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                                        <strong className="text-slate-900 font-semibold">{item.role}</strong>
                                        <span className="sm:col-span-2 text-slate-600">{item.hospital}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
