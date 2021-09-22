export interface Book {
  title: string
  author: string
}

export interface SearchItem {
  firstPart: string
  needle: string
  lastPart: string
  author?: string
}
