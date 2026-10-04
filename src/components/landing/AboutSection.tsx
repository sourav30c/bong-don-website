// import Image from 'next/image';

// export default function AboutSection() {
//     const educationData = [
//         { degree: "DM Nephrology", institution: "SSKM (PG) Hospital, Kolkata (Gold Medalist)" },
//         { degree: "MD General Medicine", institution: "Premier Medical College, Kolkata" },
//         { degree: "MBBS (Honours)", institution: "West Bengal University of Health Sciences" },
//         { degree: "MRCP", institution: "Royal College of Physicians, London" },
//     ];

//     const experienceData = [
//         { role: "Assistant Director, Team Nephrology", hospital: "Galaxy Hospital" },
//         { role: "Consultant Nephrologist", hospital: "Kidney Suraksha" },
//     ];

//     return (
//         <section className="py-20 bg-slate-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

//                     {/* Left Column: Bio & Education/Experience Tables */}
//                     <div className="lg:col-span-7 space-y-8">
//                         <div className="space-y-4">
//                             <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
//                                 <span>About The Doctor</span>
//                             </div>

//                             <p className="text-slate-700 leading-relaxed text-base">
//                                 Dr. Sourav Sarkar is a distinguished nephrologist with extensive experience in the diagnosis and treatment of kidney-related disorders. Dedicated to patient-centric care, he leads advanced renal programs focused on early detection and comprehensive management.
//                             </p>

//                             <p className="text-slate-700 leading-relaxed text-base">
//                                 With a career spanning over a decade, Dr. Sarkar has established himself as a leading authority in nephrology, known for his expertise in complex kidney conditions and his compassionate approach to patient care.
//                             </p>
//                         </div>

//                         {/* Education & Training Table Section */}
//                         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//                             <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-white font-semibold text-sm">
//                                 Education & Training
//                             </div>
//                             <div className="divide-y divide-slate-100">
//                                 {educationData.map((item, index) => (
//                                     <div key={index} className="grid grid-cols-1 sm:grid-cols-12 px-6 py-3.5 text-sm">
//                                         <span className="sm:col-span-5 font-semibold text-slate-900">{item.degree}</span>
//                                         <span className="sm:col-span-7 text-slate-600">{item.institution}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Professional Experience Table Section */}
//                         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//                             <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-white font-semibold text-sm">
//                                 Professional Experience
//                             </div>
//                             <div className="divide-y divide-slate-100">
//                                 {experienceData.map((item, index) => (
//                                     <div key={index} className="grid grid-cols-1 sm:grid-cols-12 px-6 py-3.5 text-sm">
//                                         <span className="sm:col-span-5 font-semibold text-slate-900">{item.role}</span>
//                                         <span className="sm:col-span-7 text-slate-600">{item.hospital}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                     </div>

//                     {/* Right Column: Sticky Doctor Image & Name Card */}
//                     <div className="lg:col-span-5 lg:sticky lg:top-8 flex flex-col items-center">
//                         <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-5 border border-slate-200 space-y-4">
//                             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-slate-100">
//                                 <Image
//                                     src="/LandingProfImage_2.jpg"
//                                     alt="Dr. Sourav Sarkar"
//                                     fill
//                                     className="object-cover object-top"
//                                 />
//                             </div>

//                             {/* Name & Title Card Box */}
//                             <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center shadow-inner space-y-1">
//                                 <h3 className="text-xl font-bold text-slate-900">Dr. Sourav Sarkar</h3>
//                                 <p className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
//                                     DM Nephrology (Gold Medalist) • MD Medicine
//                                 </p>
//                                 <p className="text-xs text-slate-500 pt-1">Consultant Nephrologist & Transplant Physician</p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }


