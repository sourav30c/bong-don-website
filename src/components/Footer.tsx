import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Bio & Credentials */}
          <div className="lg:col-span-4 space-y-4">
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

            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://www.youtube.com/@Drsouravsarkar007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-500/20 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition"
              >
                <span>YouTube @Drsouravsarkar007 (16K+)</span>
              </a>
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
                <Link href="/contacts" className="hover:text-blue-400 transition">Contacts</Link>
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
                <p><strong className="text-white">Email:</strong> contact@drsouravsarkar.com</p>
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
