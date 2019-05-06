import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
<<<<<<< 2459dc561897770e25476319da3cada4ffeaeeb1
import VueMathjax from 'vue-mathjax'
<<<<<<< HEAD
import axios from 'axios'
=======
=======
import axios from 'axios'
>>>>>>> feat:axiossをインストールしてインポートした
>>>>>>> 6a1194b... feat:axiossをインストールしてインポートした

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

<<<<<<< HEAD
Vue.prototype.$axios = axios
=======
<<<<<<< 2459dc561897770e25476319da3cada4ffeaeeb1
=======
Vue.prototype.$axios = axios;
>>>>>>> 6a1194b... feat:axiossをインストールしてインポートした

// Vue.use(Vuetify, {
//   theme: {
//     primary: colors.teal.darken1,
//     accent: colors.red.darken1,
//     textcolor: colors.grey.darken4
//   }
// })
<<<<<<< HEAD
=======
>>>>>>> feat:axiossをインストールしてインポートした
>>>>>>> 6a1194b... feat:axiossをインストールしてインポートした
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')