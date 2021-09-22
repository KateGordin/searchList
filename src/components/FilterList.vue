<template>
  <div class="autocomplete-list" data-testid="filter-list">
    <slot name="input" />
    <slot name="itemList" />
    <div v-if="isEmptyList" class="autocomplete-list__empty" data-testid="empty-filter-list">
      <span>{{ emptyListMessage }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilterList',
  props: {
    isEmptyList: {
      type: Boolean,
      default: true,
    },
    emptyListMessage: {
      type: String,
      default: 'Please enter a correct search string',
    },
  },
})
</script>
<style lang="scss" scoped>
.autocomplete-list {
  min-height: 400px;
  padding: 20px;
  box-shadow: 0 2px 4px 1px rgb(0 0 0 / 25%);

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
}
</style>
