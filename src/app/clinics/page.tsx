// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import ScrollReveal from '@/components/ui/ScrollReveal';

// export default function ClinicsPage() {
//   const galleryImages = [
//     {
//       url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
//       title: "Galaxy Hospital & Advanced Healthcare Units",
//       location: "Barrackpur & Shyamnagar"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
//       title: "Kidney Suraksha Specialist & Diagnostic Center",
//       location: "Barasat"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
//       title: "Sustho Clinic Consultation Chamber",
//       location: "Phoolbagan, Kolkata"
//     },
//     {
//       url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
//       title: "Advanced Renal Care & Regional Attachments",
//       location: "West Bengal Chambers"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide effect every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [galleryImages.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="bg-slate-50 min-h-screen">

//       {/* Header Section */}
//       <section className="py-10 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
//         <ScrollReveal>
//           <div className="space-y-3 sm:space-y-4">
//             <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-blue-200 shadow-sm animate-pulse">
//               Chambers & Hospital Attachments
//             </span>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
//               Clinic Locations & Schedule
//             </h1>
//             <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
//               Consult Dr. Sourav Sarkar across premier hospital attachments, medical centers, and regional chambers spanning Kolkata, North 24 Parganas, Howrah, Hooghly, Bankura, and Burdwan.
//             </p>
//           </div>
//         </ScrollReveal>
//       </section>

//       {/* Interactive Auto-Sliding Chamber Photo Carousel */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-14">
//         <ScrollReveal>
//           <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 h-48 min-[400px]:h-56 sm:h-72 md:h-80 lg:h-96 group transition-all duration-300">
//             <Image
//               src={galleryImages[currentIndex].url}
//               alt={galleryImages[currentIndex].title}
//               fill
//               sizes="(max-width: 1200px) 100vw, 1200px"
//               priority
//               className="object-cover object-center transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

//             {/* Caption Overlay */}
//             <div className="absolute bottom-3 left-3 right-12 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1 sm:space-y-1.5 z-10">
//               <span className="inline-block bg-blue-600 text-white text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow">
//                 {galleryImages[currentIndex].location}
//               </span>
//               <h3 className="text-sm min-[400px]:text-base sm:text-xl lg:text-2xl font-extrabold pt-0.5 sm:pt-1 text-white drop-shadow leading-snug line-clamp-2">
//                 {galleryImages[currentIndex].title}
//               </h3>
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md text-xs sm:text-base font-bold border border-white/20 z-20"
//               aria-label="Previous Image"
//             >
//               &#10094;
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md text-xs sm:text-base font-bold border border-white/20 z-20"
//               aria-label="Next Image"
//             >
//               &#10095;
//             </button>

//             {/* Pagination Indicators */}
//             <div className="absolute bottom-5 right-5 hidden sm:flex space-x-2 z-20">
//               {galleryImages.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`h-2 rounded-full transition-all duration-500 ${currentIndex === idx ? 'bg-blue-500 w-6' : 'bg-white/40 hover:bg-white w-2'}`}
//                   aria-label={`Slide ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </ScrollReveal>
//       </section>

//       {/* Regional Clinics & Hospital Attachments Grid */}
//       <section className="py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

//           {/* Region 1: Barrackpur & Shyamnagar */}
//           <ScrollReveal className="h-full">
//             <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-blue-600">
//               <div className="space-y-3.5 sm:space-y-4">
//                 <span className="inline-block bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
//                   Primary Hub
//                 </span>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">Barrackpur & Shyamnagar</h3>
//                   <p className="text-slate-500 text-xs sm:text-sm">Galaxy Super, Galaxy Multi, Galaxy Christian</p>
//                 </div>

//                 <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
//                   <p><strong className="text-slate-900">Attachments:</strong> Galaxy Super Specialty, Galaxy Multi-specialty & Galaxy Christian Hospital</p>
//                   <p><strong className="text-slate-900">Focus:</strong> Regular chamber consultations, critical renal care & dialysis oversight.</p>
//                 </div>

