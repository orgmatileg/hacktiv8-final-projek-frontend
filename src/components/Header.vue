<template>
  <nav id="navbar-front" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo.png" width="60" height="60">
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/posts">Posts</router-link>
        <router-link class="navbar-item" to="/contacts">Contact Us</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link v-if="isLoggedIn" style="margin-right: .5rem;" to="/dashboard">
              <a class="button is-link">Go to Dashboard</a>
            </router-link>
            <a v-if="!isLoggedIn" @click="handleShowRegister" class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a v-if="!isLoggedIn" @click="handleShowLogin" class="button is-link">Log in</a>
            <div v-else>
              <router-link to="/">
                <a @click="handleLogout" class="button is-danger">
                  <i class="fas fa-sign-out-alt"></i>
                  Logout
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(["handleShowLogin", "handleShowRegister", "handleLogout"])
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding: 0px 30px;
  height: 60px;
}
</style>
