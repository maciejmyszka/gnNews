import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useSingleArticleContext } from 'context/SingleArticleContext';
import { DateFormatEnum } from 'enums/DateFormatEnum';
import { useMoment } from 'hooks/useMoment';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal = ({ isOpen, onClose }: Props) => {
  const { publishedAt, title, url, urlToImage, content, description, source } =
    useSingleArticleContext();

  const { t } = useTranslation();
  const date = useMoment(DateFormatEnum.TIME_DATE_FORMAT, publishedAt);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='light'>
        <ModalHeader mr='1rem'>{title}</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          {urlToImage && <Image src={urlToImage} alt='news photo' />}

          <Text mt='1rem'>{description}</Text>

          <Text mt='1rem'>{content}</Text>

          <Flex justifyContent='flex-end' mt='1rem'>
            <Text>
              by{' '}
              <span style={{ color: 'rgba(242, 103, 0, 0.8)' }}>
                {source.name}
              </span>{' '}
              at <span style={{ color: 'rgba(242, 103, 0, 0.8)' }}>{date}</span>{' '}
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            bg='lightGray'
            color='main'
            mr={3}
            onClick={onClose}
            _hover={{ backgroundColor: 'auto' }}
          >
            {t('buttons.close')}
          </Button>
          <Button
            variant='ghost'
            color='main'
            onClick={() => window.open(url, '_blank')}
          >
            {t('buttons.readMore')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
