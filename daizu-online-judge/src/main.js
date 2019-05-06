import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueMathjax from 'vue-mathjax'

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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')