import axios from "../../config/api";

const state = {};

const getters = {};

const actions = {
  postContactUs: async ({ commit }, contactUsForm) => {
    try {
      await axios.post("contact-us", contactUsForm);
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
