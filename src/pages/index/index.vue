<template>
  <div
    class="content">

    <uni-datetime-picker
      ref="picker"
      type="date"
      :value="single"
      start="1901-1-01"
      end="2500-5-30"
      @change="change"
    >
    </uni-datetime-picker>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const picker = ref(null)

const single = '2021-04-3'

const change = (e: string) => {
  console.log('-change事件:', e)
}
</script>

<style></style>
