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
    <section class="s1-U__pd--tp16">
      <md-card class="s1-U__pd16 s1-U__mg--bt16" v-for="user in users" v-bind:key="user.id">
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
              <md-menu-item @click="showPasswordDialog = true">Alterar senha</md-menu-item>
              <md-divider class="s1-U__mg--tp8 s1-U__mg--bt8"></md-divider>
              <md-menu-item @click="setActivePage('manage-user-profile')">Editar perfis</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
        <div class="s1-U__mg--tp8 s1-U__pd--lt48">
          <div class="md-layout md-gutter">
            <div class="md-layout-item s1-U__mg--bt16">
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
                  <td class="s1-U__text-color--dark-2 s1-U__text-nowrap">Icatu MV</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4 s1-U__text-nowrap">Operador</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="md-layout-item s1-U__mg--bt16">
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
                  <td class="s1-U__text-color--dark-2 s1-U__text-nowrap">Icatu MV</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4 s1-U__text-nowrap">Analista</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="s1-U__text-color--dark-2 s1-U__text-nowrap">Icatu BV</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4 s1-U__text-nowrap">Analista de Dados</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="s1-U__text-color--dark-2 s1-U__text-nowrap">Icatu Nova</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4 s1-U__text-nowrap">Analista de Dados</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="md-layout-item s1-U__mg--bt16">
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
                  <td class="s1-U__text-color--dark-2 s1-U__text-nowrap">Icatu MV</td>
                  <td>
                    <div class="s1-U__vertical-divider s1-U__mg--rt8 s1-U__mg--lt8"/>
                  </td>
                  <td>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4 s1-U__text-nowrap">Admin</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <!-- <div class="md-layout-item s1-U__mg--bt16">
              <h3 class="s1-U__mg--bt8 s1-U__mg--bt16">Sem acesso às aplicações:</h3>
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
            </div>-->
          </div>
        </div>
      </md-card>
    </section>
    <md-dialog :md-active.sync="showPasswordDialog">
      <md-content class="s1-U__pd0">
        <div class="s1-U__pd16">
          <div class="md-title">Alteração de senha</div>
        </div>
        <md-divider/>
        <div class="s1-U__pd16">
          <p class="s1-U__mg--bt16 s1-U__width--300px">Nova senha para usuário</p>
          <p class="md-subheading s1-U__mg--bt16">
            <b>cromat</b>
            <b class="s1-U__text-color--dark-2">@icatu</b>
          </p>
          <div class="s1-U__pd--bt32 s1-U__pd--lt16">
            <ul class="s1-U__mg0 s1-U__pd0">
              <li>Mínimo 8 digitos;</li>
              <li>pelo menos 1 caractere especial;</li>
              <li>pelo menos 1 letra maiúscula</li>
            </ul>
          </div>
          <div class="s1-U__mg--bt8">
            <div class="s1-loc__md-field-wrapper s1-U__width--240px">
              <md-field>
                <label>Senha atual</label>
                <md-input
                  v-model="form.Password"
                  id="current-password"
                  name="current-password"
                  type="password"
                  required
                />
              </md-field>
            </div>
            <div class="s1-loc__md-field-wrapper s1-U__width--240px">
              <md-field :disabled="form.Password">
                <label>Nova senha</label>
                <md-input v-model="form.NewPassword" type="password" required/>
              </md-field>
            </div>
            <div class="s1-loc__md-field-wrapper s1-U__width--240px">
              <md-field>
                <label>Confirmar senha</label>
                <md-input v-model="form.ConfirmPassword" type="password" required/>
              </md-field>
            </div>
          </div>
        </div>
      </md-content>
      <md-divider/>
      <md-dialog-actions class="s1-U__pd16 s1-U__text-align--right">
        <md-button
          class="s1-md-bordered s1-U__mg--rt8"
          @click="unsetCancelingShowPasswordDialog()"
        >cancelar</md-button>
        <md-button
          class="md-primary md-raised"
          @click="unsetShowPasswordDialog()"
          :disabled="!form.ConfirmPassword || !form.NewPassword || !form.Password || (form.NewPassword && form.NewPassword && form.NewPassword !== form.ConfirmPassword)"
        >alterar senha</md-button>
      </md-dialog-actions>
    </md-dialog>
    <div class="md-layout md-alignment-center-center s1-U__mg--tp32">
      <div class="s1-U__align-children--center">
        <b>1 - 10</b>
        <span class="s1-U__mg--rt4 s1-U__mg--lt4">de</span>
        <b>167</b>
        <span class="s1-U__mg--lt4">usuários</span>
        <md-button
          class="s1-md-bordered squared md-primary md-icon-button s1-U__mg--lt8 s1-U__mg--rt8"
        >
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
        <md-button class="s1-md-bordered squared md-primary md-icon-button">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </div>
    </div>
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
    actions: Actions,
    showPasswordDialog: false,
    form: {
      FirstName: "Clotilde",
      LastName: "Matilde",
      Username: "cromat",
      Email: "cromatilde@gmail.com",
      Password: "",
      ConfirmPassword: "",
      AccountsProfile1: "Normal",
      AccountsProfile2: "Normal",
      AccountsProfile3: "Normal",
      Account: "Icatu MV"
    }
  }),
  methods: {
    openMezzanine() {
      document.getElementById("s1-mezzanine-wrapper") &&
        document
          .getElementById("s1-mezzanine-wrapper")
          .classList.add("mezzanine-is-active");
    },
    unsetShowPasswordDialog() {
      this.showPasswordDialog = false;
      this.showPasswordFeedback = true;
    },
    unsetCancelingShowPasswordDialog() {
      this.showPasswordDialog = false;
    }
  }
};
</script>


