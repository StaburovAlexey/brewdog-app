<template>
  <form class="card card-auth">
    <div class="card-content">
      <span class="card-title center">Вход</span>
      <div class="col">
        <div class="input-field">
          <input id="last_name" type="email" class="validate" />
          <label for="last_name">Почта</label>
          <small class="helper-text">Введите ваш email</small>
        </div>
        <div class="input-field">
          <input id="first_name" type="text" class="validate" />
          <label for="first_name">Пароль</label>
          <small class="helper-text"
            >Пароль должен сожержать минимуи 6 символов</small
          >
        </div>
        <div class="card-action">
          <div class="center">
            <button
              class="btn waves-effect waves-light btn-submit"
              type="submit"
            >
              Войти
              <i class="material-icons right">send</i>
            </button>
          </div>
          <p class="center">
            Нет аккаунта?
            <router-link to="/register">Зарегистрироваться</router-link>
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
