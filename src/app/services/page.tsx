//import Link from 'next/link';

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
      
//       {/* Navigation Bar */}
//       <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//           <Link href="/" className="font-bold text-xl tracking-tight text-slate-800">
//             Dr. Sourav Sarkar
//           </Link>
//           <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
//             <Link href="/" className="hover:text-blue-600 transition">Home</Link>
//             <Link href="/about" className="hover:text-blue-600 transition">About</Link>
//             <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
//             <Link href="/clinics" className="hover:text-blue-600 transition">Clinics</Link>
//             <Link href="/media" className="hover:text-blue-600 transition">Media & Vlogs</Link>
//             <Link href="/testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
//             <Link href="/contacts" className="hover:text-blue-600 transition">Contacts</Link>

//           </nav>
//           <div>
//             <Link 
//               href="/contact" 
//               className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition"
//             >
//               Book Appointment
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Header Section */}
//       <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
//         <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
//           Clinical Expertise & Treatments
//         </span>
//         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
//           Specialized Medical Services
//         </h1>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//           Comprehensive diagnostic, interventional, and long-term management plans for kidney health, renal replacement therapy, and general internal medicine.
//         </p>
//       </section>

//       {/* Category 1: Nephrology & Dialysis Care */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
//             Nephrology & Renal Treatments
//           </h2>
//           <p className="text-slate-600 text-sm mt-1">Advanced care focused on preserving kidney function and managing acute and chronic renal disorders.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
//             <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-lg">01</div>
//             <h3 className="text-xl font-bold text-slate-900">Chronic Kidney Disease (CKD)</h3>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               Early detection, progression slowing, dietary guidance, and comprehensive metabolic monitoring for chronic renal failure patients.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
//             <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-lg">02</div>
//             <h3 className="text-xl font-bold text-slate-900">Dialysis Care & Management</h3>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               Prescription, oversight, and troubleshooting for hemodialysis and peritoneal dialysis regimens, ensuring optimal patient safety and fluid balance.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
//             <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-lg">03</div>
//             <h3 className="text-xl font-bold text-slate-900">Hypertension & Vascular Health</h3>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               Specialized evaluation and treatment for hard-to-control or treatment-resistant high blood pressure and renal artery protection.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
//             <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-lg">04</div>
//             <h3 className="text-xl font-bold text-slate-900">Glomerular Disorders</h3>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               Diagnosis and targeted management of glomerulonephritis, nephrotic syndrome, and autoimmune-related kidney diseases.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
//             <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-lg">05</div>
//             <h3 className="text-xl font-bold text-slate-900">Electrolyte & Acid-Base Disorders</h3>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               Critical evaluation and correction of severe sodium, potassium, calcium, and pH blood imbalances.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
//             <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-lg">06</div>
//             <h3 className="text-xl font-bold text-slate-900">Kidney Stone Prevention</h3>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               Metabolic workups and medical prevention protocols for recurring nephrolithiasis (kidney stones).
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Category 2: General Internal Medicine */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
//             General Internal Medicine
//           </h2>
//           <p className="text-slate-600 text-sm mt-1">Holistic diagnostic evaluations and primary care for complex adult medical conditions.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
//             <h3 className="text-xl font-bold text-slate-900">Diabetes & Metabolic Management</h3>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               Comprehensive blood sugar control, prevention of diabetic complications (particularly diabetic nephropathy), and lifestyle counselling.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition">
//             <h3 className="text-xl font-bold text-slate-900">Adult Infectious Diseases & Fever Workup</h3>
//             <p className="text-slate-600 text-sm leading-relaxed">
//               Accurate diagnosis and evidence-based management of acute fevers, respiratory infections, and systemic illnesses.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Bottom Booking CTA Banner */}
//       <section className="bg-blue-900 py-16 text-white text-center px-4">
//         <div className="max-w-3xl mx-auto space-y-6">
//           <h2 className="text-3xl font-bold">Need a consultation or medical second opinion?</h2>
//           <p className="text-blue-100 text-sm sm:text-base">
//             Book an appointment at one of Dr. Sourav Sarkar's clinic chambers or hospital attachments across Kolkata.
//           </p>
//           <div>
//             <Link 
//               href="/contact" 
//               className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl shadow-md transition"
//             >
//               Book Consultation Now
//             </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }



import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-slate-800">
            Dr. Sourav Sarkar
          </Link>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
            <Link href="/clinics" className="hover:text-blue-600 transition">Clinics</Link>
            <Link href="/media" className="hover:text-blue-600 transition">Media & Vlogs</Link>
            <Link href="/testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
          </nav>
          <div>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </header>

      {/* Header Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
          Clinical Expertise & Treatments
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Services We Provide
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive diagnostic, interventional, and long-term management plans for kidney health, renal replacement therapy, and general internal medicine.
        </p>
      </section>

      {/* Category 1: Nephrology & Dialysis Care */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            Nephrology & Renal Treatments
          </h2>
          <p className="text-slate-600 text-sm mt-1">Advanced care focused on preserving kidney function and managing acute and chronic renal disorders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: CKD */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80" 
                alt="Chronic Kidney Disease" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Chronic Kidney Disease (CKD)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Early detection, progression slowing, dietary guidance, and comprehensive metabolic monitoring for chronic renal failure patients.
              </p>
            </div>
          </div>

          {/* Card 2: Dialysis */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
                alt="Dialysis Oversight" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Dialysis Oversight</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Prescription, oversight, and troubleshooting for hemodialysis and peritoneal dialysis regimens, ensuring optimal patient safety and fluid balance.
              </p>
            </div>
          </div>

          {/* Card 3: Hypertension */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Hypertension & Care" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Hypertension & Care</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Specialized evaluation and treatment for hard-to-control or treatment-resistant high blood pressure and renal artery protection.
              </p>
            </div>
          </div>

          {/* Card 4: Glomerular */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" 
                alt="Glomerular Disorders" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Glomerular Disorders</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Diagnosis and targeted management of glomerulonephritis, nephrotic syndrome, and autoimmune-related kidney diseases.
              </p>
            </div>
          </div>

          {/* Card 5: Electrolyte */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80" 
                alt="Electrolyte Disorders" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Electrolyte Disorders</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Critical evaluation and correction of severe sodium, potassium, calcium, and pH blood imbalances.
              </p>
            </div>
          </div>

          {/* Card 6: Kidney Stones */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
                alt="Kidney Stone Prevention" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Kidney Stone Prevention</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Metabolic workups and medical prevention protocols for recurring nephrolithiasis and stones.
              </p>
            </div>
          </div>

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
          
          {/* Diabetes */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80" 
                alt="Diabetes & Management" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Diabetes & Management</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Comprehensive blood sugar control, prevention of diabetic complications (particularly diabetic nephropathy), and lifestyle counselling.
              </p>
            </div>
          </div>

          {/* Infectious Diseases */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
                alt="Infectious Diseases & Fevers" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-white/95 backdrop-blur-md m-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Infectious Diseases & Fevers</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Accurate diagnosis and evidence-based management of acute fevers, respiratory infections, and systemic illnesses.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Booking CTA Banner */}
      <section className="bg-blue-900 py-16 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Need a consultation or medical second opinion?</h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Book an appointment at one of Dr. Sourav Sarkar's clinic chambers or hospital attachments across Kolkata.
          </p>
          <div>
            <Link 
              href="/contact" 
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