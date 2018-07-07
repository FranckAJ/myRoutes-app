<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row align-center justify-center>
      <v-flex xs4>
        <form @submit.prevent="onSubmit">
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

          <v-btn type="submit" block color="primary" :disabled="errors.any()">Sign in</v-btn>
          <v-btn block outline to="register">Sign out</v-btn>

        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {AUTH_REQUEST} from './../../../store/actions/auth'

  export default {
    name: "Login",
    data: () => ({
      email: '',
      password: '',

      dictionary: {
        attributes: {
          email: 'E-mail'
        },
        custom: {
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
          const {email, password} = this;
          if (result) {
            this.$store.dispatch(AUTH_REQUEST, {email, password})
              .then(() => {
                this.$router.push('/home');
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

<style lang="scss" scoped>

</style>
