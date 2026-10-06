// import Image from 'next/image';

// export default function AboutPage() {
//   return (
//     <div>
//       {/* Main Content Header */}
//       <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <span className="inline-block bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200">
//             Professional Profile & Credentials
//           </span>
//           <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
//             Meet Dr. Sourav Sarkar
//           </h1>
//           <p className="text-lg text-slate-600 leading-relaxed">
//             Gold Medalist Consultant Nephrologist & Internal Medicine Specialist dedicated to advanced renal healthcare, evidence-based treatment, and patient empowerment.
//           </p>
//         </div>

//         {/* Bio Grid Section */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 items-start">

//           {/* Left Column: Doctor Photo & Quick Info Box */}
//           <div className="md:col-span-5 space-y-6">
//             <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-slate-200 shadow-xl border-4 border-white">
//               <Image 
//                 src="/LandingProfImage.jpg" 
//                 alt="Dr. Sourav Sarkar" 
//                 fill
//                 sizes="(max-width: 768px) 100vw, 400px"
//                 className="object-cover object-center"
//                 priority
//               />
//             </div>

//             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
//               <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Professional Credentials</h3>
//               <div className="text-sm space-y-2 text-slate-600">
//                 <p><strong className="text-slate-900">Degrees:</strong> MBBS, MD (Medicine), DM (Nephrology)</p>
//                 <p><strong className="text-slate-900">International:</strong> MRCP (London)</p>
//                 <p><strong className="text-slate-900">Accolades:</strong> Gold Medalist</p>
//                 <p><strong className="text-slate-900">Institution:</strong> SSKM (PG) Hospital, Kolkata</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Detailed Narrative & Philosophy */}
//           <div className="md:col-span-7 space-y-8">
//             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
//               <h2 className="text-2xl font-bold text-slate-900">Clinical Background & Philosophy</h2>
//               <p className="text-slate-600 leading-relaxed">
//                 Dr. Sourav Sarkar is a highly skilled Consultant Nephrologist and Internal Medicine Specialist. Having completed his advanced super-specialization training (DM) at premier institutions like SSKM Hospital, Kolkata, he brings extensive hands-on expertise in treating complex renal and systemic disorders.
//               </p>
//               <p className="text-slate-600 leading-relaxed">
//                 Recognized with a Gold Medal and holding an MRCP (London) qualification, his core clinical practice emphasizes early detection of chronic kidney disease (CKD), management of diabetic and hypertensive nephropathy, critical care nephrology, and personalized patient care plans.
//               </p>
//             </div>

//             {/* Educational Qualifications Card */}
//             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
//               <h2 className="text-2xl font-bold text-slate-900">Education & Training</h2>
//               <ul className="space-y-4 text-slate-600">
//                 <li className="flex items-start gap-3 pb-3 border-b border-slate-100">
//                   <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
//                   <div>
//                     <strong className="text-slate-900 block">DM in Nephrology</strong>
//                     <span className="text-sm text-slate-500">Advanced training from SSKM (PG) Hospital, Kolkata. Specializing in renal replacement therapies, dialysis care, and kidney biopsies.</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3 pb-3 border-b border-slate-100">
//                   <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
//                   <div>
//                     <strong className="text-slate-900 block">MD in Medicine (Gold Medalist)</strong>
//                     <span className="text-sm text-slate-500">Rigorous academic and clinical foundation in general internal medicine and complex adult pathology.</span>
//                   </div>
//                 </li>
//                 <li className="flex items-start gap-3 pb-3">
//                   <span className="w-2 h-2 mt-2 rounded-full bg-blue-600 flex-shrink-0"></span>
//                   <div>
//                     <strong className="text-slate-900 block">MRCP (London)</strong>
//                     <span className="text-sm text-slate-500">International professional membership showcasing adherence to global standards of internal medical practice.</span>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             {/* Digital Healthcare Commitment */}
//             <div className="bg-blue-900 text-white p-8 rounded-3xl space-y-4 shadow-md">
//               <h3 className="text-xl font-bold">Digital Outreach & Patient Education</h3>
//               <p className="text-blue-100 text-sm leading-relaxed">
//                 Beyond his hospital chambers and clinical duties, Dr. Sarkar is deeply committed to public health awareness. As a digital content creator and host of <strong>BongDoc</strong> on YouTube, he bridges the gap between medical science and everyday patients, making kidney care and health literacy accessible to thousands.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

