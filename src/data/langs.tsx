import { LangFormatEnum } from '../enums/LangFormatEnum';
import { PolandIcon } from '../icons/PolandIcon';
import { EnglishIcon } from '../icons/EnglishIcon';

export const langs = [
  {
    id: 0,
    label: 'polish',
    format: LangFormatEnum.PL,
    icon: <PolandIcon />,
  },
  {
    id: 1,
    label: 'english',
    format: LangFormatEnum.EN,
    icon: <EnglishIcon />,
  },
];
