<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view>{{ memberStore.profile.id }}</view>
    <view>{{ profileId }}</view>
    <view>是否会员：{{ memberStore.profile.isMember ? '是' : '否' }}</view>
    <view>{{ profileName }}</view>
    <button @click="updateName">修改名字</button>
  </view>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { useMemberStore } from '@/store'

const memberStore = useMemberStore()
const profileId = computed(() => memberStore.profile.id)

const profileName = computed(() => memberStore.profile.name)
const title = ref('Hello')
const updateName = () => {
  memberStore.setProfile({ ...memberStore.profile, name: '李四', isMember: false })
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
