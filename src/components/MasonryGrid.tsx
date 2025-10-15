import Masonry from 'react-masonry-css';
import { Book } from '../types/book';
import { BookCard } from './BookCard';

interface MasonryGridProps {
  books: Book[];
  onAuthorClick: (author: string) => void;
  onGenreClick: (genre: string) => void;
}

export const MasonryGrid = ({ books, onAuthorClick, onGenreClick }: MasonryGridProps) => {
  if (!books.length) return null;

  // Responsive breakpoints for columns
  const breakpointColumnsObj = {
    default: 4, // 4 columns for desktop
    1280: 3,    // 3 columns for large tablets/small desktop
    768: 2,     // 2 columns for tablets
    640: 2,     // 2 columns for mobile
    480: 2      // 1 column for very small screens
  };

  // Generate varying heights for Pinterest-style layout with minimum 150px for desktop
  const getRandomHeight = (index: number) => {
    const heights = [
      'h-[400px]', 'h-[420px]', 'h-[480px]', 'h-[440px]', 'h-[460px]', 
      'h-[480px]', 'h-[450px]', 'h-[420px]', 'h-[400px]', 'h-[460px]',
      'h-[450px]', 'h-[440px]', 'h-[340px]', 'h-[470px]', 'h-[460px]'
    ];
    return heights[index % heights.length];
  };

  return (
    <div className="px-4 py-8">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {books.map((book, index) => (
          <div key={book.id} className="mb-3">
            <BookCard
              book={book}
              onAuthorClick={onAuthorClick}
              onGenreClick={onGenreClick}
              height={getRandomHeight(index)}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};