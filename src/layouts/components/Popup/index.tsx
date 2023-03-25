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
      <PopoverContent mr='3rem' bg='#D4D4D4' zIndex='9999'>
        <PopoverArrow bg='#D4D4D4' />
        <PopoverHeader mr='1rem' fontWeight='600'>
          {t('header.WhatWasTheMostDifficultTaskInProject')}
        </PopoverHeader>
        <PopoverCloseButton />

        <PopoverBody>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Text>
        </PopoverBody>

        <PopoverHeader mr='1rem' fontWeight='600'>
          {t('header.WhatWasTheFunniestTaskInProject')}
        </PopoverHeader>

        <PopoverBody>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Portal>
  );
};
