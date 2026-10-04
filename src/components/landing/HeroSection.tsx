// import Image from 'next/image';
// import Link from 'next/link';

// export default function HeroSection() {
//   return (
//     <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//         {/* Left Text Content */}
//         <div className="lg:col-span-7 space-y-6">
//           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
//             <span>Gold Medalist</span>
//             <span>•</span>
//             <span>DM Nephrology & MD Medicine</span>
//           </div>

//           <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
//             Advanced Renal Care & <br />
//             <span className="text-blue-600">Internal Medicine Expertise</span>
//           </h1>

//           <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
//             Super Specialist Doctor dedicated to comprehensive kidney health, chronic disease management, and patient education through digital outreach on <strong>BongDoc</strong>.
//           </p>

//           {/* Quick Metrics Bar */}
//           <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200 my-6">
//             <div>
//               <p className="text-2xl font-bold text-slate-900">10+ Years</p>
//               <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Clinical Experience</p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-slate-900">16K+</p>
//               <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Community Followers</p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-slate-900">Gold</p>
//               <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Medalist Honors</p>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-2">
//             <Link 
//               href="/contact" 
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-md text-center transition flex items-center justify-center gap-2"
//             >
//               Book Consultation
//             </Link>
//             <Link 
//               href="/clinics" 
//               className="bg-white hover:bg-slate-100 text-slate-800 font-medium px-8 py-3.5 rounded-xl border border-slate-300 text-center transition flex items-center justify-center"
//             >
//               View Chambers & Timings
//             </Link>
//           </div>
//         </div>

//         {/* Right Image / Card Profile Preview */}
//         <div className="lg:col-span-5 flex justify-center">
//           <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl p-6 border border-slate-100">
//             <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-inner">
//               <Image 
//                 src="/LandingProfImage.jpg" 
//                 alt="Dr. Sourav Sarkar" 
//                 fill
//                 sizes="(max-width: 768px) 100vw, 450px"
//                 className="object-cover object-center"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
//                 <div className="text-white">
//                   <p className="text-xl font-bold">Dr. Sourav Sarkar</p>
//                   <p className="text-xs text-slate-200">DM (Nephrology), MD (Medicine)</p>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <div className="flex justify-between items-center text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
//                 <span className="text-slate-600 font-medium">Primary Focus</span>
//                 <span className="text-blue-600 font-semibold">Nephrology & Hypertension</span>
//               </div>
//               <div className="flex justify-between items-center text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
//                 <span className="text-slate-600 font-medium">Content Creator</span>
//                 <span className="text-slate-900 font-semibold">YouTube: BongDoc</span>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// 'html'
// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// // Define slides data to support the carousel effect
// const slides = [
//     {
//         id: 1,
//         credentials: "Gold Medalist • DM Nephrology & MD Medicine",
//         title: "Advanced Renal Care & Internal Medicine",
//         subtitle: "Super Specialist Doctor dedicated to comprehensive kidney health, chronic disease management, and patient education on BongDoc.",
//         doctorImage: "/LandingProfImage.jpg",
//         bgClass: "bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900",
//     },
//     {
//         id: 2,
//         credentials: "MBBS (Hons) | MD (Medicine) | DM (Nephrology)",
//         title: "Dr. Sourav Sarkar",
//         subtitle: "Clinical Lead & Kidney Transplant Physician offering expert care in Dialysis, Renal Transplants, and Hypertension.",
//         doctorImage: "/LandingProfImage.jpg", // You can swap this for slide 2 image if available
//         bgClass: "bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950",
//     },
//     {
//         id: 3,
//         credentials: "Director of Nephrology & Dialysis",
//         title: "Comprehensive Kidney & Dialysis Care",
//         subtitle: "State-of-the-art management for acute kidney injury, glomerular disorders, and long-term renal replacement therapy.",
//         doctorImage: "/LandingProfImage.jpg", // You can swap this for slide 3 image if available
//         bgClass: "bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950",
//     },
// ];


