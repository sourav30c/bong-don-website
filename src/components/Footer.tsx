// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
//           {/* Col 1: Bio & Credentials */}
//           <div className="lg:col-span-4 space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
//                 DS
//               </div>
//               <div>
//                 <h3 className="font-bold text-white text-lg leading-tight">Dr. Sourav Sarkar</h3>
//                 <p className="text-xs text-blue-400 font-medium">DM Nephrology & MD Medicine</p>
//               </div>
//             </div>

//             <p className="text-sm text-slate-400 leading-relaxed">
//               Gold Medalist Consultant Nephrologist and Internal Medicine Specialist dedicated to advanced renal care, chronic disease management, and public health awareness via <strong>BongDoc</strong>.
//             </p>

//             <div className="pt-2 flex items-center gap-3">
//               <a 
//                 href="https://www.youtube.com/@Drsouravsarkar007" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-500/20 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition"
//               >
//                 <span>YouTube @Drsouravsarkar007 (16K+)</span>
//               </a>
//             </div>
//           </div>

//           {/* Col 2: Navigation Links */}
//           <div className="lg:col-span-2 space-y-4">
//             <h4 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
//               Quick Links
//             </h4>
//             <ul className="space-y-2.5 text-sm">
//               <li>
//                 <Link href="/" className="hover:text-blue-400 transition">Home</Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-blue-400 transition">About Doctor</Link>
//               </li>
//               <li>
//                 <Link href="/services" className="hover:text-blue-400 transition">Clinical Services</Link>
//               </li>
//               <li>
//                 <Link href="/clinics" className="hover:text-blue-400 transition">Chamber Locations</Link>
//               </li>
//               <li>
//                 <Link href="/media" className="hover:text-blue-400 transition">Media & Vlogs</Link>
//               </li>
//               <li>
//                 <Link href="/testimonials" className="hover:text-blue-400 transition">Testimonials</Link>
//               </li>
//               <li>
//                 <Link href="/contacts" className="hover:text-blue-400 transition">Contacts</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Col 3: Key Clinical Services */}
//           <div className="lg:col-span-3 space-y-4">
//             <h4 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
//               Medical Specialties
//             </h4>
//             <ul className="space-y-2.5 text-sm text-slate-400">
//               <li>Chronic Kidney Disease (CKD) Care</li>
//               <li>Dialysis Prescriptions & Oversight</li>
//               <li>Hypertension & Renal Vascular Health</li>
//               <li>Glomerular & Autoimmune Kidney Care</li>
//               <li>Electrolyte & Acid-Base Imbalances</li>
//               <li>General Internal Medicine (MD)</li>
//             </ul>
//           </div>

//           {/* Col 4: Chamber Locations & Contact Desk */}
//           <div className="lg:col-span-3 space-y-4">
//             <h4 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
//               Chambers & Contact
//             </h4>
//             <div className="space-y-3 text-sm text-slate-400">
//               <div>
//                 <strong className="text-white block">Key Chamber Locations:</strong>
//                 <p className="text-xs text-slate-400">Barrackpur • Barasat • Phoolbagan • Burdwan • Chuchura</p>
//               </div>

//               <div className="pt-2 border-t border-slate-800/80 space-y-1">
//                 <p><strong className="text-white">Phone:</strong> +91 824 094 8974</p>
//                 <p><strong className="text-white">Email:</strong> contact@drsouravsarkar.com</p>
//               </div>

//               <div className="pt-1">
//                 <Link 
//                   href="/contacts" 
//                   className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow-sm"
//                 >
//                   Book Consultation &rarr;
//                 </Link>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Medical Disclaimer & Copyright */}
//         <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-3">
//           <p className="leading-relaxed">
//             <strong className="text-slate-400">Medical Information Disclaimer:</strong> The content provided on this website and associated digital platforms (including BongDoc) is intended solely for educational, health literacy, and informational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for specific clinical evaluation.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 pt-2">
//             <p>© {new Date().getFullYear()} Dr. Sourav Sarkar. All rights reserved.</p>
//             <p className="text-slate-600">BongDoc Digital Outreach</p>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Bio, Credentials & Social Icons */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                DS
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">Dr. Sourav Sarkar</h3>
                <p className="text-xs text-blue-400 font-medium">DM Nephrology & MD Medicine</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Gold Medalist Consultant Nephrologist and Internal Medicine Specialist dedicated to advanced renal care, chronic disease management, and public health awareness via <strong>BongDoc</strong>.
            </p>

            {/* Social Media Circular Icons Section */}
            <div className="space-y-3 pt-2">
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
                Find Us On:
              </h4>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/profile.php?id=100088556785059" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@Drsouravsarkar007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/sourav.sarkar003/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">About Doctor</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition">Clinical Services</Link>
              </li>
              <li>
                <Link href="/clinics" className="hover:text-blue-400 transition">Chamber Locations</Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-blue-400 transition">Media & Vlogs</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-blue-400 transition">Testimonials</Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-blue-400 transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Clinical Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Medical Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Chronic Kidney Disease (CKD) Care</li>
              <li>Dialysis Prescriptions & Oversight</li>
              <li>Hypertension & Renal Vascular Health</li>
              <li>Glomerular & Autoimmune Kidney Care</li>
              <li>Electrolyte & Acid-Base Imbalances</li>
              <li>General Internal Medicine (MD)</li>
            </ul>
          </div>

          {/* Col 4: Chamber Locations & Contact Desk */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Chambers & Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <strong className="text-white block">Key Chamber Locations:</strong>
                <p className="text-xs text-slate-400">Barrackpur • Barasat • Phoolbagan • Burdwan • Chuchura</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1">
                <p><strong className="text-white">Phone:</strong> +91 824 094 8974</p>
                <p><strong className="text-white">Email:</strong> <span className="break-all sm:break-normal">contact@drsouravsarkar.com</span></p>
              </div>

              <div className="pt-1">
                <Link 
                  href="/contacts" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow-sm"
                >
                  Book Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Medical Information Disclaimer:</strong> The content provided on this website and associated digital platforms (including BongDoc) is intended solely for educational, health literacy, and informational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for specific clinical evaluation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 pt-2">
            <p>© {new Date().getFullYear()} Dr. Sourav Sarkar. All rights reserved.</p>
            <p className="text-slate-600">BongDoc Digital Outreach</p>
          </div>
        </div>

      </div>
    </footer>
  );
}