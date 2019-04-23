import axios from "../../config/api";

const state = {};

const getters = {};

const actions = {
  postSubscribe: async ({ commit }, email) => {
    try {
      const res = await axios.post("subscribe", { email });
      const { payload } = res.data;
      console.log(payload);
    } catch (err) {
      throw err;
    }
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
