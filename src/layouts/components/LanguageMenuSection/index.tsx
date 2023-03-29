import { Button, Popover, PopoverTrigger, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@chakra-ui/icons';
import i18n from 'i18next';
import { PolandIcon } from 'icons/PolandIcon';
import { EnglishIcon } from 'icons/EnglishIcon';
import { LangPicker } from 'layouts/components/LangPicker';
import { LangFormatEnum } from 'enums/LangFormatEnum';

export const LanguageMenuSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text
        cursor='default'
        color='white'
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
            <ChevronDownIcon color='white' />
          </Button>
        </PopoverTrigger>

        <LangPicker />
      </Popover>
    </>
  );
};
