import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      name: '',
      gender: null,
      mail: '',
      type: '',
      body: '',
      route: [],
      flag: false,
    }
  },
  mutations: {
    add(state, payload) {
      state.name = payload.name
      state.gender = payload.gender
      state.mail = payload.mail
      state.type = payload.type
      state.body = payload.body
      state.route = payload.route
      state.flag = true
    },
    remove(state) {
      state.name = ''
      state.gender = null
      state.mail = ''
      state.type = ''
      state.body = ''
      state.route = []
      state.flag = false
    },
  },
  getters: {
    getContact(state) {
      return {
        name: state.name,
        gender: state.gender,
        mail: state.mail,
        type: state.type,
        body: state.body,
        route: state.route,
        flag: state.flag,
      }
    },
  },
  actions: {
    addAction({ commit, dispatch, state }, payload) {
      commit('remove')
      commit('add', payload)
    },
    removeAction({ commit, dispatch, state }, payload) {
      commit('remove')
    },
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
