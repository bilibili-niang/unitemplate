<template>
  <div
    class="content"
    @click="test"
  >

    <uni-datetime-picker
      ref="picker"
      type="date"
      :value="single"
      start="1901-1-01"
      end="2500-5-30"
      @change="change"
    >
    </uni-datetime-picker>

    <vue-hash-calendar>
      <template #action>
        <div class="">我是自定义的操作栏</div>
      </template>
    </vue-hash-calendar>

    <datePicker
      ref="pickerRef"
      :defaultLunar="true"
      :defaultDate="defaultDate"
    />

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueHashCalendar from 'vue3-hash-calendar'
import 'vue3-hash-calendar/es/index.css'
import datePicker from '../../components/thirdComponents/nj-birthday-picker/nj-birthday-picker.vue'

const pickerRef = ref(null)
const picker = ref(null)

const defaultDate = new Date()

const single = '2021-04-3'

const change = (e: string) => {
  console.log('-change事件:', e)
}
const test = () => {
  console.log('pickerRef', pickerRef.value)
  pickerRef.value?.show()
}
</script>

<style></style>
