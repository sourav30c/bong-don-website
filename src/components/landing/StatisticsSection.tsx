// export default function StatisticsSection() {
//     const stats = [
//         {
//             number: "10+",
//             label: "Years of Experience",
//             subtext: "Dedicated nephrology & internal medicine expertise"
//         },
//         {
//             number: "9,000+",
//             label: "Patients Treated",
//             subtext: "Successfully consulted & managed globally"
//         },
//         {
//             number: "400+",
//             label: "Transplants & Complex Cases",
//             subtext: "Advanced renal replacement & transplant care"
//         },
//         {
//             number: "16K+",
//             label: "Community Followers",
//             subtext: "Patient education via BongDoc digital outreach"
//         }
//     ];

//     return (
//         <section className="py-16 bg-blue-900 text-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
//                     <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
//                         Clinical Milestone & Impact
//                     </h2>
//                     <p className="text-blue-200 text-sm">
//                         Delivering trusted, evidence-based renal care backed by consistent clinical achievements.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {stats.map((item, index) => (
//                         <div
//                             key={index}
//                             className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center space-y-2 hover:bg-white/15 transition"
//                         >
//                             <p className="text-4xl sm:text-5xl font-extrabold text-blue-300 tracking-tight">
//                                 {item.number}
//                             </p>
//                             <p className="text-lg font-bold text-white">
//                                 {item.label}
//                             </p>
//                             <p className="text-xs text-blue-200">
//                                 {item.subtext}
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }

'use client';

import { useState, useEffect, useRef } from 'react';

// Helper component for individual animated counter
function AnimatedCounter({ endValue, suffix }: { endValue: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const countRef = useRef(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    let startTime: number | null = null;
                    const duration = 1600; // 1.6 seconds smooth duration

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);

                        // Smooth deceleration
                        const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
                        const nextCount = Math.floor(easeOut * endValue);

                        // Only trigger React state re-render if integer count actually changed
                        if (nextCount !== countRef.current) {
                            countRef.current = nextCount;
                            setCount(nextCount);
                        }

                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        } else {
                            if (countRef.current !== endValue) {
                                countRef.current = endValue;
                                setCount(endValue);
                            }
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.15 } // Triggers smoothly when 15% of the section is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [endValue, hasAnimated]);

    return (
        <div ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-300 tracking-tight">
            {count.toLocaleString()}{suffix}
        </div>
    );
}

export default function StatisticsSection() {
    const stats = [
        {
            value: 10,
            suffix: "+",
            label: "Years of Experience",
            subtext: "Dedicated nephrology & internal medicine expertise"
        },
        {
            value: 9000,
            suffix: "+",
            label: "Patients Treated",
            subtext: "Successfully consulted & managed globally"
        },
        {
            value: 400,
            suffix: "+",
            label: "Transplants & Complex Cases",
            subtext: "Advanced renal replacement & transplant care"
        },
        {
            value: 16,
            suffix: "K+",
            label: "Community Followers",
            subtext: "Patient education via BongDoc digital outreach"
        }
    ];

    return (
        <section className="py-12 sm:py-16 bg-blue-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Clinical Milestone & Impact
                    </h2>
                    <p className="text-blue-200 text-xs sm:text-sm">
                        Delivering trusted, evidence-based renal care backed by consistent clinical achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/10 sm:backdrop-blur-md border border-white/20 p-5 sm:p-8 rounded-2xl sm:rounded-3xl text-center space-y-2 hover:bg-white/15 transition-colors duration-200 shadow-lg transform-gpu"
                        >
                            <AnimatedCounter endValue={item.value} suffix={item.suffix} />
                            <p className="text-base sm:text-lg font-bold text-white">
                                {item.label}
                            </p>
                            <p className="text-xs text-blue-200">
                                {item.subtext}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}