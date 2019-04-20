const state = {
  isRegister: false
};

const getters = {
  isRegister: state => state.isRegister
};

const actions = {
  handleShowRegister: ({ commit }) => {
    const status = !state.isRegister;

    commit("setIsRegister", status);
  }
};

const mutations = {
  setIsRegister: (state, status) => (state.isRegister = status)
};

export default {
  state,
  getters,
  actions,
  mutations
};
