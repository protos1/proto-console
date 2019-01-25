<template>
  <div id="app">
    <div class="s1-mezzanine-wrapper" id="s1-mezzanine-wrapper">
      <div class="s1-mezzanine" style="z-index: 2">
        <md-card style="border-radius: 0">
          <md-card-header class="s1-U__border--bottom1 s1-U__pd--lt20">
            <md-card-header-text>
              <p class="s1-U__text-color--dark-2 s1-U__text-ellipsis">PERFIL</p>
              <p class="md-title s1-U__text-ellipsis">Administrador</p>
            </md-card-header-text>
            <md-button class="md-icon-button" @click="closeMezzanine()">
              <md-icon>close</md-icon>
            </md-button>
          </md-card-header>
          <div style="height: calc(100vh - 156px)">
            <md-tabs class="md-transparent s1-mezzanine__tab s1-U__full-height">
              <md-tab
                class="s1-U__pd--tp32 s1-U__pd--bt64"
                id="tab-permissions"
                md-label="Permissões"
              >
                <div
                  class="s1-U__align-children--center s1-U__pd--lt16 s1-U__pd--rt16 s1-U__pd--tp8 s1-U__pd--bt8"
                  v-for="action in profile.Actions"
                  v-bind:key="action.id"
                >
                  <md-icon
                    class="s1-U__mg--rt16"
                    :class="action.Active ? 'md-accent' : 's1-U__opacity--54'"
                  >{{ action.Active ? 'check' : 'block'}}</md-icon>
                  <p>{{ action.Id }}</p>
                </div>
              </md-tab>
              <md-tab
                class="s1-U__pd--tp32 s1-U__pd--bt64"
                id="tab-profile-users"
                md-label="Usuários"
              >
                <md-card
                  class="s1-U__pd16 s1-U__mg--bt16-force"
                  v-for="u in profile.Users"
                  v-bind:key="u.id"
                >
                  <div
                    class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__full-width"
                  >
                    <div class="s1-U__align-children--center" style="width: calc(100% - 40px)">
                      <md-avatar
                        class="md-avatar-icon md-primary s1-U__mg--rt8"
                        style="font-size: 20px"
                      >{{u.Abbr}}</md-avatar>
                      <h2 class="md-title s1-U__text-ellipsis s1-U__full-width">{{u.Name}}</h2>
                    </div>
                    <md-menu md-direction="bottom-end">
                      <md-button class="md-dense squared md-icon-button" md-menu-trigger>
                        <md-icon>more_vert</md-icon>
                      </md-button>

                      <md-menu-content>
                        <md-menu-item>Desassociar desse perfil</md-menu-item>
                      </md-menu-content>
                    </md-menu>
                  </div>
                  <div class="s1-U__mg--tp8 s1-U__pd--lt48">
                    <p class="md-caption">PERFIL DE ACESSO</p>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4">{{u.Profile}}</span>
                      <md-button class="md-icon-button s1-U__mg--lt16 md-dense">
                        <md-icon class="s1-loc__md-icon--mini">edit</md-icon>
                      </md-button>
                    </div>
                  </div>
                </md-card>
              </md-tab>
            </md-tabs>
          </div>
          <md-card-actions class="s1-U__pd16 s1-U__border--top1">
            <md-button
              class="md-primary s1-md-bordered"
              @click="setActivePage('edit-profile')"
            >editar</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
    <my-account-panel/>
    <md-app class="s1-md-app">
      <md-app-drawer
        class="md-xsmall-hide md-small-hide"
        :md-active.sync="menuVisible"
        md-persistent="mini"
      >
        <div class="s1-logo__wrapper">
          <img class="s1-logo__img" src="https://s1vm.netlify.com/logo.svg" alt="company logo">
        </div>

        <md-list :md-expand-single="true">
          <md-list-item @click="toggleMenu">
            <md-icon v-if="!menuVisible">menu</md-icon>
            <md-icon v-if="menuVisible">keyboard_arrow_left</md-icon>
            <span class="md-list-item-text">Esconder</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Expandir menu</md-tooltip>
          </md-list-item>

          <md-list-item @click="setActivePage('home')">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Casa</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Casa</md-tooltip>
          </md-list-item>

          <md-list-item @click="setActivePage('all-my-accounts')">
            <md-icon>extension</md-icon>
            <span class="md-list-item-text">Contas</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Contas</md-tooltip>
          </md-list-item>

          <md-list-item @click="setActivePage('users-overview')">
            <md-icon>person</md-icon>
            <span class="md-list-item-text">Todos os usuários</span>
            <md-tooltip md-direction="right" v-show="!menuVisible">Todos os usuários</md-tooltip>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="s1-loc__body-bg">
        <home
          v-if="activePage === 'home'"
          :setActivePage="setActivePage"
          :setActiveAccount="setActiveAccount"
          :setActiveApp="setActiveApp"
        />
        <all-my-accounts
          v-if="activePage === 'all-my-accounts'"
          :setActivePage="setActivePage"
          :setActiveAccount="setActiveAccount"
          :setActiveApp="setActiveApp"
          :setActiveTab="setActiveTab"
        />
        <users-by-account
          v-if="activePage === 'users-by-account'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
          :setTab="setTab"
        />
        <users-overview
          v-if="activePage === 'users-overview'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />

        <create-user
          v-if="activePage === 'create-user'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />

        <create-account
          v-if="activePage === 'create-account'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />

        <edit-user
          v-if="activePage === 'edit-user'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />

        <create-user-to-app
          v-if="activePage === 'create-user-to-app'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />

        <edit-user-to-app
          v-if="activePage === 'edit-user-to-app'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />

        <manage-user-profile
          v-if="activePage === 'manage-user-profile'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />

        <create-profile
          v-if="activePage === 'create-profile'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />

        <edit-profile
          v-if="activePage === 'edit-profile'"
          :setActivePage="setActivePage"
          :activeAccount="activeAccount"
          :activeApp="activeApp"
        />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Home from "./pages/Home/index";
