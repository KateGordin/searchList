<template>
  <div class="autocomplete-books-list-item">
    <div>
      <div>
        <span>{{ book.firstPart }}</span>
        <span class="autocomplete-books-list-item__highlighted-substring">{{ book.needle }}</span>
        <span>{{ book.lastPart }}</span>
      </div>
      <span class="autocomplete-books-list-item__author">
        {{ book.author }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CityItemList',
  props: {
    book: {
      type: Object,
    },
  },
})
</script>
<style lang="scss" scoped>
.autocomplete-books-list-item {
  @include item-list;

  &__author {
    font-size: 14px;
    font-weight: 300;
    color: grey;
  }
}
</style>
