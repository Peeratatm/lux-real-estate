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
  initialLocale?: Locale; // Allow passing initial locale for server rendering if needed
}

export function LanguageProvider({ children, initialLocale = 'en' }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  // Initialize with the default English dictionary to avoid empty dictionary during SSR/build
  const [dictionary, setDictionary] = useState<Record<string, any>>(englishDictionary);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark that we are on the client
  }, []);

  useEffect(() => {
    if (isClient) { // Only run this effect on the client for reading localStorage
      const savedLocale = localStorage.getItem('locale') as Locale | null;
      if (savedLocale && ['en', 'th'].includes(savedLocale) && savedLocale !== locale) {
        setLocaleState(savedLocale);
      }
    }
  }, [isClient, locale]); // Rerun if isClient changes or locale is externally changed

  useEffect(() => {
    // This effect runs when locale changes, or when isClient becomes true initially.
    // It's responsible for loading the correct dictionary and performing side effects.
    const updateLanguage = async () => {
      if (locale === 'en') {
        // Ensure English dictionary is set if not already (e.g. after switching from another lang)
        if (dictionary !== englishDictionary) {
            setDictionary(englishDictionary);
        }
      } else {
        const dict = await loadDictionary(locale);
        setDictionary(dict);
      }

      if (isClient) { // Client-side only operations
        localStorage.setItem('locale', locale);
        document.documentElement.lang = locale;
      }
    };

    // For the initial server render or build, `isClient` is false.
    // `initialLocale` (defaulting to 'en') and `englishDictionary` are used by default.
    // On the client, once `isClient` becomes true, this effect will run.
    // The previous effect might have already updated `locale` based on localStorage.
    if (isClient) {
      updateLanguage();
    } else {
      // Server-side: ensure the dictionary corresponds to initialLocale.
      // `dictionary` state is already initialized with `englishDictionary`.
      // If `initialLocale` was different and a corresponding synchronous dictionary
      // was available, we could set it here. Given `loadDictionary` is async,
      // and `englishDictionary` is the hardcoded default, this path mainly ensures
      // no client-side logic runs. The default state already covers 'en'.
      if (locale === 'en' && dictionary !== englishDictionary) {
        // This should ideally not be necessary if initial state is correct.
        setDictionary(englishDictionary);
      }
      // For other locales on SSR, it would require pre-fetched dictionary for `initialLocale`
      // to be set synchronously, which is not the current setup with async `loadDictionary`.
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, isClient]); // Dependencies are locale and isClient.

  // Custom setLocale that also updates state
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}