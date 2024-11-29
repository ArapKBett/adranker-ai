const state = {
  budget: 0,
};

const mutations = {
  SET_BUDGET(state, budget) {
    state.budget = budget;
  },
};

const actions = {
  allocateBudget({ commit }, budget) {
    commit('SET_BUDGET', budget);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
