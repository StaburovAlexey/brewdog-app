<template>
  <div class="container container-search">
    <nav>
      <div class="nav-wrapper">
        <form class="">
          <div class="input-field">
            <input id="search" type="search" required>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
          <div class="card">
            <button type="submit" class="btn"><i class="material-icons">search</i>Искать</button>
          </div>
        </form>
      </div>
    </nav>
    <div class="card">
      <div class="card-content">
        <form action="">
          <h3 class="card-title black-text">Поиск по тэгам</h3>
          <div class="chips chips-autocomplete" ref="chips"></div>
          <button type="submit" class="btn"><i class="material-icons right">search</i>Искать</button>
        </form>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <form action="">
          <div class="input-field col s12">
            <select ref="select">
              <option value="" disabled selected>Выберите стиль пива</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Поиск по стилю пива</label>
          </div>
          <button type="submit" class="btn"><i class="material-icons right">search</i>Искать</button>
        </form>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <form action="">
          <h3 class="card-title black-text">Поиск по содержанию алкоголя</h3>
          <p class="range-field">
            <input type="range" id="test5" min="0" max="5" />
          </p>
          <button type="submit" class="btn"><i class="material-icons right">search</i>Искать</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css/dist/js/materialize.min";
export default {
  mounted() {
    M.Chips.init(this.$refs.chips, {
      autocompleteOptions: {
        data: {
          'Ipa': null,
          'Doppelbock': null,
          'Pilsner': null,
          'RIS': null
        },
        limit: Infinity,
        minLength: 1
      }
    }),
      M.FormSelect.init(this.$refs.select, {})
  }
}
</script>

<style lang="scss" scoped></style>