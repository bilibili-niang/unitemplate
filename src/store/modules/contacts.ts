import { defineStore } from 'pinia'

export interface Contact {
  id: string
  name: string
  avatar: string
  type: '农历' | '公历'
  date: string
  daysLeft: number
  isToday: boolean
  relation?: string
  note?: string
}

export const useContactsStore = defineStore('contacts', {
  state: () => ({
    contacts: [
      {
        id: '1',
        name: '王二',
        avatar: '/static/avatar1.png',
        type: '农历',
        date: '1994-11-23',
        daysLeft: 0,
        isToday: true,
        relation: '朋友',
        note: '',
      },
      {
        id: '2',
        name: '李四',
        avatar: '/static/avatar2.png',
        type: '公历',
        date: '1992-10-23',
        daysLeft: 3,
        isToday: false,
        relation: '同事',
        note: '',
      },
      {
        id: '3',
        name: '张三',
        avatar: '/static/avatar3.png',
        type: '农历',
        date: '1995-3-23',
        daysLeft: 6,
        isToday: false,
        relation: '家人',
        note: '',
      },
    ] as Contact[],
  }),
  actions: {
    addContact(contact: Contact) {
      this.contacts.push(contact)
    },
  },
})
