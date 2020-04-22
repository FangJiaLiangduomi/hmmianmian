// 导入vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

// 注册路由
Vue.use(VueRouter)

// 准备组件

// 设置路由规则
const routes = []

// 创建路由对象，并应用规则
const router = new VueRouter({
  routes
})

// 将路由对象暴露出去
export default router