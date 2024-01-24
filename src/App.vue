<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
<script>
import FormLayout from "@/layout/FormLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
export default {
  computed: {
    layout() {
      if (this.$route.meta.layout == "form") {
        return FormLayout;
      }
      return MainLayout;
    },
  },
  component: {
    FormLayout,
    MainLayout,
  },
};
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "./assets/index.css";
</style>
