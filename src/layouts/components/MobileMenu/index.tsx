import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { countries } from '../../../data/countries';

export const MobileMenu = ({ onClose, isOpen }: any) => {
  const navigate = useNavigate();

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
          }}
        >
          Menu
          <CloseIcon style={{ cursor: 'pointer' }} onClick={onClose} />
        </DrawerHeader>
        <DrawerBody
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {countries.map(({ id, name, to }) => (
            <p
              key={id}
              onClick={() => navigateTo(to)}
              style={{ cursor: 'pointer' }}
            >
              {name}
            </p>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
