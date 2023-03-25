import { createContext, memo, useContext } from 'react';
import { ChildrenProps } from '../../types/ChildrenProps';

interface ArticleProviderProps extends ChildrenProps {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string | null;
  source: {
    id: string | null;
    name: string;
  };
}

interface ArticleStateContext {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string | null;
  source: {
    id: string | null;
    name: string;
  };
}

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
