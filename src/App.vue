<template>
  <div id="app">
    <div class="s1-mezzanine-wrapper" id="s1-mezzanine-wrapper">
      <div class="s1-mezzanine">
        <md-card style="border-radius: 0">
          <md-card-header class="s1-U__border--bottom1 s1-U__pd--lt20">
            <md-card-header-text>
              <p class="md-subheading s1-U__text-color--dark-2 s1-U__text-ellipsis">RENAN Z LTDA</p>
              <p class="md-title s1-U__text-ellipsis">RZ Produções</p>
            </md-card-header-text>
            <md-button class="md-icon-button" @click="closeMezzanine()">
              <md-icon>close</md-icon>
            </md-button>
          </md-card-header>
          <md-card-content>
            <md-content class="md-scrollbar">
              <section>
                <div class="md-layout s1-U__pd--lt16">
                  <div class="md-layout-item md-size-60">
                    <div class="s1-logo__wrapper md-elevation-1">
                      <img class="s1-logo__img" src="rz-logo.png" alt>
                    </div>
                  </div>
                </div>
              </section>
              <section class="s1-U__mg--tp24">
                <div class="s1-U__pd--lt16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">NOME</p>
                  <p class="s1-U__text-ellipsis">Renan Z Ltda</p>
                </div>
                <div class="s1-U__pd--lt16 s1-U__mg--tp16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">NOME FANTASIA</p>
                  <p class="s1-U__text-ellipsis">RZ Produções</p>
                </div>
                <div class="s1-U__pd--lt16 s1-U__mg--tp16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">DOC CNPJ</p>
                  <p class="s1-U__text-ellipsis">2345 6782 3456 78</p>
                </div>
              </section>
              <md-divider class="s1-U__mg--tp32 s1-U__mg--bt32"/>
              <section>
                <h3 class="md-title s1-U__mg--bt16 s1-U__text-color--primary">Localização</h3>
                <div class="s1-U__pd--lt16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">PAÍS</p>
                  <p class="s1-U__text-ellipsis">Brasil</p>
                </div>
                <div class="s1-U__pd--lt16 s1-U__mg--tp16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">IDIOMA</p>
                  <p class="s1-U__text-ellipsis">Português brasileiro</p>
                </div>
              </section>
              <md-divider class="s1-U__mg--tp32 s1-U__mg--bt32"/>
              <section>
                <h3 class="md-title s1-U__mg--bt16 s1-U__text-color--primary">Contato</h3>
                <div class="s1-U__pd--lt16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">TELEFONE 1</p>
                  <p class="s1-U__text-ellipsis">31 9 8848 0863</p>
                </div>
                <div class="s1-U__pd--lt16 s1-U__mg--tp16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">TELEFONE 2</p>
                  <p class="s1-U__text-ellipsis">31 9 9925 5212</p>
                </div>
                <div class="s1-U__pd--lt16 s1-U__mg--tp16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">E-MAIL</p>
                  <p class="s1-U__text-ellipsis">contato@rzp.com.br</p>
                </div>
              </section>
              <md-divider class="s1-U__mg--tp32 s1-U__mg--bt32"/>
              <section>
                <h3 class="md-title s1-U__mg--bt16 s1-U__text-color--primary">Sistema</h3>
                <div class="s1-U__pd--lt16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">DNS</p>
                  <p class="s1-U__text-ellipsis s1-U__align-children--center">
                    <span class="s1-U__mg--rt16">https://renanzozimo.github.io</span>
                    <a href="https://renanzozimo.github.io" target="_blank">
                      <md-icon>link</md-icon>
                    </a>
                  </p>
                </div>
                <div class="s1-U__pd--lt16 s1-U__mg--tp16">
                  <p class="md-caption s1-U__text-color--dark-2 s1-U__text-ellipsis">DOMÍNIO</p>
                  <p class="s1-U__text-ellipsis">@rzprods</p>
                </div>
                <div class="s1-U__pd--lt16 s1-U__mg--tp24 s1-U__align-children--center">
                  <md-icon class="s1-U__mg--rt16">check</md-icon>
                  <p class="s1-U__text-ellipsis">Permite recuperação de senha</p>
                </div>
                <div class="s1-U__pd--lt16 s1-U__mg--tp16 s1-U__align-children--center">
                  <md-icon class="s1-U__mg--rt16">close</md-icon>
                  <p class="s1-U__text-ellipsis">Não permite autenticação em duas vias</p>
                </div>
              </section>
              <md-divider class="s1-U__mg--tp32 s1-U__mg--bt32"/>
              <section>
                <h3 class="md-title s1-U__mg--bt16 s1-U__text-color--primary">Usuário proprietário</h3>
                <div class="s1-U__pd--lt16">
                  <p class="md-title s1-U__text-ellipsis">Admin Zózimo</p>
                  <p class="s1-U__text-ellipsis">admin@rzprods</p>
                  <p class="s1-U__text-ellipsis">contato@rzp.com.br</p>
                </div>
              </section>
            </md-content>
          </md-card-content>
          <md-card-actions class="s1-U__border--top1">
            <div
              class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__full-width"
            >
              <md-menu md-direction="top-start">
                <md-button
                  class="md-icon-button md-primary s1-md-bordered md-dense squared"
                  md-menu-trigger
                >
                  <md-icon>more_vert</md-icon>
                </md-button>

                <md-menu-content>
                  <md-menu-item
                    @click="toggleApplicationsDialog(company.fantasyName)"
                  >Gerenciar aplicações</md-menu-item>
                  <md-menu-item @click="showOwnerOptions = true">Gerenciar usuário proprietário</md-menu-item>
                  <md-divider class="s1-U__mg--tp8 s1-U__mg--bt8"/>
                  <md-menu-item>
                    <span>Contas</span>
                    <md-icon>open_in_new</md-icon>
                  </md-menu-item>
                  <md-menu-item>
                    <span>Usuários</span>
                    <md-icon>open_in_new</md-icon>
                  </md-menu-item>
                </md-menu-content>
              </md-menu>
              <md-button
                class="s1-md-bordered md-primary s1-U__mg--rt8"
                @click="setActivePage('edit-company')"
              >Editar dados</md-button>
            </div>
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
        </md-list>
      </md-app-drawer>

      <md-app-content class="s1-loc__body-bg">
        <home v-if="activePage === 'home'" :setActivePage="setActivePage"/>
        <all-my-accounts
          v-if="activePage === 'all-my-accounts'"
          :setActivePage="setActivePage"
          :setActiveAccount="setActiveAccount"
          :setActiveApp="setActiveApp"
        />
        <users-by-account
          v-if="activePage === 'users-by-account'"
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

export default {
  name: "app",
  data: () => ({
    menuVisible: false,
    activePage: "all-my-accounts",
    activeAccount: "",
    activeApp: ""
  }),
  components: {
    Home,
    AllMyAccounts,
    MyAccountPanel,
    UsersByAccount
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
    }
  }
};
</script>

<style lang="scss">
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
div.md-field {
  margin-bottom: 16px;
}
</style>




