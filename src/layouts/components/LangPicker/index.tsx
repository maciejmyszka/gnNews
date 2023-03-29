import {
  IconButton,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Portal,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { langs } from 'data/langs';
import { changeLang } from 'utils/changeLang';

export const LangPicker = () => {
  const { t } = useTranslation();

  return (
    <Portal>
      <PopoverContent mr='3rem' bg='light'>
        <PopoverArrow bg='light' />
        <PopoverHeader mr='1rem' fontWeight='600'>
          {t('header.selectLanguage')}
        </PopoverHeader>
        <PopoverCloseButton />

        <PopoverBody display='flex' gap='1rem'>
          {langs.map(({ id, label, format, icon }) => (
            <IconButton
              key={id}
              aria-label={label}
              bg='transparent'
              _hover={{ bg: 'transparent' }}
              onClick={() => changeLang(format)}
            >
              {icon}
            </IconButton>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Portal>
  );
};
