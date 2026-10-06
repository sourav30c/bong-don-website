import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';

const servicesData: Record<string, {
    title: string;
    category: string;
    description: string;
    heroImage: string;
    overview: string;
    keyPoints: string[];
    treatmentApproach: string[];
}> = {
    "kidney-transplant": {
        title: "Kidney Transplant",
        category: "OUR SERVICES",
        description: "Comprehensive pre-transplant evaluation, surgical expertise coordination, and meticulous post-transplant care for optimal long-term outcomes. A kidney transplant is often the gold-standard renal replacement therapy for end-stage renal disease (ESRD). Dr. Sourav Sarkar provides rigorous pre-transplant fitness evaluations, donor compatibility counseling, and long-term immunosuppressive management to protect the graft and ensure a high quality of life.",
        heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
        overview: "A kidney transplant is often the gold-standard renal replacement therapy for end-stage renal disease (ESRD). Dr. Sourav Sarkar provides rigorous pre-transplant fitness evaluations, donor compatibility counseling, and long-term immunosuppressive management to protect the graft and ensure a high quality of life.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Holistic recipient workup to rule out hidden infections or cardiovascular risks",
            "Close coordination with premier transplant surgical teams",
            "Customized immunosuppression tapering schedules to minimize infection risks"
        ]
    },
    "renal-failure-management": {
        title: "Renal Failure Management",
        category: "OUR SERVICES",
        description: "Holistic management of acute and chronic renal failure, focusing on improving quality of life and preventing systemic complications. Renal failure demands swift diagnostic accuracy and continuous multidisciplinary care. Whether dealing with sudden functional decline or advanced failure, timely intervention halts further organ damage.",
        heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
        overview: "Renal failure demands swift diagnostic accuracy and continuous multidisciplinary care. Whether dealing with sudden functional decline or advanced failure, timely intervention halts further organ damage.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Aggressive blood pressure and glycemic control",
            "Medication adjustment for impaired glomerular filtration rates (eGFR)",
            "Regular biomarker tracking to monitor disease velocity"
        ]
    },
    "chronic-kidney-disease": {
        title: "Chronic Kidney Disease (CKD)",
        category: "OUR SERVICES",
        description: "Personalized treatment plans to slow disease progression and manage complications of CKD through evidence-based approaches. Chronic Kidney Disease (CKD) progresses silently through five stages. Early screening, identification of underlying causes like diabetes or hypertension, and strict nephroprotection can delay dialysis by years.",
        heroImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1000&q=80",
        overview: "Chronic Kidney Disease (CKD) progresses silently through five stages. Early screening, identification of underlying causes like diabetes or hypertension, and strict nephroprotection can delay dialysis by years.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Implementation of evidence-based reno-protective medications",
            "Routine surveillance of serum creatinine, potassium, and hemoglobin",
            "Patient education to empower self-management at home"
        ]
    },
    "dialysis-management": {
        title: "Dialysis Management",
        category: "OUR SERVICES",
        description: "State-of-the-art oversight and prescription for comprehensive dialysis management, ensuring maximum patient comfort and efficacy. Adequate dialysis is vital for patients whose kidneys can no longer filter waste products. Dr. Sarkar oversees dialysis prescriptions, monitors adequacy scores (Kt/V), and manages intradialytic complications.",
        heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
        overview: "Adequate dialysis is vital for patients whose kidneys can no longer filter waste products. Dr. Sarkar oversees dialysis prescriptions, monitors adequacy scores (Kt/V), and manages intradialytic complications.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Individualized dry weight targets",
            "Regular biochemical review pre- and post-dialysis",
            "Empathetic counseling for patients adapting to regular dialysis schedules"
        ]
    },
    "peritoneal-dialysis": {
        title: "Peritoneal Dialysis",
        category: "OUR SERVICES",
        description: "Training and professional support for home-based peritoneal dialysis, offering flexibility and convenience for eligible patients. Peritoneal Dialysis (PD) allows patients to perform blood filtration at home using the body's natural peritoneal membrane. It offers greater dietary freedom and lifestyle flexibility compared to conventional hemodialysis.",
        heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
        overview: "Peritoneal Dialysis (PD) allows patients to perform blood filtration at home using the body's natural peritoneal membrane. It offers greater dietary freedom and lifestyle flexibility compared to conventional hemodialysis.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Rigorous aseptic technique training for patients and caregivers",
            "Periodic effluent and clearance testing",
            "Nutritional protein supplementation guidance"
        ]
    },
    "hemodialysis": {
        title: "Hemodialysis",
        category: "OUR SERVICES",
        description: "Advanced hemodialysis unit oversight with skilled support staff, providing efficient and safe blood purification sessions. Hemodialysis cleanses the blood externally using a specialized dialyzer machine. Dr. Sarkar coordinates closely with high-end hospital dialysis units to ensure sterile, smooth, and effective blood purification.",
        heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
        overview: "Advanced hemodialysis unit oversight with skilled support staff, providing efficient and safe blood purification sessions. Hemodialysis cleanses the blood externally using a specialized dialyzer machine. Dr. Sarkar coordinates closely with high-end hospital dialysis units to ensure sterile, smooth, and effective blood purification.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Customized blood flow and dialysate flow rates",
            "Integration of ultrafiltration profiling",
            "Comprehensive nursing oversight and safety checks"
        ]
    },
    "hypertension-related-kidney-disorders": {
        title: "Hypertension Related Kidney Disorders",
        category: "OUR SERVICES",
        description: "Specialized care for kidney-related high blood pressure and resistant hypertension cases with advanced treatment options. The kidneys and blood pressure share a delicate two-way relationship: high blood pressure damages kidney blood vessels, and failing kidneys release hormones that spike blood pressure. Breaking this cycle requires expert pharmacological management.",
        heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
        overview: "The kidneys and blood pressure share a delicate two-way relationship: high blood pressure damages kidney blood vessels, and failing kidneys release hormones that spike blood pressure. Breaking this cycle requires expert pharmacological management.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Combination antihypertensive therapy with synergistic renal benefits",
            "Strict sodium and lifestyle counseling",
            "Regular screening for microalbuminuria"
        ]
    },
    "diabetic-kidney-disease": {
        title: "Diabetic Kidney Disease",
        category: "OUR SERVICES",
        description: "Proactive screening and management for kidney complications arising from diabetes, preserving vital kidney function. Diabetic nephropathy is the leading cause of chronic kidney disease worldwide. Early detection via urine albumin tests and modern glucose-lowering agents with kidney-protective profiles can arrest disease progression.",
        heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80",
        overview: "Proactive screening and management for kidney complications arising from diabetes, preserving vital kidney function. Diabetic nephropathy is the leading cause of chronic kidney disease worldwide. Early detection via urine albumin tests and modern glucose-lowering agents with kidney-protective profiles can arrest disease progression.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Multidisciplinary diabetes-nephrology alignment",
            "Blood glucose self-monitoring and HbA1c target optimization",
            "Regular ophthalmology and vascular screening referrals"
        ]
    },
    "glomerular-disorders": {
        title: "Glomerular Disorders",
        category: "OUR SERVICES",
        description: "Diagnosis and targeted management of glomerulonephritis, nephrotic syndrome, and autoimmune-related kidney diseases. Glomerular diseases attack the tiny filtering units of the kidneys, often leading to heavy protein leakage, blood in urine, and swelling. These frequently require precise immunological diagnosis and targeted therapy.",
        heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
        overview: "Glomerular diseases attack the tiny filtering units of the kidneys, often leading to heavy protein leakage, blood in urine, and swelling. These frequently require precise immunological diagnosis and targeted therapy.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Targeted anti-inflammatory and immunosuppressive protocols",
            "Edema and blood pressure control via specialized diuretics",
            "Infection prophylaxis during active immunosuppression"
        ]
    },
    "electrolyte-disorders": {
        title: "Electrolyte Disorders & Stone Prevention",
        category: "GENERAL INTERNAL MEDICINE",
        description: "Critical evaluation and correction of blood electrolyte imbalances, alongside metabolic prevention protocols for kidney stones. Maintaining precise levels of sodium, potassium, calcium, and acid-base balance is vital for neuromuscular and cardiac function. Dr. Sarkar provides advanced metabolic workups and targeted medical prevention plans to stop recurring nephrolithiasis.",
        heroImage: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1000&q=80",
        overview: "Critical evaluation and correction of blood electrolyte imbalances, alongside metabolic prevention protocols for kidney stones. Maintaining precise levels of sodium, potassium, calcium, and acid-base balance is vital for neuromuscular and cardiac function.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Comprehensive 24-hour urine metabolic evaluations",
            "Targeted oral electrolyte replacement or restriction protocols",
            "Hydration and dietary modification strategies for stone prevention"
        ]
    },
    "infectious-diseases": {
        title: "Infectious Diseases & Fevers",
        category: "GENERAL INTERNAL MEDICINE",
        description: "Accurate diagnosis and evidence-based management of acute fevers, respiratory infections, and systemic adult illnesses. Acute fevers and persistent infections require rapid diagnostic clarity to prevent systemic complications. Dr. Sarkar offers expert internal medicine evaluations, appropriate antimicrobial stewardship, and holistic recovery care.",
        heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
        overview: "Accurate diagnosis and evidence-based management of acute fevers, respiratory infections, and systemic adult illnesses. Acute fevers and persistent infections require rapid diagnostic clarity to prevent systemic complications.",
        keyPoints: ["Accurate Diagnosis", "Tailored Treatment", "Ongoing Monitoring"],
        treatmentApproach: [
            "Comprehensive clinical workup and targeted laboratory investigations",
            "Safe and rational antibiotic prescription guidelines",
            "Supportive care and monitoring for vulnerable adult patients"
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen py-8 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">

                {/* Back Link */}
                <ScrollReveal>
                    <div>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-bold transition-all duration-300 group"
                        >
                            <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                            <span>Back to All Services</span>
                        </Link>
                    </div>
                </ScrollReveal>

                {/* 2-Column Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

                    {/* Left Column: Large Image (Span 6) */}
                    <div className="lg:col-span-6">
                        <ScrollReveal>
                            <div className="relative h-[220px] min-[400px]:h-[280px] sm:h-[380px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                                <Image
                                    src={service.heroImage}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 600px"
                                    className="object-cover object-center group-hover:scale-105 transition duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Title, Description & Highlights (Span 6) */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                        <ScrollReveal>
                            <div className="space-y-2.5 sm:space-y-3">
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full shadow-sm">
                                    {service.category}
                                </span>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                                    {service.title}
                                </h1>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                                {service.description}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="space-y-3 sm:space-y-4 pt-2 border-t border-slate-100">
                                <h3 className="text-base sm:text-lg font-bold text-slate-950">Key Highlights:</h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {service.keyPoints.map((point, index) => (
                                        <li key={index} className="flex items-center gap-2.5 sm:gap-3 text-slate-700 text-xs sm:text-sm font-semibold bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100">
                                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] sm:text-xs flex-shrink-0">✓</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="pt-2 sm:pt-4">
                                <Link
                                    href="/contacts"
                                    className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-center px-6 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-xs sm:text-base leading-snug"
                                >
                                    Book Consultation for {service.title} &rarr;
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>

                {/* Treatment Approach Section */}
                {service.treatmentApproach && service.treatmentApproach.length > 0 && (
                    <ScrollReveal>
                        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200 space-y-4 sm:space-y-6 shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Treatment & Clinical Approach</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                {service.treatmentApproach.map((step, idx) => (
                                    <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 space-y-2.5 sm:space-y-3 shadow-xs">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs sm:text-sm">
                                            0{idx + 1}
                                        </div>
                                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                )}

            </div>
        </div>
    );
}