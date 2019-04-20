import axios from "../../config/api";

const state = {
  posts: [],
  postCount: 0
};

const getters = {
  getPosts: state => state.posts,
  getPostsCount: state => state.postCount
};

const actions = {
  fetchPosts: async ({ commit }) => {
    try {
      const res = await axios.get("posts");
      const { payload, count } = res.data;
      console.log(payload, count, res.data);

      commit("setPostsCount", count);
      commit("setPosts", payload);
    } catch (err) {
      console.log(err);
    }
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  setPostsCount: (state, count) => (state.postCount = count)
};

export default {
  state,
  getters,
  actions,
  mutations
};
