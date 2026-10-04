import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
    const services = [
        {
            title: "Kidney Transplant",
            description: "Comprehensive pre-transplant evaluation, surgical expertise, and meticulous post-transplant care for optimal outcomes.",
            image: "/kidney-transplant.png", // Place your image in public folder
        },
        {
            title: "Renal Failure Management",
            description: "Holistic management of acute and chronic renal failure, focusing on improving quality of life and preventing complications.",
            image: "/renal-failure.png",
        },
        {
            title: "Chronic Kidney Disease (CKD)",
            description: "Personalized treatment plans to slow disease progression and manage complications of CKD through evidence-based approaches.",
            image: "/ckd.png",
        },
        {
            title: "Dialysis Management",
            description: "State-of-the-art facilities for comprehensive dialysis management, ensuring comfort and efficacy.",
            image: "/kidney-dialysis.png",
        },
        {
            title: "Peritoneal Dialysis",
            description: "Training and support for home-based peritoneal dialysis, offering flexibility and convenience for patients.",
            image: "/peritoneal.png",
        },
        {
            title: "Hemodialysis",
            description: "Advanced hemodialysis units with highly skilled staff, providing efficient and safe blood purification.",
            image: "/hemodialysis.png",
        },
        {
            title: "Hypertension Related Kidney Disorders",
            description: "Specialized care for kidney-related high blood pressure and resistant hypertension cases with advanced treatment options.",
            image: "/hypertension.png",
        },
        {
            title: "Diabetic Kidney Disease",
            description: "Proactive screening and management for kidney complications arising from diabetes, preserving kidney function.",
            image: "/diabetic-kidney.png",
        }
    ];

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        Our Specialized Services
                    </h2>
                    <p className="text-slate-600">
                        Advanced nephrology care with cutting-edge expertise and compassionate patient support.
                    </p>
                    <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
                </div>

                {/* Services Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-5 flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                {/* Circular Image Badge */}
                                <div className="w-16 h-16 mx-auto rounded-2xl border-2 border-blue-100 overflow-hidden relative shadow-md bg-slate-100">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-center"
                                        sizes="64px"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 text-center">{item.title}</h3>

                                <p className="text-slate-600 text-sm leading-relaxed text-center">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
                                <Link href="/services" className="text-xs font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wider transition">
                                    Learn More &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}