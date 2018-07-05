import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './app/router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import store from './app/store';

Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
