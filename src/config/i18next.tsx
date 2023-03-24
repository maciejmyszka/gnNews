import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_pl from '../translations/pl/index.json';
import common_en from '../translations/en/index.json';

const resources = {
  en: {
    translation: common_en,
  },
  pl: {
    translation: common_pl,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'cimode',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
