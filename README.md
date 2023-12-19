# uni-ts-template

## 命令行创建 uni-app 项目

**优势**

通过命令行创建 uni-app 项目，**不必依赖 HBuilderX**，TypeScript 类型支持友好。

**命令行创建 uni-app 项目：**	

- vue3 + ts 版

```bash
# 通过 git 从 gitee 克隆下载
git clone -b vite-ts https://gitee.com/dcloud/uni-preset-vue.git

# 通过 git 从 gitee 手动下载
https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip

# 通过 npx 从 github 下载
npx degit dcloudio/uni-preset-vue#vite-ts 项目名称
```

创建其他版本可查看：[uni-app 官网](https://uniapp.dcloud.net.cn/quickstart-cli.html)

**常见问题**

- 运行 `npx` 命令下载失败，请尝试换成**手机热点重试**
- 换手机热点依旧失败，请尝试从[国内备用地址下载](https://gitee.com/dcloud/uni-preset-vue/tree/vite-ts/)
- 在 `manifest.json` 文件添加 [小程序 AppID](https://mp.weixin.qq.com/) 用于真机预览
- 运行 `npx` 命令需依赖 NodeJS 环境，[NodeJS 下载地址](https://nodejs.org/zh-cn)
- 运行 `git` 命令需依赖 Git 环境，[Git 下载地址](https://git-scm.com/download/)



### 编译和运行 uni-app 项目

1. 安装依赖 `pnpm install`
2. 编译成微信小程序 `pnpm dev:mp-weixin`
3. 导入微信开发者工具

**温馨提示**

- 编译成 H5 端可运行 `pnpm dev:h5` 通过浏览器预览项目。



## 用 VS Code 开发 uni-app 项目

### 为什么选择 VS Code？

- VS Code 对 **TS 类型支持友好**，前端开发者**主流的编辑器**
- HbuilderX 对 TS 类型支持暂不完善，期待官方完善 👀

### 用 VS Code 开发配置

项目采用 Vue3 + TS 开发 uni-app 项目，所以需要分别安装 Vue3 + TS 插件 和 uni-app 插件。

**温馨提示**

> `VS Code` 可通过快捷键 `Ctrl + i` 唤起代码提示。

#### 安装 Vue3 + TS 插件

**注意事项**

没开发过 Vue3 + TS 项目的小伙伴注意，需要先安装 Vue3 和 TS 的插件，并完成以下配置 👇

- 安装 [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) ：Vue3 语法提示插件
- 安装 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) ：Vue3 的 TS 插件
- **工作区禁用** Vetur 插件(Vue2 插件和 Vue3 插件冲突)
- **工作区禁用** @builtin typescript 插件（禁用后自动开启 Vue3 的 TS 托管模式）

[查看 Vue3 官方文档](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)

![image1](https://megasu.gitee.io/uni-app-shop-note/assets/uniapp_vscode_setting.75574ba6.png)

#### 安装 uni-app 插件

- 👉 安装 uni-app 开发插件
  - [uni-create-view](https://marketplace.visualstudio.com/items?itemName=mrmaoddxxaa.create-uniapp-view) ：快速创建 uni-app 页面
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-helper-vscode) ：uni-app 代码提示
  - [uniapp 小程序扩展](https://marketplace.visualstudio.com/items?itemName=evils.uniapp-vscode) ：鼠标悬停查文档
- 👉 TS 类型校验
  - 安装 **类型声明文件** `pnpm i -D miniprogram-api-typings @uni-helper/uni-app-types`
  - 配置 `tsconfig.json`
- 👉 JSON 注释问题
  - 设置文件关联，把 `manifest.json` 和 `pages.json` 设置为 `jsonc`

`tsconfig.json` 参考

```json
{
  "extends": "@vue/tsconfig/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "lib": ["esnext", "dom"],
    // 类型声明文件
    "types": [
      "@dcloudio/types", // uni-app API 类型
      "miniprogram-api-typings", // 原生微信小程序类型
      "@uni-helper/uni-app-types", // uni-app 组件类型
      "@uni-helper/uni-ui-types" // uni-ui 组件类型
    ]
  },
  // 校验 uni-app 组件类型
  "vueCompilerOptions": {
    // experimentalRuntimeMode 已废弃，现调整为 nativeTags，请升级 Volar 插件至最新版本
    "nativeTags": ["block", "component", "template", "slot"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

**工作区设置参考**

```json
// .vscode/settings.json
{
  // 在保存时格式化文件
  "editor.formatOnSave": true,
  // 文件格式化配置
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 配置语言的文件关联
  "files.associations": {
    "pages.json": "jsonc", // pages.json 可以写注释
    "manifest.json": "jsonc" // manifest.json 可以写注释
  }
}
```

**版本升级**

> - 原依赖 `@types/wechat-miniprogram` 现调整为 [miniprogram-api-typings](https://github.com/wechat-miniprogram/api-typings)。
> - 原配置 `experimentalRuntimeMode` 现调整为 `nativeTags`。

这一步处理很关键，否则 TS 项目，无法校验组件属性类型。

## 开发工具回顾

选择自己习惯的编辑器开发 uni-app 项目即可。

**HbuilderX 和 微信开发者工具 关系**![HbuilderX 和 微信开发者工具 关系](https://megasu.gitee.io/uni-app-shop-note/assets/uniapp_picture_7.f5fc8df3.png)

**VS Code 和 微信开发者工具 关系**![VS Code 和 微信开发者工具 关系](https://megasu.gitee.io/uni-app-shop-note/assets/uniapp_picture_8.a65fa881.png)



## 引入 uni-ui 组件库

### 操作步骤

安装 [uni-ui 组件库](https://uniapp.dcloud.net.cn/component/uniui/quickstart.html#npm安装)

```bash
pnpm i @dcloudio/uni-ui
```

**配置自动导入组件**

```json
// pages.json
{
  // 组件自动导入
  "easycom": {
    "autoscan": true,
    "custom": {
      // uni-ui 规则如下配置  
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue" 
    }
  },
  "pages": [
    // …省略
  ]
}
```

**安装类型声明文件**

```sh
pnpm i -D @uni-helper/uni-ui-types
```

**配置类型声明文件**

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": [
      "@dcloudio/types", // uni-app API 类型
      "miniprogram-api-typings", // 原生微信小程序类型
      "@uni-helper/uni-app-types", // uni-app 组件类型
      "@uni-helper/uni-ui-types" // uni-ui 组件类型  
    ]
  },
  // vue 编译器类型，校验标签类型
  "vueCompilerOptions": {
    "nativeTags": ["block", "component", "template", "slot"]
  }
}
```

## 小程序端 Pinia 持久化

说明：`Pinia` 用法与 `Vue3` 项目完全一致，`uni-app` 项目仅需解决**持久化插件兼容性**问题。

### 持久化存储插件

安装持久化存储插件： [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html#storage)

```sh
pnpm i pinia-plugin-persistedstate
```

插件默认使用 `localStorage` 实现持久化，小程序端不兼容，需要替换持久化 API。

### 基本用法

**stores/modules/member.ts**

```ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>()

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    persist: true,
  },
)
```

**stores/index.ts**

```tsx
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

// 创建 pinia 实例
const pinia = createPinia()
// 使用持久化存储插件
pinia.use(persist)

// 默认导出，给 main.ts 使用
export default pinia

// 模块统一导出
export * from './modules/member'
```

**main.ts**

```tsx
import { createSSRApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app,
  }
}
```

### 多端兼容

**网页端持久化 API**

```js
// 网页端API
localStorage.setItem()
localStorage.getItem()
```

**多端持久化 API**

```js
// 兼容多端API
uni.setStorageSync()
uni.getStorageSync()
```

**参考代码**

```tsx
// stores/modules/member.ts
export const useMemberStore = defineStore(
  'member',
  () => {
    //…省略
  },
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API
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
```

## uni.request 请求封装

### 第一种：请求和上传文件拦截器

**uniapp 拦截器**： [uni.addInterceptor](https://uniapp.dcloud.net.cn/api/interceptor.html)

**接口说明**：[接口文档](https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/doc-1521513)

> **实现需求**
>
> 1. 拼接基础地址
> 2. 设置超时时间
> 3. 添加请求头标识
> 4. 添加 token

**参考代码**

```tsx
// src/utils/http.ts

// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 请求超时
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      'source-client': 'miniapp',
      ...options.header,
    }
    // 4. 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)
```

#### 封装 Promise 请求函数

> 实现需求
>
> 1. 返回 Promise 对象，用于处理返回值类型
> 2. 成功 resolve
>    1. 提取数据
>    2. 添加泛型
> 3. 失败 reject
>    1. 401 错误
>    2. 其他错误
>    3. 网络错误

**参考代码**

```tsx
/**
 * 请求函数
 * @param  UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */
type Data<T> = {
  code: string
  msg: string
  result: T
}
// 2.2 添加类型，支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
```

#### **整体代码**

```tsx
/**
 * 添加拦截器:
 *   拦截 request 请求
 *   拦截 uploadFile 文件上传
 *
 * TODO:
 *   1. 非 http 开头需拼接地址
 *   2. 请求超时
 *   3. 添加小程序端请求头标识
 *   4. 添加 token 请求头标识
 */

import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 请求超时, 默认 60s
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4. 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 请求函数
 * @param  UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */
type Data<T> = {
  code: string
  msg: string
  result: T
}
// 2.2 添加类型，支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 状态码 2xx， axios 就是这样设计的
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

```

### 第二种：推荐封装（兼容PC、APP，小程序）

**参考代码**

```json
import { nanoid } from 'nanoid'
import { checkLogin, getNowDate, isTokenLose, removeStorage } from '@/utils/global.js'
import { AUTHORIZATION, JWTVALIDATE, CLIENTID, JWTVALIDATETIME} from '@/utils/constant.js'

export let base_url = ''
export let context = ''
export let h5_url = ''
// H5
// let url ='/api/system/login' //需要拼接上/api
// #ifdef H5
	// base_url = 'http://10.1.28.121:9001'
	h5_url = 'https://uniapp.t.yindangu.com' // 用来打开PC端页面
	context = '/api'
// #endif

// MP
// let url = base_url + '/system/login'
// #ifdef MP-WEIXIN
	const accountInfo = wx.getAccountInfoSync();
	// env类型
	export const env = accountInfo.miniProgram.envVersion || 'develop';
	// 系统判断区分url
	const baseApi = {
		// 开发版
		develop: {
			apiUrl: "https://uniapp.t.yindangu.com", //开发版
		},
		// 体验版
		trial: {
			apiUrl: "https://uniapp.t.yindangu.com", //体验环境
		},
		// 正式版
		release: {
			apiUrl: "https://uniapp.t.yindangu.com", //正式环境
		}
	}
	base_url = baseApi[env].apiUrl
	context = ''
	
// #endif

// #ifdef APP-PLUS
	base_url = "https://uniapp.t.yindangu.com"
	context = ''
// #endif

export const request = async (params) => {
	
	// 参数
	const {
		url = '', data = {}, type = '', method = 'POST'
	} = params
	
	
	// 配置请求头
	let authorization = uni.getStorageSync(AUTHORIZATION) || ''
	let LoginClientId = uni.getStorageSync(CLIENTID) || ''
	// const res = await JWTValidateJson({ LoginClientId, jwt: authorization, timeStamp: Date.now(), nonce: LoginClientId })
	// console.log(res, 'JWTValidateJson');
	await JWTValidateJson({ LoginClientId, jwt: authorization, timeStamp: Date.now(), nonce: LoginClientId })
	// console.log(11111);
	let jwtValidate = uni.getStorageSync(JWTVALIDATE) || ''
	let header = {
		"content-type": "application/json; charset=utf-8",
		"Authorization": authorization,
		'V-Jwt-Login-State': 'login',
		'V-Jwt-Validate': jwtValidate
	}

	// 请求
	return new Promise(async (resolve, reject) => {
		await uni.request({
			url: base_url + context + url,
			data,
			header,
			method,
			// withCredentials: true
		}).then((res) => {
			if(res.statusCode == 200) {
				resolve(res.data.data)
			} else {
				reject(res)
			}
		}).catch((err) => {
			return uni.showToast({
				icon: "none",
				title: "请求接口失败"
			})
			reject(err)
		})
	})
}


/**
 * JWT校验加密值
 */
export const JWTValidateJson =(params) => {
	if(!isTokenLose()) return
	return new Promise((resolve, reject) => {
		uni.request({
			url: base_url + context +'/webapi/vbase_prd_united_login_api/API_JWTValidateJson',
			data: params,
			method: 'POST'
		}).then(res => {
			uni.setStorageSync(JWTVALIDATETIME, getNowDate())
			uni.setStorageSync(JWTVALIDATE, res.data.data.jwtValidate)
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
```

## 【拓展】代码规范

**为什么需要代码规范**

如果没有统一代码风格，团队协作不便于查看代码提交时所做的修改。
