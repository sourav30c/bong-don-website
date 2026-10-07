// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const slides = [
//     {
//         image: "/banner-slide-11.png",
//         tag: "Gold Medalist • DM Nephrology & MD Medicine",
//         titlePre: "Advanced Kidney Care &",
//         titleHighlight: "Internal Medicine",
//         description: "Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc."
//     },
//     {
//         image: "/banner-slide-2.png",
//         tag: "SSKM (PG) Hospital Alumni • MRCP London",
//         titlePre: "Expert Kidney Disease &",
//         titleHighlight: "Transplant Care",
//         description: "Providing world-class evaluation for kidney transplantation, glomerular disorders, diabetic nephropathy, and personalized renal replacement therapies."
//     },
//     {
//         image: "/banner-slide-3.png",
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
//         <section className="relative overflow-hidden bg-slate-950 w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] flex items-end sm:items-center">

//             {/* Background Banner Slides */}
//             {slides.map((slide, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
//                         }`}
//                 >
//                     <div className="absolute inset-0">
//                         <Image
//                             src={slide.image}
//                             alt={`Banner Slide ${index + 1}`}
//                             fill
//                             priority={index === 0}
//                             className="object-cover object-right-top"
//                             sizes="100vw"
//                         />
//                     </div>

//                     {/* Gradient Overlay: Left to right dark overlay for text readability without creating bottom horizontal lines */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent lg:w-4/5 z-10"></div>
//                 </div>
//             ))}

//             {/* Foreground Content */}
//             <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-14 w-full">
//                 <div className="max-w-2xl space-y-3 sm:space-y-6 text-left">

//                     {/* Top Pill Tag */}
//                     <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600/90 text-white px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
//                         <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//                         <span>{activeSlide.tag}</span>
//                     </div>

//                     {/* Main Title and Description */}
//                     <div className="space-y-1.5 sm:space-y-3">
//                         <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
//                             {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//                         </h1>
//                         <p className="text-[11px] sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
//                             {activeSlide.description}
//                         </p>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 pt-1">
//                         <Link
//                             href="/contacts"
//                             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-2 min-h-[40px] sm:min-h-[44px]"
//                         >
//                             <span>Book Consultation</span>
//                             <span>&rarr;</span>
//                         </Link>
//                         <Link
//                             href="/about"
//                             className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm shadow-sm text-center flex items-center justify-center min-h-[40px] sm:min-h-[44px]"
//                         >
//                             View Profile & Credentials
//                         </Link>
//                     </div>

//                     {/* Quick Trust Bar */}
//                     <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 sm:pt-4 border-t border-white/15 max-w-md">
//                         <div>
//                             <p className="text-base sm:text-2xl font-extrabold text-blue-300">10+</p>
//                             <p className="text-[9px] sm:text-xs text-slate-300 font-medium">Years Experience</p>
//                         </div>
//                         <div>
//                             <p className="text-base sm:text-2xl font-extrabold text-blue-300">9,000+</p>
//                             <p className="text-[9px] sm:text-xs text-slate-300 font-medium">Patients Treated</p>
//                         </div>
//                         <div>
//                             <p className="text-base sm:text-2xl font-extrabold text-blue-300">16K+</p>
//                             <p className="text-[9px] sm:text-xs text-slate-300 font-medium">BongDoc Followers</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Slider Indicators */}
//             {slides.length > 1 && (
//                 <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2">
//                     {slides.map((_, idx) => (
//                         <button
//                             key={idx}
//                             onClick={() => setCurrentSlide(idx)}
//                             className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-4 sm:w-7 bg-blue-500' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white'
//                                 }`}
//                             aria-label={`Go to slide ${idx + 1}`}
//                         />
//                     ))}
//                 </div>
//             )}

//             {/* Soft Bottom Transition Gradient to smoothly blend dark Hero with light section below */}
//             <div className="absolute bottom-0 inset-x-0 h-24 sm:h-36 bg-gradient-to-b from-transparent via-slate-950/80 via-70% to-slate-50 pointer-events-none z-20"></div>

//         </section>
//     );
// }




// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const slides = [
//     {
//         image: "/banner-slide-11.png",
//         tag: "Gold Medalist • DM Nephrology & MD Medicine",
//         titlePre: "Advanced Kidney Care &",
//         titleHighlight: "Internal Medicine",
//         description: "Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc."
//     },
//     {
//         image: "/banner-slide-2.png",
//         tag: "SSKM (PG) Hospital Alumni • MRCP London",
//         titlePre: "Expert Kidney Disease &",
//         titleHighlight: "Transplant Care",
//         description: "Providing world-class evaluation for kidney transplantation, glomerular disorders, diabetic nephropathy, and personalized renal replacement therapies."
//     },
//     {
//         image: "/banner-slide-3.png",
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
//         <section className="relative overflow-hidden bg-slate-950 w-full">

//             {/* =========================================================
//                 1. DESKTOP VIEW (Visible on lg screens and up)
//                ========================================================= */}
//             <div className="hidden lg:flex relative overflow-hidden w-full aspect-[21/9] items-center">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
//                     >
//                         <div className="absolute inset-0">
//                             <Image
//                                 src={slide.image}
//                                 alt={`Banner Slide ${index + 1}`}
//                                 fill
//                                 priority={index === 0}
//                                 className="object-cover object-right"
//                                 sizes="100vw"
//                             />
//                         </div>
//                         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent w-4/5 z-10"></div>
//                     </div>
//                 ))}

//                 <div className="relative z-30 max-w-7xl mx-auto px-8 py-16 w-full">
//                     <div className="max-w-2xl space-y-6 text-left">
//                         <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
//                             <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//                             <span>{activeSlide.tag}</span>
//                         </div>

//                         <div className="space-y-3">
//                             <h1 className="text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
//                                 {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//                             </h1>
//                             <p className="text-base text-slate-200 leading-relaxed font-normal">
//                                 {activeSlide.description}
//                             </p>
//                         </div>

//                         <div className="flex items-center gap-4 pt-1">
//                             <Link
//                                 href="/contacts"
//                                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 text-sm flex items-center gap-2"
//                             >
//                                 <span>Book Consultation</span>
//                                 <span>&rarr;</span>
//                             </Link>
//                             <Link
//                                 href="/about"
//                                 className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-sm flex items-center"
//                             >
//                                 View Profile & Credentials
//                             </Link>
//                         </div>

//                         <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15 max-w-md">
//                             <div>
//                                 <p className="text-2xl font-extrabold text-blue-300">10+</p>
//                                 <p className="text-xs text-slate-300 font-medium">Years Experience</p>
//                             </div>
//                             <div>
//                                 <p className="text-2xl font-extrabold text-blue-300">9,000+</p>
//                                 <p className="text-xs text-slate-300 font-medium">Patients Treated</p>
//                             </div>
//                             <div>
//                                 <p className="text-2xl font-extrabold text-blue-300">16K+</p>
//                                 <p className="text-xs text-slate-300 font-medium">BongDoc Followers</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* =========================================================
//                 2. MOBILE & TABLET STACKED VIEW (Visible below lg screens)
//                ========================================================= */}
//             <div className="lg:hidden relative flex flex-col items-center px-4 py-8 w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-center">

//                 {/* Top Badge */}
//                 <div className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md border border-blue-400/30 mb-3">
//                     <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//                     <span>{activeSlide.tag}</span>
//                 </div>

//                 {/* Headings */}
//                 <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight mb-3 px-2">
//                     {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//                 </h1>

//                 {/* Mobile Image Card with object-contain to prevent cropping */}
//                 <div className="relative w-full max-w-xs aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-white/15 bg-slate-900 my-2">
//                     {slides.map((slide, index) => (
//                         <div
//                             key={index}
//                             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
//                         >
//                             <Image
//                                 src={slide.image}
//                                 alt={`Banner Slide ${index + 1}`}
//                                 fill
//                                 priority={index === 0}
//                                 className="object-contain object-center"
//                                 sizes="100vw"
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col w-full max-w-xs gap-2 mt-3">
//                     <Link
//                         href="/contacts"
//                         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition text-xs flex items-center justify-center gap-2"
//                     >
//                         <span>Book Consultation</span>
//                         <span>&rarr;</span>
//                     </Link>
//                     <Link
//                         href="/about"
//                         className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold py-2.5 rounded-xl transition text-xs text-center"
//                     >
//                         View Profile & Credentials
//                     </Link>
//                 </div>

