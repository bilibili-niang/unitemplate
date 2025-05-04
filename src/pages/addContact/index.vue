<template>
  <div class="add-contact">
    <div class="header">
      <span class="back" @click="goBack">←</span>
      <span>添加生日</span>
    </div>
    <div class="form-card">
      <div class="avatar-wrap">
        <img :src="avatar" class="avatar" />
      </div>
      <form @submit.prevent="onSubmit">
        <div class="form-item">
          <label>姓名*</label>
          <input v-model="form.name" required placeholder="请输入姓名" />
        </div>
        <div class="form-item">
          <label>类型*</label>
          <picker :range="typeOptions" @change="onTypeChange">
            <view class="picker-view">
              {{ form.type || '请选择类型' }}
            </view>
          </picker>
        </div>
        <div class="form-item">
          <label>日期*</label>
          <input type="date" v-model="form.date" required />
        </div>
        <div class="form-item">
          <label>关系</label>
          <picker :range="relationOptions" @change="onRelationChange">
            <view class="picker-view">
              {{ form.relation || '请选择关系' }}
            </view>
          </picker>
        </div>
        <div class="form-item">
          <label>备注</label>
          <textarea v-model="form.note" placeholder="备注"></textarea>
        </div>
        <button class="submit-btn" type="submit">确定</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContactsStore } from '@/store/modules/contacts'
const contactsStore = useContactsStore()
const avatar = '/static/avatar1.png'

const typeOptions = ['农历', '公历']
const relationOptions = ['父亲', '母亲', '朋友', '同事']

const form = ref({
  name: '',
  type: '',
  date: '',
  relation: '',
  note: '',
})

function goBack() {
  uni.navigateBack()
}

function onTypeChange(e: any) {
  form.value.type = typeOptions[e.detail.value]
}
function onRelationChange(e: any) {
  form.value.relation = relationOptions[e.detail.value]
}

function onSubmit() {
  if (!form.value.name || !form.value.date || !form.value.type) {
    uni.showToast({ title: '请填写必填项', icon: 'none' })
    return
  }
  contactsStore.addContact({
    id: Date.now().toString(),
    name: form.value.name,
    avatar,
    type: form.value.type as '农历' | '公历',
    date: form.value.date,
    daysLeft: 0,
    isToday: false,
    relation: form.value.relation,
    note: form.value.note,
  })
  uni.showToast({ title: '添加成功', icon: 'success' })
  setTimeout(() => {
    uni.navigateBack()
  }, 500)
}
</script>

<style scoped>
.add-contact {
  min-height: 100vh;
  background: #f7f8fa;
  padding: 0 0 32px 0;
}
.header {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
  padding: 20px 24px 0 24px;
  background: #fff;
}
.back {
  font-size: 22px;
  margin-right: 12px;
  cursor: pointer;
}
.form-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px #e0e0e0;
  margin: 24px 16px 0 16px;
  padding: 24px 18px 24px 18px;
}
.avatar-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
}
.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid #f7f8fa;
  box-shadow: 0 2px 8px #eee;
}
.form-item {
  margin-bottom: 18px;
}
label {
  display: block;
  margin-bottom: 6px;
  color: #333;
  font-size: 15px;
  font-weight: 500;
}
.picker-view {
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 6px;
  background: #fafbfc;
  color: #333;
  font-size: 16px;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
  background: #fafbfc;
  outline: none;
  transition: border 0.2s;
}
input:focus,
textarea:focus {
  border: 1.5px solid #4caf50;
}
textarea {
  min-height: 60px;
  resize: none;
}
.submit-btn {
  width: 80%;
  margin: 28px auto 0 auto;
  display: block;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 2px 8px #38f9d755;
  letter-spacing: 2px;
  transition: background 0.2s;
}
.submit-btn:active {
  background: linear-gradient(90deg, #38f9d7 0%, #43e97b 100%);
}
</style>
