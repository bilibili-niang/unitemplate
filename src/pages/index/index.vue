<template>
  <div class="content" @click="test">
    <div v-if="activeTabKey === 'home'">
      <ContactList />
    </div>
    <div v-else-if="activeTabKey === 'cart'">这里是购物车内容</div>
    <div v-else-if="activeTabKey === 'mine'">这里是我的内容</div>

    <TabBars
      :tabs="tabList"
      :active="activeTabKey"
      @update:active="activeTabKey = $event"
      class="tab-content"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactList from '@/components/ContactList.vue'
import TabBars from '../../components/tabBars/index.vue'

const activeTabKey = ref('home')
const tabList = [
  { key: 'home', text: '首页' },
  { key: 'cart', text: '购物车' },
  { key: 'mine', text: '我的' },
]
</script>

<style>
.tab-content {
  position: fixed;
  bottom: 30px;
  left: 0;
  width: 100%;
}
</style>