// import Image from 'next/image';

// export default function AboutPage() {
//   return (
//     <div className="bg-slate-50 min-h-screen">

//       {/* Top Banner & Profile Header (Inspired by Left-most Reference) */}
//       <section className="bg-slate-900 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-900">
//         <div className="max-w-4xl mx-auto space-y-6 relative z-10">
//           <div className="space-y-2">
//             <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
//               About Us
//             </span>
//             <h1 className="text-3xl sm:text-4xl font-light text-slate-300">
//               Home / <span className="text-white font-medium">About Us</span>
//             </h1>
//           </div>

//           {/* Centered Circular Profile Photo */}
//           <div className="pt-6">
//             <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative bg-slate-800">
//               <Image
//                 src="/LandingProfImage-3.jpg"
//                 alt="Dr. Sourav Sarkar"
//                 fill
//                 sizes="160px"
//                 className="object-cover object-center"
//                 priority
//               />
//             </div>
//           </div>

//           <div className="space-y-3 pt-2">
//             <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
//               Dr. Sourav Sarkar
//             </h2>
//             <p className="text-indigo-200 text-sm sm:text-base font-medium">
//               Consultant Nephrologist & Internal Medicine Specialist (SSKM Hospital Gold Medalist)
//             </p>
//             <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
//               With extensive expertise in advanced renal care, dialysis management, and internal medicine, Dr. Sarkar is dedicated to delivering evidence-based, compassionate patient outcomes and promoting public health literacy across West Bengal.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Lower Credentials & Experience Grid (Inspired by Right-most Reference) */}
//       <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {/* Card 1: Education & Training */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-blue-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🎓</span>
//               <h3 className="text-xl font-bold text-slate-900">Education & Training</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-blue-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">DM in Nephrology</strong>
//                   <span className="text-xs text-slate-500">SSKM (PG) Hospital, Kolkata (Advanced Super-specialization)</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-blue-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">MD in Internal Medicine (Gold Medalist)</strong>
//                   <span className="text-xs text-slate-500">Rigorous academic and clinical training in adult pathology and diagnostics</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-blue-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">MRCP (London)</strong>
//                   <span className="text-xs text-slate-500">International professional membership adhering to global medical standards</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 2: Professional Experience */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-emerald-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🏥</span>
//               <h3 className="text-xl font-bold text-slate-900">Professional Experience</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Consultant Nephrologist & Internal Medicine Specialist</strong>
//                   <span className="text-xs text-slate-500">Premier hospital attachments and private chambers across Kolkata, Barrackpur, and Barasat</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Renal Transplant & Critical Care Oversight</strong>
//                   <span className="text-xs text-slate-500">Managing complex pre- and post-transplant regimens, acute kidney injury, and ICU protocols</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Digital Healthcare Educator</strong>
//                   <span className="text-xs text-slate-500">Creator of BongDoc, bridging clinical science and patient literacy</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 3: Awards & Recognition */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-amber-500">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🏆</span>
//               <h3 className="text-xl font-bold text-slate-900">Awards & Recognition</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-amber-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Gold Medalist in Post-Graduation</strong>
//                   <span className="text-xs text-slate-500">Awarded for exceptional academic and clinical excellence during MD training</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-amber-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">SSKM (PG) Hospital Fellowship Recognition</strong>
//                   <span className="text-xs text-slate-500">Recognized for advanced contributions to nephrology and critical patient care</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 4: Areas of Expertise */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-purple-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🩺</span>
//               <h3 className="text-xl font-bold text-slate-900">Areas of Expertise</h3>
//             </div>

