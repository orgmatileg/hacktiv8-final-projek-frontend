import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";
import login from "./modules/login";
import register from "./modules/register";
import posts from "./modules/posts";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    todos,
    login,
    register,
    posts
  }
});
