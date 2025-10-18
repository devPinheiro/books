import { useState, useRef } from 'react';

interface HeaderProps {
  onGenreChange?: (genre: string) => void;
}

const genres = [
  'Books', // All books
  'Fiction',
  'History',
  'Biography',
  'Science Fiction',
  'Religion',
  'Philosophy',
  'Culture',
  'Young Adult',
  'Memoir',
  'Literary Fiction',
  'Fantasy',
  'Romance',
  'Mystery',
  'Thriller',
  'Self-Help'
];

export const Header = ({ onGenreChange }: HeaderProps) => {
  const [activeGenre, setActiveGenre] = useState('Books');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleGenreClick = (genre: string) => {
    setActiveGenre(genre);
    if (onGenreChange) {
      onGenreChange(genre);
    }
  };

  // const scrollTabs = (direction: 'left' | 'right') => {
  //   if (scrollContainerRef.current) {
  //     const scrollAmount = 200;
  //     const newScrollLeft = scrollContainerRef.current.scrollLeft + 
  //       (direction === 'right' ? scrollAmount : -scrollAmount);
      
  //     scrollContainerRef.current.scrollTo({
  //       left: newScrollLeft,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="px-4 py-4 pt-12">
        <div className="relative">
          {/* Left scroll button */}
          {/* <button
            onClick={() => scrollTabs('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-amber-400 hover:bg-black/70 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button> */}

          {/* Scrollable tabs container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide mx-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center space-x-1 min-w-max">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleGenreClick(genre)}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                    ${activeGenre === genre
                      ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/25'
                      : 'text-gray-300 hover:text-amber-400 hover:bg-white/10'
                    }
                  `}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Right scroll button */}
          {/* <button
            onClick={() => scrollTabs('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-amber-400 hover:bg-black/70 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
};