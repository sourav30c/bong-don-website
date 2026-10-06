'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50/50 min-h-screen">
      {/* Header Section */}
      <section className="py-8 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
        <ScrollReveal>
          <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200 shadow-sm mb-2 sm:mb-3">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Contact & Appointment Enquiry
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mt-2 sm:mt-3 px-2 sm:px-0">
            Reach out directly to book a consultation, check clinic availability, or send an enquiry regarding your medical reports.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Content Grid */}
      <section className="pb-12 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">

          {/* Left Column: Direct Contact Info & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Contact Card */}
            <ScrollReveal>
              <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Direct Contact</h2>
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 text-sm text-slate-600">
                  {/* Phone */}
                  <a 
                    href="tel:+918240948974" 
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 -mx-2 sm:-mx-3.5 rounded-xl sm:rounded-2xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-sm">
                      📞
                    </div>
                    <div className="flex-1 min-w-0">
                      <strong className="text-slate-900 block group-hover:text-blue-600 transition-colors">Call Us</strong>
                      <span className="text-slate-700 font-medium block text-sm sm:text-base">+91 824 094 8974</span>
                      <span className="block text-xs text-slate-400 mt-0.5">Mon – Sat, 10:00 AM – 7:00 PM</span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/918240948974" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 -mx-2 sm:-mx-3.5 rounded-xl sm:rounded-2xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 shadow-sm">
                      💬
                    </div>
                    <div className="flex-1 min-w-0">
                      <strong className="text-slate-900 block group-hover:text-emerald-600 transition-colors">WhatsApp Assistance</strong>
                      <span className="text-slate-700 font-medium block text-xs sm:text-sm">Instant chat & appointment desk</span>
                      <span className="block text-[11px] sm:text-xs text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Quick response guaranteed
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:contact@drsouravsarkar.com" 
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-3.5 -mx-2 sm:-mx-3.5 rounded-xl sm:rounded-2xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200 shadow-sm">
                      ✉️
                    </div>
                    <div className="flex-1 min-w-0">
                      <strong className="text-slate-900 block group-hover:text-purple-600 transition-colors">Email Support</strong>
                      <span className="text-slate-700 font-medium block text-xs sm:text-sm break-all sm:break-normal">contact@drsouravsarkar.com</span>
                      <span className="block text-xs text-slate-400 mt-0.5">Send reports & clinical queries</span>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Embedded Google Map Card */}
            <ScrollReveal>
              <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-all duration-300">
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Chamber Location Map</h3>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">Kolkata Region</span>
                </div>
                <div className="w-full h-56 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
                  <iframe
                    title="Dr Sourav Sarkar Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.36389!3d22.57264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe02b469cf10f5cfd!2sDr+Sourav+Sarkar!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full transition-all duration-300"
                  ></iframe>
                </div>
                <div className="text-center pt-1">
                  <a 
                    href="https://google.com/maps/place/Dr+Sourav+Sarkar/data=!4m2!3m1!1s0x0:0xe02b469cf10f5cfd?sa=X&ved=1t:2428&ictx=111" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    View larger map / Get directions &rarr;
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Interactive Appointment & Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 hover:shadow-md transition-all duration-300">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Send an Enquiry</h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">Fill out the form below to schedule your visit or ask a clinical query. Our team will get back to you shortly.</p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center space-y-4 transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl sm:text-2xl">
                      ✓
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold">Appointment Request Received!</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you. Our receptionist desk will review your submission and call you shortly to confirm your preferred chamber slot.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-emerald-700 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">First Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="First Name" 
                          className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Last Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Last Name" 
                          className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Email</label>
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Phone Number *</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="10-digit Phone Number" 
                          className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Select Gender</label>
                        <select className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300 cursor-pointer">
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Preferred Date *</label>
                        <input 
                          type="date" 
                          required 
                          className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Select Consultation Type</label>
                        <select className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300 cursor-pointer">
                          <option>General Consultation</option>
                          <option>Chronic Kidney Disease (CKD)</option>
                          <option>Dialysis Management</option>
                          <option>Transplant Evaluation</option>
                          <option>High BP & Electrolyte Issues</option>
                          <option>Follow-Up Appointment</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Your Location</label>
                        <input 
                          type="text" 
                          placeholder="City / Area" 
                          className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Tell us about your concern... *</label>
                      <textarea 
                        rows={3} 
                        required 
                        placeholder="Mention brief medical history or symptoms..." 
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-sm bg-white text-slate-800 hover:border-slate-300 resize-none min-h-[90px]"
                      ></textarea>
                    </div>

                    <div>
                      <button 
                        type="submit" 
                        className="w-full min-h-[48px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 sm:py-3.5 px-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2 group"
                      >
                        <span>Book Appointment / Submit Enquiry</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
}