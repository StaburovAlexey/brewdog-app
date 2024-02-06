<template>
  <form class="card card-auth" @submit.prevent="login">
    <div class="card-content">
      <span class="card-title center">Вход</span>
      <div class="col">
        <div class="input-field">
          <input id="last_name" v-model="email" type="email" :class="{ invalid: v$.email.$invalid }" />
          <label for="last_name">Почта</label>
          <small class="helper-text" v-if="v$.email.required.$invalid">Обязательное поле ввода</small>
          <small class="helper-text" v-if="v$.email.email.$invalid">Введите коректный email</small>
        </div>
        <div class="input-field">
          <input id="first_name" type="password" :class="{ invalid: v$.pass.$invalid }" v-model="pass" />
          <label for="first_name">Пароль</label>
          <small class="helper-text" v-if="v$.pass.minLength.$invalid">Пароль должен сожержать минимуи 6 символов</small>
          <small class="helper-text" v-if="v$.pass.required.$invalid">Обязательное поле ввода</small>

        </div>
        <div class="card-action">
          <div class="center">
            <button class="btn waves-effect waves-light btn-submit" type="submit" v-if="!loading">
              Войти
              <i class="material-icons right">send</i>
            </button>
            <pre-loader v-else></pre-loader>
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
import PreLoader from "@/components/PreLoader.vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      pass: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      if (this.v$.$invalid) {
        alert('Заполните все поля');
      }
      else {
        this.loading = true;
        const formData = {
          email: this.email,
          pass: this.pass
        };
        try {
          await this.$store.dispatch("loginUser", formData);
          this.$router.push("/");
          this.loading = false;
        }
        catch (e) {
          alert(e);
          this.loading = false;
        }
      }
    }
  },
  validations() {
    return {
      email: { email, required },
      pass: { required, minLength: minLength(6) },
    };
  },
  components: { PreLoader }
}
</script>

<style lang="scss" scoped></style>
