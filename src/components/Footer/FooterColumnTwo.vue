<template>
  <div class="column content">
    <h1>Tags</h1>
    <span
      v-bind:key="tag.tag_name"
      v-for="tag in tags"
      class="tag is-link is-normal margin"
    >{{tag.tag_name}}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FooterColumnTwo",
  methods: {
    ...mapActions(["fetchTags"])
  },
  computed: mapGetters({
    tags: "getTags"
  }),
  beforeMount() {
    this.fetchTags();
  }
};
</script>

<style>
.margin {
  margin: 3px;
}
</style>
