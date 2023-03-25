import { Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../../containers/HeaderContainer';
import { LanguageMenuSection } from '../LanguageMenuSection';
import { PopUpMenuSection } from '../PopUpMenuSection';
import { ViewMenuSection } from '../ViewMenuSection';
import { RightSideMenuContainer } from '../../containers/RightSideMenuContainer';
import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons';
import { memo, useState } from 'react';
import { MobileSettingsModal } from '../MobileSettingsModal';

interface Props {
  onOpen: () => void;
}

export const Header = memo(({ onOpen }: Props) => {
  const navigate = useNavigate();

  const [isMobile] = useMediaQuery('(max-width: 540px)');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <Flex gap='1rem' alignItems='center'>
        <HamburgerIcon
          display={['block', 'block', 'block', 'none']}
          style={{
            fontSize: '25px',
            cursor: 'pointer',
            color: '#FF6900',
          }}
          onClick={onOpen}
        />

        <Flex
          position='relative'
          flexDirection='column'
          cursor='pointer'
          onClick={() => navigate('/')}
        >
          <Heading
            color='#FF6900'
            style={{
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            gnNews
          </Heading>

          <Text color='#fff' marginTop='-10px' marginLeft='30px'>
            Best news page
          </Text>
        </Flex>
      </Flex>

      {isMobile && (
        <SettingsIcon
          onClick={() => setIsSettingsOpen((prevState) => !prevState)}
          style={{
            fontSize: '25px',
            cursor: 'pointer',
            color: '#FF6900',
            marginRight: '1rem',
          }}
        />
      )}

      {isMobile && isSettingsOpen && (
        <MobileSettingsModal
          isSettingsOpen={isSettingsOpen}
          setIsSettingsOpen={setIsSettingsOpen}
        />
      )}

      {!isMobile && (
        <RightSideMenuContainer>
          <ViewMenuSection />
          <PopUpMenuSection />
          <LanguageMenuSection />
        </RightSideMenuContainer>
      )}
    </HeaderContainer>
  );
});
