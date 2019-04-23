<template>
  <div>
    <div class="content">
      <h2 class="is-marginless">Posts</h2>
    </div>
    <Table
      :headers="dataTestHeader"
      :list="posts"
      limit="10"
      count="200"
      :handleDelete="handleDeletePost"
    />
  </div>
</template>

<script>
// COMPONENT
import Table from "./Table";

// LIBRARY
import { mapActions, mapGetters } from "vuex";
import { setTimeout } from "timers";

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
    ...mapActions(["fetchPostsAdmin", "deletePost"]),
    handleDeletePost(id) {
      this.deletePost(id);
      setTimeout(() => {
        this.fetchPostsAdmin();
      }, 500);
    }
  },
  computed: mapGetters({
    posts: "getPostsAdmin",
    postsCount: "getPostsAdminCount"
  }),
  created() {
    this.fetchPostsAdmin();
  }
};
</script>

<style>
</style>
