'use client'; // Ensure this file can run in the client-side environment

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import transArabic from '../src/local/ar.json';
import transEnglish from '../src/local/en.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: transEnglish,
  },
  ar: {
    translation: transArabic,
  },
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Integrates with React
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if user language is not available
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
    react: {
      useSuspense: false, // Disable suspense if not using React's Suspense
    },
  });

export default i18n;