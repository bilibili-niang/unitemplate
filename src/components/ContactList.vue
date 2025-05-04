<template>
  <div class="contact-list">
    <div class="banner">
      <img src="/static/banner.png" alt="banner" />
    </div>
    <div v-for="item in contacts" :key="item.id" class="contact-item">
      <img :src="item.avatar" class="avatar" />
      <div class="info">
        <div class="name">
          {{ item.name }}
          <span v-if="item.type === '农历'">🎂</span>
          <span v-else>🗓️</span>
        </div>
        <div class="date-type">{{ item.type }}：{{ item.date }}</div>
      </div>
      <div class="days" :class="{ today: item.isToday }">
        {{ item.isToday ? '今天' : item.daysLeft + '天' }}
      </div>
    </div>
    <button class="add-btn" @click="onAdd">
      <span>➕</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store/modules/contacts'
const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)

const onAdd = () => {
  uni.navigateTo({ url: '/pages/addContact/index' })
}
</script>

<style scoped>
.contact-list {
  padding: 0 0 80px 0;
}
.banner img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}
.contact-item {
  display: flex;
  align-items: center;
  margin: 16px 0;
}
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
}
.info {
  flex: 1;
}
.name {
  font-weight: bold;
  font-size: 16px;
}
.date-type {
  color: #888;
  font-size: 14px;
}
.days {
  color: #f44;
  font-size: 16px;
  min-width: 40px;
  text-align: right;
}
.days.today {
  color: #f44;
  font-weight: bold;
}
.add-btn {
  position: fixed;
  right: 32px;
  bottom: 100px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9800, #ff5722);
  color: #fff;
  font-size: 32px;
  border: none;
  box-shadow: 0 2px 8px #ff980080;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
