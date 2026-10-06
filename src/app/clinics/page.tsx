'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ClinicsPage() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      title: "Galaxy Hospital - Main Lobby & Emergency",
      location: "Barrackpur"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      title: "Kidney Suraksha Specialist & Diagnostic Center",
      location: "Barasat"
    },
    {
      url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      title: "Sustho Clinic Consultation Chamber",
      location: "Phoolbagan, Kolkata"
    },
    {
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
      title: "Advanced Renal Care & Dialysis Unit",
      location: "Kolkata Attachments"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
      title: "Patient Care & Diagnostic Suite",
      location: "West Bengal Chambers"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Header Section */}
      <section className="py-10 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
        <ScrollReveal>
          <div className="space-y-3 sm:space-y-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-blue-200 shadow-sm animate-pulse">
              Chambers & Hospital Attachments
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Clinic Locations & Schedule
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Consult Dr. Sourav Sarkar in person at various hospitals and diagnostic centers across Kolkata, Barrackpur, Barasat, Phoolbagan, Burdwan, and Chuchura.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Auto-Sliding Chamber Photo Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <ScrollReveal>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 h-[260px] min-[400px]:h-[320px] sm:h-[420px] lg:h-[480px] group">
            <Image
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover object-center transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

            {/* Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-14 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-1 sm:space-y-2 z-10">
              <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full uppercase tracking-wider shadow">
                {galleryImages[currentIndex].location}
              </span>
              <h3 className="text-base sm:text-2xl lg:text-3xl font-extrabold pt-1 sm:pt-2 text-white drop-shadow leading-snug line-clamp-2">
                {galleryImages[currentIndex].title}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md text-base sm:text-xl font-bold border border-white/20 z-20"
              aria-label="Previous Image"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md text-base sm:text-xl font-bold border border-white/20 z-20"
              aria-label="Next Image"
            >
              &#10095;
            </button>

            {/* Pagination Indicators */}
            <div className="absolute bottom-6 right-6 hidden sm:flex space-x-2 z-20">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${currentIndex === idx ? 'bg-blue-500 w-8' : 'bg-white/40 hover:bg-white w-2.5'}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Clinics Grid Section with Entrance Animations */}
      <section className="py-4 sm:py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Chamber 1: Barrackpur */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Hospital Attachment
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Galaxy Hospital</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Barrackpur, Kolkata</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Days:</strong> Monday, Wednesday, Friday</p>
                  <p><strong className="text-slate-900">Timings:</strong> 7:00 PM – 10:00 PM</p>
                </div>

                {/* Embedded Map Preview */}
                <div className="h-40 sm:h-44 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 relative group">
                  <iframe
                    title="Galaxy Hospital Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.123456789!2d88.375!3d22.755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59b2522564e90137!2sGalaxy+Multispeciality+Hospital!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow border border-slate-200 text-xs font-semibold text-blue-600 hover:scale-105 transition-transform">
                    <a href="https://www.google.com/maps/place/Galaxy+Multispeciality+Hospital/data=!4m2!3m1!1s0x0:0x59b2522564e90137?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer">
                      Maps ↗
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire for Barrackpur &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Chamber 2: Barasat */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Specialist Center
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Kidney Suraksha Specialist & Diagnostic Center</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Barasat, Kolkata</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Days:</strong> Tuesday & Thursday</p>
                  <p><strong className="text-slate-900">Timings:</strong> Evening Hours</p>
                </div>

                {/* Embedded Map Preview */}
                <div className="h-40 sm:h-44 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 relative group">
                  <iframe
                    title="Kidney Suraksha Center Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.123456789!2d88.48!3d22.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3c1d3677779%3A0x46075fb441b5d510!2sBarasat!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow border border-slate-200 text-xs font-semibold text-blue-600 hover:scale-105 transition-transform">
                    <a href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwioop7X2J-XAxUAAAAAHQAAAAAQBQ..i&udm&fvr=1&pvq=Cg0vZy8xMXZqa3hrcGNoIgwKBmtpZG5leRACGAM&lqi=Cg5raWRuZXkgYmFyYXNhdEjvqqOewrqAgAhaFhAAGAAYASIOa2lkbmV5IGJhcmFzYXSSARFkaWFnbm9zdGljX2NlbnRlcg&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x39f8a3c1d3677779:0x46075fb441b5d510" target="_blank" rel="noopener noreferrer">
                      Maps ↗
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire for Barasat &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Chamber 3: Phoolbagan */}
          <ScrollReveal className="h-full">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-purple-100 text-purple-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Clinic Chamber
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Sustho Clinic</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">Phoolbagan, Kolkata</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Wednesday:</strong> 9:00 AM – 11:00 AM</p>
                  <p><strong className="text-slate-900">Saturday:</strong> 7:00 PM – 10:00 PM</p>
                </div>

                {/* Embedded Map Preview */}
                <div className="h-40 sm:h-44 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 relative group">
                  <iframe
                    title="Dr Sourav Sarkar Phoolbagan Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d88.395016!3d22.5744809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770036508a03%3A0xe02b469cf10f5cfd!2sDr%20Sourav%20Sarkar!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow border border-slate-200 text-xs font-semibold text-blue-600 hover:scale-105 transition-transform">
                    <a href="https://www.google.com/maps/place/Dr+Sourav+Sarkar/@22.5714574,88.3948248,21z/data=!4m6!3m5!1s0x3a02770036508a03:0xe02b469cf10f5cfd!8m2!3d22.5744809!4d88.395016!16s%2Fg%2F11lc_zbr61?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                      Maps ↗
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/contacts"
                className="block w-full bg-slate-50 hover:bg-purple-600 hover:text-white text-slate-800 text-center font-bold py-2.5 sm:py-3 rounded-xl border border-slate-200 transition-colors duration-300 text-xs sm:text-sm shadow-xs"
              >
                Inquire for Phoolbagan &rarr;
              </Link>
            </div>
          </ScrollReveal>

          {/* Chamber 4: Burdwan & Chuchura */}
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="space-y-3.5 sm:space-y-4">
                <span className="inline-block bg-amber-100 text-amber-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Weekend Visits
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Burdwan & Chuchura Chambers</h3>
                <p className="text-slate-500 text-xs sm:text-sm">Outstation Consultations</p>

                <div className="pt-3 sm:pt-4 border-t border-slate-100 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                  <p><strong className="text-slate-900">Schedule:</strong> Sunday (Whole Day)</p>
                  <p><strong className="text-slate-900">Locations:</strong> Periodic availability across Burdwan and Chuchura chambers. Please call ahead to confirm exact token slots.</p>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/contacts"
                  className="inline-block w-full sm:w-auto text-center bg-slate-900 hover:bg-blue-600 text-white font-bold px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 text-xs sm:text-sm shadow-md hover:shadow-lg"
                >
                  Inquire for Sunday Slots &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 py-12 sm:py-16 text-white text-center px-4 relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold px-2">Have questions about appointment slots or fees?</h2>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-0">
              Get in touch with the reception desk or drop an inquiry to secure your preferred slot.
            </p>
            <div>
              <Link
                href="/contacts"
                className="inline-block w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl shadow-xl transition transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Contact Reception Desk &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}