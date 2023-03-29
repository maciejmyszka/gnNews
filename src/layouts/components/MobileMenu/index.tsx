import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { CountryMenuElement } from 'layouts/components/CountryMenuElement';
import { useCountries } from 'hooks/useCountries';

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const MobileMenu = ({ onClose, isOpen }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { countries } = useCountries();

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
          backgroundColor='lightOrange'
          borderColor='lightGray'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text fontSize='1.8rem'>Menu</Text>
          <CloseIcon style={{ cursor: 'pointer' }} onClick={onClose} />
        </DrawerHeader>

        <DrawerBody
          display='flex'
          flexDirection='column'
          gap='1rem'
          bg='lightGray'
        >
          <Text color='lightOrange' my='1rem' fontSize='1.4rem'>
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
