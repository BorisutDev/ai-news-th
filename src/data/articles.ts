export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  emoji: string;
  author: string;
  image?: string;
}

export const articles: Article[] = [];