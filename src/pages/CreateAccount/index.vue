<template>
  <div class="s1-loc__container">
    <div>
      <div class="s1-U__mg--bt32">
        <div class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
          <md-button
            class="md-dense md-icon-button s1-U__mg--rt16 s1-U__mg--tp16"
            @click="setActivePage('all-my-accounts')"
          >
            <md-icon>arrow_back</md-icon>
          </md-button>
          <div>
            <p class="md-caption s1-U__fw--300 s1-U__text-color--dark-2">
              ICATU
              <span v-show="form.name" class="s1-U__mg--lt4">- Nova conta</span>
            </p>
            <h1 class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
              <span>{{ form.name || 'Nova conta' }}</span>
            </h1>
          </div>
        </div>
      </div>

      <md-card class="s1-loc__width--900px">
        <md-card-content>
          <h3 class="md-title s1-U__text-color--primary s1-U__mg--tp4">Dados cadastrais</h3>
          <div class="s1-U__pd--tp16 s1-U__pd--lt16">
            <div class="s1-loc__md-field-wrapper s1-U__width--300px s1-U__mg--rt16">
              <md-field>
                <label>Nome da conta</label>
                <md-input v-model="form.name" required/>
              </md-field>
            </div>
            <div class="s1-loc__md-field-wrapper s1-U__width--300px s1-U__mg--rt16">
              <md-field class="md-field-helper-text">
                <label>Descrição</label>
                <md-textarea v-model="form.description" md-autogrow></md-textarea>
              </md-field>
            </div>
            <div class="s1-loc__md-field-wrapper s1-U__width--240px">
              <md-field>
                <label for="language-code">Idioma</label>
                <md-select v-model="form.cultureIsoCode" name="language-code" id="language-code">
                  <md-option
                    :value="language.Id"
                    v-for="language in languages"
                    v-bind:key="language.Id"
                  >{{language.Name}}</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="s1-loc__md-field-wrapper s1-U__width--240px">
              <md-field>
                <label for="country-code">País</label>
                <md-select v-model="form.countryIsoCode" name="country-code" id="country-code">
                  <md-option
                    :value="country.IsoCodeA2"
                    v-for="country in countries"
                    v-bind:key="country.id"
                  >{{country.Name}}</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="s1-loc__md-field-wrapper s1-U__width--300px">
              <md-field>
                <label for="currency-code">Moedas</label>
                <md-select
                  v-model="form.currencyIsoCodes"
                  name="currency-code"
                  id="currency-code"
                  multiple
                  required
                >
                  <md-option
                    :value="currency.id"
                    v-for="currency in currencies"
                    v-bind:key="currency.id"
                  >{{currency.label}}</md-option>
                </md-select>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions class="s1-U__pd16">
          <md-button class="md-raised md-primary">Criar conta</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import Countries from "../../data/_countryCodes.js";
import Languages from "../../data/_languages.js";
import Currencies from "../../data/_currencies.js";
import Companies from "../../data/_companies.js";

export default {
  name: "CreateAccount",
  props: {
    setActivePage: Function
  },
  data: () => ({
    activeCompanyToListAccounts: null,
    countries: Countries,
    languages: Languages,
    currencies: Currencies,
    companies: Companies,
    form: {
      name: null,
      description: null,
      cultureIsoCode: "pt-BR",
      countryIsoCode: "BR",
      currencyIsoCodes: []
    },
    magicGets: {
      BRL: "Real brasileiro",
      USD: "Dólar americano",
      COP: "Peso colombiano"
    }
  }),
  mounted: function() {
    this.$nextTick(function() {
      document.querySelector("input").focus();
    });
  }
};
</script>

