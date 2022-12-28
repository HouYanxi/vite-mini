/*
 * @Author: Miss.Hyx
 * @Date: 2022-12-28 10:10:29
 * @LastEditTime: 2022-12-28 15:09:08
 * @Description: 
 */
// import 都会发起一个网络请求 viet拦截这个请求，渲染
import { createApp } from 'vue' // node_module
import App from './App.vue' // 解析成额外的 ?type=template请求
import './index.css'

createApp(App).mount('#app')

// alert('2')
