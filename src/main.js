import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './app/router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';
import VueTyperPlugin from 'vue-typer'
import store from './app/store';

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)
Vue.use(VeeValidate);
Vue.use(Vuetify, {
  theme: {
    primary: '#C1543D',
    secondary: '#b0bec5',
    accent: '#FDC683',
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
