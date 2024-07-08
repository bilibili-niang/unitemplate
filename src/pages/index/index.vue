<!-- <template>  
  <view class="content">  
    <image class="logo" src="/static/logo.png" />  
    <view class="text-area">  
      <text class="title">{{ title }}</text>  
    </view>  
    <view>会员ID: {{ profileId }}</view>  
    <view>会员姓名: {{ profileName }}</view>  
    <view>是否会员：{{ isMember ? '是' : '否' }}</view>  
    <button @click="updateName">修改名字</button>  
    <br />  
    <view>以下是应用名称：</view>  
    <view style="font-weight: bold">{{ appName }}</view>  
  </view>  
</template>  
  
<script setup lang="ts">  
import { useAppStore, useMemberStore } from '@/store';  
  
const memberStore = useMemberStore();  
const appStore = useAppStore();  
  
// 使用计算属性来访问响应式数据  
const profileId = computed(() => memberStore.profile.id);  
const profileName = computed(() => memberStore.profile.name);  
const isMember = computed(() => memberStore.profile.isMember);  
const appName = computed(() => appStore.app.name);  
  
const title = 'Hello'; // 如果不需要响应式，可以直接使用字符串  
  
// 更新名字的方法  
const updateName = () => {  
  memberStore.setProfile({ ...memberStore.profile, name: '李四', isMember: false });  
};  
</script>   -->

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
    <br />
    <view>以下是应用名称：</view>
    <view style="font-weight: bold">{{ appStore.app.name }}</view>
  </view>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { useAppStore, useMemberStore } from '@/store'

const memberStore = useMemberStore()
const appStore = useAppStore()
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
