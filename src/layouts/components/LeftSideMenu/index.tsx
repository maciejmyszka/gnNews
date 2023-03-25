import { Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { countries } from '../../../data/countries';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftMenuContainer } from '../../containers/LeftMenuContainer';

interface Props {
  onOpen: () => void;
}

export const LeftSideMenu = ({ onOpen }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <LeftMenuContainer>
      <HamburgerIcon
        style={{
          fontSize: '35px',
          cursor: 'pointer',
          color: '#FF6900',
        }}
        onClick={onOpen}
      />

      <Flex
        flexDirection='column'
        width='100%'
        justifyContent='center'
        position='absolute'
        top='8%'
      >
        {countries.map(({ id, to, Icon }) => (
          <Flex
            key={id}
            width='100%'
            cursor='pointer'
            onClick={() => navigate(to)}
            py='1.2rem'
            justifyContent='center'
            bg={to === pathname ? 'rgba(2, 1, 0, 0.93)' : 'auto'}
            borderBottom='1px solid'
            borderColor={to === pathname ? '#FF6900' : 'transparent'}
          >
            <Icon />
          </Flex>
        ))}
      </Flex>
    </LeftMenuContainer>
  );
};
