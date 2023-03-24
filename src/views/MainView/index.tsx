import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MobileMenu } from '../../layouts/components/MobileMenu';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesState, getArticles } from '../../slices/articlesSlice';
import { AppDispatch } from '../../config/store';
import { countries } from '../../data/countries';
import { ListIcon } from '../../icons/ListIcon';
import { TilesIcon } from '../../icons/TilesIcon';

export const MainView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch<AppDispatch>();
  const { articles, count } = useSelector(articlesState);

  const { name } = useParams();
  const { pathname } = useLocation();

  const [isList, setIsList] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const symbol =
      countries.find(
        ({ name: countryName }) => countryName.toLowerCase() === name
      )?.symbol || 'pl';

    dispatch(getArticles(symbol));
  }, [name]);

  return (
    <Flex width='100vw' height='100vh' position='relative'>
      <Flex
        width='5%'
        height='100vh'
        bg='rgba(2, 1, 0, 0.93)'
        flexDirection='column'
        alignItems='center'
        pt='1%'
        position='relative'
      >
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
      </Flex>

      <Flex flexDirection='column' width='95%' bg='rgba(8, 5, 4, 0.89)'>
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

        <MobileMenu isOpen={isOpen} onClose={onClose} />

        <Flex
          w='100%'
          height='92%'
          flexDirection='column'
          px='2%'
          py='1rem'
          gap='1rem'
          overflowY='scroll'
        >
          {isList ? (
            <UnorderedList>
              {articles.map(({ publishedAt, title, url }: any) => (
                <ListItem key={url} flexDirection='column'>
                  <Text color='#fff'>{title}</Text>

                  <Flex justifyContent='flex-end' mb='0.5rem'>
                    <Text color='#fff'>
                      {new Date(publishedAt).toLocaleString()}
                    </Text>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          ) : (
            <Grid
              templateColumns={[
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(3, 1fr)',
                'repeat(4, 1fr)',
                'repeat(5, 1fr)',
                'repeat(5, 1fr)',
              ]}
              alignItems='center'
              gap={6}
            >
              {articles.map(({ publishedAt, title, url, urlToImage }: any) => (
                <GridItem
                  key={url}
                  flexDirection='column'
                  display='flex'
                  borderRadius='0.5rem'
                  p='0.6rem'
                  bg='rgba(8, 5, 4, 0.89)'
                  boxShadow=' -3px 2px 18px -5px rgba(66, 68, 90, 1)'
                >
                  <Image
                    src={urlToImage ?? 'https://bit.ly/dan-abramov'}
                    alt='Dan Abramov'
                    borderRadius='0.5rem'
                    cursor='pointer'
                  />
                  <Text
                    mt='0.5rem'
                    color='#fff'
                    cursor='pointer'
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {title}
                  </Text>

                  <Flex justifyContent='flex-end' mb='0.5rem' color='#FF6900'>
                    <Text cursor='default'>
                      {new Date(publishedAt).toLocaleString()}
                    </Text>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          )}

          <Flex flexDirection='column'>
            <Text>{new Date().toLocaleString()}</Text>
            <Text>{count}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
