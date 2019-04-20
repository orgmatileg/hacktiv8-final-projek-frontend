import axios from "../../config/api";

const state = {
  isLogin: false,
  isLoggedIn: false,
  errorMessage: ""
};

const getters = {
  isLogin: state => state.isLogin,
  isLoggedIn: state => state.isLoggedIn,
  errorMessage: state => state.errorMessage
};

const actions = {
  handleLogin: async ({ commit }, loginField) => {
    try {
      const res = await axios.post("auth", loginField);
      const { token } = res.data.payload;

      localStorage.setItem("token", token);

      const status = !state.isLogin;
      commit("setIsLogin", status);
      commit("setIsLoggedIn", true);
    } catch (err) {
      const { description } = err.response.data;

      commit("setErrorMessage", description);

      setTimeout(() => {
        commit("setErrorMessage", "");
      }, 1000);
    }
  },
  handleLogout: ({ commit }) => {
    delete localStorage.token;
    commit("setIsLoggedIn", false);
  },
  handleCleanErr: ({ commit }) => {
    commit("setErrorMessage", "");
  },
  handleShowLogin: ({ commit }) => {
    const status = !state.isLogin;
    commit("setIsLogin", status);
  },
  handleIsLoggedIn: ({ commit }) => commit("setIsLoggedIn", true)
};

const mutations = {
  setIsLogin: (state, status) => (state.isLogin = status),
  setIsLoggedIn: (state, status) => (state.isLoggedIn = status),
  setErrorMessage: (state, message) => (state.errorMessage = message)
};

export default {
  state,
  getters,
  actions,
  mutations
};
