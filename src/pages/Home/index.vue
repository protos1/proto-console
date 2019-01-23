<template>
  <div class="s1-loc__container">
    <div class="s1-U__mg--bt32">
      <h1 class="md-display-1">Console</h1>
    </div>
    <div>
      <h4 class="s1-U__mg--bt16 s1-U__text-color--dark-2">Atalhos e ações</h4>
      <div class="md-layout md-gutter">
        <div class="md-layout-item s1-U__width--180px" v-for="action in actions" :key="action.id">
          <md-card class="s1-U__full-height s1-U__border-radius--5px-force" md-with-hover>
            <div
              @click="action.goTo()"
              class="s1-U__pd--tp32 s1-U__pd--bt32 s1-U__pd--lt16 s1-U__pd--rt16 s1-U__text-align--center"
            >
              <div class="s1-shortcut-icon s1-U__pd16 s1-U__text-color--primary">
                <div class="s1-shortcut-icon__circle"/>
                <md-icon class="md-size-2x md-primary">
                  <span>{{ action.icon }}</span>
                </md-icon>
              </div>
              <p class="md-body-2 s1-U__mg--tp16 s1-U__text-color--primary">{{ action.name }}</p>
            </div>
          </md-card>
        </div>
      </div>
    </div>

    <md-dialog class="md-elevation-2" :md-active.sync="dialogs.userDialog">
      <div class="s1-U__pd--lt16 s1-U__pd--rt16 s1-U__pd--tp16">
        <p class="md-caption">ATALHO</p>
        <h3>Edição usuário</h3>
      </div>
      <div class="s1-U__pd--lt16 s1-U__pd--rt16 s1-U__pd--tp16">
        <div class="s1-loc__md-field-wrapper s1-U__width--300px">
          <md-field>
            <label for="country-code">Usuário</label>
            <md-select v-model="form.userToEdit" name="user-to-edit" id="user-to-edit">
              <md-option
                v-for="user in users"
                :value="`${user.Id}`"
                v-bind:key="user.Id"
              >{{user.Name}}</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
      <md-dialog-actions class="s1-U__pd16">
        <md-button
          class="md-primary md-raised"
          @click="setActivePage('edit-user')"
        >seguir para edição</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog class="md-elevation-2" :md-active.sync="dialogs.profileToEditDialog">
      <div class="s1-U__pd--lt16 s1-U__pd--rt16 s1-U__pd--tp16">
        <p class="md-caption">ATALHO</p>
        <h3>Edição de perfil</h3>
      </div>
      <div class="s1-U__pd--lt16 s1-U__pd--rt16 s1-U__pd--tp16">
        <div class="s1-loc__md-field-wrapper s1-U__width--300px">
          <md-field>
            <label for="country-code">Conta</label>
            <md-select v-model="form.accountToEdit" name="account-to-edit" id="account-to-edit">
              <md-option
                v-for="account in accounts"
                :value="`${account.name}`"
                v-bind:key="account.id"
              >{{account.name}}</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
      <transition name="fade">
        <div class="s1-U__pd--lt16 s1-U__pd--rt16" v-show="form.accountToEdit">
          <div class="s1-loc__md-field-wrapper s1-U__width--300px">
            <md-field>
              <label for="country-code">Perfil</label>
              <md-select
                v-model="form.appToEdit"
                name="app-to-edit"
                id="app-to-edit"
                :disabled="!form.accountToEdit"
              >
                <md-option
                  v-for="app in apps"
                  :value="`${app.Name}`"
                  v-bind:key="app.Id"
                >{{app.Name}}</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="s1-U__pd--lt16 s1-U__pd--rt16" v-show="form.appToEdit">
          <div class="s1-loc__md-field-wrapper s1-U__width--300px">
            <md-field>
              <label for="country-code">Perfil</label>
              <md-select
                v-model="form.profileToEdit"
                name="profile-to-edit"
                id="profile-to-edit"
                :disabled="!form.accountToEdit"
              >
                <md-option
                  v-for="profile in profiles"
                  :value="`${profile.Id}`"
                  v-bind:key="profile.Id"
                >{{profile.Name}}</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
      </transition>
      <md-dialog-actions class="s1-U__pd16">
        <md-button
          class="md-primary md-raised"
          @click="goToProfile(form.accountToEdit, form.appToEdit)()"
        >seguir para edição</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import PersonData from "../../data/_person.js";
import UserData from "../../data/_users.js";
import ProfileData from "../../data/_profiles.js";
import AccountData from "../../data/_accounts.js";
import AppsData from "../../data/_applications.js";

const goToPage = (
  goTo,
  setActivePage,
  account,
  setActiveAccount,
  app,
  setActiveApp
) => {
  return () => {
    setActivePage(goTo);
    setActiveAccount(account);
    setActiveApp(app);
  };
};

export default {
  name: "Home",
  props: {
    setActivePage: Function,
    setActiveAccount: Function,
    setActiveApp: Function
  },
  data() {
    return {
      person: PersonData,
      users: UserData,
      profiles: ProfileData,
      accounts: AccountData,
      apps: AppsData,
      form: {
        userToEdit: null,
        profileToEdit: null,
        accountToEdit: null,
        appToEdit: null
      },
      dialogs: {
        userDialog: false,
        profileToEditDialog: false
      },
      actions: [
        {
          id: "action-01",
          name: "Cadastrar usuário",
          icon: "person",
          goTo: goToPage(
            "create-user",
            this.$props.setActivePage,
            "Icatu MV",
            this.$props.setActiveAccount,
            "Vendas",
            this.$props.setActiveApp
          )
        },
        {
          id: "action-02",
          name: "Editar usuário",
          icon: "person",
          goTo: () => (this.dialogs.userDialog = true)
        },
        {
          id: "action-03",
          name: "Editar perfil",
          icon: "account_box",
          goTo: () => (this.dialogs.profileToEditDialog = true)
        }
      ]
    };
  },
  methods: {
    goToProfile(accountToEdit, appToEdit) {
      return goToPage(
        "edit-profile",
        this.setActivePage,
        accountToEdit,
        this.setActiveAccount,
        appToEdit,
        this.setActiveApp
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.s1-shortcut-icon {
  position: relative;
  display: inline-block;

  &__circle {
    border-radius: 50%;
    transform: rotate(180deg);
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transition: transform 375ms ease-in-out 0s;
    &::before {
      content: "";
      border: 2px solid;
      opacity: 0.2;
      top: 0;
      left: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%) rotate(0);
      transform-origin: 50% 100%;
      border-bottom: 5px solid;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      opacity: 0.2;
    }
  }

  .md-card:hover &__circle {
    transform: rotate(45deg);
  }
}
</style>