//                 {/* Map Preview */}
//                 <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
//                   <iframe
//                     title="Barrackpur Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.1!2d88.375!3d22.755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59b2522564e90137!2sGalaxy+Multispeciality+Hospital!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                   ></iframe>
//                 </div>
//               </div>

//               <Link
//                 href="/contacts"
//                 className="block w-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
//               >
//                 Inquire Slots &rarr;
//               </Link>
//             </div>
//           </ScrollReveal>

//           {/* Region 2: Barasat */}
//           <ScrollReveal className="h-full">
//             <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-emerald-600">
//               <div className="space-y-3.5 sm:space-y-4">
//                 <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
//                   Specialist Center
//                 </span>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">Barasat Chambers</h3>
//                   <p className="text-slate-500 text-xs sm:text-sm">HMS Hospital & Kidney Surakhsha</p>
//                 </div>

//                 <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
//                   <p><strong className="text-slate-900">Centers:</strong> HMS Hospital & Kidney Surakhsha Specialist Center</p>
//                   <p><strong className="text-slate-900">Specialty:</strong> Nephrology evaluation, hypertension & stone prevention counseling.</p>
//                 </div>

//                 {/* Map Preview */}
//                 <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
//                   <iframe
//                     title="Barasat Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1!2d88.48!3d22.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3c1d3677779%3A0x46075fb441b5d510!2sBarasat!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                   ></iframe>
//                 </div>
//               </div>

//               <Link
//                 href="/contacts"
//                 className="block w-full bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
//               >
//                 Inquire Slots &rarr;
//               </Link>
//             </div>
//           </ScrollReveal>

//           {/* Region 3: North 24 Parganas */}
//           <ScrollReveal className="h-full">
//             <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-cyan-600">
//               <div className="space-y-3.5 sm:space-y-4">
//                 <span className="inline-block bg-cyan-50 text-cyan-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-200">
//                   North 24 Parganas
//                 </span>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">Bangaon, Naihati & Kalyani</h3>
//                   <p className="text-slate-500 text-xs sm:text-sm">Includes Apollo Incharge Attachments</p>
//                 </div>

//                 <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
//                   <p><strong className="text-slate-900">Locations:</strong> Bangaon, Naihati, and Kalyani (Apollo Incharge)</p>
//                   <p><strong className="text-slate-900">Access:</strong> Outstation patient consultations and specialized diagnostic coordination.</p>
//                 </div>

//                 {/* Map Preview */}
//                 <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
//                   <iframe
//                     title="Kalyani Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.0!2d88.43!3d22.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKalyani!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                   ></iframe>
//                 </div>
//               </div>

//               <Link
//                 href="/contacts"
//                 className="block w-full bg-slate-50 hover:bg-cyan-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
//               >
//                 Inquire Slots &rarr;
//               </Link>
//             </div>
//           </ScrollReveal>

//           {/* Region 4: Howrah & Amta / Uluberia */}
//           <ScrollReveal className="h-full">
//             <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-indigo-600">
//               <div className="space-y-3.5 sm:space-y-4">
//                 <span className="inline-block bg-indigo-50 text-indigo-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-200">
//                   Howrah Region
//                 </span>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">Udaynarayanpur, Amta & Uluberia</h3>
//                   <p className="text-slate-500 text-xs sm:text-sm">Howrah District Chambers</p>
//                 </div>

//                 <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
//                   <p><strong className="text-slate-900">Coverage:</strong> Udaynarayanpur, Amta, and Uluberia chambers</p>
//                   <p><strong className="text-slate-900">Affiliation:</strong> Also attached with Lions Club - Uluberia for community health initiatives.</p>
//                 </div>

//                 {/* Map Preview */}
//                 <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
//                   <iframe
//                     title="Uluberia Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.11!3d22.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUluberia!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                   ></iframe>
//                 </div>
//               </div>