//             <ul className="space-y-3">
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-purple-600 font-bold">✓</span>
//                 <span>Kidney Transplant Evaluation & Post-Op Care</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-purple-600 font-bold">✓</span>
//                 <span>Chronic Kidney Disease (CKD) & Renal Failure</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-purple-600 font-bold">✓</span>
//                 <span>Hemodialysis & Peritoneal Dialysis Management</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-purple-600 font-bold">✓</span>
//                 <span>Hypertension & Diabetic Kidney Disease Care</span>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

// import Image from 'next/image';

// export default function AboutPage() {
//   return (
//     <div className="bg-slate-50 min-h-screen">

//       {/* Top Banner & Profile Header (Vibrant Blue-to-Teal Gradient, Compact Height) */}
//       <section className="text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-gradient-to-r from-blue-900 via-teal-700 to-cyan-800 shadow-md">

//         {/* Subtle Background Pattern Overlay */}
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

//         <div className="max-w-3xl mx-auto space-y-4 relative z-10">
//           <div className="space-y-1">
//             <span className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
//               About Us
//             </span>
//             <h1 className="text-xl sm:text-2xl font-light text-cyan-100/80">
//               Home / <span className="text-white font-medium">About Us</span>
//             </h1>
//           </div>

//           {/* Centered Circular Profile Photo */}
//           <div className="pt-2">
//             <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl relative bg-blue-950">
//               <Image
//                 src="/LandingProfImage.jpg"
//                 alt="Dr. Sourav Sarkar"
//                 fill
//                 sizes="112px"
//                 className="object-cover object-center"
//                 priority
//               />
//             </div>
//           </div>

//           <div className="space-y-1.5 max-w-2xl mx-auto">
//             <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
//               Dr. Sourav Sarkar
//             </h2>
//             <p className="text-cyan-200 text-xs sm:text-sm font-semibold">
//               MD, DM (Nephrology) • MRCP (London)
//             </p>
//             <p className="text-slate-100 text-xs sm:text-sm leading-relaxed pt-1 opacity-95">
//               Dr. Sourav Sarkar is a distinguished nephrologist with extensive experience in the diagnosis and treatment of kidney-related disorders. Dedicated to patient-centric care, he leads advanced renal programs focused on early detection and comprehensive management.
//             </p>
//           </div>

