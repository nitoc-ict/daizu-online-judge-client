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
// import colors from 'vuetify/es5/util/colors'
import router from './router'

Vue.config.productionTip = false

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