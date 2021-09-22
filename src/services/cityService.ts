import { cities } from '@/utils/constants'
import { SearchItem } from '@/types/interfaces'

export const searchCities = (searchString: string): SearchItem[] =>
  cities
    .map((city: string) => {
      const searchStringIndex = city.toLowerCase().indexOf(searchString)

      if (searchStringIndex === -1) {
        return
      }

      return {
        firstPart: city.substring(0, searchStringIndex),
        needle: city.substring(searchStringIndex, searchStringIndex + searchString.length),
        lastPart: city.substring(searchStringIndex + searchString.length),
      }
    })
    .filter(n => n) as SearchItem[]
