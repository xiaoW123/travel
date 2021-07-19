import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
defaultCity = localStorage.city

const store = new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, cityName) {
      state.city = cityName
      localStorage.city = cityName  //浏览器缓存起来
    }
  }
})

export default store