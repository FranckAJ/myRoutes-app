<template>
  <div class="home--cover-bg">
    <div class="home--cover-img">
      <div class="home--header-brand">
        <img src="/static/logo.png" alt="avatar">

      </div>
      <v-layout>
        <div class="home--content mt-5 ml-5">
          <div class="content--presentation ml-2">
            <h2>Rotas para viagens Interestaduais.</h2>
            <vue-typer
              :text='["Encontre melhores percursos", "Simule custos de viagem", "Descubra intinerários alternativos"]'
              :repeat='Infinity'
              :shuffle='false'
              initial-action='typing'
              :pre-type-delay='70'
              :type-delay='70'
              :pre-erase-delay='2000'
              :erase-delay='250'
              erase-style='clear'
              :erase-on-complete='false'
              caret-animation='blink'>
            </vue-typer>
          </div>
          <div class="content--content-btn mt-4">
            <v-btn class="elevation-5 " large color="primary" to="/register">
              Começe Já
            </v-btn>
            <v-btn class="elevation-5 " large color="dark" to="/register">
              Busca rápida
            </v-btn>
          </div>
        </div>
      </v-layout>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="scss" scoped>
  @import '../../../../scss/core';

  .home--header-brand {
    font-size: inherit;
    font-weight: inherit;
    margin: 20px;
    margin-left: 30px;
  }

  .home--cover-bg {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lighten(#C1543D, 40%);

    .home--cover-img {
      z-index: 0;
      background-image: url("/static/bg.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }
  }

  .home--content {
    padding-top: 60px;
    z-index: 10;
    .content--presentation {
      h2 {
        font-size: 26px;
        font-weight: 900;
      }
    }
    .content--content-btn {

    }
  }

  .vue-typer {
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 900;
  }

  .vue-typer .custom.char.typed {
    color: map_get($colors, dark-light);
  }

  .vue-typer .custom.char.selected {
    color: map_get($colors, dark-light);
  }

</style>
