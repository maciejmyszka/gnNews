import { createContext, memo, useContext } from 'react';
import { ArticleProviderProps, ArticleStateContext } from 'types/ArticleTypes';

export const singleArticleContext = createContext<ArticleStateContext | null>(
  null
);

const { Provider } = singleArticleContext;

export const SingleArticleProvider = memo(
  ({
    children,
    author,
    content,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
  }: ArticleProviderProps) => {
    return (
      <Provider
        value={{
          author,
          content,
          description,
          publishedAt,
          title,
          url,
          urlToImage,
          source,
        }}
      >
        {children}
      </Provider>
    );
  }
);

export const useSingleArticleContext = () => {
  const singleArticleState = useContext(singleArticleContext);

  if (!singleArticleState) {
    throw new Error('You have to add SingleArticleProvider');
  }

  return {
    ...singleArticleState,
  };
};
