import axios from "../../config/api";

const state = {
  posts: [],
  post: {
    post_id: "",
    post_image: "",
    post_subject: "",
    post_content: "",
    author: {
      author_id: "",
      author_fullname: "",
      author_photo_profile: ""
    },
    tags: [],
    is_publish: 0,
    created_at: new Date(),
    updated_at: new Date()
  },
  postCount: 0
};

const getters = {
  getPost: state => state.post,
  getPosts: state => state.posts,
  getPostsCount: state => state.postCount
};

const actions = {
  fetchPosts: async ({ commit }) => {
    try {
      const res = await axios.get("posts");
      const { payload, count } = res.data;

      commit("setPostsCount", count);
      commit("setPosts", payload);
    } catch (err) {
      throw err;
    }
  },
  fetchPostByID: async ({ commit }, id) => {
    try {
      const res = await axios.get(`posts/${id}`);
      const { payload } = res.data;

      commit("setPost", payload);
    } catch (err) {
      throw err;
    }
  }
};

const mutations = {
  setPost: (state, post) => (state.post = post),
  setPosts: (state, posts) => (state.posts = posts),
  setPostsCount: (state, count) => (state.postCount = count)
};

export default {
  state,
  getters,
  actions,
  mutations
};