//                 {/* Trust Stats Bar */}
//                 <div className="grid grid-cols-3 gap-2 w-full max-w-xs pt-4 mt-4 border-t border-white/10">
//                     <div>
//                         <p className="text-base font-extrabold text-blue-300">10+</p>
//                         <p className="text-[9px] text-slate-300 font-medium">Years Exp.</p>
//                     </div>
//                     <div>
//                         <p className="text-base font-extrabold text-blue-300">9,000+</p>
//                         <p className="text-[9px] text-slate-300 font-medium">Patients</p>
//                     </div>
//                     <div>
//                         <p className="text-base font-extrabold text-blue-300">16K+</p>
//                         <p className="text-[9px] text-slate-300 font-medium">Followers</p>
//                     </div>
//                 </div>

//             </div>


//             {/* =========================================================
//                 SHARED SLIDER INDICATOR DOTS
//                ========================================================= */}
//             {slides.length > 1 && (
//                 <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-1.5">
//                     {slides.map((_, idx) => (
//                         <button
//                             key={idx}
//                             onClick={() => setCurrentSlide(idx)}
//                             className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/50 hover:bg-white'}`}
//                             aria-label={`Go to slide ${idx + 1}`}
//                         />
//                     ))}
//                 </div>
//             )}

//         </section>
//     );
// }







// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const slides = [
//     {
//         image: "/banner-slide-11.png",
//         tag: "Gold Medalist • DM Nephrology & MD Medicine",
//         titlePre: "Advanced Kidney Care &",
//         titleHighlight: "Internal Medicine",
//         description: "Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc."
//     },
//     {
//         image: "/banner-slide-2.png",
//         tag: "SSKM (PG) Hospital Alumni • MRCP London",
//         titlePre: "Expert Kidney Disease &",
//         titleHighlight: "Transplant Care",
//         description: "Providing world-class evaluation for kidney transplantation, glomerular disorders, diabetic nephropathy, and personalized renal replacement therapies."
//     },
//     {
//         image: "/banner-slide-3.png",
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
//         <section className="relative overflow-hidden bg-slate-950 w-full">

//             {/* =========================================================
//                 1. DESKTOP VIEW (Visible on lg screens and up)
//                ========================================================= */}
//             <div className="hidden lg:flex relative overflow-hidden w-full aspect-[21/9] items-center">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
//                     >
//                         <div className="absolute inset-0">
//                             <Image
//                                 src={slide.image}
//                                 alt={`Banner Slide ${index + 1}`}
//                                 fill
//                                 priority={index === 0}
//                                 className="object-cover object-right"
//                                 sizes="100vw"
//                             />
//                         </div>
//                         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent w-4/5 z-10"></div>
//                     </div>
//                 ))}

//                 <div className="relative z-30 max-w-7xl mx-auto px-8 py-16 w-full">
//                     <div className="max-w-2xl space-y-6 text-left">
//                         <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
//                             <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//                             <span>{activeSlide.tag}</span>
//                         </div>

//                         <div className="space-y-3">
//                             <h1 className="text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
//                                 {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//                             </h1>
//                             <p className="text-base text-slate-200 leading-relaxed font-normal">
//                                 {activeSlide.description}
//                             </p>
//                         </div>

//                         <div className="flex items-center gap-4 pt-1">
//                             <Link
//                                 href="/contacts"
//                                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 text-sm flex items-center gap-2"
//                             >
//                                 <span>Book Consultation</span>
//                                 <span>&rarr;</span>
//                             </Link>
//                             <Link
//                                 href="/about"
//                                 className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-sm flex items-center"
//                             >
//                                 View Profile & Credentials
//                             </Link>
//                         </div>

//                         <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15 max-w-md">
//                             <div>
//                                 <p className="text-2xl font-extrabold text-blue-300">10+</p>
//                                 <p className="text-xs text-slate-300 font-medium">Years Experience</p>
//                             </div>
//                             <div>
//                                 <p className="text-2xl font-extrabold text-blue-300">9,000+</p>
//                                 <p className="text-xs text-slate-300 font-medium">Patients Treated</p>
//                             </div>
//                             <div>
//                                 <p className="text-2xl font-extrabold text-blue-300">16K+</p>
//                                 <p className="text-xs text-slate-300 font-medium">BongDoc Followers</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* =========================================================
//                 2. MOBILE VIEW (Full-Width Edge-to-Edge Image Slider)
//                ========================================================= */}
//             <div className="lg:hidden relative flex flex-col w-full bg-slate-950">

//                 {/* Full-Width Edge-to-Edge Image Slider Container */}
//                 <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
//                     {slides.map((slide, index) => (
//                         <div
//                             key={index}
//                             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
//                         >
//                             <Image
//                                 src={slide.image}
//                                 alt={`Banner Slide ${index + 1}`}
//                                 fill
//                                 priority={index === 0}
//                                 className="object-cover object-right"
//                                 sizes="100vw"
//                             />
//                         </div>
//                     ))}
//                     {/* Gradient Overlay to seamlessly blend image into content below */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>

