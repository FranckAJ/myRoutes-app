<template>
  <v-app>
    <mr-navigation></mr-navigation>

    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">

          <router-view/>

        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
  import MrNavigation from "./app/components/Navigation";

  export default {
    components: {MrNavigation},
  }
</script>
<style lang="scss">
  @import "scss/core";
  @import "scss/layout";

</style>
