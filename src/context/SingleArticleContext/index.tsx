import { createContext, memo, useContext } from 'react';

export const singleArticleContext = createContext<any>(null);

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
  }: any) => {
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

  const {
    author,
    content,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
  } = singleArticleState;

  return {
    author,
    content,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
  };
};
