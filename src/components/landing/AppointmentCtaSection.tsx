'use client';

import { useState } from 'react';

export default function AppointmentCtaSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-20 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm">

                    {/* Left Column: Booking Form */}
                    <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Book an Appointment</h2>
                            <p className="text-slate-600 text-sm">Schedule your visit with Dr. Sourav Sarkar for expert nephrology care.</p>
                        </div>

                        {submitted ? (
                            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3">
                                <h4 className="text-xl font-bold">Appointment Request Received!</h4>
                                <p className="text-sm">Thank you. Our receptionist desk will call you shortly to confirm your slot.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition"
                                >
                                    Book Another Appointment
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="First Name"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Last Name"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Email</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Select Gender</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800">
                                            <option>Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Preferred Date</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Select Consultation Type</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800">
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
                                            placeholder="Your Location"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Tell us about your concern...</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Mention brief medical history or symptoms..."
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 resize-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-xl shadow transition text-base"
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Right Column: Professional Medical Image (Using standard <img> to bypass domain restriction) */}
                    <div className="lg:col-span-5 relative h-full min-h-[500px] lg:min-h-[700px] w-full hidden lg:block overflow-hidden">
                        <img
                            src="/appointment.png"
                            //src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                            alt="Doctor Consultation"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-8">
                            <div className="text-white space-y-1">
                                <p className="text-xl font-bold">Compassionate Renal Care</p>
                                <p className="text-xs text-slate-200">Direct consultation bookings with verified clinic schedules.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}