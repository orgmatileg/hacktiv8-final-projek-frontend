<template>
  <div class>
    <div class="content">
      <h2 class="is-marginless">Settings</h2>
    </div>
    <!-- <Table
      :headers="dataHeader"
      :list="posts"
      :limit="limit"
      :count="postsCount"
      :handleDelete="handleDeletePost"
    />-->
    <h1>Under Contruction</h1>
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
      dataHeader: ["No", "Title", "Author", "Date", "Action"],
      limit: 10
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
