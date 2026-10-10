'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';

export default function AppointmentCtaSection() {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm">

                    {/* Left Column: Booking Form */}
                    <div className="lg:col-span-7 p-5 sm:p-8 lg:p-12 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                                {t.appointmentCta.title}
                            </h2>
                            <p className="text-slate-600 text-xs sm:text-sm">
                                {t.appointmentCta.subtitle}
                            </p>
                        </div>

                        {submitted ? (
                            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 sm:p-8 rounded-2xl text-center space-y-3">
                                <h4 className="text-lg sm:text-xl font-bold">{t.appointmentCta.receivedTitle}</h4>
                                <p className="text-xs sm:text-sm">{t.appointmentCta.receivedSubtitle}</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs sm:text-sm font-medium hover:bg-emerald-700 transition min-h-[44px]"
                                >
                                    {t.appointmentCta.submitAnother}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.firstName}</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder={t.appointmentCta.form.firstNamePlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.lastName}</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder={t.appointmentCta.form.lastNamePlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.email}</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder={t.appointmentCta.form.emailPlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.phone}</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder={t.appointmentCta.form.phonePlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.gender}</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]">
                                            <option>{t.appointmentCta.form.genderOptions.placeholder}</option>
                                            <option>{t.appointmentCta.form.genderOptions.male}</option>
                                            <option>{t.appointmentCta.form.genderOptions.female}</option>
                                            <option>{t.appointmentCta.form.genderOptions.other}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.preferredDate}</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.consultationType}</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]">
                                            <option>{t.appointmentCta.form.consultationOptions.placeholder}</option>
                                            <option>{t.appointmentCta.form.consultationOptions.general}</option>
                                            <option>{t.appointmentCta.form.consultationOptions.ckd}</option>
                                            <option>{t.appointmentCta.form.consultationOptions.dialysis}</option>
                                            <option>{t.appointmentCta.form.consultationOptions.transplant}</option>
                                            <option>{t.appointmentCta.form.consultationOptions.hypertension}</option>
                                            <option>{t.appointmentCta.form.consultationOptions.followup}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.location}</label>
                                        <input
                                            type="text"
                                            placeholder={t.appointmentCta.form.locationPlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.concern}</label>
                                    <textarea
                                        rows={3}
                                        placeholder={t.appointmentCta.form.concernPlaceholder}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 resize-none min-h-[80px]"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-xl shadow transition text-base min-h-[48px] flex items-center justify-center"
                                    >
                                        {t.appointmentCta.form.submitButton}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Professional Medical Image */}
                    <div className="lg:col-span-5 relative h-full min-h-[500px] lg:min-h-[700px] w-full hidden lg:block overflow-hidden">
                        <Image
                            src="/appointment.png"
                            alt="Doctor Consultation"
                            fill
                            sizes="(max-width: 1024px) 100vw, 500px"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-8">
                            <div className="text-white space-y-1">
                                <p className="text-xl font-bold">{t.appointmentCta.bannerTitle}</p>
                                <p className="text-xs text-slate-200">{t.appointmentCta.bannerSubtitle}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}