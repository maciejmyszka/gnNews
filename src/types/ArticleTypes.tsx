import { StatusEnum } from "enums/StatusEnum";
import { ChildrenProps } from "types/ChildrenProps";

export interface ArticleResponse {
  status: string;
  totalResults: number;
  articles: ArticleModel[];
}

export interface ArticleModel {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface ArticleSliceInitial {
  articles: ArticleModel[];
  count: number;
  status: StatusEnum;
}

export interface ArticleProviderProps extends ChildrenProps {
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

export type ArticleStateContext = Omit<ArticleProviderProps, 'children'>;
