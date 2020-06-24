import Vue from 'vue'
import Vuex from 'vuex'
import mapStore from './modules/mapStore'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mapStore
  }
})
