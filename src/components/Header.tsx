'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage, Locale } from '@/lib/i18n';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.clinics, href: '/clinics' },
    { name: t.nav.media, href: '/media' },
    { name: t.nav.testimonials, href: '/testimonials' },
    { name: t.nav.contacts, href: '/contacts' },
  ];

  const languages: Array<{ code: Locale; label: string; codeDisplay: string }> = [
    { code: 'en', label: 'English', codeDisplay: 'EN' },
    { code: 'bn', label: 'বাংলা', codeDisplay: 'BN' },
    // { code: 'hi', label: 'हिंदी', codeDisplay: 'HI' },
  ];

  const currentLanguage = languages.find((l) => l.code === locale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">

      {/* Faster, Energetic Glow Animation (1.5s) */}
      <style jsx>{`
        @keyframes elegantGlowFast {
          0%, 100% {
            border-color: rgba(37, 99, 235, 0.3);
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.2);
          }
          50% {
            border-color: rgba(225, 29, 72, 0.6);
            box-shadow: 0 0 22px rgba(225, 29, 72, 0.4);
          }
        }
        .animate-elegant-glow-fast {
          animation: elegantGlowFast 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">

        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group text-left min-w-0 flex-shrink"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsLangOpen(false);
          }}
        >
          {/* Circular & Fast-Glowing Logo Container */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 bg-blue-50 shadow-md group-hover:border-red-500 transition flex-shrink-0 flex items-center justify-center animate-elegant-glow-fast">
            <Image
              src="/logo-11.png"
              alt="Dr. Sourav Sarkar Logo"
              fill
              className="object-cover object-center group-hover:scale-105 transition duration-300"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="font-bold text-sm sm:text-lg leading-tight tracking-tight text-slate-900 group-hover:text-blue-600 transition truncate">
              {t.brand.name}
            </div>
            <div className="text-[9px] sm:text-[11px] font-medium text-slate-500 tracking-wide uppercase truncate">
              {t.brand.degrees}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 py-1 border-b-2 whitespace-nowrap ${isActive
                  ? 'text-blue-600 border-blue-600 font-semibold'
                  : 'text-slate-600 border-transparent hover:text-blue-600 hover:border-slate-300'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Compact Icon + Code Language Selector + Book CTA + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

          {/* Small Image/Icon followed by Language Code Dropdown (Mobile & Web) */}
          <div className="relative" ref={langDropdownRef}>
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/90 active:scale-95 border border-slate-200 px-2 sm:px-3 py-1.5 rounded-xl transition text-xs font-bold text-slate-800 shadow-sm"
              aria-label="Select Language"
              aria-expanded={isLangOpen}
            >
              {/* Globe / Translation Icon */}
              <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {/* Language Code (EN / BN / HI) */}
              <span className="font-extrabold tracking-wide uppercase text-[11px] sm:text-xs">
                {currentLanguage.codeDisplay}
              </span>
              {/* Dropdown Chevron Arrow */}
              <svg
                className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${isLangOpen ? 'rotate-180 text-blue-600' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Language / ভাষা
                </div>
                {languages.map((lang) => {
                  const isSelected = locale === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLocale(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition ${isSelected
                          ? 'bg-blue-50 text-blue-600 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                        }`}
                    >
                      <span>{lang.label}</span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">
                        {lang.codeDisplay}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Book Appointment CTA Button (Hidden on small mobile, visible on sm+) */}
          <Link
            href="/contacts"
            className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-sm transition items-center gap-1.5 whitespace-nowrap"
          >
            <span>{t.nav.bookAppointment}</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition ${isActive
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contacts"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center text-sm font-semibold py-3 rounded-xl shadow-sm transition"
            >
              {t.nav.bookAppointment}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}