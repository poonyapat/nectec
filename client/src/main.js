import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.darken1,
    secondary: colors.grey.darken1
  }
})

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