// export default function HeroSection() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     // Auto-slide effect every 5 seconds
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     return (
//         <section className="relative w-full overflow-hidden text-white transition-all duration-700">
//             {/* Dynamic Background Wrapper with Overlay */}
//             <div className={`relative w-full min-h-[550px] lg:min-h-[620px] flex items-center ${slides[currentSlide].bgClass}`}>

//                 {/* Subtle background pattern / stock medical overlay image effect */}
//                 <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 relative z-10">
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

//                         {/* Left Content Area */}
//                         <div className="lg:col-span-7 space-y-6 transition-all duration-500 transform translate-y-0">
//                             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-white/20">
//                                 <span>{slides[currentSlide].credentials}</span>
//                             </div>

//                             <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]">
//                                 {slides[currentSlide].title}
//                             </h1>

//                             <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
//                                 {slides[currentSlide].subtitle}
//                             </p>

//                             {/* Action Buttons */}
//                             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                                 <Link
//                                     href="/contact"
//                                     className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg text-center transition flex items-center justify-center gap-2"
//                                 >
//                                     Book Consultation
//                                 </Link>
//                                 <Link
//                                     href="/clinics"
//                                     className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium px-8 py-3.5 rounded-xl border border-white/30 text-center transition flex items-center justify-center"
//                                 >
//                                     View Chambers & Timings
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* Right Doctor Image Area */}
//                         <div className="lg:col-span-5 flex justify-center relative">
//                             <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800/50 backdrop-blur-sm">
//                                 <Image
//                                     src={slides[currentSlide].doctorImage}
//                                     alt="Dr. Sourav Sarkar"
//                                     fill
//                                     sizes="(max-width: 768px) 100vw, 400px"
//                                     className="object-cover object-top"
//                                     priority
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
//                                     <div>
//                                         <p className="text-2xl font-bold text-white">Dr. Sourav Sarkar</p>
//                                         <p className="text-xs text-blue-300 font-medium tracking-wider uppercase">DM Nephrology (Gold Medalist)</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Left / Right Arrow Controls */}
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-20 border border-white/10 hidden sm:flex items-center justify-center"
//                     aria-label="Previous Slide"
//                 >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
//                 </button>
//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-20 border border-white/10 hidden sm:flex items-center justify-center"
//                     aria-label="Next Slide"
//                 >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
//                 </button>

//                 {/* Bottom Pagination Dots */}
//                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
//                     {slides.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentSlide(index)}
//                             className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/50 hover:bg-white'}`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }


'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        credentials: "Gold Medalist • DM Nephrology & MD Medicine",
        title: "Advanced Renal Care & Internal Medicine",
        subtitle: "Super Specialist Doctor dedicated to comprehensive kidney health, chronic disease management, and patient education on BongDoc.",
        doctorImage: "/LandingProfImage.jpg",
    },
    {
        id: 2,
        credentials: "MBBS (Hons) | MD (Medicine) | DM (Nephrology)",
        title: "Dr. Sourav Sarkar",
        subtitle: "Clinical Lead & Kidney Transplant Physician offering expert care in Dialysis, Renal Transplants, and Hypertension.",
        doctorImage: "/LandingProfImage.jpg",
    },
    {
        id: 3,
        credentials: "Director of Nephrology & Dialysis",
        title: "Comprehensive Kidney & Dialysis Care",
        subtitle: "State-of-the-art management for acute kidney injury, glomerular disorders, and long-term renal replacement therapy.",
        doctorImage: "/LandingProfImage.jpg",
    },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full overflow-hidden text-white bg-slate-950">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-blue-950/80 z-10"></div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:24px_24px] z-10"></div>
            </div>

            {/* Carousel Track Container */}
            <div className="relative z-25 overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-700 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0 flex items-center">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 min-h-[580px] lg:min-h-[640px] flex items-center">

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                                    {/* Left Text Content */}
                                    <div className="lg:col-span-7 space-y-6">
                                        <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-blue-400/30">
                                            <span>{slide.credentials}</span>
                                        </div>

                                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                                            {slide.title}
                                        </h1>

                                        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                                            {slide.subtitle}
                                        </p>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <Link
                                                href="/contact"
                                                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg text-center transition flex items-center justify-center gap-2"
                                            >
                                                Book Consultation
                                            </Link>
                                            <Link
                                                href="/clinics"
                                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium px-8 py-3.5 rounded-xl border border-white/30 text-center transition flex items-center justify-center"
                                            >
                                                View Chambers & Timings
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Doctor Image Preview */}
                                    <div className="lg:col-span-5 flex justify-center">
                                        <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-800">
                                            <Image
                                                src={slide.doctorImage}
                                                alt="Dr. Sourav Sarkar"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 400px"
                                                className="object-cover object-top"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
                                                <div>
                                                    <p className="text-2xl font-bold text-white">Dr. Sourav Sarkar</p>
                                                    <p className="text-xs text-blue-300 font-medium tracking-wider uppercase">DM Nephrology (Gold Medalist)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-30 border border-white/10 hidden sm:flex items-center justify-center"
                aria-label="Previous Slide"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition z-30 border border-white/10 hidden sm:flex items-center justify-center"
                aria-label="Next Slide"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/40 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </section>
    );
}