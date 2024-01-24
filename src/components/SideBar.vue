<template>
  <li>
    <a
      href="#"
      data-target="slide-out"
      class="sidenav-trigger black-text sidenav-btn"
      ><i class="material-icons">menu</i></a
    >
  </li>
  <ul id="slide-out" class="sidenav" ref="sidebar">
    <li>
      <div class="user-view">
        <div class="background"></div>
        <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
        <a href="#name"><span class="white-text name">John Doe</span></a>
        <a href="#email"
          ><span class="white-text email">jdandturk@gmail.com</span></a
        >
      </div>
    </li>
    <li>
      <a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a>
    </li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
</template>

<script>
import M from "materialize-css/dist/js/materialize.min";
export default {
  mounted() {
    M.Sidenav.init(this.$refs.sidebar, {
      preventScrolling: true,
    });
  },
};
</script>

<style lang="scss" scoped></style>
