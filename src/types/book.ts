export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  rating: number;
  genres: string[];
  description: string;
  publishedYear: number;
}

export interface BookSearchResult {
  books: Book[];
  totalCount: number;
  hasMore: boolean;
}