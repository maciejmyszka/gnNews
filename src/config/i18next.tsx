import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_pl from 'translations/pl/index.json';
import common_en from 'translations/en/index.json';
import { LangFormatEnum } from 'enums/LangFormatEnum';

const resources = {
  en: {
    translation: common_en,
  },
  pl: {
    translation: common_pl,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: [LangFormatEnum.EN, LangFormatEnum.PL],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
