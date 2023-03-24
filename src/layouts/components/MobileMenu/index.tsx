import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
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
            Choose the country of the news:
          </Text>
          {countries.map(({ id, name, to, Icon }) => (
            <Flex key={id} gap='0.5rem'>
              <Icon />
              <Text
                onClick={() => navigateTo(to)}
                style={{ cursor: 'pointer', color: '#fff', fontSize: '1.3rem' }}
              >
                {name}
              </Text>
            </Flex>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
