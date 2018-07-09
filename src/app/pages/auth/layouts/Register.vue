<template>
  <v-layout justify-center>
    <v-flex xs3>
      <div class="register--head">
        <h1>Crie sua conta</h1>
      </div>
      <v-card>
        <v-container text-xs-center text-md-center>

          <div class="logo--container">
            <img src="/static/icon/icon-75.png" alt="avatar">
          </div>

          <div class="msg-block--container">
            <v-alert :value="alert.show" :type="alert.type" outline>
              {{alert.msg}}
            </v-alert>
          </div>

          <form>
            <v-text-field
              v-validate="'required'"
              v-model="form.name"
              :error-messages="errors.collect('name')"
              label="Nome"
              data-vv-name="name"
              required>
            </v-text-field>

            <v-text-field
              v-validate="'required|email'"
              v-model="form.email"
              :error-messages="errors.collect('email')"
              label="E-mail"
              data-vv-name="email"
              required>
            </v-text-field>

            <v-text-field
              v-validate="'required'"
              v-model="form.password"
              :error-messages="errors.collect('password')"
              label="Senha"
              type="password"
              data-vv-name="password"
              required>
            </v-text-field>

            <div class="register--account-btn">
              <v-btn block color="primary" @click="onSubmit" :disabled="errors.any()">Criar Conta</v-btn>
            </div>
            <div class="register--login-link">
              <v-label>Já possui uma conta?</v-label>
              <a @click="toSignIn()">Entrar</a>
            </div>
          </form>
        </v-container>
      </v-card>

      <div class="social-login--container">
        <v-card>
          <v-container grid-list-md text-xs-center>
            <div class="social-login-head">
              <v-label>Use sua rede social para acesso rápido</v-label>
            </div>
            <v-layout row wrap>
              <v-flex xs6>
                <v-btn class="social-login--btn-google" outline block color="error">Google</v-btn>
              </v-flex>
              <v-flex xs6>
                <v-btn class="social-login--btn-fb" outline block color="primary">Facebook</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import {AUTH_REGISTER_USER_REQUEST} from "../../../store/actions/auth";

  export default {
    name: "Register",
    data: () => ({
      form: {
        name: '',
        email: '',
        password: '',
      },
      alert: {
        show: false,
        type: 'success',
        msg: ''
      },

      dictionary: {
        custom: {
          name: {
            required: 'Campo Obrigatório'
          },
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
          if (result) {
            this.$store.dispatch(AUTH_REGISTER_USER_REQUEST, this.form)
              .then(() => {
                this.alert.show = true;
                this.alert.msg = 'Um e-mail de confirmação foi enviado, verifique antes de fazer login.';
                this.form.name = this.form.email = this.form.password = '';
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

<style lang="scss" scoped>
  @import '../../../../scss/core';

  .register--head {
    text-align: center;
    margin: 30px;
  }

  .logo--container {
    padding-bottom: 15px;
  }

  .msg-block--container {
    padding-top: 8px;
    padding-bottom: 12px;
    text-align: left;
  }

  .register--account-btn {
    margin-top: 10px;
  }

  .register--login-link {
    margin-top: 15px;
  }

  .social-login--container {
    margin-top: 20px;

    .social-login-head {
      margin-bottom: 8px;
    }
  }

  .social-login--btn-fb {
    color: map_get($colors, facebook) !important;
    &:hover {
      border-radius: 4px !important;
      background: map_get($colors, facebook) !important;
      color: map_get($colors, white) !important;
    }
  }

  .social-login--btn-google {
    &:hover {
      border-radius: 4px !important;
      background: map_get($colors, error) !important;
      color: map_get($colors, white) !important;
    }
  }

</style>
