<template>
  <li>
    <a
      href="#"
      data-target="slide-out"
      class="sidenav-trigger black-text sidenav-btn"
      ><i class="material-icons">menu</i></a
    >
  </li>
  <ul id="slide-out" class="sidenav" ref="sidebar" @click="closeSidebar">
    <li>
      <div class="user-view blue darken-4">
        <div class="background"></div>
        <!-- <a href="#user"><img class="circle" src="images/yuna.jpg" /></a> -->
        <a href="#name"><span class="white-text name">John Doe</span></a>
        <a href="#email"
          ><span class="white-text email">jdandturk@gmail.com</span></a
        >
      </div>
    </li>
    <li
      v-for="link in links"
      :key="link.url"
      :class="{ active: isActive === link.url }"
    >
      <router-link :to="link.url"
        >{{ link.title
        }}<i class="material-icons">{{ link.icon }}</i></router-link
      >
    </li>
    <li>
      <div class="divider"></div>
    </li>
    <li>
      <a href="#!" class="waves-effect"
        >Выйти<i class="material-icons">cancel</i></a
      >
    </li>
  </ul>
</template>

<script>
import M from "materialize-css/dist/js/materialize.min";
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
    M.Sidenav.init(this.$refs.sidebar, {
      preventScrolling: true,
      onCloseEnd: true,
    });
  },
  beforeUnmount() {
    const instance = M.Sidenav.getInstance(this.$refs.sidebar);
    if (instance && instance.destroy) {
      instance.destroy();
    }
  },
  methods: {
    closeSidebar() {
      M.Sidenav.getInstance(this.$refs.sidebar).close();
    },
  },
};
</script>

<style lang="scss" scoped></style>
