import i18n from 'i18next';
import { LangFormatEnum } from 'enums/LangFormatEnum';

export const changeLang = async (lang: LangFormatEnum) => {
  await i18n.changeLanguage(lang);
};
