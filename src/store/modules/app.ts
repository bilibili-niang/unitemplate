import { ref } from 'vue'

import { defineStore } from 'pinia'

// 定义 Store
export const useAppStore = defineStore(
  'app',
  () => {
    // 应用信息
    const app = ref<any>({
      name: 'uniapp+ts基础模板',
    })

    // 保存应用信息
    const setAppData = (val: any) => {
      app.value = val
    }

    // // 清理会员信息，退出时使用
    // const clearProfile = () => {
    //   profile.value = undefined
    // }

    // 记得 return
    return {
      app,
      setAppData,
      //   clearProfile,
    }
  },
  // TODO: 持久化
  {
    // 调整为兼容多端的API
    persist: {
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)
