<template>
  <div>
    <div class="modal" v-bind:class="{'is-active': isLogin}">
      <div @click="handleShowLogin" class="modal-background"></div>

      <div class="modal-content">
        <div id="form-login">
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Text input" v-model="username">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Masukkan password"
                v-model="password"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <a class="button is-primary is-fullwidth">Login</a>
          </div>
        </div>
      </div>
      <button @click="handleShowLogin" class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["handleShowLogin"])
  },
  computed: mapGetters(["isLogin"])
};
</script>

<style scoped>
.panel-body {
  border: 1px solid rgba(224, 224, 224, 1);
  padding: 20px;
}

#form-login {
  background-color: #f4f4f4;
  padding: 50px;
  border-radius: 10px;
}
</style>