import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
                        Professional Profile & Credentials
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                        About Dr. Sourav Sarkar
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        Gold Medalist Consultant Nephrologist & Internal Medicine Specialist dedicated to advanced renal healthcare and patient empowerment.
                    </p>
                </div>

                {/* Main Equal-Height Grid Section (No Separate Cards) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column: Clinical Philosophy & Table Structure (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-8">

                        {/* Doctor Intro & Bio */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                                Clinical Background & Philosophy
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Dr. Sourav Sarkar is a highly skilled Consultant Nephrologist and Internal Medicine Specialist. Having completed his advanced super-specialization training (DM) at SSKM Hospital, Kolkata, he brings extensive expertise in managing complex renal disorders, dialysis care, and renal replacement therapies.
                            </p>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Recognized as a Gold Medalist with an MRCP (London) qualification, his clinical focus emphasizes early detection of chronic kidney disease (CKD), diabetic nephropathy, and evidence-based patient-centric care.
                            </p>
                        </div>

                        {/* Education & Training (Table Style) */}
                        <div className="space-y-3">
                            <div className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-t-xl">
                                Education & Training
                            </div>
                            <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 text-sm">
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">DM Nephrology</strong>
                                    <span className="sm:col-span-2 text-slate-600">SSKM (PG) Hospital, Kolkata (Gold Medalist)</span>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">MD General Medicine</strong>
                                    <span className="sm:col-span-2 text-slate-600">Medical College Kolkata, Kolkata</span>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">MBBS (Honours)</strong>
                                    <span className="sm:col-span-2 text-slate-600">Midnapore Medical College and Hospital</span>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">MRCP</strong>
                                    <span className="sm:col-span-2 text-slate-600">Royal College of Physicians, London</span>
                                </div>
                            </div>
                        </div>

                        {/* Professional Experience (Table Style) */}
                        <div className="space-y-3">
                            <div className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-t-xl">
                                Professional Experience
                            </div>
                            <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 text-sm">
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">Consultant Nephrologist</strong>
                                    <span className="sm:col-span-2 text-slate-600">Galaxy Hospital, Barrackpur</span>
                                </div>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <strong className="text-slate-900 font-semibold">Senior Nephrology Specialist</strong>
                                    <span className="sm:col-span-2 text-slate-600">Kidney Suraksha, Barasat & Sustho Clinic, Phoolbagan</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Profile Image + Talks, Memberships & Languages (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">

                        {/* Profile Image */}
                        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-slate-200 shadow-md">
                            <Image
                                src="/LandingProfImage.jpg"
                                alt="Dr. Sourav Sarkar"
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover object-center"
                                priority
                            />
                        </div>

                        {/* Talks & Publications */}
                        <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                Talks & Publications
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                25+ scientific publications and clinical discussions in national and international journals on renal replacement, dialysis, and glomerular disorders.
                            </p>
                        </div>

                        {/* Fellowship & Membership */}
                        <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                Fellowship & Membership
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Member of the Indian Society of Nephrology, Indian Society of Organ Transplant, American Society of Nephrology, and International Society of Nephrology.
                            </p>
                        </div>

                        {/* Languages Spoken */}
                        <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                                Languages Spoken
                            </h4>
                            <p className="text-xs text-slate-700 font-medium">
                                Bengali, Hindi, English
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

// 'use client';

// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';

// // Custom reusable hook for scroll-triggered animation
// function useScrollReveal() {
//     const ref = useRef<HTMLDivElement>(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.15 }
//         );

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     return { ref, isVisible };
// }

// export default function AboutPage() {
//     const headerReveal = useScrollReveal();
//     const leftColReveal = useScrollReveal();
//     const rightColReveal = useScrollReveal();

//     return (
//         <div className="bg-slate-50 min-h-screen py-16 overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

//                 {/* Header Section with Scroll Reveal */}
//                 <div
//                     ref={headerReveal.ref}
//                     className={`text-center max-w-3xl mx-auto space-y-3 transition-all duration-700 transform ${headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                         }`}
//                 >
//                     <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
//                         Professional Profile & Credentials
//                     </span>
//                     <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
//                         About Dr. Sourav Sarkar
//                     </h1>
//                     <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
//                         Gold Medalist Consultant Nephrologist & Internal Medicine Specialist dedicated to advanced renal healthcare and patient empowerment.
//                     </p>
//                 </div>

//                 {/* Main Equal-Height Grid Section with Scroll Reveal */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

//                     {/* Left Column: Clinical Philosophy & Table Structure */}
//                     <div
//                         ref={leftColReveal.ref}
//                         className={`lg:col-span-7 flex flex-col justify-between space-y-8 transition-all duration-700 delay-200 transform ${leftColReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//                             }`}
//                     >

//                         {/* Doctor Intro & Bio */}
//                         <div className="space-y-4">
//                             <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
//                                 Clinical Background & Philosophy
//                             </h2>
//                             <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
//                                 Dr. Sourav Sarkar is a highly skilled Consultant Nephrologist and Internal Medicine Specialist. Having completed his advanced super-specialization training (DM) at SSKM Hospital, Kolkata, he brings extensive expertise in managing complex renal disorders, dialysis care, and renal replacement therapies.
//                             </p>
//                             <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
//                                 Recognized as a Gold Medalist with an MRCP (London) qualification, his clinical focus emphasizes early detection of chronic kidney disease (CKD), diabetic nephropathy, and evidence-based patient-centric care.
//                             </p>
//                         </div>

//                         {/* Education & Training (Table Style) */}
//                         <div className="space-y-3">
//                             <div className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-t-xl">
//                                 Education & Training
//                             </div>
//                             <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 text-sm">
//                                 <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
//                                     <strong className="text-slate-900 font-semibold">DM Nephrology</strong>
//                                     <span className="sm:col-span-2 text-slate-600">SSKM (PG) Hospital, Kolkata (Gold Medalist)</span>
//                                 </div>
//                                 <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
//                                     <strong className="text-slate-900 font-semibold">MD General Medicine</strong>
//                                     <span className="sm:col-span-2 text-slate-600">Premier Medical College, Kolkata</span>
//                                 </div>
//                                 <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
//                                     <strong className="text-slate-900 font-semibold">MBBS (Honours)</strong>
//                                     <span className="sm:col-span-2 text-slate-600">West Bengal University of Health Sciences</span>
//                                 </div>
//                                 <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
//                                     <strong className="text-slate-900 font-semibold">MRCP</strong>
//                                     <span className="sm:col-span-2 text-slate-600">Royal College of Physicians, London</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Professional Experience (Table Style) */}
//                         <div className="space-y-3">
//                             <div className="bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-t-xl">
//                                 Professional Experience
//                             </div>
//                             <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 text-sm">
//                                 <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
//                                     <strong className="text-slate-900 font-semibold">Consultant Nephrologist</strong>
//                                     <span className="sm:col-span-2 text-slate-600">Galaxy Hospital, Barrackpur</span>
//                                 </div>
//                                 <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
//                                     <strong className="text-slate-900 font-semibold">Senior Nephrology Specialist</strong>
//                                     <span className="sm:col-span-2 text-slate-600">Kidney Suraksha, Barasat & Sustho Clinic, Phoolbagan</span>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Right Column: Profile Image + Talks, Memberships & Languages */}
//                     <div
//                         ref={rightColReveal.ref}
//                         className={`lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-700 delay-400 transform ${rightColReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//                             }`}
//                     >

//                         {/* Profile Image */}
//                         <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-slate-200 shadow-md">
//                             <Image
//                                 src="/LandingProfImage.jpg"
//                                 alt="Dr. Sourav Sarkar"
//                                 fill
//                                 sizes="(max-width: 768px) 100vw, 400px"
//                                 className="object-cover object-center"
//                                 priority
//                             />
//                         </div>

//                         {/* Talks & Publications */}
//                         <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
//                             <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
//                                 Talks & Publications
//                             </h4>
//                             <p className="text-xs text-slate-600 leading-relaxed">
//                                 25+ scientific publications and clinical discussions in national and international journals on renal replacement, dialysis, and glomerular disorders.
//                             </p>
//                         </div>

//                         {/* Fellowship & Membership */}
//                         <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
//                             <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
//                                 Fellowship & Membership
//                             </h4>
//                             <p className="text-xs text-slate-600 leading-relaxed">
//                                 Member of the Indian Society of Nephrology, Indian Society of Organ Transplant, American Society of Nephrology, and International Society of Nephrology.
//                             </p>
//                         </div>

//                         {/* Languages Spoken */}
//                         <div className="space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
//                             <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-700">
//                                 Languages Spoken
//                             </h4>
//                             <p className="text-xs text-slate-700 font-medium">
//                                 Bengali, Hindi, English
//                             </p>
//                         </div>

//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// }