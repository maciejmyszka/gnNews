import { useLocation, useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { LeftMenuContainer } from 'layouts/containers/LeftMenuContainer';
import { useCountries } from 'hooks/useCountries';

interface Props {
  onOpen: () => void;
}

export const LeftSideMenu = ({ onOpen }: Props) => {
  const { pathname } = useLocation();
  const { countries } = useCountries();
  const navigate = useNavigate();

  return (
    <LeftMenuContainer>
      <HamburgerIcon
        fontSize='35px'
        cursor='pointer'
        color='main'
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
            bg={to === pathname ? 'dark' : 'auto'}
            borderBottom='1px solid'
            borderColor={to === pathname ? 'main' : 'transparent'}
          >
            <Icon />
          </Flex>
        ))}
      </Flex>
    </LeftMenuContainer>
  );
};
