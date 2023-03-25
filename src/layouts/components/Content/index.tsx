import { Grid, UnorderedList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { articlesState } from '../../../slices/articlesSlice';
import { ArticleSquare } from '../ArticleSquare';
import { SingleArticleProvider } from '../../../context/SingleArticleContext';
import { Footer } from '../Footer';
import { ArticleListElement } from '../ArticleListElement';
import { Loader } from '../Loader';
import { appState } from '../../../slices/appSlice';
import { ContentWrapper } from '../../containers/ContentWrapper';
import { StatusEnum } from '../../../enums/StatusEnum';

export const Content = () => {
  const { articles, status } = useSelector(articlesState);
  const { isList } = useSelector(appState);

  if (status === StatusEnum.LOADING) return <Loader />;
  return (
    <ContentWrapper>
      {isList ? (
        <UnorderedList display='flex' flexDirection='column' gap='1rem'>
          {articles.map(({ url, ...rest }) => (
            <SingleArticleProvider key={url} url={url} {...rest}>
              <ArticleListElement />
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
          {articles.map(({ url, ...rest }) => (
            <SingleArticleProvider key={url} url={url} {...rest}>
              <ArticleSquare />
            </SingleArticleProvider>
          ))}
        </Grid>
      )}

      <Footer />
    </ContentWrapper>
  );
};
