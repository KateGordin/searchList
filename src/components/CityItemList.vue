<template>
  <div class="autocomplete-cities-list-item">
    <div>
      <span>{{ city.firstPart }}</span>
      <span class="autocomplete-cities-list-item__highlighted-substring">{{ city.needle }}</span>
      <span>{{ city.lastPart }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CityItemList',
  props: {
    city: {
      type: Object,
    },
  },
})
</script>
<style lang="scss" scoped>
.autocomplete-cities-list-item {
  @include item-list;
}
</style>
