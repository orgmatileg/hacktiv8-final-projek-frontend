<template>
  <div>
    <div class="content">
      <h2 class="is-marginless">Contact Form</h2>
    </div>
    <Table
      :headers="dataHeader"
      :list="contacts"
      :limit="limit"
      :count="contactsCount"
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
      dataHeader: ["No", "Full Name", "Email", "Title", "Date", "Action"],
      limit: 10
    };
  },
  components: {
    Table
  },
  methods: {
    ...mapActions(["fetchContacts", "deletePost"]),
    handleDeletePost(id) {
      this.deletePost(id);
      setTimeout(() => {
        this.fetchPostsAdmin();
      }, 500);
    }
  },
  computed: mapGetters({
    contacts: "getContacts",
    contactsCount: "getContactCount"
  }),
  created() {
    this.fetchContacts();
  }
};
</script>

<style>
</style>
