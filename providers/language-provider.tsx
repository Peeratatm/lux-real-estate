'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';
// Import the actual dictionaries for direct use if needed for default
import { loadDictionary, englishDictionary } from '@/lib/i18n/dictionaries';

export type Locale = 'en' | 'th';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: Record<string, any>;
}

export const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  dictionary: englishDictionary, // Provide default dictionary directly
});

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>('en');
  // Initialize with the default English dictionary to avoid empty dictionary during SSR/build
  const [dictionary, setDictionary] = useState<Record<string, any>>(englishDictionary);

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
    // This effect will run on the client to potentially switch to another language
    // or load a different dictionary if the locale changes from 'en'.
    const loadAndSetLanguage = async () => {
      if (locale !== 'en' || Object.keys(dictionary).length === 0 || dictionary !== englishDictionary ) {
        // Only load if locale is not 'en' or if dictionary is somehow still empty or not the default
        const dict = await loadDictionary(locale);
        setDictionary(dict);
      }
      // Client-side only operations
      localStorage.setItem('locale', locale);
      document.documentElement.lang = locale;
    };

    loadAndSetLanguage();
  }, [locale]); // Removed 'dictionary' from deps to avoid loop if loadDictionary returns same object ref for 'en'

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}