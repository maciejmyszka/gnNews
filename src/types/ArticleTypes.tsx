export interface ArticleResponse {
  status: string;
  totalResults: number;
  articles: ArticleType[];
}

export interface ArticleType {
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
