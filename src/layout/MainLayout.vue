<template>
  <div class="main-layout">
    <NavBar></NavBar>
    <main class="app-content black">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "main-layout",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped></style>
