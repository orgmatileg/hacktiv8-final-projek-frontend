<template>
  <div class="column content">
    <form action>
      <h1>Stay Connected</h1>
      <p>Join over 10,500 people who receive our best articles.</p>

      <div class="field is-grouped">
        <div class="control">
          <input v-model="email" class="input is-primary" type="email" placeholder="Your email">
        </div>
        <div class="control">
          <button @click="handleSubmit" class="button is-link">Subscribe!</button>
        </div>
      </div>
    </form>
    <div class="columns" id="social-media">
      <div class="column">
        <i class="fab fa-facebook-square"></i>
      </div>
      <div class="column">
        <i class="fab fa-instagram"></i>
      </div>
      <div class="column">
        <i class="fab fa-twitter-square"></i>
      </div>
      <div class="column">
        <i class="fab fa-github-square"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FooterColumnOne",
  data() {
    return {
      email: ""
    };
  },
  methods: {
    ...mapActions(["postSubscribe"]),
    handleSubmit() {
      this.postSubscribe(this.email);

      this.email = "";
    }
  }
};
</script>

<style>
#social-media {
  margin-top: 5px;
  font-size: 50px;
}
</style>
