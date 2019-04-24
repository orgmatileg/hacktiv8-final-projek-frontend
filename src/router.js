import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("./views/Posts.vue")
    },
    {
      path: "/posts/:id",
      name: "single post",
      component: () => import("./views/Post.vue")
    },
    {
      path: "/contacts",
      name: "contact",
      component: () => import("./views/ContactUs.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/Dasboard.vue"),
      children: [
        {
          path: "",
          component: () => import("./components/Dashboard/MainDashboard.vue")
        },
        {
          path: "posts",
          component: () => import("./components/Dashboard/posts/List.vue")
        },
        {
          path: "posts/:id/edit",
          name: "Edit Post",
          component: () => import("./components/Dashboard/posts/Edit.vue")
        },
        {
          path: "posts/add",
          name: "Add Post",
          component: () => import("./components/Dashboard/posts/Add.vue")
        },
        {
          path: "contacts",
          component: () => import("./components/Dashboard/contacts-us/List.vue")
        },
        {
          path: "contacts/:id/detail",
          name: "Contact Detail",
          component: () =>
            import("./components/Dashboard/contacts-us/Detail.vue")
        },
        {
          path: "subscriber",
          component: () => import("./components/Dashboard/subscriber/List.vue")
        },
        {
          path: "settings",
          component: () => import("./components/Dashboard/settings/List.vue")
        }
      ]
    }
  ]
});
