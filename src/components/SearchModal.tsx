import { useState, useRef, useEffect } from 'react';
import { Book } from '../types/book';
import { MasonryGrid } from './MasonryGrid';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchResults: Book[];
  onSearch: (query: string) => void;
  onAuthorClick: (author: string) => void;
  onGenreClick: (genre: string) => void;
  isTransitioning: boolean;
  searchQuery: string;
}

export const SearchModal = ({ 
  isOpen, 
  onClose, 
  searchResults, 
  onSearch, 
  onAuthorClick, 
  onGenreClick,
  isTransitioning,
  searchQuery: initialQuery
}: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative w-full h-full bg-stone-950/95 backdrop-blur-xl transition-all duration-700 ease-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        
        {/* Header */}
        <div className="relative border-b border-stone-800/50 bg-stone-950/90 backdrop-blur-md">
          <div className="px-6 py-6">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-stone-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-stone-700/50 transition-all duration-200 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Search Header */}
            <div className="pr-16">
              <h2 className="text-2xl font-bold text-white mb-2">Search Results</h2>
              <p className="text-gray-400 text-sm">
                {searchResults.length} books found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="mt-6">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for a title or author..."
                  className="w-full px-6 py-4 bg-stone-900/60 backdrop-blur-sm border border-stone-700/50 rounded-2xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-amber-400 transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Content */}
        <div className="h-full overflow-y-auto pb-32 pt-6">
          <div className="px-6">
            {searchResults.length > 0 ? (
              <div className={`transition-all duration-500 ease-out ${
                isTransitioning ? 'opacity-0 filter blur-sm scale-95' : 'opacity-100 filter blur-0 scale-100'
              }`}>
                <MasonryGrid
                  books={searchResults}
                  onAuthorClick={onAuthorClick}
                  onGenreClick={onGenreClick}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 bg-stone-800/50 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-300 mb-2">No books found</h3>
                <p className="text-gray-500 text-center max-w-md">
                  Try adjusting your search terms or browse our collection by genre.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};