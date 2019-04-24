<template>
  <div>
    <div class="content">
      <h2 class="is-marginless">Posts</h2>
      <router-link to="posts/add">
        <p class="field">
          <a class="button is-success is-pulled-right">
            <span class="icon is-small">
              <i class="fas fa-edit"></i>
            </span>
            <span>Add Post</span>
          </a>
        </p>
      </router-link>
    </div>

    <Table
      :headers="dataHeader"
      :list="posts"
      :limit="limit"
      :count="postsCount"
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
