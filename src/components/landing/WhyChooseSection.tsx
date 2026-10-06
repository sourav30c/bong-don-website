// export default function WhyChooseSection() {
//     const features = [
//         {
//             title: "Academic Excellence",
//             description: "Dr. Sarkar's foundation in medicine is built on a distinguished academic career (Gold Medalist, DM Nephrology, MD Medicine), ensuring care rooted in the latest scientific advancements.",
//             iconSvg: (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                 </svg>
//             )
//         },
//         {
//             title: "Patient-Centric Approach",
//             description: "Every patient is unique. Dr. Sarkar takes the time to listen, understand, and tailor treatment plans that respect your individual health goals, lifestyle, and values.",
//             iconSvg: (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//             )
//         },
//         {
//             title: "Innovative Solutions",
//             description: "Staying ahead in medical research, Dr. Sarkar integrates advanced diagnostic tools and therapeutic strategies to offer effective, cutting-edge treatment options.",
//             iconSvg: (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//             )
//         },
//         {
//             title: "Clear Communication",
//             description: "We prioritize transparent and empathetic communication, ensuring you and your family are fully informed and comfortable with every step of your care journey.",
//             iconSvg: (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//                 </svg>
//             )
//         }
//     ];

//     return (
//         <section className="py-20 bg-slate-50 border-t border-slate-200">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 {/* Section Header */}
//                 <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
//                     <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
//                         Why Choose Dr. Sourav Sarkar
//                     </h2>
//                     <p className="text-slate-600">
//                         Experience a new standard of healthcare. Dr. Sarkar combines cutting-edge expertise with heartfelt compassion, dedicated to your well-being.
//                     </p>
//                     <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
//                 </div>

//                 {/* 4 Cards Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {features.map((item, index) => (
//                         <div
//                             key={index}
//                             className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between"
//                         >
//                             <div className="space-y-4">
//                                 <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shadow-sm">
//                                     {item.iconSvg}
//                                 </div>

//                                 <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

//                                 <p className="text-slate-600 text-sm leading-relaxed">
//                                     {item.description}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }

export default function WhyChooseSection() {
    const features = [
        {
            title: "Academic Excellence",
            description: "Dr. Sarkar's foundation in medicine is built on a distinguished academic career (Gold Medalist, DM Nephrology, MD Medicine), ensuring care rooted in the latest scientific advancements.",
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            )
        },
        {
            title: "Patient-Centric Approach",
            description: "Every patient is unique. Dr. Sarkar takes the time to listen, understand, and tailor treatment plans that respect your individual health goals, lifestyle, and values.",
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "Innovative Solutions",
            description: "Staying ahead in medical research, Dr. Sarkar integrates advanced diagnostic tools and therapeutic strategies to offer effective, cutting-edge treatment options.",
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Clear Communication",
            description: "We prioritize transparent and empathetic communication, ensuring you and your family are fully informed and comfortable with every step of your care journey.",
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        Why Choose Dr. Sourav Sarkar
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base">
                        Experience a new standard of healthcare. Dr. Sarkar combines cutting-edge expertise with heartfelt compassion, dedicated to your well-being.
                    </p>
                    <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
                </div>

                {/* Responsive Layout: Mobile Horizontal Swipe Carousel / Desktop 4-Column Grid */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[260px] min-[400px]:min-w-[290px] sm:min-w-[320px] md:min-w-0 snap-center bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shadow-sm flex-shrink-0">
                                    {item.iconSvg}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swipe Hint Dots */}
                <div className="flex md:hidden justify-center items-center gap-1.5 pt-4">
                    {features.map((_, i) => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    ))}
                </div>

            </div>
        </section>
    );
}