//               <Link
//                 href="/contacts"
//                 className="block w-full bg-slate-50 hover:bg-indigo-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
//               >
//                 Inquire Slots &rarr;
//               </Link>
//             </div>
//           </ScrollReveal>

//           {/* Region 5: Hooghly */}
//           <ScrollReveal className="h-full">
//             <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-amber-500">
//               <div className="space-y-3.5 sm:space-y-4">
//                 <span className="inline-block bg-amber-50 text-amber-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200">
//                   Hooghly Region
//                 </span>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">Chandannagar, Chuchura & Tarakeshwar</h3>
//                   <p className="text-slate-500 text-xs sm:text-sm">Hooghly District Chambers</p>
//                 </div>

//                 <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
//                   <p><strong className="text-slate-900">Locations:</strong> Chandannagar, Chuchura, and Tarakeshwar</p>
//                   <p><strong className="text-slate-900">Schedule:</strong> Regular periodic consultation visits for regional renal patients.</p>
//                 </div>

//                 {/* Map Preview */}
//                 <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
//                   <iframe
//                     title="Chuchura Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0!2d88.39!3d22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChinsurah!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                   ></iframe>
//                 </div>
//               </div>

//               <Link
//                 href="/contacts"
//                 className="block w-full bg-slate-50 hover:bg-amber-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
//               >
//                 Inquire Slots &rarr;
//               </Link>
//             </div>
//           </ScrollReveal>

//           {/* Region 6: Burdwan Area */}
//           <ScrollReveal className="h-full">
//             <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-purple-600">
//               <div className="space-y-3.5 sm:space-y-4">
//                 <span className="inline-block bg-purple-50 text-purple-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-purple-200">
//                   Burdwan Hub
//                 </span>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">Burdwan Area Chambers</h3>
//                   <p className="text-slate-500 text-xs sm:text-sm">Kalna, Katwa & Memari</p>
//                 </div>

//                 <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
//                   <p><strong className="text-slate-900">Chambers:</strong> Kalna, Katwa, and Memari region</p>
//                   <p><strong className="text-slate-900">Specialty:</strong> Specialized nephrology & internal medicine consultations.</p>
//                 </div>

//                 {/* Map Preview */}
//                 <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
//                   <iframe
//                     title="Burdwan Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d87.85!3d23.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBardhaman!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                   ></iframe>
//                 </div>
//               </div>

//               <Link
//                 href="/contacts"
//                 className="block w-full bg-slate-50 hover:bg-purple-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
//               >
//                 Inquire Slots &rarr;
//               </Link>
//             </div>
//           </ScrollReveal>

//           {/* Region 7: Bankura Area */}
//           <ScrollReveal className="h-full md:col-span-2 lg:col-span-1">
//             <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-rose-600">
//               <div className="space-y-3.5 sm:space-y-4">
//                 <span className="inline-block bg-rose-50 text-rose-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-rose-200">
//                   Bankura Hub
//                 </span>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">Bankura Area Chambers</h3>
//                   <p className="text-slate-500 text-xs sm:text-sm">Anamoy Hospital & Bankura Nursing Home</p>
//                 </div>

//                 <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
//                   <p><strong className="text-slate-900">Locations:</strong> Anamoy Hospital & Bankura Nursing Home</p>
//                   <p><strong className="text-slate-900">Access:</strong> Outstation clinical visits and renal health screenings.</p>
//                 </div>

//                 {/* Map Preview */}
//                 <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
//                   <iframe
//                     title="Bankura Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.0!2d87.06!3d23.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBankura!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                   ></iframe>
//                 </div>
//               </div>

//               <Link
//                 href="/contacts"
//                 className="block w-full bg-slate-50 hover:bg-rose-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
//               >
//                 Inquire Slots &rarr;
//               </Link>
//             </div>
//           </ScrollReveal>





//         </div>
//       </section>

