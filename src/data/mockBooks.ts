import { Book } from '../types/book';

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Black and British: A Forgotten History',
    author: 'David Olusoga',
    coverUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop&auto=format',
    rating: 4.5,
    genres: ['History', 'Non-fiction', 'British History'],
    description: 'A groundbreaking history of the African diaspora in Britain.',
    publishedYear: 2016
  },
  {
    id: '2',
    title: 'How to Read',
    author: 'C.S. Lewis',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&auto=format',
    rating: 4.3,
    genres: ['Literature', 'Education', 'Literary Criticism'],
    description: 'A guide to appreciating literature and developing critical reading skills.',
    publishedYear: 1961
  },
  {
    id: '3',
    title: 'GOD',
    author: 'Frank Turek',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    rating: 4.7,
    genres: ['Religion', 'Philosophy', 'Apologetics'],
    description: 'An exploration of faith and reason in the modern world.',
    publishedYear: 2019
  },
  {
    id: '4',
    title: 'This Book Betrays My Brother',
    author: 'Kagiso Lesego Molope',
    coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop&auto=format',
    rating: 4.4,
    genres: ['Young Adult', 'Family', 'African Literature'],
    description: 'A powerful story about family, loyalty, and difficult choices.',
    publishedYear: 2012
  },
  {
    id: '5',
    title: 'Book Stack Collection',
    author: 'Various Authors',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
    rating: 4.1,
    genres: ['Fiction', 'Collection'],
    description: 'A curated collection of contemporary fiction.',
    publishedYear: 2023
  },
  {
    id: '6',
    title: 'Red Book',
    author: 'Various Authors',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&auto=format',
    rating: 4.2,
    genres: ['Fiction'],
    description: 'A colorful collection.',
    publishedYear: 2022
  },
  {
    id: '7',
    title: 'Africa Is My Country',
    author: 'Dipo Faloyin',
    coverUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&auto=format',
    rating: 4.6,
    genres: ['Culture', 'Africa', 'Essays'],
    description: 'Breaking stereotypes and exploring the diversity of Africa.',
    publishedYear: 2022
  },
  {
    id: '8',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    coverUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=500&fit=crop&auto=format',
    rating: 4.8,
    genres: ['Literary Fiction', 'African Literature', 'Classic'],
    description: 'A masterpiece of African literature exploring colonialism and tradition.',
    publishedYear: 1958
  },
  {
    id: '9',
    title: 'The African',
    author: 'Chimera Laye',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&auto=format',
    rating: 4.2,
    genres: ['Biography', 'African Literature', 'Coming of Age'],
    description: 'An autobiographical novel about growing up in Guinea.',
    publishedYear: 1953
  },
  {
    id: '10',
    title: 'Purple Hibiscus',
    author: 'Chimamanda Ngozi Adichie',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&auto=format',
    rating: 4.4,
    genres: ['Literary Fiction', 'Coming of Age', 'Nigerian Literature'],
    description: 'A powerful debut about a Nigerian girl caught between worlds.',
    publishedYear: 2003
  },
  {
    id: '11',
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    coverUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=500&fit=crop&auto=format',
    rating: 4.6,
    genres: ['Historical Fiction', 'War', 'African Literature'],
    description: 'Epic novel about the Nigerian Civil War.',
    publishedYear: 2006
  },
  {
    id: '12',
    title: 'Americanah',
    author: 'Chimamanda Ngozi Adichie',
    coverUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&auto=format',
    rating: 4.5,
    genres: ['Contemporary Fiction', 'Immigration', 'Romance'],
    description: 'A love story across continents and cultures.',
    publishedYear: 2013
  },
  {
    id: '13',
    title: 'Born a Crime',
    author: 'Trevor Noah',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop&auto=format',
    rating: 4.7,
    genres: ['Memoir', 'Humor', 'South African Literature'],
    description: 'Stories from a South African childhood.',
    publishedYear: 2016
  },
  {
    id: '14',
    title: 'The Power',
    author: 'Naomi Alderman',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    rating: 4.1,
    genres: ['Science Fiction', 'Feminism', 'Dystopian'],
    description: 'What if women developed a power that could kill?',
    publishedYear: 2016
  },
  {
    id: '15',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    coverUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop&auto=format',
    rating: 4.8,
    genres: ['Historical Fiction', 'Romance', 'Hollywood'],
    description: 'A reclusive Hollywood icon tells her story.',
    publishedYear: 2017
  },
  {
    id: '16',
    title: 'Educated',
    author: 'Tara Westover',
    coverUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop&auto=format',
    rating: 4.6,
    genres: ['Memoir', 'Education', 'Family'],
    description: 'A woman\'s quest for knowledge and self-discovery.',
    publishedYear: 2018
  },
  {
    id: '17',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&auto=format',
    rating: 4.4,
    genres: ['Mystery', 'Nature', 'Coming of Age'],
    description: 'A mystery set in the marshlands of North Carolina.',
    publishedYear: 2018
  },
  {
    id: '18',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&auto=format',
    rating: 4.2,
    genres: ['Philosophy', 'Fantasy', 'Self-Help'],
    description: 'Between life and death is a library with infinite books.',
    publishedYear: 2020
  },
  {
    id: '19',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    coverUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=400&fit=crop&auto=format',
    rating: 4.0,
    genres: ['Science Fiction', 'Literary Fiction', 'AI'],
    description: 'An artificial friend observes the world around her.',
    publishedYear: 2021
  },
  {
    id: '20',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&auto=format',
    rating: 4.9,
    genres: ['Science Fiction', 'Space', 'Humor'],
    description: 'A lone astronaut must save humanity.',
    publishedYear: 2021
  }
];

export const getRandomBooks = (count: number = 20): Book[] => {
  const shuffled = [...mockBooks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, mockBooks.length));
};

export const searchBooks = (query: string): Book[] => {
  if (!query.trim()) return getRandomBooks();
  
  const lowercaseQuery = query.toLowerCase();
  return mockBooks.filter(book => 
    book.title.toLowerCase().includes(lowercaseQuery) ||
    book.author.toLowerCase().includes(lowercaseQuery) ||
    book.genres.some(genre => genre.toLowerCase().includes(lowercaseQuery))
  );
};