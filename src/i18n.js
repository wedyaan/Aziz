'use client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transArabic from "../src/local/ar.json";
import transEnglish from "../src/local/en.json";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: transEnglish,
  },
  ar: {
    translation: transArabic,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    react:{
      useSuspense: false,
    }
    
  });

export default i18n;
