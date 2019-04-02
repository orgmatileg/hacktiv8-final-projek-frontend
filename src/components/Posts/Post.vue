<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imgArticle" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{title}}</p>
          <time>{{formatDate(createdAt)}}</time>
        </div>
      </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Post",
  props: ["title", "createdAt", "imgArticle"],
  methods: {
    formatDate(dateProps) {
      return moment(dateProps).format("dddd, DD/MM/YYYY hh:mm");
    }
  }
};
</script>

<style>
</style>
