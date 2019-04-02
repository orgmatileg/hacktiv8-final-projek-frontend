<template>
  <div>
    <div class="columns">
      <div class="column is-3" id="left-menu">
        <MenuDashboard/>
      </div>
      <div class="column is-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MenuDashboard from "../components/Dashboard/MenuDashboard";
export default {
  name: "Dashboard",
  components: {
    MenuDashboard
  }
};
</script>

<style>
#left-menu {
  border-right: 1px #c3c3c3 solid;
}
</style>
