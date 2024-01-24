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
          <li>
            <a href="#!">Профиль<i class="material-icons">account_box</i></a>
          </li>
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
  mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    });
  },
  components: { SideBar },
};
</script>

<style lang="scss" scoped></style>
