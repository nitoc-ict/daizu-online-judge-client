import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueMathjax from 'vue-mathjax'
import axios from 'axios'

// bootstrap
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(VueMathjax)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify/lib';
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

// Vue.use(Vuetify, {
//   theme: {
//     primary: colors.teal.darken1,
//     accent: colors.red.darken1,
//     textcolor: colors.grey.darken4
//   }
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')