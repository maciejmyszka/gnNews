import { Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { TilesIcon } from '../../../icons/TilesIcon';
import { ListIcon } from '../../../icons/ListIcon';
import { useNavigate } from 'react-router-dom';

export const Header = ({ isList, setIsList }: any) => {
  const navigate = useNavigate();

  return (
    <Flex
      h='8%'
      w='100%'
      alignItems='center'
      justifyContent='space-between'
      px='2%'
      gap='1rem'
    >
      <Flex gap='1rem' alignItems='center'>
        {/*<HamburgerIcon*/}
        {/*  style={{*/}
        {/*    fontSize: '25px',*/}
        {/*    cursor: 'pointer',*/}
        {/*    color: '#FF6900',*/}
        {/*  }}*/}
        {/*  onClick={onOpen}*/}
        {/*/>*/}

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

      <Flex
        gap='1rem'
        alignItems='center'
        bg='rgba(8, 5, 4, 0.89)'
        p='10px 10px 10px 25px'
        borderRadius='0.5rem'
      >
        <Text cursor='default' color='#fff'>
          Change news view:
        </Text>

        <IconButton
          aria-label='tiles'
          onClick={() => setIsList(false)}
          bg={!isList ? '#FF6900' : '#fff'}
          _hover={{ bg: 'auto' }}
        >
          <TilesIcon />
        </IconButton>

        <IconButton
          aria-label='list'
          onClick={() => setIsList(true)}
          bg={isList ? '#FF6900' : '#fff'}
          _hover={{ bg: 'auto' }}
        >
          <ListIcon />
        </IconButton>

        <Button ml='2rem'>Open pop-up</Button>
      </Flex>
    </Flex>
  );
};
