import { Flex, Grid, Text, UnorderedList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { articlesState } from '../../../slices/articlesSlice';
import { ArticleSquare } from '../ArticleSquare';
import { SingleArticleProvider } from '../../../context/SingleArticleContext';
import { Footer } from '../Footer';
import { ArticleListElement } from '../ArticleListElement';
import { Loader } from '../Loader';

export const Content = ({ isList }: any) => {
  const { articles, status } = useSelector(articlesState);

  if (status === 'loading') return <Loader />;
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
        <UnorderedList display='flex' flexDirection='column' gap='1rem'>
          {articles.map(({ url, ...rest }: any) => (
            <SingleArticleProvider key={url} url={url} {...rest}>
              <ArticleListElement key={url} />
            </SingleArticleProvider>
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
            <SingleArticleProvider key={url} url={url} {...rest}>
              <ArticleSquare />
            </SingleArticleProvider>
          ))}
        </Grid>
      )}

      <Footer />
    </Flex>
  );
};
