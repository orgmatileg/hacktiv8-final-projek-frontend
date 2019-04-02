<template>
  <div>
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>{{posts.length}}</strong> posts
          </p>
        </div>
      </div>

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

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item">
          <strong>All</strong>
        </p>
        <p class="level-item">
          <a>Published</a>
        </p>
        <p class="level-item">
          <a>Drafts</a>
        </p>
        <p class="level-item">
          <a>Deleted</a>
        </p>
      </div>
    </nav>
    <div class="columns is-multiline is-centered">
      <div v-bind:key="post" v-for="post in posts" class="column is-3">
        <Post
          imgArticle="https://pvsmt99345.i.lithium.com/t5/image/serverpage/image-id/10546i3DAC5A5993C8BC8C?v=1.0"
          :createdAt="new Date()"
          :title="`Article ${post}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Posts/Post";
export default {
  name: "Posts",
  data() {
    return {
      posts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  components: {
    Post
  }
};
</script>

<style scoped>
</style>
