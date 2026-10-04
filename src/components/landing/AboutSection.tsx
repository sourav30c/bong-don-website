import Link from 'next/link';
//import Image from 'next/image';

// export default function AboutSection() {
//     return (
//         <section className="py-20 bg-slate-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//                     {/* Left Column: Doctor Profile Graphic / Snapshot */}
//                     <div className="lg:col-span-5 flex justify-center">
//                         <div className="relative w-full max-w-md bg-white rounded-3xl shadow-lg p-4 border border-slate-200">
//                             <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-slate-100">
//                                 <Image
//                                     src="/LandingProfImage.jpg"
//                                     alt="Dr. Sourav Sarkar consulting"
//                                     fill
//                                     className="object-cover object-top"
//                                 />
//                             </div>
//                             <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg hidden sm:block">
//                                 <p className="text-2xl font-bold">10+</p>
//                                 <p className="text-xs font-medium text-blue-100">Years Excellence</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column: Bio & Philosophy Content */}
//                     <div className="lg:col-span-7 space-y-6">
//                         <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
//                             <span>Meet Your Specialist</span>
//                         </div>

//                         <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
//                             Dedicated to Preserving Renal Health & Enhancing Quality of Life
//                         </h2>

//                         <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
//                             As a Gold Medalist in DM Nephrology and MD Medicine, I believe that effective kidney care goes beyond clinical prescriptions. It involves empathetic communication, early screening of chronic kidney disease (CKD), and structured lifestyle guidance to slow disease progression.
//                         </p>

//                         <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
//                             Whether managing complex hypertension, coordinating dialysis regimens, or guiding families through renal transplant evaluations, my practice is anchored in evidence-based medicine and patient-first compassion.
//                         </p>

//                         <div className="pt-4 flex items-center gap-6">
//                             <Link
//                                 href="/about"
//                                 className="bg-slate-900 hover:bg-blue-600 text-white font-medium px-7 py-3 rounded-xl shadow transition flex items-center gap-2 text-sm"
//                             >
//                                 Read Full Biography & Career History &rarr;
//                             </Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
//}

import Image from 'next/image';

export default function AboutSection() {
    const educationData = [
        { degree: "MBBS (Hons)", institution: "Medinipur Medical College, Kolkata" },
        { degree: "MD (Internal Medicine)", institution: "Medical College, Kolkata" },
        { degree: "DM (Nephrology)", institution: "IPGMER, Kolkata" },
        { degree: "Fellowship", institution: "MRCP(UK)" },
    ];

    const experienceData = [
        { role: "Assistant Director, Team Nephrology", hospital: "Galaxy Hospital" },
        { role: "Consultant Nephrologist", hospital: "Kidney Suraksha" },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Bio & Education/Experience Tables */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                                <span>About The Doctor</span>
                            </div>

                            <p className="text-slate-700 leading-relaxed text-base">
                                Dr. Sourav Sarkar is a distinguished nephrologist with extensive experience in the diagnosis and treatment of kidney-related disorders. Dedicated to patient-centric care, he leads advanced renal programs focused on early detection and comprehensive management.
                            </p>

                            <p className="text-slate-700 leading-relaxed text-base">
                                With a career spanning over a decade, Dr. Sarkar has established himself as a leading authority in nephrology, known for his expertise in complex kidney conditions and his compassionate approach to patient care.
                            </p>
                        </div>

                        {/* Education & Training Table Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-white font-semibold text-sm">
                                Education & Training
                            </div>
                            <div className="divide-y divide-slate-100">
                                {educationData.map((item, index) => (
                                    <div key={index} className="grid grid-cols-1 sm:grid-cols-12 px-6 py-3.5 text-sm">
                                        <span className="sm:col-span-5 font-semibold text-slate-900">{item.degree}</span>
                                        <span className="sm:col-span-7 text-slate-600">{item.institution}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Professional Experience Table Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-white font-semibold text-sm">
                                Professional Experience
                            </div>
                            <div className="divide-y divide-slate-100">
                                {experienceData.map((item, index) => (
                                    <div key={index} className="grid grid-cols-1 sm:grid-cols-12 px-6 py-3.5 text-sm">
                                        <span className="sm:col-span-5 font-semibold text-slate-900">{item.role}</span>
                                        <span className="sm:col-span-7 text-slate-600">{item.hospital}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Sticky Doctor Image & Name Card */}
                    <div className="lg:col-span-5 lg:sticky lg:top-8 flex flex-col items-center">
                        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-5 border border-slate-200 space-y-4">
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-slate-100">
                                <Image
                                    src="/LandingProfImage_2.jpg"
                                    alt="Dr. Sourav Sarkar"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            {/* Name & Title Card Box */}
                            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-center shadow-inner space-y-1">
                                <h3 className="text-xl font-bold text-slate-900">Dr. Sourav Sarkar</h3>
                                <p className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
                                    DM Nephrology (Gold Medalist) • MD Medicine
                                </p>
                                <p className="text-xs text-slate-500 pt-1">Consultant Nephrologist & Transplant Physician</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}