import { Flex, Grid, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { articlesState } from '../../../slices/articlesSlice';
import { ArticleSquare } from '../ArticleSquare';

export const Content = ({ isList }: any) => {
  const { articles, count } = useSelector(articlesState);

  return (
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
          {articles.map(({ url, ...rest }: any) => (
            <ArticleSquare key={url} {...rest} />
          ))}
        </Grid>
      )}

      <Flex flexDirection='column'>
        <Text>{new Date().toLocaleString()}</Text>
        <Text>{count}</Text>
      </Flex>
    </Flex>
  );
};
