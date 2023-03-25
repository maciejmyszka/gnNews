import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Dispatch, memo, SetStateAction, useState } from 'react';
import { MobileChangeView } from '../MobileChangeView';
import { MobileChangeLang } from '../MobileChangeLang';

interface Props {
  isSettingsOpen: boolean;
  setIsSettingsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileSettingsModal = memo(
  ({ isSettingsOpen, setIsSettingsOpen }: Props) => {
    const { t } = useTranslation();

    const [isMessage, setIsMessage] = useState<boolean>(false);

    return (
      <Modal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)}>
        <ModalOverlay />
        <ModalContent bg='#D4D4D4'>
          <ModalHeader>{t('header.settings')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' gap='1rem' flexDirection='column'>
            <MobileChangeView />
            <MobileChangeLang />

            <Flex alignItems='center' justifyContent='space-between'>
              <Text>{t('header.showMessage')}</Text>
              <Button onClick={() => setIsMessage((prevState) => !prevState)}>
                {t(isMessage ? 'buttons.hide' : 'buttons.show')}
              </Button>
            </Flex>

            {isMessage && (
              <Flex flexDirection='column' gap='1rem'>
                <Text>{t('header.WhatWasTheMostDifficultTaskInProject')}</Text>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Text>

                <Text mt='1rem'>
                  {t('header.WhatWasTheFunniestTaskInProject')}
                </Text>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Text>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);
