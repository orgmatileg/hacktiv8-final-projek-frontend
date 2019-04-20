<template>
  <div>
    <div class="content">
      <h2 class="is-marginless">Posts</h2>
    </div>
    <Table :headers="dataTestHeader" :list="posts" limit="10" count="200"/>
  </div>
</template>

<script>
// COMPONENT
import Table from "./Table";

// LIBRARY
import { mapActions, mapGetters } from "vuex";

export default {
  name: "List",
  data() {
    return {
      dataTestHeader: ["No", "Title", "Author", "Date", "Action"]
    };
  },
  components: {
    Table
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

<style>
</style>
