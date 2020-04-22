import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 导入路由对象
import router from './router/index'

new Vue({
  render: h => h(App),
  // 将路由挂载到实例
  router
}).$mount('#app')
