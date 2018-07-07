<template>
  <div v-if="($route.path !== '/register' && $route.path !== '/login') ? true : false">
    <v-navigation-drawer fixed :mini-variant="miniVariant" v-model="drawer" app>

      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{user.displayName}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile value="item.active" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar fixed app dark color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: "mr-navigation",
    data() {
      return {
        drawer: true,
        fixed: false,
        items: [
          {icon: 'home', title: 'Home', active: true},
          {icon: 'bubble_chart', title: 'Trips', active: false}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Trip Routes'
      }
    },
    computed: mapGetters({
      user: 'getUser'
    })
  }
</script>

<style scoped>

</style>
