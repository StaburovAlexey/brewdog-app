<template>
  <nav class="cyan lighten-5 nav-wrapper nav-bar">
    <ul>
      <SideBar></SideBar>
      <!-- Dropdown Trigger -->
      <li class="right hide-on-med-and-down">
        <!-- Dropdown Trigger -->
        <a
          class="dropdown-trigger black-text dropdown-btn center"
          href="#!"
          data-target="dropdown1"
          ref="dropdown"
          >user<i class="material-icons right">arrow_drop_down</i></a
        >

        <!-- Dropdown Structure -->
        <ul id="dropdown1" class="dropdown-content">
          <li
            v-for="link in links"
            :key="link.url"
            :class="{ active: isActive === link.url }"
          >
            <router-link :to="link.url">
              {{ link.title
              }}<i class="material-icons">{{ link.icon }}</i></router-link
            >
          </li>
          <li class="divider" tabindex="10"></li>
          <li>
            <a href="#!">Выйти<i class="material-icons">cancel</i></a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import M from "materialize-css/dist/js/materialize.min";
import SideBar from "./SideBar.vue";
export default {
  data: () => ({
    links: [
      { title: "Главная", url: "/", icon: "home" },
      { title: "Поиск", url: "/search", icon: "search" },
      { title: "Избранное", url: "/favorite", icon: "favorite" },
      { title: "Профиль", url: "/profile", icon: "account_box" },
    ],
  }),
  computed: {
    isActive() {
      return this.$route.path;
    },
  },
  mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    });
  },
  components: { SideBar },
};
</script>

<style lang="scss" scoped></style>
