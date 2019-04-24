<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <div v-bind:key="post.post_id" v-for="post in posts" class="post content">
          <div class="media">
            <div class="media-left">
              <router-link :to="'/posts/'+post.post_id">
                <img height="200" width="200" :src="post.post_image" alt="Placeholder image">
              </router-link>
            </div>
            <div class="media-content">
              <router-link :to="'/posts/'+post.post_id">
                <h1>{{post.post_subject}}</h1>
              </router-link>
              <p>{{post.post_content}}</p>
              <router-link :to="'/posts/'+post.post_id">
                <button class="button is-primary">Read More</button>
              </router-link>
            </div>
          </div>
        </div>
        <nav class="pagination is-right" role="navigation" aria-label="pagination">
          <a
            :disabled="onPage < 2"
            @click="onPage !== 1 && handlePreviousAndNext('back')"
            class="pagination-previous"
          >Previous</a>
          <a
            :disabled="onPage == lastPagination - 1 "
            @click="onPage != lastPagination -1  && handlePreviousAndNext('next')"
            class="pagination-next"
          >Next page</a>
          <ul class="pagination-list"></ul>
        </nav>
      </div>
      <div class="column">
        <nav class="panel">
          <p class="panel-heading">Sidebar</p>
          <center id="profile">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="data:image/png;base64,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"
              >
            </figure>
            <div>
              <h1 class="title">John Doe</h1>
              <h2 class="subtitle">Fullstack Engineer</h2>
              <h4>I'm a profesional coder and designer who code and design 24 hours a days! Just give me 2 minutes to complete your project Ha Ha Ha...</h4>
            </div>
          </center>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      onPage: 1,
      offset: 0,
      limit: 2
    };
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    handlePreviousAndNext(action) {
      switch (action) {
        case "back":
          this.onPage--;
          this.offset -= this.limit;
          break;
        case "next":
          this.onPage++;
          this.offset += this.limit;
          break;
      }

      this.fetchPosts({ limit: 2, offset: this.offset });
    }
  },
  computed: {
    lastPagination() {
      let totalData = this.postCount;
      if (this.postCount < this.limit * 2) return 2;

      let totalPagination = totalData / this.limit;
      console.log(totalPagination);
      return Math.ceil(totalPagination);
    },
    ...mapGetters({
      posts: "getPosts",
      postCount: "getPostsCount"
    })
  },
  beforeMount() {
    this.fetchPosts({
      limit: 2,
      offset: 0
    });
  }
};
</script>
<style scoped>
.container {
  background: #f4f4f4;
}
.main-content {
  background: #fff;
}

.content {
  border: 1px solid rgba(224, 224, 224, 1);
  padding: 20px;
}

#profile {
  margin-top: 15px;
}
</style>
