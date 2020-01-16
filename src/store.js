import Vue from "vue";

import Vuex from "vuex";

import { fetchUser } from "./vuex/actions/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 1,
    thaiAmount: 100,
    users: [],
    isLoading: false
  },
  getters: {
    usAmount(state) {
      return state.thaiAmount / 30;
    }
  },
  mutations: {
    mutateCounter(state, value) {
      state.counter += value;
    },
    mutateUsers(state, value) {
      state.users = value;
    },
    mutateLoading(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
    fetchUser
  }
});

export default store;
