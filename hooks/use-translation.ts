'use client';

import { useContext } from 'react';
import { LanguageContext, Locale } from '@/providers/language-provider';

export function useTranslation() {
  const { locale, setLocale, dictionary } = useContext(LanguageContext);

  const t = (key: string, params?: Record<string, string | number>): string => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    
    // Navigate through the dictionary to find the value
    let value = dictionary;
    for (const k of keys) {
      if (value?.[k] === undefined) {
        // Return the key if the translation is not found
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      value = value[k];
    }

    // If the value is not a string, return the key
    if (typeof value !== 'string') {
      console.warn(`Translation value is not a string for key: ${key}`);
      return key;
    }

    // Replace parameters in the string if they exist
    if (params) {
      return Object.entries(params).reduce((acc: string, [paramKey, paramValue]) => {
        return acc.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramValue));
      }, value);
    }

    return value;
  };

  return {
    t,
    locale,
    setLocale,
  };
}