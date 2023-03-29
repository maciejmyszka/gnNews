import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { HeaderContainer } from 'layouts/containers/HeaderContainer';
import { LanguageMenuSection } from 'layouts/components/LanguageMenuSection';
import { PopUpMenuSection } from 'layouts/components/PopUpMenuSection';
import { ViewMenuSection } from 'layouts/components/ViewMenuSection';
import { RightSideMenuContainer } from 'layouts/containers/RightSideMenuContainer';
import { MobileNavBar } from 'layouts/components/MobileNavBar';

interface Props {
  onOpen: () => void;
}

export const Header = memo(({ onOpen }: Props) => {
  const navigate = useNavigate();

  const [isMobile] = useMediaQuery('(max-width: 540px)');

  return (
    <HeaderContainer>
      <Flex gap='1rem' alignItems='center'>
        <HamburgerIcon
          display={['block', 'block', 'block', 'none']}
          fontSize='25px'
          cursor='pointer'
          color='main'
          onClick={onOpen}
        />

        <Flex
          position='relative'
          flexDirection='column'
          cursor='pointer'
          onClick={() => navigate('/')}
        >
          <Heading
            color='main'
            style={{
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            gnNews
          </Heading>

          <Text color='white' marginTop='-10px' marginLeft='30px'>
            Best news page
          </Text>
        </Flex>
      </Flex>

      {isMobile ? (
        <MobileNavBar />
      ) : (
        <RightSideMenuContainer>
          <ViewMenuSection />
          <PopUpMenuSection />
          <LanguageMenuSection />
        </RightSideMenuContainer>
      )}
    </HeaderContainer>
  );
});
