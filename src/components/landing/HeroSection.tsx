// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const slides = [
//     {
//         id: 1,
//         credentials: "Gold Medalist • DM Nephrology & MD Medicine",
//         title: "Advanced Renal Care & Internal Medicine",
//         subtitle: "Super Specialist Doctor dedicated to comprehensive kidney health, chronic disease management, and patient education on BongDoc.",
//         doctorImage: "/LandingProfImage.jpg",
//     },
//     {
//         id: 2,
//         credentials: "MBBS (Hons) | MD (Medicine) | DM (Nephrology)",
//         title: "Dr. Sourav Sarkar",
//         subtitle: "Clinical Lead & Kidney Transplant Physician offering expert care in Dialysis, Renal Transplants, and Hypertension.",
//         doctorImage: "/LandingProfImage.jpg",
//     },
//     {
//         id: 3,
//         credentials: "Director of Nephrology & Dialysis",
//         title: "Comprehensive Kidney & Dialysis Care",
//         subtitle: "State-of-the-art management for acute kidney injury, glomerular disorders, and long-term renal replacement therapy.",
//         doctorImage: "/LandingProfImage.jpg",
//     },
// ];

// export default function HeroSection() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     // Auto-slide effect every 6 seconds
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 6000);
//         return () => clearInterval(timer);
//     }, []);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     return (
//         <section className="relative w-full overflow-hidden text-white bg-slate-950">
//             {/* Background Overlay */}
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/80 z-10"></div>
//                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] z-10"></div>
//             </div>

//             {/* Carousel Track Container */}
//             <div className="relative z-25 overflow-hidden w-full">
//                 <div
//                     className="flex transition-transform duration-700 ease-in-out w-full"
//                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                 >
//                     {slides.map((slide) => (
//                         <div key={slide.id} className="w-full flex-shrink-0 flex items-center">
//                             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 min-h-[580px] lg:min-h-[640px] flex items-center">

//                                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

//                                     {/* Left Text Content */}
//                                     <div className="lg:col-span-7 space-y-6">
//                                         <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-blue-400/30">
//                                             <span>{slide.credentials}</span>
//                                         </div>

//                                         <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]">
//                                             {slide.title}
//                                         </h1>

//                                         <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
//                                             {slide.subtitle}
//                                         </p>

//                                         {/* CTA Buttons */}
//                                         <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                                             <Link
//                                                 href="/contacts"
//                                                 className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg text-center transition flex items-center justify-center gap-2"
//                                             >
//                                                 Book Consultation
//                                             </Link>
//                                             <Link
//                                                 href="/clinics"
//                                                 className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium px-8 py-3.5 rounded-xl border border-white/30 text-center transition flex items-center justify-center"
//                                             >
//                                                 View Chambers & Timings
//                                             </Link>
//                                         </div>
//                                     </div>

//                                     {/* Right Doctor Image Preview */}
//                                     <div className="lg:col-span-5 flex justify-center">
//                                         <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">
//                                             <Image
//                                                 src={slide.doctorImage}
//                                                 alt="Dr. Sourav Sarkar"
//                                                 fill
//                                                 sizes="(max-width: 768px) 100vw, 400px"
//                                                 className="object-cover object-top"
//                                                 priority
//                                             />
//                                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
//                                                 <div>
//                                                     <p className="text-2xl font-bold text-white">Dr. Sourav Sarkar</p>
//                                                     <p className="text-xs text-blue-300 font-medium tracking-wider uppercase">DM Nephrology (Gold Medalist)</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>

//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Navigation Arrows */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-30 border border-white/10 hidden sm:flex items-center justify-center"
//                 aria-label="Previous Slide"
//             >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-30 border border-white/10 hidden sm:flex items-center justify-center"
//                 aria-label="Next Slide"
//             >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//             </button>

//             {/* Pagination Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/40 hover:bg-white'}`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>

//         </section>
//     );
// }

// import Image from 'next/image';
// import Link from 'next/link';

// export default function HeroSection() {
//     return (
//         <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50/40 to-indigo-50/60 pt-16 pb-24 lg:py-28 border-b border-slate-100">

