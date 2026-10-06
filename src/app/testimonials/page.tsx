'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

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

  const testimonialsList = [
    {
      quote: "Dr. Sourav Sarkar is exceptionally patient and thorough. He explained my father's chronic kidney disease stages in simple terms and guided us through the exact dietary and medication adjustments needed. Truly a blessing for our family.",
      name: "A. Mukherjee",
      location: "Patient Family Member, Kolkata",
      rating: 5,
      tag: "CKD Care"
    },
    {
      quote: "Finding a nephrologist who listens without rushing you is rare. Dr. Sarkar managed my fluctuating blood pressure and renal parameters with immense care. His YouTube channel (BongDoc) also gave me so much confidence.",
      name: "Rajesh Sengupta",
      location: "Barasat Chamber Patient",
      rating: 5,
      tag: "Hypertension & Renal"
    },
    {
      quote: "Consulted him at Galaxy Hospital in Barrackpur for recurrent urinary and renal issues. His diagnosis was spot on, and the treatment plan worked wonders. Highly professional and humble doctor.",
      name: "Suman Roy",
      location: "Barrackpur Patient",
      rating: 5,
      tag: "Nephrology"
    },
    {
      quote: "His ability to break down complex medical terms in Bengali through BongDoc is amazing. When we visited him at Phoolbagan, he gave us complete time and addressed all our anxiety regarding dialysis care.",
      name: "Debasish Chatterjee",
      location: "Phoolbagan Patient",
      rating: 5,
      tag: "Dialysis Support"
    },
    {
      quote: "One of the best internal medicine specialists in Kolkata. His calm demeanor and accurate diagnosis for persistent fever and weakness helped me recover very quickly.",
      name: "Priyanka Banerjee",
      location: "Kolkata",
      rating: 5,
      tag: "Internal Medicine"
    },
    {
      quote: "Very structured approach to kidney stone prevention and lifestyle counseling. We travel from outstation for his weekend consultations because his treatment makes a genuine difference.",
      name: "Amitava Ghosh",
      location: "Burdwan Patient",
      rating: 5,
      tag: "Stone Prevention"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Section */}
      <section className="py-10 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
        <ScrollReveal>
          <div className="space-y-3 sm:space-y-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-blue-200 shadow-sm animate-pulse">
              Patient Experiences & Trust
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Testimonials & Feedback
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Read what patients and families have to say about their care journey, kidney management, and consultations with Dr. Sourav Sarkar.
            </p>
          </div>
        </ScrollReveal>

        {/* Rating Metrics Summary Bar */}
        <ScrollReveal>
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200">
              <span className="text-amber-400 text-base sm:text-lg">★★★★★</span>
              <span>5.0 Patient Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200">
              <span className="text-blue-600 font-bold">100%</span>
              <span>Verified Consultations</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200">
              <span className="text-emerald-600 font-bold">10+ Yrs</span>
              <span>Clinical Excellence</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Testimonial Cards Carousel / Grid */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-6 sm:mb-8 border-b border-slate-200/80 pb-4 sm:pb-6 gap-3">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-blue-600">Real Stories</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">What Our Patients Say</h2>
            </div>
            
            {/* Dynamic Arrow Controls */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {showLeftArrow && (
                <button 
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300 text-base sm:text-lg font-bold"
                >
                  &larr;
                </button>
              )}
              {showRightArrow && (
                <button 
                  onClick={scrollRight}
                  aria-label="Scroll right"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300 text-base sm:text-lg font-bold"
                >
                  &rarr;
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Horizontal Container with Ref and Animations */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {testimonialsList.map((item, index) => (
            <ScrollReveal key={index} className="flex-shrink-0 snap-start">
              <div className="w-[280px] min-[400px]:w-80 sm:w-96 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between space-y-5 sm:space-y-6 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex text-amber-400 gap-0.5 sm:gap-1 text-base sm:text-lg">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-blue-100 truncate">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic group-hover:text-slate-900 transition-colors">
                    &quot;{item.quote}&quot;
                  </p>
                </div>
                
                <div className="pt-3 sm:pt-4 border-t border-slate-100">
                  <p className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">{item.name}</p>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-medium">{item.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Share Experience / Review CTA Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 py-12 sm:py-16 text-white text-center px-4 relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6 relative z-10">
            <span className="bg-blue-600/30 text-blue-300 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-blue-400/20">
              Patient Feedback Desk
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight px-2">Have you consulted Dr. Sourav Sarkar?</h2>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
              We value your feedback. Share your experience or leave a review to help other patients make informed healthcare decisions.
            </p>
            <div className="pt-2">
              <Link 
                href="/contacts" 
                className="inline-block w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-3.5 rounded-xl sm:rounded-2xl shadow-xl transition transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Share Your Feedback &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}