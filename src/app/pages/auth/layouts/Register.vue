<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row align-center justify-center>
      <v-flex xs4>
        <form>
          <v-text-field
            v-validate="'required'"
            v-model="name"
            :error-messages="errors.collect('name')"
            label="Name"
            data-vv-name="name"
            required>
          </v-text-field>

          <v-text-field
            v-validate="'required|email'"
            v-model="email"
            :error-messages="errors.collect('email')"
            label="E-mail"
            data-vv-name="email"
            required>
          </v-text-field>

          <v-text-field
            v-validate="'required'"
            v-model="password"
            :error-messages="errors.collect('password')"
            label="Password"
            type="password"
            data-vv-name="password"
            required>
          </v-text-field>

          <v-btn block color="primary" @click="onSubmit" :disabled="errors.any()">Sign out</v-btn>

        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {AUTH_REGISTER_USER_REQUEST} from "../../../store/actions/auth";

  export default {
    name: "Register",
    data: () => ({
      name: '',
      email: '',
      password: '',

      dictionary: {
        custom: {
          name: {
            required: 'Campo Obrigatório'
          },
          password: {
            required: 'Campo Obrigatório',
            max: 'Limite de caracteres excedidos'
          },
          email: {
            required: 'Campo Obrigatório',
            email: 'E-mail inválido'
          }
        }
      }
    }),

    methods: {
      onSubmit() {
        this.$validator.validateAll().then((result) => {
          const {name, email, password} = this;
          if (result) {
            this.$store.dispatch(AUTH_REGISTER_USER_REQUEST, {name, email, password})
              .then(() => {
                this.$router.push('/login');
              })
          }
        });
      }
    },

    mounted() {
      this.$validator.localize('en', this.dictionary)
    }
  }
</script>

<style scoped>

</style>
