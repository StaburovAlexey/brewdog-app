<template>
  <div class="main-layout black ">
    <NavBar></NavBar>
    <main class="app-content white-text">
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
  async mounted() {
    const user = await this.$store.dispatch('getUser')
    if (user) {
      await this.$store.dispatch("fetchInfoUser");
    }

  },
}
</script>

<style lang="scss" scoped></style>
