import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sources: {
      dataset: [],
    },
  },
  mutations: {
    setDataset(state, payload) {
      state.sources.dataset = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
