<template>
  <h3 class="white-text">{{ user }}</h3>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
