import { createStore } from 'vuex';
import campaigns from './modules/campaigns';
import budget from './modules/budget';
import ads from './modules/ads';

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  actions: {
    login({ commit }, user) {
      // Simulate login API call
      setTimeout(() => {
        commit('SET_USER', user);
      }, 1000);
    },
    logout({ commit }) {
      commit('LOGOUT');
    },
  },
  modules: {
    campaigns,
    budget,
    ads,
  },
});
