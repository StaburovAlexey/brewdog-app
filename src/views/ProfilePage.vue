<template>
  <div class="row container flow-text black-text">
    <div class="card ">
      <div class="card-content">
        <span class="card-title">Имя</span>
        <p>{{ user.name }}</p>
      </div>
    </div>
    <div class="card ">
      <div class="card-content">
        <span class="card-title">Почта</span>
        <p>{{ user.email }}</p>
      </div>
    </div>
    <button class="btn-large waves-effect" type="button">Выйти из профиля</button>
  </div>
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
