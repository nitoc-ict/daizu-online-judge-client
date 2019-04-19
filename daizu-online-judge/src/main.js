import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

// bootstrap
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(Vuetify)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify/lib';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')