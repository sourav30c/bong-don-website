'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "When should I consult a nephrologist instead of a general physician?",
            answer: "You should consult a nephrologist if you have persistent protein or blood in your urine, chronic high blood pressure that is hard to control, a high serum creatinine level, recurrent kidney stones, or a declining eGFR."
        },
        {
            question: "What are the early warning signs of Chronic Kidney Disease (CKD)?",
            answer: "Early-stage CKD often has no symptoms. As it progresses, signs can include swelling in the feet, ankles, or hands, persistent fatigue, foamy urine, puffiness around the eyes, and frequent nighttime urination."
        },
        {
            question: "How is kidney function measured?",
            answer: "Kidney function is primarily measured using a blood test to check Serum Creatinine (used to calculate your eGFR or Glomerular Filtration Rate) and a urine test to check for protein leakage (Albumin-Creatinine Ratio)."
        },
        {
            question: "Can Chronic Kidney Disease (CKD) be reversed?",
            answer: "While advanced kidney damage cannot always be completely reversed, early detection and strict management of underlying conditions like diabetes and hypertension can effectively halt or significantly slow down disease progression."
        },
        {
            question: "What should my diet look like if I have kidney disease?",
            answer: "A kidney-friendly diet often involves managing intake of sodium (salt), potassium, phosphorus, and high-quality protein, depending on your specific CKD stage. A personalized consultation with a specialist is essential."
        },
        {
            question: "What causes kidney stones and how can they be prevented?",
            answer: "Kidney stones are formed by solid crystal deposits from minerals in your urine. Prevention typically involves maintaining adequate daily hydration, reducing salt and animal protein intake, and following medical advice based on stone composition analysis."
        },
        {
            question: "How does high blood pressure affect my kidneys?",
            answer: "High blood pressure can damage the delicate blood vessels in your kidneys, reducing their ability to filter waste properly. Over time, this can lead to kidney scarring and failure, making strict blood pressure control vital."
        },
        {
            question: "What does a kidney transplant evaluation involve?",
            answer: "A transplant evaluation includes comprehensive cardiac, vascular, and immunological testing to ensure the recipient is healthy enough for surgery, alongside medical matching for potential living or deceased donors."
        },
        {
            question: "What is the difference between hemodialysis and peritoneal dialysis?",
            answer: "Hemodialysis uses a machine outside the body to filter toxins from your blood through an artificial kidney (dialyzer), usually done at a center. Peritoneal dialysis uses the lining of your abdomen (peritoneum) to filter waste inside the body, which can often be done at home."
        },
        {
            question: "How can diabetic kidney disease (diabetic nephropathy) be managed?",
            answer: "Management focuses on strict blood sugar control, maintaining optimal blood pressure, using specific protective medications prescribed by your nephrologist, and regular monitoring of urine protein levels."
        },
        {
            question: "Do I need a doctor's referral to book a consultation with Dr. Sourav Sarkar?",
            answer: "No formal referral is mandatory to book a consultation, though bringing previous lab reports, prescription history, and medical imaging to your appointment is highly recommended for a thorough evaluation."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
                        Patient Guide & Support
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Find expert answers regarding kidney health, chronic conditions, diagnostic tests, and clinical consultations with Dr. Sourav Sarkar.
                    </p>
                </div>

                {/* FAQ Accordion Container */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <ScrollReveal key={index}>
                                <div
                                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${isOpen ? 'border-blue-500 ring-1 ring-blue-500/20 shadow-md' : 'border-slate-200 hover:border-slate-300'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                                    >
                                        <span className="font-bold text-slate-900 text-base sm:text-lg">
                                            {faq.question}
                                        </span>
                                        <span className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold transition-transform duration-300 flex-shrink-0 ${isOpen ? 'transform rotate-180 bg-blue-600 text-white' : ''
                                            }`}>
                                            ↓
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Bottom Help Card */}
                <ScrollReveal>
                    <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-xl border border-blue-900/40">
                        <h3 className="text-xl font-bold">Have a specific question not listed here?</h3>
                        <p className="text-slate-300 text-sm max-w-xl mx-auto">
                            Feel free to reach out directly or book a consultation to discuss your specific reports and medical history with Dr. Sourav Sarkar.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contacts"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md text-sm"
                            >
                                Get in Touch &rarr;
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    );
}