<template>
  <div class="autocomplete-tabs" data-testid="tabs">
    <div
      ref="citiesTab"
      class="autocomplete-tab"
      :class="{ 'autocomplete-tab__active': activeTab === CITIES }"
      @click="onTabClick(citiesTab, CITIES)"
    >
      <span>Cities</span>
    </div>
    <div
      ref="booksTab"
      class="autocomplete-tab"
      :class="{ 'autocomplete-tab__active': activeTab === BOOKS }"
      @click="onTabClick(booksTab, BOOKS)"
    >
      <span>Books</span>
    </div>
    <div ref="tabUnderLine" class="autocomplete-tabs__bottom-line" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { BOOKS, CITIES } from '@/utils/constants'

export default defineComponent({
  name: 'Tabs',
  emits: ['tab-click'],

  setup(props, { emit }) {
    const booksTab = ref<HTMLElement>()
    const citiesTab = ref<HTMLElement>()
    const tabUnderLine = ref<HTMLElement>()
    const activeTab = ref(CITIES)

    const onTabClick = (tabElement: HTMLElement, tab: string) => {
      activeTab.value = tab

      if (tabUnderLine.value) {
        tabUnderLine.value.style.left = `${tabElement.offsetLeft}px`
      }

      emit('tab-click', tab)
    }

    return {
      BOOKS,
      CITIES,
      booksTab,
      citiesTab,
      activeTab,
      tabUnderLine,
      onTabClick,
    }
  },
})
</script>
<style lang="scss">
.autocomplete-tabs {
  display: flex;
  position: relative;

  &__bottom-line {
    content: '';
    position: absolute;
    height: 4px;
    width: 220px;
    background-color: $active;
    bottom: 0;
    left: 0;
    transition: left 0.5s;
  }
}

.autocomplete-tab {
  width: 200px;
  font-size: 16px;
  padding: 10px;
  border-bottom: none;

  &__active {
    color: $active;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
