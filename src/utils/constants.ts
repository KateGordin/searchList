import { Book } from '@/types/interfaces'

export const MIN_SEARCH_STRING_LENGTH = 3

export const CITIES = 'cities'
export const BOOKS = 'books'

export const CITIES_SEARCH_PARAM = 'citiesKey'
export const BOOKS_SEARCH_PARAM = 'booksKey'

export const cities: string[] = [
  'san jose',
  'santiago',
  'san francisco',
  'santa rosa',
  'san juan',
  'sabadell',
  'salamanca',
  'salt lake city',
  'salinas',
  'salem',
  'sausalito',
  'taipei',
  'tel aviv',
  'tempe',
  'termez',
  'temuco',
  'tiajuna',
  'tieling',
  'thousand oaks',
  'thunder bay',
  'tokyo',
  'tulsa',
]

export const books: Book[] = [
  {
    title: 'Don Quixote',
    author: 'Miguel De Cervantes',
  },
  {
    title: "Pilgrim's Progress",
    author: 'John Bunyan',
  },
  {
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
  },
  {
    title: "Gulliver's Travels",
    author: 'Jonathan Swift',
  },
  {
    title: 'Tom Jones',
    author: 'Henry Fielding',
  },
  {
    title: 'Clarissa',
    author: 'Samuel Richardson',
  },
  {
    title: 'Tristram Shandy',
    author: 'Laurence Sterne',
  },
]
