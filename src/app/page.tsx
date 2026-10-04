
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from '@/components/landing/TrustStrip';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import StatisticsSection from '@/components/landing/StatisticsSection';
import ClinicsSection from '@/components/landing/ClinicsSection';
import WhyChooseSection from '@/components/landing/WhyChooseSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import App from 'next/app';
import AppointmentCtaSection from '@/components/landing/AppointmentCtaSection';

export default function LandingPage() {
  // return (
  //   <div>
  //     {/* Hero Section */}
  //     <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  //               href="/contacts" 
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
  //               {/* Replace with actual image path in public folder */}
  //               <Image 
  //                 src="/LandingProfImage.jpg" 
  //                  alt="Dr. Sourav Sarkar" 
  //                   fill
  //                   sizes="(max-width: 768px) 100vw, 450px"
  //                   className="object-cover object-center"
  //                   priority
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

  //     {/* Core Specialties Preview Section */}
  //     <section className="py-16 bg-white border-t border-slate-200">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="text-center max-w-2xl mx-auto mb-12">
  //           <h2 className="text-3xl font-bold tracking-tight text-slate-900">Areas of Clinical Expertise</h2>
  //           <p className="text-slate-600 mt-2">Comprehensive medical care focusing on advanced renal and general internal conditions.</p>
  //         </div>

  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  //           <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:shadow-md transition">
  //             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">01</div>
  //             <h3 className="text-xl font-bold text-slate-900">Advanced Nephrology</h3>
  //             <p className="text-slate-600 text-sm leading-relaxed">Management of chronic kidney disease, glomerular disorders, dialysis care, and electrolyte imbalances.</p>
  //           </div>

  //           <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:shadow-md transition">
  //             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">02</div>
  //             <h3 className="text-xl font-bold text-slate-900">Internal Medicine (MD)</h3>
  //             <p className="text-slate-600 text-sm leading-relaxed">Expert diagnosis and management of complex adult illnesses, acute infections, and metabolic syndromes.</p>
  //           </div>

  //           <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:shadow-md transition">
  //             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">03</div>
  //             <h3 className="text-xl font-bold text-slate-900">Hypertension & Care</h3>
  //             <p className="text-slate-600 text-sm leading-relaxed">Specialized care for resistant high blood pressure and renal vascular health preservation.</p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //   </div>
  // );

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      {/* <TrustStrip /> */}
      <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <WhyChooseSection />
      <ClinicsSection />
      <TestimonialsSection />
      <AppointmentCtaSection />
      {/* Next components will go here one by one */}
    </div>
  )

}
