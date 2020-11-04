import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vant/lib/index.css'
import store from './store/index.js'


Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')