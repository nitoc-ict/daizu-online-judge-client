import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.teal.darken1,
    accent: colors.red.darken1,
    textcolor: colors.grey.darken3,
    linkcolor: colors.blue.lighten2,
  }

})