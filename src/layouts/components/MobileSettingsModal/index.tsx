import { Dispatch, memo, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import { MobileChangeView } from 'layouts/components/MobileChangeView';
import { MobileChangeLang } from 'layouts/components/MobileChangeLang';

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
        <ModalContent bg='light'>
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
                <Text>{t('message.theMostDifficult')}</Text>

                <Text mt='1rem'>
                  {t('header.WhatWasTheFunniestTaskInProject')}
                </Text>
                <Text>{t('message.theFunniest')}</Text>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
);
