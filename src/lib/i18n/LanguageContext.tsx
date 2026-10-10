'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, Dictionary } from './types';
import { en } from './dictionaries/en';
import { bn } from './dictionaries/bn';
import { hi } from './dictionaries/hi';

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  bn,
  hi
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: en
});

const STORAGE_KEY = 'bongdoc_preferred_locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    // Check saved preference in localStorage
    try {
      const savedLocale = localStorage.getItem(STORAGE_KEY) as Locale;
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'bn' || savedLocale === 'hi')) {
        setLocaleState(savedLocale);
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      // Also update html lang attribute
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLocale;
      }
    } catch {
      // Ignore
    }
  };

  const t = dictionaries[locale] || dictionaries.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
