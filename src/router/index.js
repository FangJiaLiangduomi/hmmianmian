import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

// 注册路由
Vue.use(
    VueRouter
)

// 准备组件

// 设置组件规则
const routes = []

// 实例化路由对象
const router = new VueRouter({
    routes
})

// 暴露出去
export default router