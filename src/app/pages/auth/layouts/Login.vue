<template>
  <v-container fluid grid-list-md>
    <v-layout row justify-center>
      <v-flex xs12 sm6 md3>
        <div class="login--head">
          <h1>Entre na sua conta</h1>
        </div>
        <v-card>
          <v-container text-xs-center text-md-center>

            <div class="logo--container">
              <img src="/static/icon/icon-75.png" alt="avatar">
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
                <v-btn :loading="loading" @click="onSubmit" block color="primary" :disabled="errors.any()">Entrar
                </v-btn>
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
  </v-container>
</template>

<script>
  import {AUTH_REQUEST} from './../../../store/actions/auth'
  import {FB_AUTH_INVALID_USER, FB_AUTH_INVALID_PASS} from "../../../helpers/constants";
  import {mapGetters} from 'vuex';

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
                  this.$router.push('/trips');
                } else {
                  this.alert.show = true;
                  this.alert.msg = 'Usuário com e-mail não confirmado';
                }
              })
              .catch((err) => {
                this.alert.show = true;
                if (err.code === FB_AUTH_INVALID_USER || err.code === FB_AUTH_INVALID_PASS) {
                  this.alert.msg = 'As credenciais fornecidas são inválidas.';
                } else {
                  this.alert.msg = 'Falha ao efetuar login. Tente novamente.';
                }
              })
          }
        });
      },
      toRegister() {
        this.$router.push('/register');
      }
    },
    computed: mapGetters({
      loading: 'authRequestLoading'
    }),
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
