// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useLanguage } from '@/lib/i18n';

// const slideImages = [
//   "/banner-slide-11.png",
//   "/banner-slide-2.png",
//   "/banner-slide-3.png"
// ];

// export default function HeroSection() {
//   const { t } = useLanguage();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = t.hero.slides.map((slide, idx) => ({
//     ...slide,
//     image: slideImages[idx] || slideImages[0]
//   }));

//   useEffect(() => {
//     if (slides.length <= 1) return;
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const activeSlide = slides[currentSlide] || slides[0];

//   return (
//     <section className="relative overflow-hidden bg-slate-950 w-full">

//       {/* =========================================================
//           1. DESKTOP VIEW (Visible on lg screens and up)
//          ========================================================= */}
//       <div className="hidden lg:flex relative overflow-hidden w-full aspect-[2.5/1] items-center">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
//           >
//             <div className="absolute inset-0">
//               <Image
//                 src={slide.image}
//                 alt={`Banner Slide ${index + 1}`}
//                 fill
//                 priority={index === 0}
//                 className="object-cover object-right"
//                 sizes="100vw"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent w-4/5 z-10"></div>
//           </div>
//         ))}

//         <div className="relative z-30 max-w-7xl mx-auto px-8 py-10 lg:py-12 w-full">
//           <div className="max-w-2xl space-y-4 lg:space-y-5 text-left">
//             <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm border border-blue-400/30">
//               <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//               <span>{activeSlide.tag}</span>
//             </div>

//             <div className="space-y-2 lg:space-y-3">
//               <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
//                 {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//               </h1>
//               <p className="text-sm lg:text-base text-slate-200 leading-relaxed font-normal">
//                 {activeSlide.description}
//               </p>
//             </div>

//             <div className="flex items-center gap-4 pt-1">
//               <Link
//                 href="/contacts"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 text-sm flex items-center gap-2"
//               >
//                 <span>{t.hero.bookConsultation}</span>
//                 <span>&rarr;</span>
//               </Link>
//               <Link
//                 href="/about"
//                 className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-sm flex items-center"
//               >
//                 {t.hero.viewProfile}
//               </Link>
//             </div>

//             <div className="grid grid-cols-3 gap-4 pt-3 border-t border-white/15 max-w-md">
//               <div>
//                 <p className="text-xl lg:text-2xl font-extrabold text-blue-300">{t.hero.yearsExp}</p>
//                 <p className="text-xs text-slate-300 font-medium">{t.hero.yearsExpLabel}</p>
//               </div>
//               <div>
//                 <p className="text-xl lg:text-2xl font-extrabold text-blue-300">{t.hero.patientsTreated}</p>
//                 <p className="text-xs text-slate-300 font-medium">{t.hero.patientsTreatedLabel}</p>
//               </div>
//               <div>
//                 <p className="text-xl lg:text-2xl font-extrabold text-blue-300">{t.hero.followers}</p>
//                 <p className="text-xs text-slate-300 font-medium">{t.hero.followersLabel}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================================
//           2. MOBILE VIEW (Full-Width Edge-to-Edge Image Slider)
//          ========================================================= */}
//       <div className="lg:hidden relative flex flex-col w-full bg-slate-950">

//         {/* Fixed-Height Mobile Image Slider Container to Prevent Shifting */}
//         <div className="relative w-full h-[230px] sm:h-[280px] overflow-hidden bg-slate-900">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
//             >
//               <Image
//                 src={slide.image}
//                 alt={`Banner Slide ${index + 1}`}
//                 fill
//                 priority={index === 0}
//                 className="object-cover object-right"
//                 sizes="100vw"
//               />
//             </div>
//           ))}
//           {/* Gradient Overlay to seamlessly blend image into content below */}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>

//           {/* Mobile Slider Indicator Dots Overlaid on Image */}
//           {slides.length > 1 && (
//             <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
//               {slides.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentSlide(idx)}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/60 hover:bg-white'}`}
//                   aria-label={`Go to slide ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Content Section Below Full-Width Image */}
//         <div className="px-4 pt-3 pb-5 text-center flex flex-col items-center">

//           {/* Top Badge */}
//           <div className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md border border-blue-400/30 mb-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
//             <span>{activeSlide.tag}</span>
//           </div>

//           {/* Headings */}
//           <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight mb-3 px-2">
//             {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
//           </h1>

