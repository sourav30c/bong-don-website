'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function TestimonialsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

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
            <Link href="/clinics" className="hover:text-blue-600 transition">Clinics</Link>
            <Link href="/media" className="hover:text-blue-600 transition">Media & Vlogs</Link>
            <Link href="/testimonials" className="text-blue-600 font-semibold">Testimonials</Link>
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
          Patient Experiences
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Testimonials & Feedback
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Read what patients and families have to say about their care journey, kidney management, and consultations with Dr. Sourav Sarkar.
        </p>
      </section>

      {/* Horizontal Scrolling Testimonials Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">What Our Patients Say</h2>
          
          {/* Dynamic Arrow Controls */}
          <div className="flex items-center gap-2 h-10">
            {showLeftArrow && (
              <button 
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition text-lg font-bold animate-fade-in"
              >
                ←
              </button>
            )}
            {showRightArrow && (
              <button 
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition text-lg font-bold animate-fade-in"
              >
                →
              </button>
            )}
          </div>
        </div>

        {/* Horizontal Container with Ref */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          
          {/* Card 1 */}
          <div className="flex-shrink-0 w-80 sm:w-96 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 snap-start">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "Dr. Sourav Sarkar is exceptionally patient and thorough. He explained my father's chronic kidney disease stages in simple terms and guided us through the exact dietary and medication adjustments needed. Truly a blessing for our family."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-bold text-slate-900 text-sm">A. Mukherjee</p>
              <p className="text-slate-500 text-xs">Patient Family Member, Kolkata</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-80 sm:w-96 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 snap-start">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "Finding a nephrologist who listens without rushing you is rare. Dr. Sarkar managed my fluctuating blood pressure and renal parameters with immense care. His YouTube channel (BongDoc) also gave me so much confidence."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-bold text-slate-900 text-sm">Rajesh Sengupta</p>
              <p className="text-slate-500 text-xs">Barasat Chamber Patient</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-80 sm:w-96 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 snap-start">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "Consulted him at Galaxy Hospital in Barrackpur for recurrent urinary and renal issues. His diagnosis was spot on, and the treatment plan worked wonders. Highly professional and humble doctor."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-bold text-slate-900 text-sm">Suman Roy</p>
              <p className="text-slate-500 text-xs">Barrackpur Patient</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 w-80 sm:w-96 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 snap-start">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "His ability to break down complex medical terms in Bengali through BongDoc is amazing. When we visited him at Phoolbagan, he gave us complete time and addressed all our anxiety regarding dialysis care."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-bold text-slate-900 text-sm">Debasish Chatterjee</p>
              <p className="text-slate-500 text-xs">Phoolbagan Patient</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex-shrink-0 w-80 sm:w-96 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 snap-start">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "One of the best internal medicine specialists in Kolkata. His calm demeanor and accurate diagnosis for persistent fever and weakness helped me recover very quickly."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-bold text-slate-900 text-sm">Priyanka Banerjee</p>
              <p className="text-slate-500 text-xs">Kolkata</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex-shrink-0 w-80 sm:w-96 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 snap-start">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "Very structured approach to kidney stone prevention and lifestyle counseling. We travel from outstation for his weekend consultations because his treatment makes a genuine difference."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-bold text-slate-900 text-sm">Amitava Ghosh</p>
              <p className="text-slate-500 text-xs">Burdwan Patient</p>
            </div>
          </div>

        </div>
      </section>

      {/* Share Experience / Review CTA */}
      <section className="bg-blue-900 py-16 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Have you consulted Dr. Sourav Sarkar?</h2>
          <p className="text-blue-100 text-sm sm:text-base">
            We value your feedback. Share your experience or leave a review to help other patients make informed healthcare decisions.
          </p>
          <div>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl shadow-md transition"
            >
              Share Your Feedback
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}