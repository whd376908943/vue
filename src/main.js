import Vue from 'vue'
import App from './App.vue'

// 引入ant-design-vue组件
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

// 引入路由
import router from "./router.js"
import { sync } from 'vuex-router-sync'
import store from './store'

Vue.use(Antd)

sync(store,router)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
