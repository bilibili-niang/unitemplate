<template>
  <div class="tab-bars">

    <div class="tab-item" v-for="item in tabs">

      {{ item }}

    </div>

  </div>
</template>
<script language="ts">
import { defineProps } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => {
      return []
    },
  },
  active: {
    type: Number,
    default: 0,
  },
})

</script>
<style lang="scss">
.tab-bars {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>