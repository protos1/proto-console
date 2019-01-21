<template>
  <div class="s1-loc__container">
    <header class="s1-U__mg--bt32">
      <h1 class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
        <span>Todos os usuários</span>
      </h1>
    </header>
    <div class="s1-U__align-children--center s1-U__justify-content--space-between">
      <div class="s1-loc__md-field-wrapper s1-U__width--240px" style="display: inline-block">
        <md-field class="s1-U__mg0">
          <md-input class="s1-U__full-width" v-model="search" placeholder="Buscar usuários"/>
          <md-button
            type="submit"
            class="s1-U__mg0 md-icon-button md-dense squared"
            style=" margin-top: -2px; margin-right: 2px;"
          >
            <md-icon>search</md-icon>
          </md-button>
        </md-field>
      </div>
      <md-button class="md-raised md-primary" @click="setActivePage('create-user')">
        <div class="s1-U__align-children--center s1-U__pd--rt8">
          <md-icon class="s1-U__mg--rt4">add</md-icon>
          <span>usuário</span>
        </div>
      </md-button>
    </div>
    <section class="s1-U__pd--tp32">
      <md-card class="s1-U__pd16 s1-U__mg--bt20" v-for="user in users" v-bind:key="user.id">
        <div
          class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__full-width"
        >
          <div class="s1-U__align-children--center" style="width: calc(100% - 40px)">
            <md-avatar
              class="md-avatar-icon md-primary s1-U__mg--rt8"
              style="font-size: 20px"
            >{{user.Abbr}}</md-avatar>
            <h2 class="md-title s1-U__text-ellipsis s1-U__full-width">{{user.Name}}</h2>
          </div>
          <md-menu md-direction="bottom-end">
            <md-button class="md-dense squared md-icon-button s1-U__flex-shrink-0" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-menu-content>
              <md-menu-item @click="setActivePage('edit-user')">Editar dados do usuário</md-menu-item>
              <md-menu-item @click="setActivePage('edit-user')">Editar perfis de acesso</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
        <div class="s1-U__mg--tp8 s1-U__pd--lt48">
          <div class="md-layout">
            <div class="md-layout-item">
              <div class="s1-U__align-children--center s1-U__mg--bt8">
                <img
                  src="https://s1-cdn-brazilsouth.azureedge.net/sales.svg"
                  style="width: 24px; height: 24px;"
                  alt
                >
                <p class="md-body-2 s1-U__mg--lt8">Vendas</p>
              </div>
              <table>
                <tr>
                  <td class="s1-U__text-color--dark-2">Icatu MV</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4">Operador</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="md-layout-item">
              <div class="s1-U__align-children--center s1-U__mg--bt8">
                <img
                  src="https://s1-cdn-brazilsouth.azureedge.net/analytics.svg"
                  style="width: 24px; height: 24px;"
                  alt
                >
                <p class="md-body-2 s1-U__mg--lt8">Analytics</p>
              </div>
              <table>
                <tr>
                  <td class="s1-U__text-color--dark-2">Icatu MV</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4">Analista</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="s1-U__text-color--dark-2">Icatu BV</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4">Analista de Dados</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="s1-U__text-color--dark-2">Icatu Nova</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4">Analista de Dados</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="md-layout-item">
              <div class="s1-U__align-children--center s1-U__mg--bt8">
                <img
                  src="https://s1-cdn-brazilsouth.azureedge.net/customer-service.svg"
                  style="width: 24px; height: 24px;"
                  alt
                >
                <p class="md-body-2 s1-U__mg--lt8">Pós-vendas</p>
              </div>
              <table>
                <tr>
                  <td class="s1-U__text-color--dark-2">Icatu MV</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4">Admin</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="md-layout-item">
              <h3 class="s1-U__mg--bt8">Sem acesso às aplicações:</h3>
              <div class="s1-U__align-children--center s1-U__mg--bt8">
                <img
                  src="https://s1-cdn-brazilsouth.azureedge.net/accounts.svg"
                  style="width: 24px; height: 24px;"
                  alt
                >
                <p class="md-body-2 s1-U__mg--lt8">Accounts</p>
              </div>
              <div class="s1-U__align-children--center s1-U__mg--bt8">
                <img
                  src="https://s1-cdn-brazilsouth.azureedge.net/console.svg"
                  style="width: 24px; height: 24px;"
                  alt
                >
                <p class="md-body-2 s1-U__mg--lt8">Console</p>
              </div>
            </div>
          </div>
        </div>
      </md-card>
    </section>
  </div>
</template>

<script>
import Users from "../../data/_users.js";
import Profiles from "../../data/_profiles.js";
import Actions from "../../data/_actions.js";

export default {
  name: "UsersByAccount",
  props: {
    setActivePage: Function,
    setActiveAccount: Function,
    activeAccount: String,
    activeApp: String
  },
  data: () => ({
    search: "",
    users: Users,
    allProfiles: Profiles,
    actions: Actions
  }),
  methods: {
    openMezzanine() {
      document.getElementById("s1-mezzanine-wrapper") &&
        document
          .getElementById("s1-mezzanine-wrapper")
          .classList.add("mezzanine-is-active");
    }
  }
};
</script>


