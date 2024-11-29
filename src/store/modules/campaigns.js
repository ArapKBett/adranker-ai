const state = {
  campaigns: [],
};

const mutations = {
  SET_CAMPAIGNS(state, campaigns) {
    state.campaigns = campaigns;
  },
  ADD_CAMPAIGN(state, campaign) {
    state.campaigns.push(campaign);
  },
};

const actions = {
  fetchCampaigns({ commit }) {
    // Simulate API call
    const campaigns = [
      { id: 1, name: 'Campaign 1' },
      { id: 2, name: 'Campaign 2' },
    ];
    commit('SET_CAMPAIGNS', campaigns);
  },
  addCampaign({ commit }, campaign) {
    commit('ADD_CAMPAIGN', campaign);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
