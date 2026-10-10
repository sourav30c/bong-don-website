'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';

export default function FloatingActions() {
  const { t } = useLanguage();
  const phoneNumber = 'tel:+919831030908';
  const whatsappUrl = 'https://wa.me/919831030908?text=Hello%20Dr.%20Sourav%20Sarkar,%20I%20would%20like%20to%20book%20a%20consultation.';

  return (
    <>
      {/* =========================================================
          1. MOBILE BOTTOM FLOATING BAR (Visible on < md screens)
         ========================================================= */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-50 pointer-events-auto">
        <div className="bg-white/75 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_0_rgba(15,23,42,0.14)] border border-white/80 ring-1 ring-slate-900/5 py-2 px-1 max-w-sm mx-auto grid grid-cols-3 divide-x divide-slate-200/60 items-center">
          
          {/* 1. Book Now */}
          <Link
            href="/contacts"
            className="flex flex-col items-center justify-center py-1 px-1 active:scale-95 transition-transform"
            aria-label={t.floatingActions.bookNow}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-800 tracking-wider uppercase">{t.floatingActions.bookNow}</span>
          </Link>

          {/* 2. WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 px-1 active:scale-95 transition-transform"
            aria-label={t.floatingActions.whatsapp}
          >
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm shadow-emerald-500/30 mb-0.5">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">{t.floatingActions.whatsapp}</span>
          </a>

          {/* 3. Call Now */}
          <a
            href={phoneNumber}
            className="flex flex-col items-center justify-center py-1 px-1 active:scale-95 transition-transform"
            aria-label={t.floatingActions.callNow}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-800 mb-0.5">
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-slate-800 tracking-wider uppercase">{t.floatingActions.callNow}</span>
          </a>

        </div>
      </div>

      {/* =========================================================
          2. DESKTOP FLOATING ACTION BUTTONS (Visible on md+ screens)
         ========================================================= */}
      <div className="hidden md:flex fixed right-4 bottom-24 z-50 flex-col gap-3">
        
        {/* Book Appointment Button */}
        <Link
          href="/contacts"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
          aria-label={t.floatingActions.bookNow}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            {t.floatingActions.bookNow}
          </span>
        </Link>

        {/* WhatsApp Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
          aria-label={t.floatingActions.whatsapp}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            {t.floatingActions.whatsapp}
          </span>
        </a>

        {/* Call Now Button */}
        <a
          href={phoneNumber}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 border border-slate-700"
          aria-label={t.floatingActions.callNow}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            {t.floatingActions.callNow}
          </span>
        </a>

      </div>
    </>
  );
}