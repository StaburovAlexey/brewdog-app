<template>
  <form class="card card-auth">
    <div class="card-content">
      <span class="card-title center">Регистрация</span>
      <div class="col">
        <div class="input-field">
          <input id="name" type="text" class="validate" />
          <label for="name">Имя</label>
          <small class="helper-text invalid">Обязательное поле</small>
        </div>
        <div class="input-field">
          <input id="mail" type="email" class="validate" />
          <label for="mail">Почта</label>
          <small class="helper-text">Введите ваш email</small>
        </div>
        <div class="input-field">
          <input id="pass" type="password" class="validate" />
          <label for="pass">Пароль</label>
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
              Зарегистрироваться
              <i class="material-icons right">send</i>
            </button>
          </div>
          <p class="center">
            Есть аккаунт?
            <router-link to="/login">Войти</router-link>
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
