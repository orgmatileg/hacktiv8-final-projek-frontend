const state = {
  isLogin: false,
  isLoggedin: false
};

const getters = {
  isLogin: state => state.isLogin,
  isLoggedin: state => state.isLoggedin
};

const actions = {
  handleShowLogin: ({ commit }) => {
    const status = !state.isLogin;
    console.log(status);
    commit("setIsLogin", status);
  }
};

const mutations = {
  setIsLogin: (state, status) => (state.isLogin = status)
};

export default {
  state,
  getters,
  actions,
  mutations
};
