import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 导入路由对象
import router from './router/index'
// 导入饿了吗ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入全局样式
// import './style/base.css'

// 注册element
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  // 路由挂载
  router
}).$mount('#app')
