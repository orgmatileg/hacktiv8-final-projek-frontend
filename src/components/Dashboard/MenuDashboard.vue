<template>
  <aside class="menu">
    <p class="menu-label">Menus</p>
    <ul class="menu-list">
      <li v-bind:key="menu.id" v-for="menu in menus">
        <router-link :to="menu.path">
          <a
            @click="handleClickMenu(menu.id)"
            v-bind:class="{'is-active':menu.isActive}"
          >{{menu.name}}</a>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "MenuDashboard",
  methods: {
    handleClickMenu(idMenu) {
      this.menus.forEach(menu => (menu.isActive = false));
      const menus = this.menus.filter(menu => menu.id == idMenu);

      menus[0].isActive = true;
    }
  },
  data() {
    return {
      menus: [
        {
          id: 1,
          name: "Dashboard",
          isActive: true,
          path: "/dashboard"
        },
        {
          id: 2,
          name: "Posts",
          isActive: false,
          path: "/dashboard/posts"
        },
        {
          id: 3,
          name: "Contact Form",
          isActive: false,
          path: "/dashboard/contacts"
        },
        {
          id: 4,
          name: "Email Subcriber",
          isActive: false,
          path: "/dashboard/subscriber"
        },
        {
          id: 5,
          name: "Settings",
          isActive: false,
          path: "/dashboard/settings"
        }
      ]
    };
  }
};
</script>

<style>
</style>
