import axios from "../../config/api";

const state = {
  tags: []
};

const getters = {
  getTags: state => state.tags
};

const actions = {
  fetchTags: async ({ commit }) => {
    try {
      const res = await axios.get("tags");
      const { payload } = res.data;

      commit("setTags", payload);
    } catch (err) {
      throw err;
    }
  }
};

const mutations = {
  setTags: (state, tags) => (state.tags = tags)
};

export default {
  state,
  getters,
  actions,
  mutations
};
