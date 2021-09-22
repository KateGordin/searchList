import { BOOKS_SEARCH_PARAM, CITIES_SEARCH_PARAM } from '@/utils/constants'

export const setSearchStringToUrl = ({
  searchStringCities,
  searchStringBooks,
}: {
  searchStringCities?: string
  searchStringBooks?: string
}): void => {
  const searchParams = new URLSearchParams(window.location.search)
  const citiesKey: string = searchParams.get(CITIES_SEARCH_PARAM) ?? ''
  const booksKey: string = searchParams.get(BOOKS_SEARCH_PARAM) ?? ''
  const URL = `?${CITIES_SEARCH_PARAM}=${searchStringCities ?? citiesKey}&${BOOKS_SEARCH_PARAM}=${
    searchStringBooks ?? booksKey
  }`

  history.pushState({}, '', URL)
}
