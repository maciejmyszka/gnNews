import { Button, Popover, PopoverTrigger, Text } from '@chakra-ui/react';
import i18n from 'i18next';
import { PolandIcon } from '../../../icons/PolandIcon';
import { EnglishIcon } from '../../../icons/EnglishIcon';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { LangPicker } from '../LangPicker';
import { useTranslation } from 'react-i18next';
import { LangFormatEnum } from '../../../enums/LangFormatEnum';

export const LanguageMenuSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text
        cursor='default'
        color='#fff'
        display={['none', 'none', 'none', 'block', 'block', 'block']}
      >
        {t('header.changeLanguage')}
      </Text>

      <Popover>
        <PopoverTrigger>
          <Button
            bg='#2B2929'
            display='flex'
            gap='0.5rem'
            _hover={{ bg: '#2B2929' }}
          >
            {i18n.language === LangFormatEnum.PL ? (
              <PolandIcon />
            ) : (
              <EnglishIcon />
            )}
            <ChevronDownIcon color='#fff' />
          </Button>
        </PopoverTrigger>

        <LangPicker />
      </Popover>
    </>
  );
};
