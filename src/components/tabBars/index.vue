<template>
  <div class="tab-bars">
    <div
      class="tab-item"
      v-for="item in tabs"
      :key="item.key"
      :class="{ active: item.key === active }"
      @click="onTabClick(item.key)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  tabs: {
    type: Array as () => { key: string; text: string }[],
    default: () => [],
  },
  active: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:active', 'change'])

function onTabClick(tabKey: string) {
  emit('update:active', tabKey)
  emit('change', tabKey)
}
</script>
<style lang="scss">
.tab-bars {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-bottom: 1px solid #eee;
}
.tab-item {
  flex: 1;
  text-align: center;
  padding: 12px 0;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;
}
.tab-item.active {
  color: #007aff;
  border-bottom: 2px solid #007aff;
  font-weight: bold;
}
</style>