//             {/* Background Decorative Glows */}
//             <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
//             <div className="absolute bottom-0 left-1/4 -z-10 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-3xl pointer-events-none"></div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//                     {/* Left Column: Headline, Subtext & CTA (Span 7) */}
//                     <div className="lg:col-span-7 space-y-8 text-left">

//                         {/* Top Pill Tag */}
//                         <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-sm">
//                             <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
//                             Gold Medalist • DM Nephrology & MD Medicine
//                         </div>

//                         {/* Main Title */}
//                         <div className="space-y-4">
//                             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
//                                 Advanced Renal Care & <span className="text-blue-700">Internal Medicine</span>
//                             </h1>
//                             <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
//                                 Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc.
//                             </p>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-wrap items-center gap-4 pt-2">
//                             <Link
//                                 href="#appointment"
//                                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
//                             >
//                                 Book Consultation &rarr;
//                             </Link>
//                             <Link
//                                 href="/about"
//                                 className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base shadow-sm"
//                             >
//                                 View Profile & Credentials
//                             </Link>
//                         </div>

//                         {/* Quick Trust Bar */}
//                         <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-xl">
//                             <div>
//                                 <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">10+</p>
//                                 <p className="text-xs text-slate-500 font-medium">Years Experience</p>
//                             </div>
//                             <div>
//                                 <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">9,000+</p>
//                                 <p className="text-xs text-slate-500 font-medium">Patients Treated</p>
//                             </div>
//                             <div>
//                                 <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">16K+</p>
//                                 <p className="text-xs text-slate-500 font-medium">BongDoc Followers</p>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Right Column: Blended Doctor Photo + Floating Credential Card (Span 5) */}
//                     <div className="lg:col-span-5 relative flex justify-center">

//                         {/* Luminous Glow Behind Photo */}
//                         <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-3xl blur-2xl transform rotate-3"></div>

//                         {/* Main Image Container (Clean Blended Style) */}
//                         <div className="relative w-full max-w-md h-[450px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
//                             <Image
//                                 src="/LandingProfImage.jpg"
//                                 alt="Dr. Sourav Sarkar - Consultant Nephrologist"
//                                 fill
//                                 sizes="(max-width: 768px) 100vw, 450px"
//                                 className="object-cover object-center transform hover:scale-105 transition duration-700"
//                                 priority
//                             />

//                             {/* Subtle Gradient Vignette at Bottom of Image for Text Contrast */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

//                             {/* Floating Glassmorphism Badge at Bottom */}
//                             <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-xl space-y-1">
//                                 <div className="flex items-center justify-between">
//                                     <h3 className="font-bold text-slate-900 text-base">Dr. Sourav Sarkar</h3>
//                                     <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">MRCP London</span>
//                                 </div>
//                                 <p className="text-xs text-blue-700 font-semibold">Consultant Nephrologist & Transplant Physician</p>
//                                 <p className="text-[11px] text-slate-500">DM Nephrology (SSKM Gold Medalist)</p>
//                             </div>

//                         </div>

//                     </div>

//                 </div>
//             </div>

//         </section>
//     );
// }

// import Image from 'next/image';
// import Link from 'next/link';

// export default function HeroSection() {
//     return (
//         <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50/50 to-indigo-50/80 pt-16 pb-24 lg:py-28 border-b border-slate-100">

//             {/* Background Soft Glows */}
//             <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
//             <div className="absolute bottom-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//                     {/* Left Column: Headline, Subtext & CTA (Span 7) */}
//                     <div className="lg:col-span-7 space-y-8 text-left">

//                         {/* Top Pill Tag */}
//                         <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200/60 shadow-sm">
//                             <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
//                             Gold Medalist • DM Nephrology & MD Medicine
//                         </div>

//                         {/* Main Title */}
//                         <div className="space-y-4">
//                             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
//                                 Advanced Renal Care & <span className="text-blue-700">Internal Medicine</span>
//                             </h1>
//                             <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
//                                 Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc.
//                             </p>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-wrap items-center gap-4 pt-2">
//                             <Link
//                                 href="#appointment"
//                                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
//                             >
//                                 Book Consultation &rarr;
//                             </Link>
//                             <Link
//                                 href="/about"
//                                 className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base shadow-sm"
//                             >
//                                 View Profile & Credentials
//                             </Link>
//                         </div>

