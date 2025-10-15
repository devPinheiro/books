import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MasonryGrid } from './components/MasonryGrid';
import { BottomNavigation } from './components/BottomNavigation';
import { SearchModal } from './components/SearchModal';
import { Book } from './types/book';
import { getRandomBooks, searchBooks } from './data/mockBooks';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isSearchTransitioning, setIsSearchTransitioning] = useState(false);
  const [currentSearchQuery, setCurrentSearchQuery] = useState('');

  useEffect(() => {
    setBooks(getRandomBooks(20));
  }, []);

  const updateBooksWithAnimation = (newBooks: Book[]) => {
    setIsTransitioning(true);
    
    // Fade out current books
    setTimeout(() => {
      setBooks(newBooks);
      // Fade in new books
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  const handleGenreChange = (genre: string) => {
    let newBooks: Book[];
    if (genre === 'Books') {
      // Show all books
      newBooks = getRandomBooks(20);
    } else {
      // Filter books by genre
      const filtered = getRandomBooks(50).filter(book => 
        book.genres.some(bookGenre => 
          bookGenre.toLowerCase().includes(genre.toLowerCase())
        )
      );
      newBooks = filtered.length > 0 ? filtered : getRandomBooks(20);
    }
    updateBooksWithAnimation(newBooks);
  };

  const updateSearchResultsWithAnimation = (newResults: Book[]) => {
    setIsSearchTransitioning(true);
    
    // Fade out current results
    setTimeout(() => {
      setSearchResults(newResults);
      // Fade in new results
      setTimeout(() => {
        setIsSearchTransitioning(false);
      }, 100);
    }, 300);
  };

  const handleSearchIconClick = () => {
    if (!isSearchModalOpen) {
      // Open modal with empty state
      setIsSearchModalOpen(true);
      setSearchResults([]);
      setCurrentSearchQuery('');
    }
  };

  const handleSearch = (query: string) => {
    setCurrentSearchQuery(query);
    const results = searchBooks(query);
    
    if (!isSearchModalOpen) {
      // Open modal and set initial results
      setSearchResults(results);
      setIsSearchModalOpen(true);
    } else {
      // Update results with animation
      updateSearchResultsWithAnimation(results);
    }
  };

  const handleSearchModalClose = () => {
    setIsSearchModalOpen(false);
    setSearchResults([]);
    setCurrentSearchQuery('');
    setIsSearchTransitioning(false);
  };

  const handleBookmark = () => {
    console.log('Bookmark clicked');
  };

  const handleGenreNavigation = () => {
    console.log('Genre navigation clicked');
  };

  const handleAuthorClick = (author: string) => {
    console.log('Author clicked:', author);
  };

  const handleGenreClick = (genre: string) => {
    console.log('Genre clicked:', genre);
  };

  return (
    <div className="min-h-screen bg-stone-950 mx-auto lg:px-16">
      <Header onGenreChange={handleGenreChange} />
      
      <main className="pt-24 pb-20">
        <div className={`transition-all duration-500 ease-out ${
          isTransitioning ? 'opacity-0 filter blur-sm' : 'opacity-100 filter blur-0'
        }`}>
          <MasonryGrid
            books={books}
            onAuthorClick={handleAuthorClick}
            onGenreClick={handleGenreClick}
          />
        </div>
      </main>
      
      <BottomNavigation 
        onSearch={handleSearchIconClick}
        onBookmark={handleBookmark}
        onGenre={handleGenreNavigation}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={handleSearchModalClose}
        searchResults={searchResults}
        onSearch={handleSearch}
        onAuthorClick={handleAuthorClick}
        onGenreClick={handleGenreClick}
        isTransitioning={isSearchTransitioning}
        searchQuery={currentSearchQuery}
      />
    </div>
  );
}

export default App;