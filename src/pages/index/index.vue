<template>
  <div
    class="content"
    @click="test"
  >

    <div @click="showPicker">
      {{ showDate() }}
    </div>
    <datePicker
      ref="pickerRef"
      :defaultLunar="true"
      :defaultDate="defaultDate"
      @submit="getSubmitData"
    />
    <TabBars
      :tabs="Tabbars"
    />
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
const avtive=ref('0')

const Tabbars = ref([
  {
    text: '首页',
    icon: 'icon-shouye',
    active: '0',
  },
  {
    text: '购物车',
    icon: 'icon-gouwuche',
    active: '1',
  },
  {
    text: '我的',
    icon: 'icon-wode',
    active: '2',
  },
])

</script>

<style></style>
