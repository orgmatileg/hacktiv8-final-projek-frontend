import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";
import login from "./modules/login";
import register from "./modules/register";
import posts from "./modules/posts";
import contactUs from "./modules/contact-us";
import tags from "./modules/tags";
import subscribe from "./modules/subscribe";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    todos,
    login,
    register,
    posts,
    contactUs,
    tags,
    subscribe
  }
});
