import axios from "../../config/api";

const state = {
  subscribes: [],
  subscribesCount: 0
};

const getters = {
  getSubscribes: state => state.subscribes,
  getSubscribesCount: state => Number(state.subscribesCount)
};

const actions = {
  postSubscribe: async ({ commit }, email) => {
    try {
      const res = await axios.post("subscribe", { email });
      const { payload } = res.data;
    } catch (err) {
      throw err;
    }
  },
  fetchSubscribes: async ({ commit }, offset) => {
    try {
      const res = await axios.get("subscribe", {
        params: {
          offset
        }
      });
      const { payload, count } = res.data;

      if (payload) {
        commit("setSubscribesCount", count);
        commit("setSubscribes", payload);
      }
    } catch (err) {
      throw err;
    }
  }
};

const mutations = {
  setSubscribes: (state, subscribes) => (state.subscribes = subscribes),
  setSubscribesCount: (state, count) => (state.subscribesCount = count)
};

export default {
  state,
  getters,
  actions,
  mutations
};
