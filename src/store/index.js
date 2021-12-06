import Vuex from 'vuex';

const counterModule = {
  namespaced: true,
  // state: () => {
  //   return {
  //     counter: 0,
  //   };
  // },
  state: {
    counter: 0,
  },
  getters: {
    jian1(state) {
      return state.counter - 1;
    },
  },
  mutations: {
    add(state) {
      state.counter++;
    },
  },
  actions: {
    addAction(ctx) {
      ctx.commit('add');
    },
  },
};

const store = new Vuex.Store({
  modules: {
    counterModule,
  },
});

export default store;
