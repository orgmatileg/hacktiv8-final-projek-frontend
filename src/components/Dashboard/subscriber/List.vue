<template>
  <div>
    <div class="content">
      <h2 class="is-marginless">Email Subscriber</h2>
    </div>
    <Table :headers="dataHeader" :list="subscribes" :limit="limit" :count="subscribesCount"/>
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
      dataHeader: ["No", "Email", "Date"],
      limit: 10
    };
  },
  components: {
    Table
  },
  methods: {
    ...mapActions(["fetchSubscribes"])
  },
  computed: mapGetters({
    subscribes: "getSubscribes",
    subscribesCount: "getSubscribesCount"
  }),
  created() {
    this.fetchSubscribes();
  }
};
</script>

<style>
</style>
