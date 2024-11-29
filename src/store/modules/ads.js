const state = {
  ads: [],
};

const mutations = {
  SET_ADS(state, ads) {
    state.ads = ads;
  },
  ADD_AD(state, ad) {
    state.ads.push(ad);
  },
};

const actions = {
  fetchAds({ commit }) {
    // Simulate API call
    const ads = [
      { id: 1, title: 'Ad 1', content: 'Content for Ad 1' },
      { id: 2, title: 'Ad 2', content: 'Content for Ad 2' },
    ];
    commit('SET_ADS', ads);
  },
  createAd({ commit }, ad) {
    commit('ADD_AD', ad);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
