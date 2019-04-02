<template>
  <div class="column content">
    <h1>Menu</h1>
    <div v-bind:key="menu.id" v-for="menu in MenuJSON">
      <router-link :to="menu.path">
        <h5>{{menu.title}}</h5>
      </router-link>
    </div>
    <!-- <router-link v-for="menu in MenuJSON" class="navbar-item" to="menu.path">
      <h3>{{menu.title}}</h3>
    </router-link>-->
  </div>
</template>

<script>
import MenuJSON from "../../seeder/menu.json";
export default {
  name: "FooterColumnThree",
  data() {
    return {
      MenuJSON
    };
  }
};
</script>

<style>
</style>
