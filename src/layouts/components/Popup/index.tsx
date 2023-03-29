import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Portal,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Popup = () => {
  const { t } = useTranslation();

  return (
    <Portal>
      <PopoverContent mr='3rem' bg='#D4D4D4'>
        <PopoverArrow bg='#D4D4D4' />
        <PopoverHeader mr='1rem' fontWeight='600'>
          {t('header.WhatWasTheMostDifficultTaskInProject')}
        </PopoverHeader>
        <PopoverCloseButton />

        <PopoverBody>
          <Text>{t('message.theMostDifficult')}</Text>
        </PopoverBody>

        <PopoverHeader mr='1rem' fontWeight='600'>
          {t('header.WhatWasTheFunniestTaskInProject')}
        </PopoverHeader>

        <PopoverBody>
          <Text>{t('message.theFunniest')}</Text>
        </PopoverBody>
      </PopoverContent>
    </Portal>
  );
};