//                         {/* Quick Trust Bar */}
//                         <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-xl">
//                             <div>
//                                 <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">10+</p>
//                                 <p className="text-xs text-slate-500 font-medium">Years Experience</p>
//                             </div>
//                             <div>
//                                 <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">9,000+</p>
//                                 <p className="text-xs text-slate-500 font-medium">Patients Treated</p>
//                             </div>
//                             <div>
//                                 <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">16K+</p>
//                                 <p className="text-xs text-slate-500 font-medium">BongDoc Followers</p>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Right Column: Seamlessly Blended Doctor Photo (Span 5) */}
//                     <div className="lg:col-span-5 relative flex justify-center lg:justify-end">

//                         {/* Ambient Background Glow */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-indigo-400/10 rounded-full blur-3xl transform scale-90"></div>

//                         {/* Image Wrapper (No Box, Blended Edges) */}
//                         <div className="relative w-full max-w-[420px] h-[480px] sm:h-[520px]">
//                             <Image
//                                 src="/LandingProfImage.jpg"
//                                 alt="Dr. Sourav Sarkar - Consultant Nephrologist"
//                                 fill
//                                 sizes="(max-width: 768px) 100vw, 420px"
//                                 className="object-cover object-top mask-image-gradient"
//                                 style={{
//                                     maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
//                                     WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
//                                 }}
//                                 priority
//                             />

//                             {/* Floating Glassmorphism Credential Badge Overlapping the Bottom */}
//                             <div className="absolute bottom-6 left-4 right-4 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 shadow-xl space-y-1">
//                                 <div className="flex items-center justify-between">
//                                     <h3 className="font-bold text-slate-900 text-base">Dr. Sourav Sarkar</h3>
//                                     <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">MRCP London</span>
//                                 </div>
//                                 <p className="text-xs text-blue-700 font-semibold">Consultant Nephrologist & Transplant Physician</p>
//                                 <p className="text-[11px] text-slate-500">DM Nephrology (SSKM Gold Medalist)</p>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div>

//         </section>
//     );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// // Static slides array with distinct professional headings and descriptions
// const slides = [
//     {
//         image: "/banner-slide-111.png",
//         tag: "Gold Medalist • DM Nephrology & MD Medicine",
//         titlePre: "Advanced Renal Care &",
//         titleHighlight: "Internal Medicine",
//         description: "Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc."
//     },
//     {
//         image: "/banner-slide-11.png",
//         tag: "SSKM (PG) Hospital Alumni • MRCP London",
//         titlePre: "Expert Kidney Disease &",
//         titleHighlight: "Transplant Care",
//         description: "Providing world-class evaluation for kidney transplantation, glomerular disorders, diabetic nephropathy, and personalized renal replacement therapies."
//     },
//     {
//         image: "/banner-slide-11.png",
//         tag: "BongDoc Digital Outreach • 16K+ Followers",
//         titlePre: "Patient Education &",
//         titleHighlight: "Health Awareness",
//         description: "Bridging the gap between complex medical science and everyday patients through expert health talks, vlogs, and transparent clinical guidance."
//     }
// ];

// export default function HeroSection() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         if (slides.length <= 1) return;
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 6000);
//         return () => clearInterval(timer);
//     }, []);

//     const activeSlide = slides[currentSlide] || slides[0];

//     return (
//         <section className="relative overflow-hidden bg-slate-900 min-h-[620px] lg:min-h-[680px] flex items-center">

//             {/* Background Banner Slides */}
//             {slides.map((slide, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
//                         }`}
//                 >
//                     {/* Banner Image Background */}
//                     <div
//                         className="absolute inset-0 bg-cover bg-center"
//                         style={{ backgroundImage: `url(${slide.image})` }}
//                     >
//                         {/* Soft left gradient overlay to ensure text readability on the left side */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent lg:w-3/5"></div>
//                     </div>
//                 </div>
//             ))}

//             {/* Foreground Content (Left-Aligned over the blank space of the banner) */}
//             <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
//                 <div className="max-w-2xl space-y-8 text-left">

//                     {/* Top Pill Tag */}
//                     <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
//                         <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></span>
//                         {activeSlide.tag}
//                     </div>

