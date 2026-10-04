import Link from 'next/link';

export default function ClinicsPage() {
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
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="/clinics" className="text-blue-600 font-semibold">Clinics</Link>
            <Link href="/media" className="hover:text-blue-600 transition">Media & Vlogs</Link>
            <Link href="/testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
            <Link href="/contacts" className="hover:text-blue-600 transition">Contacts</Link>

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
          Chambers & Hospital Attachments
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Clinic Locations & Schedule
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Consult Dr. Sourav Sarkar in person at various hospitals and diagnostic centers across Kolkata, Barrackpur, Barasat, Phoolbagan, Burdwan, and Chuchura.
        </p>
      </section>

      {/* Clinics Grid Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Chamber 1: Barrackpur */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:shadow-md transition">
            <div className="space-y-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Hospital Attachment
              </span>
              <h3 className="text-xl font-bold text-slate-900">Galaxy Hospital</h3>
              <p className="text-slate-500 text-sm">Barrackpur, Kolkata</p>
              
              <div className="pt-4 border-t border-slate-100 space-y-2 text-sm text-slate-700">
                <p><strong className="text-slate-900">Days:</strong> Monday, Wednesday, Friday</p>
                <p><strong className="text-slate-900">Timings:</strong> 7:00 PM – 10:00 PM</p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="block w-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 text-center font-medium py-2.5 rounded-xl border border-slate-200 transition text-sm"
            >
              Book for Barrackpur
            </Link>
          </div>

          {/* Chamber 2: Barasat */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:shadow-md transition">
            <div className="space-y-4">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Specialist Center
              </span>
              <h3 className="text-xl font-bold text-slate-900">Kidney Suraksha Specialist & Diagnostic Center</h3>
              <p className="text-slate-500 text-sm">Barasat, Kolkata</p>
              
              <div className="pt-4 border-t border-slate-100 space-y-2 text-sm text-slate-700">
                <p><strong className="text-slate-900">Days:</strong> Tuesday & Thursday</p>
                <p><strong className="text-slate-900">Timings:</strong> Evening Hours</p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="block w-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 text-center font-medium py-2.5 rounded-xl border border-slate-200 transition text-sm"
            >
              Book for Barasat
            </Link>
          </div>

          {/* Chamber 3: Phoolbagan */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:shadow-md transition">
            <div className="space-y-4">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Clinic Chamber
              </span>
              <h3 className="text-xl font-bold text-slate-900">Sustho Clinic</h3>
              <p className="text-slate-500 text-sm">Phoolbagan, Kolkata</p>
              
              <div className="pt-4 border-t border-slate-100 space-y-2 text-sm text-slate-700">
                <p><strong className="text-slate-900">Wednesday:</strong> 9:00 AM – 11:00 AM</p>
                <p><strong className="text-slate-900">Saturday:</strong> 7:00 PM – 10:00 PM</p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="block w-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 text-center font-medium py-2.5 rounded-xl border border-slate-200 transition text-sm"
            >
              Book for Phoolbagan
            </Link>
          </div>

          {/* Chamber 4: Burdwan & Chuchura */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between hover:shadow-md transition lg:col-span-3">
            <div className="space-y-4">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Weekend Visits
              </span>
              <h3 className="text-xl font-bold text-slate-900">Burdwan & Chuchura Chambers</h3>
              <p className="text-slate-500 text-sm">Outstation Consultations</p>
              
              <div className="pt-4 border-t border-slate-100 space-y-2 text-sm text-slate-700">
                <p><strong className="text-slate-900">Schedule:</strong> Sunday (Whole Day)</p>
                <p><strong className="text-slate-900">Locations:</strong> Periodic availability across Burdwan and Chuchura chambers. Please call ahead to confirm exact token slots.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-block bg-slate-900 hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-xl transition text-sm"
              >
                Inquire for Sunday Slots
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-900 py-16 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Have questions about appointment slots or fees?</h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Get in touch with the reception desk or drop an inquiry to secure your preferred slot.
          </p>
          <div>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl shadow-md transition"
            >
              Contact Reception
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}