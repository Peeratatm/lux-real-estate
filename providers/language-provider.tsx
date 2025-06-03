'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';
import { loadDictionary } from '@/lib/i18n/dictionaries';

export type Locale = 'en' | 'th';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: Record<string, any>;
}

export const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  dictionary: {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>('en');
  const [dictionary, setDictionary] = useState<Record<string, any>>({});

  useEffect(() => {
    // Try to get saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    
    // If there's a saved locale, use it. Otherwise, try to detect browser language
    if (savedLocale && ['en', 'th'].includes(savedLocale)) {
      setLocale(savedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0];
      setLocale(browserLang === 'th' ? 'th' : 'en');
    }
  }, []);

  useEffect(() => {
    const loadLanguage = async () => {
      const dict = await loadDictionary(locale);
      setDictionary(dict);
      localStorage.setItem('locale', locale);
      // Update the html lang attribute
      document.documentElement.lang = locale;
    };

    loadLanguage();
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}