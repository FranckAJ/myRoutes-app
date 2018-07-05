<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row align-center justify-center>
      <v-flex xs4>
        <form>
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

          <v-btn block color="primary" @click="onSubmit" :disabled="errors.any()">submit</v-btn>

        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {DO_AUTH} from './../../../store/actions/auth'
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
            required: 'Required field',
            max: 'The name field may not be greater than 10 characters'
          },
          email: {
            required: 'Required field',
            email: 'Invalid E-mail'
          }
        }
      }
    }),
    methods: {
      onSubmit() {
        this.$validator.validateAll().then((result) => {
          const {email, password} = this;
          if (result) {
            this.$store.dispatch(DO_AUTH, {email, password})
              .then((response) => {
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
