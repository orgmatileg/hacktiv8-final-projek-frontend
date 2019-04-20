<template>
  <div class="card">
    <div class="card-image">
      <router-link :to="'/posts/'+id" id="router">
        <figure class="image is-4by3">
          <img :src="imgArticle" alt="Placeholder image">
        </figure>
      </router-link>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <router-link :to="'/posts/'+id" id="router">
            <p class="title is-4">{{title}}</p>
          </router-link>
          <br>
          <time>{{formatDate(createdAt)}}</time>
        </div>
      </div>

      <div class="content">
        {{content.substring(0,150)}}
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Post",
  props: ["title", "createdAt", "imgArticle", "content", "id"],
  methods: {
    formatDate(dateProps) {
      return moment(dateProps).format("dddd, DD/MM/YYYY hh:mm");
    }
  }
};
</script>

<style scoped>
</style>