//                     {/* Mobile Slider Indicator Dots Overlaid on Image */}
//                     {slides.length > 1 && (
//                         <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
//                             {slides.map((_, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => setCurrentSlide(idx)}
//                                     className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/60 hover:bg-white'}`}
//                                     aria-label={`Go to slide ${idx + 1}`}
//                                 />
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Content Section Below Full-Width Image */}
//                 <div className="px-4 pt-4 pb-10 text-center flex flex-col items-center">

//                     {/* Top Badge */}
//                     <div className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md border border-blue-400/30 mb-3">
//                         <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//                         <span>{activeSlide.tag}</span>
//                     </div>

//                     {/* Headings */}
//                     <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight mb-4 px-2">
//                         {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//                     </h1>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col w-full max-w-sm gap-2.5">
//                         <Link
//                             href="/contacts"
//                             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/30 transition text-xs flex items-center justify-center gap-2"
//                         >
//                             <span>Book Consultation</span>
//                             <span>&rarr;</span>
//                         </Link>
//                         <Link
//                             href="/about"
//                             className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold py-3 rounded-xl transition text-xs text-center"
//                         >
//                             View Profile & Credentials
//                         </Link>
//                     </div>

//                     {/* Trust Stats Bar */}
//                     <div className="grid grid-cols-3 gap-2 w-full max-w-sm pt-5 mt-5 border-t border-white/10">
//                         <div>
//                             <p className="text-base font-extrabold text-blue-300">10+</p>
//                             <p className="text-[9px] text-slate-300 font-medium">Years Exp.</p>
//                         </div>
//                         <div>
//                             <p className="text-base font-extrabold text-blue-300">9,000+</p>
//                             <p className="text-[9px] text-slate-300 font-medium">Patients</p>
//                         </div>
//                         <div>
//                             <p className="text-base font-extrabold text-blue-300">16K+</p>
//                             <p className="text-[9px] text-slate-300 font-medium">Followers</p>
//                         </div>
//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// }




