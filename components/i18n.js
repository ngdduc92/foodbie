// @flow
// import NextI18Next from 'next-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// import axios from 'axios';

export const NS_COMMON = 'common';

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(Backend)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: false,
    lng: 'en',
    ns: [NS_COMMON],
    defaultNS: [NS_COMMON],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    load: 'languageOnly',
    saveMissing: process.env.SAVE_MISSING, // send not translated keys to endpoint
    keySeparator: false,
    partialBundledLanguages: true,
  });

export const i18n = i18next;
