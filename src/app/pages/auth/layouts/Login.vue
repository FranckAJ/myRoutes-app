<template>
  <v-layout justify-center>
    <v-flex md4>
      <div class="login--head">
        <h1>Faça login na sua conta</h1>
      </div>
      <v-card>
        <v-container text-xs-center text-md-center>

          <div class="logo--container">
            <img src="/static/rope-75.png" alt="avatar">
          </div>

          <div class="error-block--container">
            <v-alert :value="alert.show" :type="alert.type" outline>
              {{alert.msg}}
            </v-alert>
          </div>

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
              label="Senha"
              type="password"
              data-vv-name="password"
              required>
            </v-text-field>

            <div class="login--sign">
              <v-btn @click="onSubmit" block color="primary" :disabled="errors.any()">Entrar</v-btn>
            </div>

            <div class="login--register-container">
              <v-label>Não possui conta?</v-label>
              <a @click="toRegister()">Criar conta</a>
            </div>

          </form>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import {AUTH_REQUEST} from './../../../store/actions/auth'

  export default {
    name: "Login",
    data: () => ({
      email: '',
      password: '',
      alert: {
        show: false,
        type: 'error',
        msg: ''
      },

      dictionary: {
        custom: {
          password: {
            required: 'Campo Obrigatório'
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
              .then((emailVerified) => {

                if (emailVerified) {
                  this.$router.push('/home');
                } else {
                  this.alert.show = true;
                  this.alert.msg = 'Usuário com e-mail não confirmado';
                }
              })
          }
        });
      },
      toRegister() {
        this.$router.push('/register');
      }
    },
    mounted() {
      this.$validator.localize('en', this.dictionary)
    }
  }
</script>

<style lang="scss" scoped>

  .login--head {
    text-align: center;
    margin: 30px;
  }

  .logo--container {
    padding-bottom: 15px;
  }

  .error-block--container {
    padding-top: 8px;
    padding-bottom: 12px;
  }

  .login--sign {
    margin-top: 10px;
  }

  .login--register-container {
    margin-top: 15px;
  }
</style>
