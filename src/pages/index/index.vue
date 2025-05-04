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

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import datePicker from '../../components/thirdComponents/nj-birthday-picker/nj-birthday-picker.vue'

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

</script>

<style></style>