//           {/* Action Buttons */}
//           <div className="flex flex-col w-full max-w-sm gap-2">
//             <Link
//               href="/contacts"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition text-xs flex items-center justify-center gap-2"
//             >
//               <span>{t.hero.bookConsultation}</span>
//               <span>&rarr;</span>
//             </Link>
//             <Link
//               href="/about"
//               className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold py-2.5 rounded-xl transition text-xs text-center"
//             >
//               {t.hero.viewProfile}
//             </Link>
//           </div>

//           {/* Trust Stats Bar */}
//           <div className="grid grid-cols-3 gap-2 w-full max-w-sm pt-3 mt-3 border-t border-white/10">
//             <div>
//               <p className="text-base font-extrabold text-blue-300">{t.hero.yearsExp}</p>
//               <p className="text-[9px] text-slate-300 font-medium">{t.hero.yearsExpLabel}</p>
//             </div>
//             <div>
//               <p className="text-base font-extrabold text-blue-300">{t.hero.patientsTreated}</p>
//               <p className="text-[9px] text-slate-300 font-medium">{t.hero.patientsTreatedLabel}</p>
//             </div>
//             <div>
//               <p className="text-base font-extrabold text-blue-300">{t.hero.followers}</p>
//               <p className="text-[9px] text-slate-300 font-medium">{t.hero.followersLabel}</p>
//             </div>
//           </div>

//         </div>

//       </div>

//       {/* =========================================================
//           3. DESKTOP SLIDER INDICATOR DOTS (Centered at bottom)
//          ========================================================= */}
//       {slides.length > 1 && (
//         <div className="hidden lg:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40 items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-blue-500' : 'w-2 bg-white/60 hover:bg-white'}`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       )}

//     </section>
//   );
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

const whatsappUrl = 'https://wa.me/919831030908?text=Hello%20Dr.%20Sourav%20Sarkar,%20I%20would%20like%20to%20book%20a%20consultation.';

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
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 text-sm flex items-center gap-2"
                            >
                                <span>Book Consultation</span>
                                <span>&rarr;</span>
                            </a>
                            <Link
                                href="/contacts"
                                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm shadow-sm flex items-center"
                            >
                                Contact Us
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
                2. MOBILE VIEW (Banner -> Side-by-Side Buttons -> Stats Grid)
               ========================================================= */}
            <div className="lg:hidden flex flex-col w-full bg-slate-950">

                {/* Reduced Height Mobile Image Slider Container */}
                <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden bg-slate-900">
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
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20"></div>

                    {/* Mobile Slider Indicator Dots Overlaid on Image */}
                    {slides.length > 1 && (
                        <div className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
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

                {/* Banner Content (Tag & Title Only) inside dark section */}
                <div className="px-4 pt-3 pb-5 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md border border-blue-400/30 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse flex-shrink-0"></span>
                        <span>{activeSlide.tag}</span>
                    </div>

                    <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight mb-1 px-2">
                        {activeSlide.titlePre} <span className="text-blue-400">{activeSlide.titleHighlight}</span>
                    </h1>
                </div>

                {/* =========================================================
                    MOBILE ACTION BUTTONS & STATS IN LIGHT AREA BELOW
                   ========================================================= */}
                <div className="w-full bg-slate-50 px-4 pt-4 pb-6 flex flex-col items-center border-t border-slate-200 space-y-4">

                    {/* Side-by-Side Action Buttons */}
                    <div className="grid grid-cols-2 w-full max-w-md gap-2.5">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-2 rounded-xl shadow-lg shadow-blue-600/20 transition text-xs sm:text-sm flex items-center justify-center gap-1 text-center"
                        >
                            <span>Book Now</span>
                            <span>&rarr;</span>
                        </a>
                        <Link
                            href="/contacts"
                            className="w-full bg-white hover:bg-slate-100 text-blue-600 border-2 border-blue-600 font-bold py-3 px-2 rounded-xl transition text-xs sm:text-sm text-center shadow-sm flex items-center justify-center"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Statistics Card Grid Moved Below Buttons */}
                    <div className="grid grid-cols-3 gap-3 w-full max-w-md bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200 text-center">
                        <div>
                            <p className="text-base font-extrabold text-blue-600">10+</p>
                            <p className="text-[10px] text-slate-600 font-medium">Years Exp.</p>
                        </div>
                        <div className="border-x border-slate-100">
                            <p className="text-base font-extrabold text-blue-600">9,000+</p>
                            <p className="text-[10px] text-slate-600 font-medium">Patients</p>
                        </div>
                        <div>
                            <p className="text-base font-extrabold text-blue-600">16K+</p>
                            <p className="text-[10px] text-slate-600 font-medium">Followers</p>
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