//                     {/* Main Title */}
//                     <div className="space-y-4">
//                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
//                             {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//                         </h1>
//                         <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
//                             {activeSlide.description}
//                         </p>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex flex-wrap items-center gap-4 pt-2">
//                         <Link
//                             href="#appointment"
//                             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
//                         >
//                             Book Consultation &rarr;
//                         </Link>
//                         <Link
//                             href="/about"
//                             className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base shadow-sm"
//                         >
//                             View Profile & Credentials
//                         </Link>
//                     </div>

//                     {/* Quick Trust Bar */}
//                     <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-lg">
//                         <div>
//                             <p className="text-2xl sm:text-3xl font-extrabold text-blue-300">10+</p>
//                             <p className="text-xs text-slate-300 font-medium">Years Experience</p>
//                         </div>
//                         <div>
//                             <p className="text-2xl sm:text-3xl font-extrabold text-blue-300">9,000+</p>
//                             <p className="text-xs text-slate-300 font-medium">Patients Treated</p>
//                         </div>
//                         <div>
//                             <p className="text-2xl sm:text-3xl font-extrabold text-blue-300">16K+</p>
//                             <p className="text-xs text-slate-300 font-medium">BongDoc Followers</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Slider Indicators */}
//             {slides.length > 1 && (
//                 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2">
//                     {slides.map((_, idx) => (
//                         <button
//                             key={idx}
//                             onClick={() => setCurrentSlide(idx)}
//                             className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2.5 bg-white/50 hover:bg-white'
//                                 }`}
//                             aria-label={`Go to slide ${idx + 1}`}
//                         />
//                     ))}
//                 </div>
//             )}

//         </section>
//     );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Static slides array with distinct professional headings and descriptions
const slides = [
    {
        image: "/banner-slide-11.png",
        tag: "Gold Medalist • DM Nephrology & MD Medicine",
        titlePre: "Advanced Kidney Care &",
        titleHighlight: "Internal Medicine",
        description: "Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc."
    },
    {
        image: "/banner-slide-2.png",
        tag: "SSKM (PG) Hospital Alumni • MRCP London",
        titlePre: "Expert Kidney Disease &",
        titleHighlight: "Transplant Care",
        description: "Providing world-class evaluation for kidney transplantation, glomerular disorders, diabetic nephropathy, and personalized renal replacement therapies."
    },
    {
        image: "/banner-slide-3.png",
        tag: "BongDoc Digital Outreach • 16K+ Followers",
        titlePre: "Patient Education &",
        titleHighlight: "Health Awareness",
        description: "Bridging the gap between complex medical science and everyday patients through expert health talks, vlogs, and transparent clinical guidance."
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const activeSlide = slides[currentSlide] || slides[0];

    return (
        <section className="relative overflow-hidden bg-slate-950 min-h-[620px] lg:min-h-[680px] flex items-center">

            {/* Background Banner Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                >
                    {/* Banner Image Background pinned to right center so the doctor is never cut off */}
                    <div
                        className="absolute inset-0 bg-cover lg:bg-[center_right] bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Soft left gradient overlay to ensure text readability on the left side */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent lg:w-3/5"></div>
                    </div>
                </div>
            ))}

            {/* Foreground Content (Left-Aligned over the blank space of the banner) */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="max-w-2xl space-y-8 text-left">

                    {/* Top Pill Tag */}
                    <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
                        <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></span>
                        {activeSlide.tag}
                    </div>

                    {/* Main Title */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                            {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
                        </h1>
                        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                            {activeSlide.description}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link
                            href="#appointment"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
                        >
                            Book Consultation &rarr;
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base shadow-sm"
                        >
                            View Profile & Credentials
                        </Link>
                    </div>

                    {/* Quick Trust Bar */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-lg">
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold text-blue-300">10+</p>
                            <p className="text-xs text-slate-300 font-medium">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold text-blue-300">9,000+</p>
                            <p className="text-xs text-slate-300 font-medium">Patients Treated</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold text-blue-300">16K+</p>
                            <p className="text-xs text-slate-300 font-medium">BongDoc Followers</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Slider Indicators */}
            {slides.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2.5 bg-white/50 hover:bg-white'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}