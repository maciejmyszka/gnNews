import {
  IconButton,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Portal,
} from '@chakra-ui/react';
import { PolandIcon } from '../../../icons/PolandIcon';
import { EnglishIcon } from '../../../icons/EnglishIcon';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

export const LangPicker = () => {
  const { t } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <Portal>
      <PopoverContent mr='3rem' bg='#D4D4D4'>
        <PopoverArrow bg='#D4D4D4' />
        <PopoverHeader mr='1rem' fontWeight='600'>
          {t('header.selectLanguage')}
        </PopoverHeader>
        <PopoverCloseButton />

        <PopoverBody display='flex' gap='1rem'>
          <IconButton
            aria-label='polish'
            bg='transparent'
            _hover={{ bg: 'transparent' }}
            onClick={() => changeLang('pl-PL')}
          >
            <PolandIcon />
          </IconButton>

          <IconButton
            aria-label='english'
            bg='transparent'
            _hover={{ bg: 'transparent' }}
            onClick={() => changeLang('en-US')}
          >
            <EnglishIcon />
          </IconButton>
        </PopoverBody>
      </PopoverContent>
    </Portal>
  );
};