import AllMyAccounts from "./pages/AllMyAccounts/index";
import MyAccountPanel from "./components/MyAccountPanel/index";
import UsersByAccount from "./pages/UsersByAccount/index";
import UsersOverview from "./pages/UsersOverview/index";
import CreateUser from "./pages/CreateUser/index";
import CreateAccount from "./pages/CreateAccount/index";
import EditUser from "./pages/EditUser/index";
import CreateUserToApp from "./pages/CreateUserToApp/index";
import EditUserToApp from "./pages/EditUserToApp/index";
import ManageUserProfile from "./pages/ManageUserProfile/index";
import CreateProfile from "./pages/CreateProfile/index";
import EditProfile from "./pages/EditProfile/index";
import Profiles from "./data/_profiles.js";

export default {
  name: "app",
  data: () => ({
    menuVisible: false,
    activePage: "all-my-accounts",
    activeAccount: "",
    activeApp: "",
    profile: Profiles[0],
    setTab: 0
  }),
  components: {
    Home,
    AllMyAccounts,
    MyAccountPanel,
    UsersByAccount,
    UsersOverview,
    CreateUser,
    CreateAccount,
    EditUser,
    CreateUserToApp,
    EditUserToApp,
    ManageUserProfile,
    CreateProfile,
    EditProfile
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    setActivePage(page) {
      this.activePage = page || "home";
      this.closeMezzanine();
    },
    closeMezzanine() {
      document.getElementById("s1-mezzanine-wrapper") &&
        document
          .getElementById("s1-mezzanine-wrapper")
          .classList.remove("mezzanine-is-active");
    },
    setActiveAccount(name) {
      this.activeAccount = name;
    },
    setActiveApp(name) {
      this.activeApp = name;
    },
    setActiveTab(index) {
      this.setTab = index;
    }
  }
};
</script>

<style lang="scss">
.s1-mezzanine__tab {
  [class].md-tabs-content {
    overflow-x: hidden !important;
    height: 100% !important;
  }
  .md-tabs-navigation {
    flex-shrink: 0;
  }
  .md-tab {
    height: 100%;
  }
}
.s1-loc__my-account-panel {
  position: fixed;
  right: 24px;
  top: 16px;
  z-index: 2;

  @media (min-width: 600.1px) {
    & + .s1-md-app .md-app-container .md-app-content {
      padding-right: 86px;
    }
  }
}
.mezzanine-is-active {
  & ~ .s1-md-app {
    width: calc(100% - 430px);
  }

  & ~ .s1-md-app .md-app-container .md-app-content {
    padding-right: 16px;
  }
}
.s1-loc__hidden-available {
  min-width: 0 !important;
  width: 0 !important;
  height: 0 !important;
}
.md-app-content.md-content.s1-loc__body-bg,
.s1-loc__body-bg {
  background-color: #eceff1;
}
.s1-loc__progress-spinner-wrapper {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.s1-invisible-badge {
  .md-badge {
    opacity: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms !important;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.s1-loc__md-field-wrapper {
  padding: 1px 0;
  margin-top: -1px;
}
.s1-loc__container {
  margin: 0 auto;
  width: 87%;
  max-width: 100%;

  @media (max-width: 960px) {
    width: 100%;
  }
}
.s1-loc__width--900px {
  width: 900px;
  max-width: 100%;
  &.md-layout-item {
    max-width: 900px;
  }
}

.s1-mezzanine-wrapper.mezzanine-is-active + .s1-loc__my-account-panel {
  z-index: -1;
}
</style>
