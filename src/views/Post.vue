<template>
  <div id="post-container">
    <div class="card">
      <section
        class="hero is-info"
        id="hero"
        :style="`background-image: url('${post.post_image}')`"
      >
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{{post.post_subject}}</h1>
            <h2 class="subtitle">
              By {{post.author.author_fullname}}
              <br>
              {{formatDate(post.created_at)}}
              <br>
              <span
                v-bind:key="tag"
                v-for="tag in post.tags"
                class="tag is-primary"
                id="tag"
              >{{tag}}</span>
            </h2>
          </div>
        </div>
      </section>
      <div class="card-content">
        <div id="post-content">{{post.post_content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import uuid from "uuid";
import moment from "moment";

export default {
  name: "Post",
  methods: {
    ...mapActions(["fetchPostByID"]),
    formatDate(dateProps) {
      return moment(dateProps).format("dddd, DD/MM/YYYY hh:mm");
    }
  },
  computed: mapGetters({
    post: "getPost"
  }),
  beforeMount() {
    const { id } = this.$router.history.current.params;
    this.fetchPostByID(id);
  }
};
</script>

<style scoped>
#hero {
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: color-burn;
}

#post-container {
  padding-left: 200px;
  padding-right: 200px;
}

#post-content {
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 25px;
}

#tag {
  margin-right: 5px;
}
</style>