//           {/* Bottom Pill Badge */}
//           <div className="pt-2">
//             <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-5 py-1.5 rounded-full border border-white/25 shadow-sm">
//               <span>💡</span>
//               Renowned Nephrology & Transplant Specialist
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Lower Credentials & Experience Grid (Clean White Cards on Slate-50 Background) */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {/* Card 1: Education & Training */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-cyan-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🎓</span>
//               <h3 className="text-xl font-bold text-slate-900">Education & Training</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">DM in Nephrology</strong>
//                   <span className="text-xs text-slate-500">SSKM (PG) Hospital, Kolkata (Advanced Super-specialization)</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">MD in Internal Medicine (Gold Medalist)</strong>
//                   <span className="text-xs text-slate-500">Rigorous academic and clinical training in adult pathology and diagnostics</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-cyan-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">MRCP (London)</strong>
//                   <span className="text-xs text-slate-500">International professional membership adhering to global medical standards</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 2: Professional Experience */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-emerald-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🏥</span>
//               <h3 className="text-xl font-bold text-slate-900">Professional Experience</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Consultant Nephrologist & Internal Medicine Specialist</strong>
//                   <span className="text-xs text-slate-500">Premier hospital attachments and private chambers across Kolkata, Barrackpur, and Barasat</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Renal Transplant & Critical Care Oversight</strong>
//                   <span className="text-xs text-slate-500">Managing complex pre- and post-transplant regimens, acute kidney injury, and ICU protocols</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Digital Healthcare Educator</strong>
//                   <span className="text-xs text-slate-500">Creator of BongDoc, bridging clinical science and patient literacy</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 3: Awards & Recognition */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-amber-500">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🏆</span>
//               <h3 className="text-xl font-bold text-slate-900">Awards & Recognition</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-amber-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Gold Medalist in Post-Graduation</strong>
//                   <span className="text-xs text-slate-500">Awarded for exceptional academic and clinical excellence during MD training</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-amber-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">SSKM (PG) Hospital Fellowship Recognition</strong>
//                   <span className="text-xs text-slate-500">Recognized for advanced contributions to nephrology and critical patient care</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 4: Areas of Expertise */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-indigo-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🩺</span>
//               <h3 className="text-xl font-bold text-slate-900">Areas of Expertise</h3>
//             </div>

//             <ul className="space-y-3">
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-indigo-600 font-bold">✓</span>
//                 <span>Kidney Transplant Evaluation & Post-Op Care</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-indigo-600 font-bold">✓</span>
//                 <span>Chronic Kidney Disease (CKD) & Renal Failure</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-indigo-600 font-bold">✓</span>
//                 <span>Hemodialysis & Peritoneal Dialysis Management</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-indigo-600 font-bold">✓</span>
//                 <span>Hypertension & Diabetic Kidney Disease Care</span>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }


// import Image from 'next/image';

// export default function AboutPage() {
//   return (
//     <div className="bg-slate-50 min-h-screen">

//       {/* Top Banner & Profile Header (Harmonized with Hero Banner Color Tone) */}
//       <section className="text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 shadow-md border-b border-blue-900/40">

//         {/* Subtle Background Pattern Overlay */}
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

//         <div className="max-w-3xl mx-auto space-y-4 relative z-10">
//           <div className="space-y-1">
//             <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
//               About Us
//             </span>
//             <h1 className="text-xl sm:text-2xl font-light text-slate-300">
//               Home / <span className="text-white font-medium">About Us</span>
//             </h1>
//           </div>

//           {/* Centered Circular Profile Photo */}
//           <div className="pt-2">
//             <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl relative bg-slate-900">
//               <Image
//                 src="/LandingProfImage.jpg"
//                 alt="Dr. Sourav Sarkar"
//                 fill
//                 sizes="112px"
//                 className="object-cover object-center"
//                 priority
//               />
//             </div>
//           </div>

//           <div className="space-y-1.5 max-w-2xl mx-auto">
//             <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
//               Dr. Sourav Sarkar
//             </h2>
//             <p className="text-blue-400 text-xs sm:text-sm font-semibold">
//               MD, DM (Nephrology) • MRCP (London)
//             </p>
//             <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 opacity-95">
//               Dr. Sourav Sarkar is a distinguished nephrologist with extensive experience in the diagnosis and treatment of kidney-related disorders. Dedicated to patient-centric care, he leads advanced renal programs focused on early detection and comprehensive management.
//             </p>
//           </div>

//           {/* Bottom Pill Badge */}
//           <div className="pt-2">
//             <span className="inline-flex items-center gap-2 bg-blue-900/60 backdrop-blur-md text-blue-200 text-xs font-semibold px-5 py-1.5 rounded-full border border-blue-700/40 shadow-sm">
//               <span>💡</span>
//               Renowned Nephrology & Transplant Specialist
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Lower Credentials & Experience Grid (Clean White Cards on Slate-50 Background) */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {/* Card 1: Education & Training */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-blue-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🎓</span>
//               <h3 className="text-xl font-bold text-slate-900">Education & Training</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-blue-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">DM in Nephrology</strong>
//                   <span className="text-xs text-slate-500">SSKM (PG) Hospital, Kolkata (Advanced Super-specialization)</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-blue-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">MD in Internal Medicine (Gold Medalist)</strong>
//                   <span className="text-xs text-slate-500">Rigorous academic and clinical training in adult pathology and diagnostics</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-blue-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">MRCP (London)</strong>
//                   <span className="text-xs text-slate-500">International professional membership adhering to global medical standards</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 2: Professional Experience */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-emerald-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🏥</span>
//               <h3 className="text-xl font-bold text-slate-900">Professional Experience</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Consultant Nephrologist & Internal Medicine Specialist</strong>
//                   <span className="text-xs text-slate-500">Premier hospital attachments and private chambers across Kolkata, Barrackpur, and Barasat</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Renal Transplant & Critical Care Oversight</strong>
//                   <span className="text-xs text-slate-500">Managing complex pre- and post-transplant regimens, acute kidney injury, and ICU protocols</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-emerald-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Digital Healthcare Educator</strong>
//                   <span className="text-xs text-slate-500">Creator of BongDoc, bridging clinical science and patient literacy</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 3: Awards & Recognition */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-amber-500">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🏆</span>
//               <h3 className="text-xl font-bold text-slate-900">Awards & Recognition</h3>
//             </div>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="text-amber-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">Gold Medalist in Post-Graduation</strong>
//                   <span className="text-xs text-slate-500">Awarded for exceptional academic and clinical excellence during MD training</span>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-amber-600 font-bold text-sm mt-0.5">✔</span>
//                 <div>
//                   <strong className="text-slate-900 block text-sm">SSKM (PG) Hospital Fellowship Recognition</strong>
//                   <span className="text-xs text-slate-500">Recognized for advanced contributions to nephrology and critical patient care</span>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Card 4: Areas of Expertise */}
//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 border-l-4 border-l-indigo-600">
//             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
//               <span className="text-2xl">🩺</span>
//               <h3 className="text-xl font-bold text-slate-900">Areas of Expertise</h3>
//             </div>

//             <ul className="space-y-3">
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-indigo-600 font-bold">✓</span>
//                 <span>Kidney Transplant Evaluation & Post-Op Care</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-indigo-600 font-bold">✓</span>
//                 <span>Chronic Kidney Disease (CKD) & Renal Failure</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-indigo-600 font-bold">✓</span>
//                 <span>Hemodialysis & Peritoneal Dialysis Management</span>
//               </li>
//               <li className="flex items-center gap-3 text-slate-700 text-sm">
//                 <span className="text-indigo-600 font-bold">✓</span>
//                 <span>Hypertension & Diabetic Kidney Disease Care</span>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Top Banner & Profile Header */}
      <section className="text-white pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 shadow-md border-b border-blue-900/40">

        {/* Subtle Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 relative z-10">
          <div className="space-y-1">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400">
              About Us
            </span>
          </div>

          {/* Centered Circular Profile Photo */}
          <div className="pt-1 sm:pt-2">
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl relative bg-slate-900">
              <Image
                src="/LandingProfImage.jpg"
                alt="Dr. Sourav Sarkar"
                fill
                sizes="112px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="space-y-1 sm:space-y-1.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Dr. Sourav Sarkar
            </h2>
            <p className="text-blue-400 text-xs sm:text-sm font-semibold">
              MD, DM (Nephrology) • MRCP (London)
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 opacity-95 px-2 sm:px-0">
              Dr. Sourav Sarkar is a distinguished nephrologist with extensive experience in the diagnosis and treatment of kidney-related disorders. Dedicated to patient-centric care, he leads advanced renal programs focused on early detection and comprehensive management.
            </p>
          </div>

          {/* Bottom Pill Badge */}
          <div className="pt-2 flex justify-center">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-900/60 backdrop-blur-md text-blue-200 text-[11px] sm:text-xs font-semibold px-4 sm:px-5 py-1.5 rounded-full border border-blue-700/40 shadow-sm max-w-[300px] sm:max-w-none text-center">
              <span>💡</span>
              <span>Renowned Nephrology & Transplant Specialist</span>
            </span>
          </div>
        </div>
      </section>

      {/* Lower Credentials & Experience Grid with Animated Cards */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Card 1: Education & Training */}
          <ScrollReveal>
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 border-l-4 border-l-blue-600 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3.5 sm:pb-4">
                <span className="text-xl sm:text-2xl">🎓</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Education & Training</h3>
              </div>

              <ul className="space-y-3.5 sm:space-y-4">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm mt-0.5">✔</span>
                  <div>
                    <strong className="text-slate-900 block text-xs sm:text-sm">DM in Nephrology</strong>
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed block mt-0.5">SSKM (PG) Hospital, Kolkata (Advanced Super-specialization)</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm mt-0.5">✔</span>
                  <div>
                    <strong className="text-slate-900 block text-xs sm:text-sm">MD in Internal Medicine (Gold Medalist)</strong>
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed block mt-0.5">Rigorous academic and clinical training in adult pathology and diagnostics</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm mt-0.5">✔</span>
                  <div>
                    <strong className="text-slate-900 block text-xs sm:text-sm">MRCP (London)</strong>
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed block mt-0.5">International professional membership adhering to global medical standards</span>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Card 2: Professional Experience */}
          <ScrollReveal>
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 border-l-4 border-l-emerald-600 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3.5 sm:pb-4">
                <span className="text-xl sm:text-2xl">🏥</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Professional Experience</h3>
              </div>

              <ul className="space-y-3.5 sm:space-y-4">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-emerald-600 font-bold text-xs sm:text-sm mt-0.5">✔</span>
                  <div>
                    <strong className="text-slate-900 block text-xs sm:text-sm">Consultant Nephrologist & Internal Medicine Specialist</strong>
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed block mt-0.5">Premier hospital attachments and private chambers across Kolkata, Barrackpur, and Barasat</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-emerald-600 font-bold text-xs sm:text-sm mt-0.5">✔</span>
                  <div>
                    <strong className="text-slate-900 block text-xs sm:text-sm">Renal Transplant & Critical Care Oversight</strong>
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed block mt-0.5">Managing complex pre- and post-transplant regimens, acute kidney injury, and ICU protocols</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-emerald-600 font-bold text-xs sm:text-sm mt-0.5">✔</span>
                  <div>
                    <strong className="text-slate-900 block text-xs sm:text-sm">Digital Healthcare Educator</strong>
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed block mt-0.5">Creator of BongDoc, bridging clinical science and patient literacy</span>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Card 3: Awards & Recognition */}
          <ScrollReveal>
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 border-l-4 border-l-amber-500 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3.5 sm:pb-4">
                <span className="text-xl sm:text-2xl">🏆</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Awards & Recognition</h3>
              </div>

              <ul className="space-y-3.5 sm:space-y-4">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-amber-600 font-bold text-xs sm:text-sm mt-0.5">✔</span>
                  <div>
                    <strong className="text-slate-900 block text-xs sm:text-sm">Gold Medalist in Post-Graduation</strong>
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed block mt-0.5">Awarded for exceptional academic and clinical excellence during MD training</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-amber-600 font-bold text-xs sm:text-sm mt-0.5">✔</span>
                  <div>
                    <strong className="text-slate-900 block text-xs sm:text-sm">SSKM (PG) Hospital Fellowship Recognition</strong>
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-relaxed block mt-0.5">Recognized for advanced contributions to nephrology and critical patient care</span>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Card 4: Areas of Expertise */}
          <ScrollReveal>
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 border-l-4 border-l-indigo-600 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3.5 sm:pb-4">
                <span className="text-xl sm:text-2xl">🩺</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Areas of Expertise</h3>
              </div>

              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-center gap-2.5 sm:gap-3 text-slate-700 text-xs sm:text-sm">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Kidney Transplant Evaluation & Post-Op Care</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3 text-slate-700 text-sm text-xs sm:text-sm">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Chronic Kidney Disease (CKD) & Renal Failure</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3 text-slate-700 text-sm text-xs sm:text-sm">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Hemodialysis & Peritoneal Dialysis Management</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3 text-slate-700 text-sm text-xs sm:text-sm">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>Hypertension & Diabetic Kidney Disease Care</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}