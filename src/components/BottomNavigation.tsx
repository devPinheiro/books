interface BottomNavigationProps {
  onSearch?: () => void;
  onBookmark?: () => void;
  onGenre?: () => void;
}

export const BottomNavigation = ({ onSearch, onBookmark, onGenre }: BottomNavigationProps) => {
  return (
    <div className="mx-auto w-full flex items-center justify-center">
      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 bg-stone-900/90 backdrop-blur-md border rounded-3xl border-stone-700 mx-auto px-8 shadow-2xl shadow-black/50">
        <div className="flex justify-between gap-8 py-4">
          {/* Bookmark */}
          <button 
            onClick={onBookmark}
            className="flex flex-col items-center p-3 text-gray-400 hover:text-amber-400 transition-all duration-200 hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
          </button>

          {/* Search */}
          <button 
            onClick={onSearch}
            className="flex flex-col items-center p-3 text-gray-400 hover:text-amber-400 transition-all duration-200 hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          {/* Genre */}
          <button 
            onClick={onGenre}
            className="flex flex-col items-center p-3 text-gray-400 hover:text-amber-400 transition-all duration-200 hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};