'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        <section className="relative overflow-hidden bg-slate-950 w-full">

            {/* =========================================================
                1. DESKTOP VIEW (Visible on lg screens and up)
               ========================================================= */}
            <div className="hidden lg:flex relative overflow-hidden w-full aspect-[2.5/1] items-center">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={slide.image}
                                alt={`Banner Slide ${index + 1}`}
                                fill
                                priority={index === 0}
                                className="object-cover object-right"
                                sizes="100vw"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent w-4/5 z-10"></div>
                    </div>
                ))}

                <div className="relative z-30 max-w-7xl mx-auto px-8 py-10 lg:py-12 w-full">
                    <div className="max-w-2xl space-y-4 lg:space-y-5 text-left">
                        <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
                            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
                            <span>{activeSlide.tag}</span>
                        </div>

                        <div className="space-y-2 lg:space-y-3">
                            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                                {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
                            </h1>
                            <p className="text-sm lg:text-base text-slate-200 leading-relaxed font-normal">
                                {activeSlide.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 pt-1">
                            <Link
                                href="/contacts"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 text-sm flex items-center gap-2"
                            >
                                <span>Book Consultation</span>
                                <span>&rarr;</span>
                            </Link>
                            <Link
                                href="/about"
                                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-sm flex items-center"
                            >
                                View Profile
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-3 border-t border-white/15 max-w-md">
                            <div>
                                <p className="text-xl lg:text-2xl font-extrabold text-blue-300">10+</p>
                                <p className="text-xs text-slate-300 font-medium">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-xl lg:text-2xl font-extrabold text-blue-300">9,000+</p>
                                <p className="text-xs text-slate-300 font-medium">Patients Treated</p>
                            </div>
                            <div>
                                <p className="text-xl lg:text-2xl font-extrabold text-blue-300">16K+</p>
                                <p className="text-xs text-slate-300 font-medium">BongDoc Followers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* =========================================================
                2. MOBILE VIEW (Full-Width Edge-to-Edge Image Slider)
               ========================================================= */}
            <div className="lg:hidden relative flex flex-col w-full bg-slate-950">

                {/* Full-Width Edge-to-Edge Image Slider Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                        >
                            <Image
                                src={slide.image}
                                alt={`Banner Slide ${index + 1}`}
                                fill
                                priority={index === 0}
                                className="object-cover object-right"
                                sizes="100vw"
                            />
                        </div>
                    ))}
                    {/* Gradient Overlay to seamlessly blend image into content below */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>

                    {/* Mobile Slider Indicator Dots Overlaid on Image */}
                    {slides.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/60 hover:bg-white'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Section Below Full-Width Image */}
                <div className="px-4 pt-3 pb-5 text-center flex flex-col items-center">

                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md border border-blue-400/30 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
                        <span>{activeSlide.tag}</span>
                    </div>

                    {/* Headings */}
                    <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight mb-3 px-2">
                        {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-col w-full max-w-sm gap-2">
                        <Link
                            href="/contacts"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition text-xs flex items-center justify-center gap-2"
                        >
                            <span>Book Consultation</span>
                            <span>&rarr;</span>
                        </Link>
                        <Link
                            href="/about"
                            className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold py-2.5 rounded-xl transition text-xs text-center"
                        >
                            View Profile & Credentials
                        </Link>
                    </div>

                    {/* Trust Stats Bar */}
                    <div className="grid grid-cols-3 gap-2 w-full max-w-sm pt-3 mt-3 border-t border-white/10">
                        <div>
                            <p className="text-base font-extrabold text-blue-300">10+</p>
                            <p className="text-[9px] text-slate-300 font-medium">Years Exp.</p>
                        </div>
                        <div>
                            <p className="text-base font-extrabold text-blue-300">9,000+</p>
                            <p className="text-[9px] text-slate-300 font-medium">Patients</p>
                        </div>
                        <div>
                            <p className="text-base font-extrabold text-blue-300">16K+</p>
                            <p className="text-[9px] text-slate-300 font-medium">Followers</p>
                        </div>
                    </div>

                </div>

            </div>


            {/* =========================================================
                3. DESKTOP SLIDER INDICATOR DOTS (Centered at bottom)
               ========================================================= */}
            {slides.length > 1 && (
                <div className="hidden lg:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-blue-500' : 'w-2 bg-white/60 hover:bg-white'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}



// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const slides = [
//     {
//         image: "/banner-slide-11.png",
//         tag: "Gold Medalist • DM Nephrology & MD Medicine",
//         titlePre: "Advanced Kidney Care &",
//         titleHighlight: "Internal Medicine",
//         description: "Super-Specialist Consultant Nephrologist dedicated to comprehensive kidney health, chronic kidney disease management, dialysis care, and patient education via BongDoc."
//     },
//     {
//         image: "/banner-slide-2.png",
//         tag: "SSKM (PG) Hospital Alumni • MRCP London",
//         titlePre: "Expert Kidney Disease &",
//         titleHighlight: "Transplant Care",
//         description: "Providing world-class evaluation for kidney transplantation, glomerular disorders, diabetic nephropathy, and personalized renal replacement therapies."
//     },
//     {
//         image: "/banner-slide-3.png",
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
//         <section className="relative overflow-hidden bg-slate-950 w-full pb-8">

//             {/* =========================================================
//                 1. DESKTOP VIEW (Visible on lg screens and up)
//                ========================================================= */}
//             <div className="hidden lg:flex relative overflow-hidden w-full aspect-[2.6/1] items-center">
//                 {/* Background Banner Slides with Built-in Fade Gradients */}
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
//                     >
//                         <div className="absolute inset-0">
//                             <Image
//                                 src={slide.image}
//                                 alt={`Banner Slide ${index + 1}`}
//                                 fill
//                                 priority={index === 0}
//                                 className="object-cover object-right"
//                                 sizes="100vw"
//                             />
//                         </div>
//                         {/* Left-to-Right Text Contrast Fade */}
//                         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent w-4/5 z-10"></div>

//                         {/* Bottom Fade Gradient (Fades banner smoothly into dark background) */}
//                         <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-20"></div>
//                     </div>
//                 ))}

//                 {/* Desktop Foreground Content */}
//                 <div className="relative z-30 max-w-7xl mx-auto px-8 py-10 w-full">
//                     <div className="max-w-2xl space-y-4 text-left">
//                         <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
//                             <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//                             <span>{activeSlide.tag}</span>
//                         </div>

//                         <div className="space-y-2">
//                             <h1 className="text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
//                                 {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//                             </h1>
//                             <p className="text-sm text-slate-200 leading-relaxed font-normal">
//                                 {activeSlide.description}
//                             </p>
//                         </div>

//                         <div className="flex items-center gap-4 pt-1">
//                             <Link
//                                 href="/contacts"
//                                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 text-xs flex items-center gap-2"
//                             >
//                                 <span>Book Consultation</span>
//                                 <span>&rarr;</span>
//                             </Link>
//                             <Link
//                                 href="/about"
//                                 className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-xs shadow-sm flex items-center"
//                             >
//                                 View Profile & Credentials
//                             </Link>
//                         </div>

//                         <div className="grid grid-cols-3 gap-4 pt-3 border-t border-white/15 max-w-md">
//                             <div>
//                                 <p className="text-xl font-extrabold text-blue-300">10+</p>
//                                 <p className="text-[10px] text-slate-300 font-medium">Years Experience</p>
//                             </div>
//                             <div>
//                                 <p className="text-xl font-extrabold text-blue-300">9,000+</p>
//                                 <p className="text-[10px] text-slate-300 font-medium">Patients Treated</p>
//                             </div>
//                             <div>
//                                 <p className="text-xl font-extrabold text-blue-300">16K+</p>
//                                 <p className="text-[10px] text-slate-300 font-medium">BongDoc Followers</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Desktop Slider Indicator Dots (Centered at bottom inside banner) */}
//                 {slides.length > 1 && (
//                     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full">
//                         {slides.map((_, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setCurrentSlide(idx)}
//                                 className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-5 bg-blue-500' : 'w-1.5 bg-white/60 hover:bg-white'}`}
//                                 aria-label={`Go to slide ${idx + 1}`}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>


//             {/* =========================================================
//                 2. MOBILE VIEW (Full-Width Edge-to-Edge Image Slider)
//                ========================================================= */}
//             <div className="lg:hidden relative flex flex-col w-full bg-slate-950">

//                 {/* Full-Width Edge-to-Edge Image Slider Container */}
//                 <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
//                     {slides.map((slide, index) => (
//                         <div
//                             key={index}
//                             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
//                         >
//                             <Image
//                                 src={slide.image}
//                                 alt={`Banner Slide ${index + 1}`}
//                                 fill
//                                 priority={index === 0}
//                                 className="object-cover object-right"
//                                 sizes="100vw"
//                             />
//                         </div>
//                     ))}
//                     {/* Gradient Overlay to seamlessly blend image into content below */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>

//                     {/* Mobile Slider Indicator Dots Overlaid on Image */}
//                     {slides.length > 1 && (
//                         <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
//                             {slides.map((_, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => setCurrentSlide(idx)}
//                                     className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/60 hover:bg-white'}`}
//                                     aria-label={`Go to slide ${idx + 1}`}
//                                 />
//                             ))}
//                         </div>
//                     )}
//                 </div>

//                 {/* Content Section Below Full-Width Image */}
//                 <div className="px-4 pt-4 pb-4 text-center flex flex-col items-center">

//                     {/* Top Badge */}
//                     <div className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md border border-blue-400/30 mb-3">
//                         <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//                         <span>{activeSlide.tag}</span>
//                     </div>

//                     {/* Headings */}
//                     <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight mb-4 px-2">
//                         {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//                     </h1>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col w-full max-w-sm gap-2.5">
//                         <Link
//                             href="/contacts"
//                             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/30 transition text-xs flex items-center justify-center gap-2"
//                         >
//                             <span>Book Consultation</span>
//                             <span>&rarr;</span>
//                         </Link>
//                         <Link
//                             href="/about"
//                             className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold py-3 rounded-xl transition text-xs text-center"
//                         >
//                             View Profile & Credentials
//                         </Link>
//                     </div>

//                     {/* Trust Stats Bar */}
//                     <div className="grid grid-cols-3 gap-2 w-full max-w-sm pt-5 mt-5 border-t border-white/10">
//                         <div>
//                             <p className="text-base font-extrabold text-blue-300">10+</p>
//                             <p className="text-[9px] text-slate-300 font-medium">Years Exp.</p>
//                         </div>
//                         <div>
//                             <p className="text-base font-extrabold text-blue-300">9,000+</p>
//                             <p className="text-[9px] text-slate-300 font-medium">Patients</p>
//                         </div>
//                         <div>
//                             <p className="text-base font-extrabold text-blue-300">16K+</p>
//                             <p className="text-[9px] text-slate-300 font-medium">Followers</p>
//                         </div>
//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// }




