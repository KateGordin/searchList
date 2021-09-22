import { books } from '@/utils/constants'
import { Book, SearchItem } from '@/types/interfaces'

export const searchBooks = (searchString: string): SearchItem[] =>
  books
    .map((book: Book) => {
      const title = book.title
      const searchStringIndex = title.toLowerCase().indexOf(searchString)

      if (searchStringIndex === -1) {
        return
      }

      return {
        firstPart: title.substring(0, searchStringIndex),
        needle: title.substring(searchStringIndex, searchStringIndex + searchString.length),
        lastPart: title.substring(searchStringIndex + searchString.length),
        author: book.author,
      }
    })
    .filter(n => n) as SearchItem[]
