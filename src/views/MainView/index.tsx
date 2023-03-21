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
import { useNavigate, useParams } from 'react-router-dom';
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

  const [isList, setIsList] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const symbol =
      countries.find(
        ({ name: countryName }) => countryName.toLowerCase() === name
      )?.symbol || 'pl';

    dispatch(getArticles(symbol));
  }, [name]);

  return (
    <Flex
      width='100vw'
      height='100vh'
      flexDirection='column'
      position='relative'
    >
      <Flex
        h='6%'
        w='100%'
        bg='royalblue'
        alignItems='center'
        px='5%'
        gap='1rem'
      >
        <HamburgerIcon
          style={{ fontSize: '25px', cursor: 'pointer' }}
          onClick={onOpen}
        />
        <Heading onClick={() => navigate('/')}>gnNews</Heading>

        <IconButton aria-label='list' onClick={() => setIsList(true)}>
          <ListIcon />
        </IconButton>

        <IconButton aria-label='list' onClick={() => setIsList(false)}>
          <TilesIcon />
        </IconButton>

        <Button>Open pop-up</Button>
      </Flex>

      <MobileMenu isOpen={isOpen} onClose={onClose} />

      <Flex
        w='100%'
        height='94%'
        flexDirection='column'
        px='5%'
        py='1rem'
        gap='1rem'
        overflow='scroll'
      >
        {isList ? (
          <UnorderedList>
            {articles.map(({ publishedAt, title, url, urlToImage }: any) => (
              <ListItem key={url} flexDirection='column'>
                <Text>{title}</Text>

                <Flex justifyContent='flex-end' mb='0.5rem'>
                  <Text>{new Date(publishedAt).toLocaleString()}</Text>
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
            gap={6}
          >
            {articles.map(({ publishedAt, title, url, urlToImage }: any) => (
              <GridItem
                key={url}
                flexDirection='column'
                display='flex'
                border='1px solid black'
                borderRadius='0.5rem'
                p='0.5rem'
                bg='gray.200'
              >
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                <Text mt='0.5rem'>{title}</Text>

                <Flex justifyContent='flex-end' mb='0.5rem'>
                  <Text>{new Date(publishedAt).toLocaleString()}</Text>
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
  );
};
