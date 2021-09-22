<template>
  <div class="autocomplete">
    <Tabs @tab-click="onTabClick" />
    <FilterList v-show="activeTab === CITIES" :is-empty-list="!citiesList.length">
      <template #input>
        <SearchInput
          ref="citiesInput"
          data-testid="cities-input"
          placeholder="Input a city name"
          :value="citiesInitialSearchString"
          @input="onInputSearch"
        />
      </template>
      <template #itemList>
        <CityItemList
          v-for="(city, i) of citiesList"
          :key="`${city}${i}`"
          :city="city"
          data-testid="city-filter-item"
          class="autocomplete__list-item"
        />
      </template>
    </FilterList>
    <FilterList v-show="activeTab === BOOKS" :is-empty-list="!booksList.length">
      <template #input>
        <SearchInput
          ref="booksInput"
          data-testid="books-input"
          placeholder="Input a book title"
          :value="booksInitialSearchString"
          @input="onInputSearch"
        />
      </template>
      <template #itemList>
        <BookItemList
          v-for="(book, i) of booksList"
          :key="`${book}${i}`"
          :book="book"
          data-testid="book-filter-item"
          class="autocomplete__list-item"
        />
      </template>
    </FilterList>
  </div>
</template>

<script lang="ts">
// Dependencies
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import { get } from 'lodash'
// Utils
import { BOOKS, BOOKS_SEARCH_PARAM, CITIES, CITIES_SEARCH_PARAM, MIN_SEARCH_STRING_LENGTH } from '@/utils/constants'
import { SearchItem } from '@/types/interfaces'
//Components
import SearchInput from '@/components/SearchInput.vue'
import FilterList from '@/components/FilterList.vue'
import CityItemList from '@/components/CityItemList.vue'
import BookItemList from '@/components/BookItemList.vue'
import Tabs from '@/components/Tabs.vue'
// Services
import { searchCities } from '@/services/cityService'
import { searchBooks } from '@/services/bookService'
import { setSearchStringToUrl } from '@/services/urlService'

export default defineComponent({
  name: 'App',
  components: { SearchInput, FilterList, CityItemList, BookItemList, Tabs },
  setup() {
    const citiesInitialSearchString = ref<string>('')
    const booksInitialSearchString = ref<string>('')
    const booksInput = ref<HTMLElement>()
    const citiesInput = ref<HTMLElement>()
    const citiesList = ref<SearchItem[]>([])
    const booksList = ref<SearchItem[]>([])
    const activeTab = ref(CITIES)
    const citiesCashResult: { [key: string]: SearchItem[] } = {}
    const booksCashResult: { [key: string]: SearchItem[] } = {}

    const onTabClick = (tab: string) => {
      activeTab.value = tab

      nextTick(() => focusInput())
    }

    const focusInput = () => {
      if (activeTab.value === CITIES) {
        get(citiesInput, 'value.$refs.input')?.focus()
      }

      if (activeTab.value === BOOKS) {
        get(booksInput, 'value.$refs.input')?.focus()
      }
    }

    const onInputSearch = (event: InputEvent) => {
      const target = event.target as HTMLInputElement
      const value = target.value.toLowerCase()

      if (value.length < MIN_SEARCH_STRING_LENGTH) {
        target.setCustomValidity('Please enter at least 3 characters')
        target.reportValidity()
      } else {
        target.setCustomValidity('')
      }

      handleSearch(value)
    }

    const handleSearch = (searchString: string) => {
      if (activeTab.value === BOOKS) {
        handleSearchBooks(searchString)
      }

      if (activeTab.value === CITIES) {
        handleSearchCities(searchString)
      }
    }

    const handleSearchBooks = (searchString: string) => {
      if (searchString.length < MIN_SEARCH_STRING_LENGTH) {
        booksList.value = []
        setSearchStringToUrl({
          searchStringBooks: '',
        })

        return
      }

      if (!booksCashResult[searchString]) {
        booksList.value = searchBooks(searchString)
        booksCashResult[searchString] = booksList.value
      } else {
        booksList.value = booksCashResult[searchString]
      }

      setSearchStringToUrl({
        searchStringBooks: searchString,
      })
    }

    const handleSearchCities = (searchString: string) => {
      if (searchString.length < MIN_SEARCH_STRING_LENGTH) {
        citiesList.value = []
        setSearchStringToUrl({
          searchStringCities: '',
        })
        return
      }

      if (!citiesCashResult[searchString]) {
        citiesList.value = searchCities(searchString)
        citiesCashResult[searchString] = citiesList.value
      } else {
        citiesList.value = citiesCashResult[searchString]
      }

      setSearchStringToUrl({
        searchStringCities: searchString,
      })
    }

    onMounted(() => {
      useSearchKeysFromUrl()
      focusInput()
    })

    const useSearchKeysFromUrl = () => {
      const searchParams = new URLSearchParams(window.location.search)
      const citiesKey: string = searchParams.get(CITIES_SEARCH_PARAM) ?? ''
      const booksKey: string = searchParams.get(BOOKS_SEARCH_PARAM) ?? ''

      if (booksKey.length) {
        booksInitialSearchString.value = booksKey
        handleSearchBooks(booksKey)
      }

      if (citiesKey.length) {
        citiesInitialSearchString.value = citiesKey
        handleSearchCities(citiesKey)
      }
    }

    return {
      BOOKS,
      CITIES,
      activeTab,
      booksList,
      citiesList,
      citiesInput,
      booksInput,
      citiesInitialSearchString,
      booksInitialSearchString,
      onTabClick,
      onInputSearch,
    }
  },
})
</script>

<style lang="scss">
.autocomplete {
  margin: 0 auto;
  max-width: 800px;
}
</style>
