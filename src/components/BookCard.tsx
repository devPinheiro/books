import { useState } from 'react';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
  onAuthorClick: (author: string) => void;
  onGenreClick: (genre: string) => void;
  height?: string;
}

export const BookCard = ({ book, height = 'h-48', onAuthorClick, onGenreClick }: BookCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`relative w-full ${height} cursor-pointer`} style={{ perspective: '1000px' }}>
      <div 
        className={`relative w-full h-full transition-transform duration-600 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={handleCardClick}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-amber-400/20 transition-shadow duration-300">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
            loading="lazy"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action button with elegant accent */}
          <button className="absolute top-3 right-3 w-8 h-8 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700 hover:border-amber-400 hover:bg-amber-400/20 transition-all duration-200">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-300 hover:text-amber-400 transition-colors">
              <path d="M5 12h14"/>
              <path d="M12 5l7 7-7 7"/>
            </svg>
          </button>
          
          {/* Book info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-gray-100 font-medium text-sm mb-1 line-clamp-2">{book.title}</h3>
            <p className="text-gray-400 text-xs">{book.author}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-gradient-to-br from-stone-900 to-stone-800 border border-stone-700">
          <div className="p-6 h-full flex flex-col">
            {/* Header Section */}
            <div className="mb-4">
              {/* Book Title - Bold, elegant sans-serif */}
              <h3 className="text-white font-bold text-lg leading-tight mb-2 font-sans">
                {book.title}
              </h3>
              
              {/* Author Name - Lighter weight */}
              <p className="text-gray-300 font-normal text-base mb-4">
                {book.author}
              </p>
              
              {/* Divider Line */}
              <div className="w-full h-px bg-gray-600 mb-4"></div>
            </div>

            {/* Description Section */}
            <div className="flex-1 mb-4">
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                {book.description || "A captivating story that will transport you to another world. Discover the depth and beauty of storytelling in this remarkable literary work that promises to engage readers from the very first page."}
              </p>
            </div>

            {/* Data Points Section */}
            <div className="space-y-3">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-300 text-sm font-medium">{book.rating.toFixed(1)}</span>
              </div>

              {/* Genre Pills */}
              <div className="flex flex-wrap gap-2">
                {book.genres.slice(0, 3).map((genre, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      onGenreClick(genre);
                    }}
                    className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-medium rounded-full border border-amber-400/30 hover:bg-amber-400/30 hover:border-amber-400/50 transition-all duration-200"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 space-y-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAuthorClick(book.author);
                }}
                className="w-full py-2 bg-amber-400 text-black font-medium text-sm rounded-lg hover:bg-amber-500 transition-colors"
              >
                More by {book.author.split(' ')[0]}
              </button>
              {/* <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="w-full py-2 bg-stone-700 text-gray-300 font-medium text-sm rounded-lg hover:bg-stone-600 transition-colors"
              >
                Back to Cover
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};