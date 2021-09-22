import { searchBooks } from '@/services/bookService'

const mockedFilteredBooks = [
  {
    firstPart: '',
    needle: 'Don',
    lastPart: ' Quixote',
    author: 'Miguel De Cervantes',
  },
]

describe('Book Service', () => {
  it('filters cities by search string', () => {
    const searchString = 'don'
    const result = searchBooks(searchString)

    expect(result).toEqual(mockedFilteredBooks)
  })
})
