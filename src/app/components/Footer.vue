<template>
  <v-footer app class="primary">
    <v-layout row wrap align-center class="footer-topBorder">
      <v-flex xs12>
        <div class="white--text ml-3 mt-4">
          © {{year}} Trip Routes
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    name: "MrFooter",
    data() {
      return {
        year: (new Date()).getFullYear()
      }
    }
  }
</script>

<style scoped>

</style>
