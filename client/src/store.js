import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    hilights: "",
    temples: ""

  },
  getters: {

  },
  mutations: {
    setHilights(state, hilights){
      state.hilights = hilights
    },
    setTemples(state, temples){
      state.temples = temples
    }

  },
  actions: {
    getHilights({commit}, data){
      commit('setHilights', data)
    },
    getTemples({commit}, data){
      commit('setTemples', data)
    }

  }
})
