<template>
  <div class="container" id="app">
    <Header/>
    <div class="container-main">
      <Login/>
      <Register/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Login,
    Register
  },
  methods: {
    ...mapActions(["handleIsLoggedIn"])
  },
  created() {
    // Check Token
    if (localStorage.token) {
      this.handleIsLoggedIn();
    }
  }
};
</script>


<style scoped>
.container-main {
  margin-top: 70px;
  min-height: 50vh;
}
</style>