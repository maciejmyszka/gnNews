import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { countries } from '../../../data/countries';
import { useTranslation } from 'react-i18next';
import { CountryMenuElement } from '../CountryMenuElement';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const MobileMenu = ({ onClose, isOpen }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateTo = (to: string) => {
    navigate(to);
    onClose();
  };

  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          borderBottomWidth='1px'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(242, 103, 0, 0.8)',
            borderColor: 'rgba(8, 5, 4, 0.89)',
          }}
        >
          <Text fontSize='1.8rem'>Menu</Text>
          <CloseIcon style={{ cursor: 'pointer' }} onClick={onClose} />
        </DrawerHeader>

        <DrawerBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: 'rgba(8, 5, 4, 0.89)',
          }}
        >
          <Text color='rgba(242, 103, 0, 0.8)' my='1rem' fontSize='1.4rem'>
            {t('menu.chooseCountryOfTheNews')}
          </Text>

          {countries.map(({ id, ...rest }) => (
            <CountryMenuElement key={id} navigateTo={navigateTo} {...rest} />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
