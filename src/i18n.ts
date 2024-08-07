import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translate.json'
import ruTranslation from './locales/ru/translate.json'

const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: ruTranslation
  }
};

console.log(resources);

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;