import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: null,
    loadingOptions: {
      lock: true,
      text: '拼命加载中'
    },
    showSidebar: false
  },
  mutations: {
    openLoading (state, payload) {
      state.loading = payload.ctx.$loading(state.loadingOptions)
    },
    closeLoading (state) {
      state.loading.close()
    },
    toggleSidebar (state, payload) {
      state.showSidebar = payload.state
    }
  }
})
