import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
          Clinical Expertise & Treatments
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Explore Our Medical Services
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive diagnostic, interventional, and long-term management plans for kidney health, renal replacement therapy, and general internal medicine.
        </p>
      </section>

      {/* Category 1: Nephrology & Renal Treatments */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            Nephrology & Renal Treatments
          </h2>
          <p className="text-slate-600 text-sm mt-1">Advanced care focused on preserving kidney function and managing acute and chronic renal disorders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 1. Kidney Transplant */}
          <Link href="/services/kidney-transplant" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                  alt="Kidney Transplant"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Kidney Transplant</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Comprehensive pre-transplant evaluation, surgical expertise coordination, and meticulous post-transplant care for optimal long-term outcomes.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 2. Renal Failure Management */}
          <Link href="/services/renal-failure-management" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Renal Failure Management"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Renal Failure Management</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Holistic management of acute and chronic renal failure, focusing on improving quality of life and preventing systemic complications.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 3. Chronic Kidney Disease (CKD) */}
          <Link href="/services/chronic-kidney-disease" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80"
                  alt="Chronic Kidney Disease (CKD)"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Chronic Kidney Disease (CKD)</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Personalized treatment plans to slow disease progression and manage complications of CKD through evidence-based approaches.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 4. Dialysis Management */}
          <Link href="/services/dialysis-management" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                  alt="Dialysis Management"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Dialysis Management</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    State-of-the-art oversight and prescription for comprehensive dialysis management, ensuring maximum patient comfort and efficacy.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 5. Peritoneal Dialysis */}
          <Link href="/services/peritoneal-dialysis" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Peritoneal Dialysis"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Peritoneal Dialysis</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Training and professional support for home-based peritoneal dialysis, offering flexibility and convenience for eligible patients.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 6. Hemodialysis */}
          <Link href="/services/hemodialysis" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                  alt="Hemodialysis"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Hemodialysis</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Advanced hemodialysis unit oversight with skilled support staff, providing efficient and safe blood purification sessions.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 7. Hypertension Related Kidney Disorders */}
          <Link href="/services/hypertension-related-kidney-disorders" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Hypertension Related Kidney Disorders"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Hypertension Related Kidney Disorders</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Specialized care for kidney-related high blood pressure and resistant hypertension cases with advanced treatment options.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 8. Diabetic Kidney Disease */}
          <Link href="/services/diabetic-kidney-disease" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                  alt="Diabetic Kidney Disease"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Diabetic Kidney Disease</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Proactive screening and management for kidney complications arising from diabetes, preserving vital kidney function.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 9. Glomerular Disorders */}
          <Link href="/services/glomerular-disorders" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                  alt="Glomerular Disorders"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Glomerular Disorders</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Diagnosis and targeted management of glomerulonephritis, nephrotic syndrome, and autoimmune-related kidney diseases.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Category 2: General Internal Medicine */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            General Internal Medicine
          </h2>
          <p className="text-slate-600 text-sm mt-1">Holistic diagnostic evaluations and primary care for complex adult medical conditions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Electrolyte & Stones */}
          <Link href="/services/electrolyte-disorders" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80"
                  alt="Electrolyte Disorders & Stone Prevention"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Electrolyte Disorders & Stone Prevention</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Critical evaluation and correction of blood electrolyte imbalances, alongside metabolic prevention protocols for kidney stones.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Infectious Diseases & Fevers */}
          <Link href="/services/infectious-diseases" className="group block h-full">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-full flex flex-col justify-between group-hover:shadow-xl group-hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                  alt="Infectious Diseases & Fevers"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">Infectious Diseases & Fevers</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    Accurate diagnosis and evidence-based management of acute fevers, respiratory infections, and systemic adult illnesses.
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 uppercase tracking-wider transition">
                    Know More &rarr;
                  </span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Bottom Booking CTA Banner */}
      <section className="bg-blue-900 py-16 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Need a consultation or medical second opinion?</h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Book an appointment at one of Dr. Sourav Sarkar&apos;s clinic chambers or hospital attachments across Kolkata.
          </p>
          <div>
            <Link
              href="/contacts"
              className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl shadow-md transition"
            >
              Book Consultation Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}