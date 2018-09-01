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
    content: "",
    temples: ""
    
  },
  getters: {

  },
  mutations: {
    setHilights(state, hilights){
      console.log("updating hilights")
      state.hilights = hilights
    },
    setContent(state, content){
      state.content = content
    },
    setTemples(state, temples){
      state.temples = temples
    }

  },
  actions: {
    getHilights({commit}, data){
      commit('setHilights', data)
    },
    getContent({commit}, data){
      commit('setContent', data)
    },
    getTemples({commit}, data){
      commit('setTemples', data)
    }

  }
})
