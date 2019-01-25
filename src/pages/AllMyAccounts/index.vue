<template>
  <div class="s1-loc__container">
    <header>
      <div class="md-layout md-alignment-center-space-between s1-U__full-width s1-U__mg--bt32">
        <div class="md-layout-item">
          <h1 class="md-display-1">Contas</h1>
        </div>
        <div class="md-layout-item s1-U__text-align--right">
          <md-button
            class="md-raised md-primary"
            @click="setActivePage('create-account')"
          >cadastrar conta</md-button>
        </div>
      </div>
      <div class="s1-U__align-children--center s1-U__justify-content--flex-end s1-U__pd--bt16">
        <!-- <md-button class="s1-md-bordered">
          <div class="s1-U__align-children--center s1-U__pd--rt8">
            <md-icon class="s1-U__mg--rt8">filter_list</md-icon>
            <span>Filtros</span>
          </div>
        </md-button>-->
        <div class="s1-loc__md-field-wrapper s1-U__width--240px">
          <md-field class="s1-U__mg0">
            <md-input class="s1-U__full-width" v-model="search" placeholder="Buscar conta"/>
            <md-button
              type="submit"
              class="s1-U__mg0 md-icon-button md-dense squared"
              style=" margin-top: -2px; margin-right: 2px;"
            >
              <md-icon>search</md-icon>
            </md-button>
          </md-field>
        </div>
      </div>
    </header>
    <section>
      <div class="s1-loc__account s1-U__mg--bt32">
        <div class="s1-U__align-children--center s1-U__pd--tp16 s1-U__pd--bt16">
          <h2 class="s1-U__flex-shrink-0 s1-U__text-ellipsis s1-U__pd--rt16 s1-U__fw--300">Icatu MV</h2>
          <md-menu md-direction="bottom-end">
            <md-button
              md-menu-trigger
              class="s1-md-bordered squared s1-U__mg--rt16 s1-U__flex-shrink-0 md-icon-button"
            >
              <md-icon>settings</md-icon>
            </md-button>
            <md-menu-content>
              <md-menu-item @click="setActivePage('edit-account')">Editar conta</md-menu-item>
              <md-divider class="s1-U__mg--tp16 s1-U__mg--bt16"/>
              <md-menu-item @click="showApplicationsDialog = true">Aplicações</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-divider class="s1-U__full-width"></md-divider>
        </div>
        <div class="s1-loc__applications-wrapper">
          <div class="md-layout s1-md-layout--mini md-gutter">
            <div class="md-layout-item s1-U__width--210px">
              <md-card>
                <div class="s1-U__text-align--center s1-U__pd--tp32 s1-U__pd--bt32">
                  <img
                    src="https://s1-cdn-brazilsouth.azureedge.net/sales.svg"
                    style="width: 64px; height: 64px"
                    alt
                  >
                </div>
                <md-divider></md-divider>
                <div
                  class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__pd--lt16 s1-U__pd--rt16 s1-U__pd--tp8 s1-U__pd--bt8"
                >
                  <p class="md-body-2">Vendas</p>
                  <md-menu md-direction="bottom-end">
                    <md-button
                      md-menu-trigger
                      class="md-icon-button s1-md-bordered squared md-dense"
                    >
                      <md-icon>more_vert</md-icon>
                    </md-button>
                    <md-menu-content>
                      <md-menu-item @click="setUser('Icatu MV', 'Vendas', 0)">Usuários</md-menu-item>
                      <md-menu-item @click="setUser('Icatu MV', 'Vendas', 1)">Perfis</md-menu-item>
                    </md-menu-content>
                  </md-menu>
                </div>
              </md-card>
            </div>

            <div class="md-layout-item s1-U__width--210px">
              <md-card>
                <div class="s1-U__text-align--center s1-U__pd--tp32 s1-U__pd--bt32">
                  <img
                    src="https://s1-cdn-brazilsouth.azureedge.net/analytics.svg"
                    style="width: 64px; height: 64px"
                    alt
                  >
                </div>
                <md-divider></md-divider>
                <div
                  class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__pd--lt16 s1-U__pd--rt16 s1-U__pd--tp8 s1-U__pd--bt8"
                >
                  <p class="md-body-2">Analytics</p>
                  <md-menu md-direction="bottom-end">
                    <md-button
                      md-menu-trigger
                      class="md-icon-button s1-md-bordered squared md-dense"
                    >
                      <md-icon>more_vert</md-icon>
                    </md-button>
                    <md-menu-content>
                      <md-menu-item @click="setUser('Icatu MV', 'Analytics', 0)">Usuários</md-menu-item>
                      <md-menu-item @click="setUser('Icatu MV', 'Analytics', 1)">Perfis</md-menu-item>
                    </md-menu-content>
                  </md-menu>
                </div>
              </md-card>
            </div>
            <!-- <div class="md-layout-item s1-U__width--210px">
              <md-button class="s1-U__full-height s1-U__full-width s1-U__border-dashed--2">
                <md-icon class="md-size-3x">add</md-icon>
              </md-button>
              <md-tooltip md-direction="top">adicionar aplicação</md-tooltip>
            </div>-->
          </div>
        </div>
      </div>
      <div class="s1-loc__account s1-U__mg--bt32">
        <div
          class="s1-U__align-children--center s1-U__pd--tp16 s1-U__pd--bt16"
          style="z-index: 2; position: relative"
        >
          <h2
            class="s1-U__flex-shrink-0 s1-U__text-ellipsis s1-U__pd--rt16 s1-U__fw--300"
          >Clotilde Matilde CCVV</h2>
          <md-menu md-direction="bottom-end">
            <md-button
              md-menu-trigger
              class="s1-md-bordered squared s1-U__mg--rt16 s1-U__flex-shrink-0 md-icon-button"
            >
              <md-icon>settings</md-icon>
            </md-button>
            <md-menu-content>
              <md-menu-item @click="setActivePage('edit-account')">Editar conta</md-menu-item>
              <md-divider class="s1-U__mg--tp16 s1-U__mg--bt16"/>
              <md-menu-item @click="showApplicationsDialog = true">Aplicações</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-divider class="s1-U__full-width"></md-divider>
        </div>
        <div class="s1-loc__applications-wrapper">
          <div class="md-layout s1-md-layout--mini md-gutter">
            <div class="md-layout-item s1-U__width--210px">
              <md-card>
                <div class="s1-U__text-align--center s1-U__pd--tp32 s1-U__pd--bt32">
                  <img
                    src="https://s1-cdn-brazilsouth.azureedge.net/sales.svg"
                    style="width: 64px; height: 64px"
                    alt
                  >
                </div>
                <md-divider></md-divider>
                <div
                  class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__pd--lt16 s1-U__pd--rt16 s1-U__pd--tp8 s1-U__pd--bt8"
                >
                  <p class="md-body-2">Vendas</p>
                  <md-menu md-direction="bottom-end">
                    <md-button
                      md-menu-trigger
                      class="md-icon-button s1-md-bordered squared md-dense"
                    >
                      <md-icon>more_vert</md-icon>
                    </md-button>
                    <md-menu-content>
                      <md-menu-item @click="setUser('Clotilde Matilde CCVV', 'Vendas', 0)">Usuários</md-menu-item>
                      <md-menu-item @click="setUser('Clotilde Matilde CCVV', 'Vendas', 1)">Perfis</md-menu-item>
                    </md-menu-content>
                  </md-menu>
                </div>
              </md-card>
            </div>

            <!-- <div class="md-layout-item s1-U__width--210px">
              <md-button class="s1-U__full-height s1-U__full-width s1-U__border-dashed--2">
                <md-icon class="md-size-3x">add</md-icon>
              </md-button>
              <md-tooltip md-direction="top">adicionar aplicação</md-tooltip>
            </div>-->
          </div>
        </div>
      </div>
    </section>

    <md-dialog :md-active.sync="showApplicationsDialog">
      <md-dialog-title>
        <div class="s1-U__align-children--center s1-U__justify-content--space-between">
          <div>
            <p class="md-caption s1-U__text-uppercase">Icatu MV</p>
            <p>Aplicações</p>
          </div>
          <md-button class="md-icon-button s1-U__mg--lt32" @click="showApplicationsDialog=false">
            <md-icon>close</md-icon>
          </md-button>
        </div>
      </md-dialog-title>
      <md-divider/>
      <md-content class="md-scrollbar s1-U__pd0-force" style="overflow: auto">
        <div class="s1-U__pd--bt16 s1-U__pd--tp16">
          <div v-for="application in applications" v-bind:key="application.Id">
            <div
              class="s1-U__pd--lt20 s1-U__pd--rt20 s1-U__pd--bt8 s1-U__pd--tp8"
              v-if="application.Key1 !== 'customerServiceAPI'"
            >
              <div class="s1-U__align-children--center s1-U__justify-content--space-between">
                <div class="s1-U__align-children--center">
                  <img class="s1-U__mg--rt16" style="width: 48px;" :src="application.IconUri" alt>
                  <span class="s1-U__pd--rt16 s1-U__text-ellipsis">{{application.Name}}</span>
                </div>
                <md-switch
                  class="md-primary"
                  :class="(application.Key2Req) && 's1-U__opacity--40'"
                  v-model="apps[application.Key2]"
                  :disabled="application.Key2Req"
                ></md-switch>
              </div>
            </div>
          </div>
          <h4
            class="s1-U__mg--tp32 s1-U__mg--bt8 s1-U__pd--lt20 s1-U__pd--rt20 s1-U__text-color--dark-2"
          >Aplicações não disponíveis</h4>
          <div v-for="application in applications" v-bind:key="`${application.Id}-2`">
            <div
              class="s1-U__pd--lt20 s1-U__pd--rt20 s1-U__pd--bt8 s1-U__align-children--center s1-U__justify-content--space-between"
              v-if="application.Key1 ===  'customerServiceAPI'"
            >
              <div class="s1-U__align-children--center">
                <img
                  class="s1-U__mg--rt16"
                  style="width: 48px;filter: grayscale(1);"
                  :src="application.IconUri"
                  alt
                >
                <span class="s1-U__pd--rt16 s1-U__text-ellipsis">{{application.Name}}</span>
              </div>
            </div>
          </div>
        </div>
      </md-content>
      <md-divider/>

      <md-dialog-actions class="s1-U__pd20">
        <md-button class="md-primary md-raised" @click="showApplicationsDialog = false">Salvar</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import Applications from "../../data/_applicationsSettings.js";

export default {
  name: "AllMyAccounts",
  props: {
    setActivePage: Function,
    setActiveAccount: Function,
    setActiveApp: Function,
    setActiveTab: Function
  },
  data: () => ({
    search: "",
    showApplicationsDialog: false,
    applications: Applications,
    apps: {
      accountsAPI: false,
      consoleAPI: false,
      salesAPI: false,
      analyticsAPI: false,
      customerServiceAPI: false,
      accountsWEB: true,
      consoleWEB: true,
      salesWEB: false,
      analyticsWEB: true,
      customerServiceWEB: false
    }
  }),
  methods: {
    setUser(account, app, index) {
      this.setActivePage("users-by-account");
      this.setActiveAccount(account);
      this.setActiveApp(app);
      this.setActiveTab(index);
    }
  }
};
</script>

