import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

const nephrologyServices = [
  {
    slug: "kidney-transplant",
    title: "Kidney Transplant",
    description: "Comprehensive pre-transplant evaluation, surgical expertise coordination, and meticulous post-transplant care for optimal long-term outcomes.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    tag: "Nephrology"
  },
  {
    slug: "renal-failure-management",
    title: "Renal Failure Management",
    description: "Holistic management of acute and chronic renal failure, focusing on improving quality of life and preventing systemic complications.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    tag: "Acute & Chronic"
  },
  {
    slug: "chronic-kidney-disease",
    title: "Chronic Kidney Disease (CKD)",
    description: "Personalized treatment plans to slow disease progression and manage complications of CKD through evidence-based approaches.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
    tag: "CKD Stages 1-5"
  },
  {
    slug: "dialysis-management",
    title: "Dialysis Management",
    description: "State-of-the-art oversight and prescription for comprehensive dialysis management, ensuring maximum patient comfort and efficacy.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    tag: "Dialysis Care"
  },
  {
    slug: "peritoneal-dialysis",
    title: "Peritoneal Dialysis",
    description: "Training and professional support for home-based peritoneal dialysis, offering flexibility and convenience for eligible patients.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    tag: "Home Care"
  },
  {
    slug: "hemodialysis",
    title: "Hemodialysis",
    description: "Advanced hemodialysis unit oversight with skilled support staff, providing efficient and safe blood purification sessions.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    tag: "Hospital Care"
  },
  {
    slug: "hypertension-related-kidney-disorders",
    title: "Hypertension Related Kidney Disorders",
    description: "Specialized care for kidney-related high blood pressure and resistant hypertension cases with advanced treatment options.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tag: "Vascular Health"
  },
  {
    slug: "diabetic-kidney-disease",
    title: "Diabetic Kidney Disease",
    description: "Proactive screening and management for kidney complications arising from diabetes, preserving vital kidney function.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    tag: "Diabetic Care"
  },
  {
    slug: "glomerular-disorders",
    title: "Glomerular Disorders",
    description: "Diagnosis and targeted management of glomerulonephritis, nephrotic syndrome, and autoimmune-related kidney diseases.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    tag: "Immune Care"
  },
];

const generalServices = [
  {
    slug: "electrolyte-disorders",
    title: "Electrolyte Disorders & Stone Prevention",
    description: "Critical evaluation and correction of blood electrolyte imbalances, alongside metabolic prevention protocols for kidney stones.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80",
    tag: "Metabolic Care"
  },
  {
    slug: "infectious-diseases",
    title: "Infectious Diseases & Fevers",
    description: "Accurate diagnosis and evidence-based management of acute fevers, respiratory infections, and systemic adult illnesses.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    tag: "Internal Medicine"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <ScrollReveal>
          <div className="space-y-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200/80 shadow-sm animate-pulse">
              Clinical Expertise & Treatments
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Explore Our Medical Services
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive diagnostic, interventional, and long-term management plans for kidney health, renal replacement therapy, and general internal medicine.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Category 1: Nephrology & Renal Treatments */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Category 01</span>
            <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-blue-600 pl-3.5 mt-1">
              Nephrology & Renal Treatments
            </h2>
            <p className="text-slate-600 text-sm mt-1.5">Advanced care focused on preserving kidney function and managing acute and chronic renal disorders.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nephrologyServices.map((service, index) => (
            <ScrollReveal key={service.slug} className={`h-full delay-[${(index % 3) * 150}ms]`}>
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 bg-slate-900 h-full flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Image Container with Zoom Animation */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"></div>
                  </div>

                  {/* Card Content Card overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-lg border border-slate-100 space-y-3 flex flex-col justify-between group-hover:border-blue-200 transition-colors">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed mt-1.5 line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100/80">
                      <span className="text-[11px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                        Clinical Details
                      </span>
                      <span className="text-xs font-bold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition-all duration-300 flex items-center gap-1 group-hover:translate-x-1">
                        <span>Know More</span>
                        <span className="text-base">&rarr;</span>
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Category 2: General Internal Medicine */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <ScrollReveal>
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Category 02</span>
            <h2 className="text-3xl font-extrabold text-slate-900 border-l-4 border-emerald-600 pl-3.5 mt-1">
              General Internal Medicine
            </h2>
            <p className="text-slate-600 text-sm mt-1.5">Holistic diagnostic evaluations and primary care for complex adult medical conditions.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {generalServices.map((service) => (
            <ScrollReveal key={service.slug} className="h-full">
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 bg-slate-900 h-full flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-110 transition duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-lg border border-slate-100 space-y-3 flex flex-col justify-between group-hover:border-emerald-200 transition-colors">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed mt-1.5 line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100/80">
                      <span className="text-[11px] font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                        Clinical Details
                      </span>
                      <span className="text-xs font-bold text-emerald-600 group-hover:text-emerald-800 uppercase tracking-wider transition-all duration-300 flex items-center gap-1 group-hover:translate-x-1">
                        <span>Know More</span>
                        <span className="text-base">&rarr;</span>
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom Booking CTA Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 py-16 text-white text-center px-4 relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="bg-blue-600/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider border border-blue-400/20">
              Direct Consultations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Need a consultation or medical second opinion?</h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Book an appointment at one of Dr. Sourav Sarkar&apos;s clinic chambers or hospital attachments across Kolkata.
            </p>
            <div className="pt-2">
              <Link
                href="/contacts"
                className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                Book Consultation Now &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}