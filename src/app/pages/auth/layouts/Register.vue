<template>
  <v-layout justify-center>
    <v-flex md5>
      <div class="register--head">
        <h1>Create your account</h1>
      </div>
      <v-card>
        <v-container text-xs-center text-md-center>

          <div class="logo--container">
            <img src="/static/rope-75.png" alt="avatar">
          </div>

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

            <div class="register--account-btn">
              <v-btn block color="primary" @click="onSubmit" :disabled="errors.any()">Create an account</v-btn>
            </div>
            <div class="register--login-link">
              <v-label>Already have an account?</v-label>
              <a @click="toSignIn()">Log in</a>
            </div>
          </form>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
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
      },
      toSignIn() {
        this.$router.push('/login');
      }
    },

    mounted() {
      this.$validator.localize('en', this.dictionary)
    }
  }
</script>

<style scoped>
  .register--head {
    text-align: center;
    margin: 30px;
  }

  .logo--container {
    padding-bottom: 15px;
  }

  .register--account-btn {
    margin-top: 10px;
  }

  .register--login-link {
    margin-top: 15px;
  }

</style>
