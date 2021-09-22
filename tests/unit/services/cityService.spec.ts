import { searchCities } from '@/services/cityService'

const mockedFilteredCities = [
  {
    firstPart: '',
    needle: 'san',
    lastPart: ' jose',
  },
  {
    firstPart: '',
    needle: 'san',
    lastPart: 'tiago',
  },
  {
    firstPart: '',
    needle: 'san',
    lastPart: ' francisco',
  },
  {
    firstPart: '',
    needle: 'san',
    lastPart: 'ta rosa',
  },
  {
    firstPart: '',
    needle: 'san',
    lastPart: ' juan',
  },
  {
    firstPart: 'thou',
    needle: 'san',
    lastPart: 'd oaks',
  },
]

describe('City Service', () => {
  it('filters cities by search string', () => {
    const searchString = 'san'
    const result = searchCities(searchString)

    expect(result).toEqual(mockedFilteredCities)
  })
})
