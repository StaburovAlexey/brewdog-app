<template>
  <form class="card card-auth" @submit.prevent="singUp()">
    <div class="card-content">
      <span class="card-title center">Регистрация</span>
      <div class="col">
        <div class="input-field">
          <input id="name" type="text" :class="{ invalid: v$.name.required.$invalid }" v-model.trim="name" />
          <label for="name">Имя</label>
          <small class="helper-text invalid" v-if="v$.name.required.$invalid">Обязательное поле</small>
        </div>
        <div class="input-field">
          <input id="mail" type="email" :class="{ invalid: v$.email.$invalid }" v-model="email" />
          <label for="mail">Почта</label>
          <small class="helper-text" v-if="v$.email.required.$invalid">Обязательное поле ввода</small>
          <small class="helper-text" v-if="v$.email.email.$invalid">Введите коректный email</small>
        </div>
        <div class="input-field">
          <input id="pass" type="password" :class="{ invalid: v$.pass.$invalid }" v-model="pass" />
          <label for="pass">Пароль</label>
          <small class="helper-text" v-if="v$.pass.minLength.$invalid">Пароль должен сожержать минимуи 6 символов</small>
          <small class="helper-text" v-if="v$.pass.required.$invalid">Обязательное поле ввода</small>
        </div>
        <div class="card-action">
          <div class="center">
            <button class="btn waves-effect waves-light btn-submit" type="submit" v-if="!loading"> Зарегистрироваться <i
                class="material-icons right">send</i>
            </button>
            <pre-loader v-else></pre-loader>
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
import PreLoader from "@/components/PreLoader.vue";
import { supabase } from "@/lib/supabaseClient.js";
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      pass: "",
      name: "",
      loading: false,
    };
  },
  methods: {
    async singUp() {
      if (this.v$.$invalid) {
        alert('Заполните все поля');
        return;
      }
      this.loading = true;
      const formData = {
        email: this.email,
        pass: this.pass,
        name: this.name
      };
      try {
        await this.$store.dispatch('registerUser', formData);
        this.$router.push("/");
        this.loading = false;
      }
      catch (err) {
        this.loading = false;
        console.error(err);
      }
    }
  },
  validations() {
    return {
      email: { required, email },
      pass: { required, minLength: minLength(6) },
      name: { required }
    };
  },
  components: { PreLoader }
}
</script>

<style lang="scss" scoped></style>