//       {/* Footer CTA */}
//       <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 py-12 sm:py-16 text-white text-center px-4 relative overflow-hidden">
//         <ScrollReveal>
//           <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6 relative z-10">
//             <h2 className="text-2xl sm:text-3xl font-extrabold px-2">Have questions about appointment slots or fees across these regions?</h2>
//             <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-0">
//               Get in touch with the reception desk or drop an inquiry to secure your preferred consultation slot.
//             </p>
//             <div>
//               <Link
//                 href="/contacts"
//                 className="inline-block w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl shadow-xl transition transform hover:-translate-y-1 text-sm sm:text-base"
//               >
//                 Contact Reception Desk &rarr;
//               </Link>
//             </div>
//           </div>
//         </ScrollReveal>
//       </section>

//     </div>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ClinicsPage() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      title: "Galaxy Hospital & Advanced Healthcare Units",
      location: "Barrackpur & Shyamnagar"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      title: "Kidney Suraksha Specialist & Diagnostic Center",
      location: "Barasat"
    },
    {
      url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      title: "Sustho Clinic Consultation Chamber",
      location: "Phoolbagan, Kolkata"
    },
    {
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      title: "Advanced Renal Care & Regional Attachments",
      location: "West Bengal Chambers"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Header Section */}
      <section className="py-10 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
        <ScrollReveal>
          <div className="space-y-3 sm:space-y-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-blue-200 shadow-sm animate-pulse">
              Chambers & Hospital Attachments
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Clinic Locations & Schedule
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Consult Dr. Sourav Sarkar across premier hospital attachments, medical centers, and regional chambers spanning Kolkata, North 24 Parganas, Howrah, Hooghly, Bankura, and Burdwan.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Auto-Sliding Chamber Photo Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-14">
        <ScrollReveal>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 h-48 min-[400px]:h-56 sm:h-72 md:h-80 lg:h-96 group transition-all duration-300">
            <Image
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover object-center transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

            {/* Caption Overlay */}
            <div className="absolute bottom-3 left-3 right-12 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1 sm:space-y-1.5 z-10">
              <span className="inline-block bg-blue-600 text-white text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow">
                {galleryImages[currentIndex].location}
              </span>
              <h3 className="text-sm min-[400px]:text-base sm:text-xl lg:text-2xl font-extrabold pt-0.5 sm:pt-1 text-white drop-shadow leading-snug line-clamp-2">
                {galleryImages[currentIndex].title}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md text-xs sm:text-base font-bold border border-white/20 z-20"
              aria-label="Previous Image"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md text-xs sm:text-base font-bold border border-white/20 z-20"
              aria-label="Next Image"
            >
              &#10095;
            </button>

            {/* Pagination Indicators */}
            <div className="absolute bottom-5 right-5 hidden sm:flex space-x-2 z-20">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${currentIndex === idx ? 'bg-blue-500 w-6' : 'bg-white/40 hover:bg-white w-2'}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Regional Clinics & Hospital Attachments Grid */}
      <section className="py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Region 1: Barrackpur & Shyamnagar */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-blue-600">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
                  Primary Hub
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Barrackpur & Shyamnagar</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Galaxy Super, Galaxy Multi, Galaxy Christian</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Attachments:</strong> Galaxy Super Specialty, Galaxy Multi-specialty & Galaxy Christian Hospital</p>
                  <p><strong className="text-slate-900">Focus:</strong> Regular chamber consultations, critical renal care & dialysis oversight.</p>
                </div>

                {/* Map Preview */}
                <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Barrackpur Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.1!2d88.375!3d22.755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59b2522564e90137!2sGalaxy+Multispeciality+Hospital!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire Slots &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Region 2: Barasat */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-emerald-600">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                  Specialist Center
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Barasat Chambers</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">HMS Hospital & Kidney Surakhsha</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Centers:</strong> HMS Hospital & Kidney Surakhsha Specialist Center</p>
                  <p><strong className="text-slate-900">Specialty:</strong> Nephrology evaluation, hypertension & stone prevention counseling.</p>
                </div>

                {/* Map Preview */}
                <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Barasat Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1!2d88.48!3d22.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3c1d3677779%3A0x46075fb441b5d510!2sBarasat!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire Slots &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Region 3: North 24 Parganas */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-cyan-600">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-cyan-50 text-cyan-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-200">
                  North 24 Parganas
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Bangaon, Naihati & Kalyani</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Includes Apollo Incharge Attachments</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Locations:</strong> Bangaon, Naihati, and Kalyani (Apollo Incharge)</p>
                  <p><strong className="text-slate-900">Access:</strong> Outstation patient consultations and specialized diagnostic coordination.</p>
                </div>

                {/* Map Preview */}
                <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Kalyani Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.0!2d88.43!3d22.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKalyani!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-cyan-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire Slots &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Region 4: Howrah & Amta / Uluberia */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-indigo-600">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-indigo-50 text-indigo-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-200">
                  Howrah Region
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Udaynarayanpur, Amta & Uluberia</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Howrah District Chambers</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Coverage:</strong> Udaynarayanpur, Amta, and Uluberia chambers</p>
                  <p><strong className="text-slate-900">Affiliation:</strong> Also attached with Lions Club - Uluberia for community health initiatives.</p>
                </div>

                {/* Map Preview */}
                <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Uluberia Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.11!3d22.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUluberia!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-indigo-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire Slots &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Region 5: Hooghly */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-amber-500">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-amber-50 text-amber-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200">
                  Hooghly Region
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Chandannagar, Chuchura & Tarakeshwar</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Hooghly District Chambers</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Locations:</strong> Chandannagar, Chuchura, and Tarakeshwar</p>
                  <p><strong className="text-slate-900">Schedule:</strong> Regular periodic consultation visits for regional renal patients.</p>
                </div>

                {/* Map Preview */}
                <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Chuchura Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0!2d88.39!3d22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChinsurah!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-amber-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire Slots &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Region 6: Burdwan Area */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-purple-600">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-purple-50 text-purple-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-purple-200">
                  Burdwan Hub
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Burdwan Area Chambers</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Kalna, Katwa & Memari</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Chambers:</strong> Kalna, Katwa, and Memari region</p>
                  <p><strong className="text-slate-900">Specialty:</strong> Specialized nephrology & internal medicine consultations.</p>
                </div>

                {/* Map Preview */}
                <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Burdwan Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d87.85!3d23.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBardhaman!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-purple-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire Slots &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Region 7: Bankura Area (Updated with Anamoy Hospital precise search query) */}
          <ScrollReveal className="h-full md:col-span-2 lg:col-span-1">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border-l-4 border-l-rose-600">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-rose-50 text-rose-700 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-rose-200">
                  Bankura Hub
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Bankura Area Chambers</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Anamoy Hospital & Bankura Nursing Home</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Locations:</strong> Anamoy Hospital & Bankura Nursing Home</p>
                  <p><strong className="text-slate-900">Access:</strong> Outstation clinical visits and renal health screenings.</p>
                </div>

                {/* Map Preview centered directly on Anamoy Hospital / Bankura Nursing Home area */}
                <div className="h-36 w-full rounded-xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Bankura Nursing Home Map"
                    src="https://maps.google.com/maps?q=Bankura+Nursing+Home,+Patpur+Rd,+Bankura&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-rose-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire Slots &rarr;
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 py-12 sm:py-16 text-white text-center px-4 relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold px-2">Have questions about appointment slots or fees across these regions?</h2>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-0">
              Get in touch with the reception desk or drop an inquiry to secure your preferred consultation slot.
            </p>
            <div>
              <Link
                href="/contacts"
                className="inline-block w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl shadow-xl transition transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Contact Reception Desk &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}