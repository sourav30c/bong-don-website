'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';
import { SITE_CONTACT } from '@/config/contact';

export default function AppointmentCtaSection() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        preferredDate: '',
        consultationType: '',
        location: '',
        concern: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
        const message = `🏥 *NEW APPOINTMENT / CONSULTATION ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
👤 *Patient Name:* ${fullName || 'Not specified'}
📞 *Phone Number:* ${formData.phone.trim()}
${formData.email.trim() ? `📧 *Email:* ${formData.email.trim()}\n` : ''}${formData.gender && !formData.gender.includes('Select') ? `🚻 *Gender:* ${formData.gender}\n` : ''}📅 *Preferred Date:* ${formData.preferredDate || 'Earliest available'}
${formData.consultationType && !formData.consultationType.includes('Select') ? `🩺 *Consultation Type:* ${formData.consultationType}\n` : ''}${formData.location.trim() ? `📍 *Location:* ${formData.location.trim()}\n` : ''}📝 *Concern / Symptoms:*
${formData.concern.trim() || 'General appointment request'}
━━━━━━━━━━━━━━━━━━━━
_Sent via Dr. Sourav Sarkar's Website_`;

        const targetUrl = SITE_CONTACT.whatsapp.getUrl(message);
        setLastWhatsAppUrl(targetUrl);
        setSubmitted(true);

        if (typeof window !== 'undefined') {
            window.open(targetUrl, '_blank');
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
            preferredDate: '',
            consultationType: '',
            location: '',
            concern: ''
        });
        setSubmitted(false);
        setLastWhatsAppUrl('');
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
                            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 sm:p-8 rounded-2xl text-center space-y-4">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                                    ✓
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold">{t.appointmentCta.receivedTitle}</h4>
                                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                                    Your appointment details have been prepared and WhatsApp opened to send directly to Dr. Sourav Sarkar&apos;s desk ({SITE_CONTACT.phone.display}).
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                                    {lastWhatsAppUrl && (
                                        <a
                                            href={lastWhatsAppUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2 shadow-sm"
                                        >
                                            <span>💬 Open WhatsApp Chat</span>
                                        </a>
                                    )}
                                    <button
                                        onClick={handleReset}
                                        className="px-5 py-2.5 bg-white border border-emerald-300 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold hover:bg-emerald-100/60 transition min-h-[44px]"
                                    >
                                        {t.appointmentCta.submitAnother}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.firstName}</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            placeholder={t.appointmentCta.form.firstNamePlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.lastName}</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t.appointmentCta.form.emailPlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.phone}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder={t.appointmentCta.form.phonePlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.gender}</label>
                                        <select 
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        >
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
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.consultationType}</label>
                                        <select 
                                            name="consultationType"
                                            value={formData.consultationType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        >
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
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder={t.appointmentCta.form.locationPlaceholder}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 min-h-[44px]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">{t.appointmentCta.form.concern}</label>
                                    <textarea
                                        rows={3}
                                        name="concern"
                                        value={formData.concern}
                                        onChange={handleChange}
                                        placeholder={t.appointmentCta.form.concernPlaceholder}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 resize-none min-h-[80px]"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3.5 rounded-xl shadow transition text-base min-h-[48px] flex items-center justify-center gap-2 group cursor-pointer"
                                    >
                                        <span>💬 {t.appointmentCta.form.submitButton} via WhatsApp</span>
                                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </button>
                                    <p className="text-[11px] text-center text-slate-400 mt-2">
                                        Direct connection to Dr. Sourav Sarkar&apos;s appointment desk ({SITE_CONTACT.phone.display})
                                    </p>
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