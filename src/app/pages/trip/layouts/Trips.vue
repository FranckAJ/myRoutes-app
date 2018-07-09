<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <div class="register--head">
        </div>
        <v-card>
          <v-container grid-list-md>
            <form>
              <v-layout row wrap>
                <v-flex xs4>
                  <v-autocomplete
                    v-model="fromSelected"
                    :items="cities"
                    item-text="label"
                    item-value="value"
                    label="Origem"
                    no-data-text="Nenhuma cidade encontrada"
                    persistent-hint
                    prepend-icon="location-city">
                  </v-autocomplete>
                </v-flex>
                <v-flex xs4>
                  <v-autocomplete
                    v-model="toSelected"
                    :items="cities"
                    item-text="label"
                    item-value="value"
                    label="Destino"
                    no-data-text="Nenhuma cidade encontrada"
                    persistent-hint
                    prepend-icon="location-city">
                  </v-autocomplete>
                </v-flex>
                <v-flex xs3>
                  <div class="register--account-btn">
                    <v-btn color="primary">Criar Conta</v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import citiesService from './../../../services/CitiesService'

  export default {
    name: "mrTrips",
    data: () => ({
      fromSelected: {},
      toSelected: {},
      cities: [],

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
    created: (() => {
      citiesService.getCities()
        .then((cities) => {
          cities.forEach((doc) => {
           this.cities = doc.data().cities;
          });
        });
    })
  }
</script>

<style scoped lang="scss">

</style>
