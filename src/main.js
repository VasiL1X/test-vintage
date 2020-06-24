import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/main.scss'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDRl-tkPA4q3k0ZTS8zWwghSLLIhzAEas0",
    libraries: "places"
  }
});
Vue.use(VueTheMask)
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)


new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
