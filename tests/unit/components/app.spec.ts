import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import * as cityService from '@/services/cityService'
// @ts-ignore
import SearchInput from '@/components/SearchInput'

describe('Autocomplete', () => {
  let searchCitiesSpy: any

  beforeAll(() => {
    searchCitiesSpy = jest.spyOn(cityService, 'searchCities')
  })

  it('doesnt run search if search string length is less than MIN_SEARCH_STRING_LENGTH', () => {
    // @ts-ignore
    const wrapper = mount(App, {})

    const input = wrapper.findComponent(SearchInput)

    input.setValue('sa')
    input.trigger('input')

    expect(searchCitiesSpy).not.toBeCalled()
  })

  it('run search if search string length is more than MIN_SEARCH_STRING_LENGTH', () => {
    // @ts-ignore
    const wrapper = mount(App, {})

    const input = wrapper.findComponent(SearchInput)

    input.setValue('san')
    input.trigger('input')

    expect(searchCitiesSpy).not.toBeCalled()
  })
})
