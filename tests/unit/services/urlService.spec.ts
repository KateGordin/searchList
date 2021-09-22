import { setSearchStringToUrl } from '@/services/urlService'

describe('URL Service', () => {
  let historySpy: any

  beforeAll(() => {
    historySpy = jest.spyOn(history, 'pushState')
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('updates citiesKey query params', () => {
    setSearchStringToUrl({
      searchStringCities: 'test city',
    })

    expect(historySpy).toHaveBeenCalledWith({}, '', '?citiesKey=test city&booksKey=')
  })

  it('updates booksKey query param', () => {
    setSearchStringToUrl({
      searchStringBooks: 'test book',
    })

    expect(historySpy).toHaveBeenCalledWith({}, '', '?citiesKey=test city&booksKey=test book')
  })
})
