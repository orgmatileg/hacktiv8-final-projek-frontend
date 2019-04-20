<template>
  <div>
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>{{postsCount.toString()}}</strong> posts
          </p>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Find a post">
            </p>
            <p class="control">
              <button class="button">Search</button>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div class="columns is-multiline is-centered">
      <div v-bind:key="post.post_id" v-for="post in posts" class="column is-3">
        <Post :imgArticle="post.post_image" :createdAt="post.created_at" :title="post.subject"/>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Posts/Post";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Posts",
  components: {
    Post
  },
  methods: {
    ...mapActions(["fetchPosts"])
  },
  computed: mapGetters({
    posts: "getPosts",
    postsCount: "getPostsCount"
  }),
  beforeMount() {
    this.fetchPosts();
  }
};
</script>

<style scoped>
</style>
