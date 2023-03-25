import i18n from 'i18next';
import { LangFormatEnum } from '../enums/LangFormatEnum';

export const changeLang = (lang: LangFormatEnum) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('lang', lang);
};
