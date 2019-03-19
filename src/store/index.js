import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    handleCityChange (ctx, city) {
      ctx.commit('handleCityChange', city)
    }
  },
  mutations: {
    handleCityChange (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
