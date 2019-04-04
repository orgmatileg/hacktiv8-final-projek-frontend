<template>
  <div>
    <div class="content">
      <h2 class="is-marginless">Posts</h2>
    </div>
    <Table limit="10" count="100"/>
  </div>
</template>

<script>
import Table from "../../_Reuseable/Table";
export default {
  name: "List",
  components: {
    Table
  }
};
</script>

<style>
</style>
