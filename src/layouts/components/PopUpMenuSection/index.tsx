import { useTranslation } from 'react-i18next';
import { InfoIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Popover,
  PopoverTrigger,
  useMediaQuery,
} from '@chakra-ui/react';
import { Popup } from 'layouts/components/Popup';

export const PopUpMenuSection = () => {
  const { t } = useTranslation();

  const [isShortcut] = useMediaQuery('(max-width: 1080px)');

  return (
    <Popover>
      {isShortcut ? (
        <PopoverTrigger>
          <IconButton aria-label='pop-up' bg='light' _hover={{ bg: 'auto' }}>
            <InfoIcon />
          </IconButton>
        </PopoverTrigger>
      ) : (
        <PopoverTrigger>
          <Button ml='2rem' bg='light'>
            {t('header.openPopUp')}
          </Button>
        </PopoverTrigger>
      )}

      <Popup />
    </Popover>
  );
};
