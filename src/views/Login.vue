<template>
  <div class="col s12 ">
    <form class="card horizontal card-auth">
      <div class="card-content">
        <span class="card-title center">Вход</span>
        <div class="col">
          <div class="input-field col s6">
            <i class="material-icons prefix">account_box</i>
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">Имя</label>
            <small class="helper-text invalid">Обязательное поле ввода</small>
          </div>
          <div class="input-field col s6">
            <i class="material-icons prefix">account_mail</i>
            <input id="last_name" type="email" class="validate" />
            <label for="last_name">Почта</label>
            <small class="helper-text invalid">Обязательное поле ввода</small>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
