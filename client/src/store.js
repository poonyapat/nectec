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
    hilights: ""
    
  },
  getters: {

  },
  mutations: {
    setHilights(state, hilights){
      state.hilights = hilights
    }

  },
  actions: {
    getHilights({commit}, data){
      commit('setHilights', data)
    }

  }
})
