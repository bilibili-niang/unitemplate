<template>
  <div class="content" @click="test">
    <div v-if="activeTabKey === 'home'">
      <div @click="showPicker">
        {{ showDate() }}
      </div>
      <datePicker
        ref="pickerRef"
        :defaultLunar="true"
        :defaultDate="defaultDate"
        @submit="getSubmitData"
      />

    </div>
    <div v-else-if="activeTabKey === 'cart'">这里是购物车内容</div>
    <div v-else-if="activeTabKey === 'mine'">这里是我的内容</div>

    <TabBars :tabs="tabList" :active="activeTabKey" @update:active="activeTabKey = $event" class="tab-content" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import datePicker from '../../components/thirdComponents/nj-birthday-picker/nj-birthday-picker.vue'
import TabBars from '../../components/tabBars/index.vue'

const pickerRef = ref({
  clone: () => 0,
  show: () => 0,
})

const defaultDate = ref(new Date())
const date = ref<any>({})

const test = () => {
  // console.log('pickerRef', pickerRef.value)
  console.log('ref:')
  console.log(pickerRef.value)
}

const showPicker = () => {
  pickerRef.value?.show()
}

const getSubmitData = (e: any) => {
  date.value = e
}
const showDate = () => {
  if (date.value?.cYear) {
    if (date.value.isLunar) {
      // 阴历
      return `${date.value.cYear}(${date.value.gzYear}) - ${date.value.cMonth}(${date.value.gzMonth}) - ${date.value.cDay}(${date.value.gzDay}) `
    } else {
      // 阳历
      return `${date.value.cYear} - ${date.value.cMonth} - ${date.value.cDay} `
    }
  } else {
    return '请选择日期'
  }
}

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
