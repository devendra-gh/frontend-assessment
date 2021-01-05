import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './localization/en.json';
import translationDE from './localization/ar.json';

const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationDE
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;