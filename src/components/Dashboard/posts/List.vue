<template>
  <div>
    <div class="content">
      <h2 class="is-marginless">Posts</h2>
    </div>
    <Table :headers="dataTestHeader" :list="dataTestBodyList" limit="10" count="200"/>
  </div>
</template>

<script>
import Table from "../../_Reuseable/Table";
export default {
  name: "List",
  data() {
    return {
      dataTestHeader: ["No", "Title", "Author", "Date", "Action"],
      dataTestBodyList: [
        {
          id: 1,
          judul: "Mantap bro",
          author: "Luqmanul Hakim",
          date: "2 Maret 2019"
        },
        {
          id: 2,
          judul: "Mantap bro 2",
          author: "Tri Ulvany",
          date: "5 Maret 2019"
        },
        {
          id: 3,
          judul: "Mantap bro 3",
          author: "Luqmanul Hakim",
          date: "10 Maret 2019"
        }
      ]
    };
  },
  components: {
    Table
  }
};
</script>

<style>
</style>
