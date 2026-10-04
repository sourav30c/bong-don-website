// 'use client';

// export default function ContactPage() {
//   return (
//     <div>
//       {/* Header Section */}
//       <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
//         <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
//           Get in Touch
//         </span>
//         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
//           Contact & Appointment Enquiry
//         </h1>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//           Reach out directly to book a consultation, check clinic availability, or send an enquiry regarding your medical reports.
//         </p>
//       </section>

//       {/* Main Content Grid */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

//           {/* Left Column: Direct Contact Info & Embedded Map */}
//           <div className="lg:col-span-5 space-y-6">

//             {/* Quick Contact Card */}
//             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
//               <h2 className="text-2xl font-bold text-slate-900">Direct Contact</h2>

//               <div className="space-y-4 text-sm text-slate-600">
//                 <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
//                   <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
//                     📞
//                   </div>
//                   <div>
//                     <strong className="text-slate-900 block">Call Us</strong>
//                     <span className="text-slate-600">+91 824 094 8974</span>
//                     <span className="block text-xs text-slate-400">Mon – Sat, 10:00 AM – 7:00 PM</span>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
//                   <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
//                     💬
//                   </div>
//                   <div>
//                     <strong className="text-slate-900 block">WhatsApp Assistance</strong>
//                     <span className="text-slate-600">Instant chat & appointment desk</span>
//                     <span className="block text-xs text-emerald-600 font-semibold">Quick response guaranteed</span>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold flex-shrink-0">
//                     ✉️
//                   </div>
//                   <div>
//                     <strong className="text-slate-900 block">Email Support</strong>
//                     <span className="text-slate-600">contact@drsouravsarkar.com</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Embedded Google Map Card */}
//             <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
//               <h3 className="text-lg font-bold text-slate-900">Chamber Location Map</h3>
//               <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200">
//                 <iframe
//                   title="Dr Sourav Sarkar Location Map"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.36389!3d22.57264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe02b469cf10f5cfd!2sDr+Sourav+Sarkar!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen={false}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//               <div className="text-center">
//                 <a 
//                   href="https://google.com/maps/place/Dr+Sourav+Sarkar/data=!4m2!3m1!1s0x0:0xe02b469cf10f5cfd?sa=X&ved=1t:2428&ictx=111" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="text-xs font-semibold text-blue-600 hover:underline"
//                 >
//                   View larger map / Get directions &rarr;
//                 </a>
//               </div>
//             </div>

//           </div>

//           {/* Right Column: Interactive Enquiry Form */}
//           <div className="lg:col-span-7">
//             <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-slate-900">Send an Enquiry</h2>
//                 <p className="text-slate-600 text-sm mt-1">Fill out the form below to request a slot or ask a clinical query. Our team will get back to you shortly.</p>
//               </div>

//               <form onSubmit={(e) => { e.preventDefault(); alert('Enquiry submitted successfully! Our team will contact you soon.'); }} className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-1.5">
//                     <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">Full Name *</label>
//                     <input 
//                       type="text" 
//                       required 
//                       placeholder="Enter your name" 
//                       className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
//                     />
//                   </div>
//                   <div className="space-y-1.5">
//                     <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">Phone Number *</label>
//                     <input 
//                       type="tel" 
//                       required 
//                       placeholder="10-digit mobile number" 
//                       className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-1.5">
//                     <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">Email Address</label>
//                     <input 
//                       type="email" 
//                       placeholder="name@example.com" 
//                       className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
//                     />
//                   </div>
//                   <div className="space-y-1.5">
//                     <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">Select Preferred Chamber *</label>
//                     <select 
//                       required 
//                       className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white"
//                     >
//                       <option value="">Select location...</option>
//                       <option value="barrackpur">Galaxy Hospital, Barrackpur</option>
//                       <option value="barasat">Kidney Suraksha Center, Barasat</option>
//                       <option value="phoolbagan">Sustho Clinic, Phoolbagan</option>
//                       <option value="burdwan-chuchura">Burdwan / Chuchura (Sunday)</option>
//                       <option value="general">General Online Query</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="space-y-1.5">
//                   <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">Message / Medical Query *</label>
//                   <textarea 
//                     rows={4} 
//                     required 
//                     placeholder="Mention your preferred date or details about your medical condition..." 
//                     className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm resize-none"
//                   ></textarea>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl shadow transition text-center"
//                 >
//                   Submit Enquiry & Request Callback
//                 </button>
//               </form>
//             </div>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }


'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Contact & Appointment Enquiry
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Reach out directly to book a consultation, check clinic availability, or send an enquiry regarding your medical reports.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Info & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Contact Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Direct Contact</h2>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Call Us</strong>
                    <span className="text-slate-600">+91 824 094 8974</span>
                    <span className="block text-xs text-slate-400">Mon – Sat, 10:00 AM – 7:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <strong className="text-slate-900 block">WhatsApp Assistance</strong>
                    <span className="text-slate-600">Instant chat & appointment desk</span>
                    <span className="block text-xs text-emerald-600 font-semibold">Quick response guaranteed</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Email Support</strong>
                    <span className="text-slate-600">contact@drsouravsarkar.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Chamber Location Map</h3>
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="Dr Sourav Sarkar Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.36389!3d22.57264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe02b469cf10f5cfd!2sDr+Sourav+Sarkar!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center">
                <a
                  href="https://google.com/maps/place/Dr+Sourav+Sarkar/data=!4m2!3m1!1s0x0:0xe02b469cf10f5cfd?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  View larger map / Get directions &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Appointment & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Send an Enquiry</h2>
                <p className="text-slate-600 text-sm mt-1">Fill out the form below to schedule your visit or ask a clinical query. Our team will get back to you shortly.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3">
                  <h4 className="text-xl font-bold">Appointment Request Received!</h4>
                  <p className="text-sm">Thank you. Our receptionist desk will call you shortly to confirm your chamber slot.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Last Name *</label>
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
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Phone Number *</label>
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
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Preferred Date *</label>
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
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">Tell us about your concern... *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Mention brief medical history or symptoms..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm bg-white text-slate-800 resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow transition text-base"
                    >
                      Book Appointment / Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}