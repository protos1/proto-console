<template>
  <div class="s1-loc__container">
    <header class="s1-U__mg--bt32">
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
      <div class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__pd--bt16">
        <md-button class="s1-md-bordered">
          <div class="s1-U__align-children--center s1-U__pd--rt8">
            <md-icon class="s1-U__mg--rt8">filter_list</md-icon>
            <span>Filtros</span>
          </div>
        </md-button>
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
          <md-button
            class="s1-md-bordered squared s1-U__mg--rt16 s1-U__flex-shrink-0 md-icon-button"
          >
            <md-icon>settings</md-icon>
            <md-tooltip class="s1-U__mg--lt16" md-direction="right">Dados da conta</md-tooltip>
          </md-button>
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
                      <md-menu-item @click="setUser('Icatu MV', 'Vendas')">Usuários</md-menu-item>
                      <md-menu-item>Perfis</md-menu-item>
                      <md-menu-item>Configurações</md-menu-item>
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
                      <md-menu-item @click="setUser('Icatu MV', 'Analytics')">Usuários</md-menu-item>
                      <md-menu-item>Perfis</md-menu-item>
                      <md-menu-item>Configurações</md-menu-item>
                    </md-menu-content>
                  </md-menu>
                </div>
              </md-card>
            </div>
            <div class="md-layout-item s1-U__width--210px">
              <md-button class="s1-U__full-height s1-U__full-width s1-U__border-dashed--2">
                <md-icon class="md-size-3x">add</md-icon>
              </md-button>
              <md-tooltip md-direction="top">adicionar aplicação</md-tooltip>
            </div>
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
          <md-button
            class="s1-md-bordered squared s1-U__mg--rt16 s1-U__flex-shrink-0 md-icon-button"
          >
            <md-icon>settings</md-icon>
            <md-tooltip class="s1-U__mg--lt16" md-direction="right">Dados da conta</md-tooltip>
          </md-button>
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
                      <md-menu-item @click="setUser('Clotilde Matilde CCVV', 'Vendas')">Usuários</md-menu-item>
                      <md-menu-item>Perfis</md-menu-item>
                      <md-menu-item>Configurações</md-menu-item>
                    </md-menu-content>
                  </md-menu>
                </div>
              </md-card>
            </div>

            <div class="md-layout-item s1-U__width--210px">
              <md-button class="s1-U__full-height s1-U__full-width s1-U__border-dashed--2">
                <md-icon class="md-size-3x">add</md-icon>
              </md-button>
              <md-tooltip md-direction="top">adicionar aplicação</md-tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AllMyAccounts",
  props: {
    setActivePage: Function,
    setActiveAccount: Function,
    setActiveApp: Function
  },
  data: () => ({
    search: ""
  }),
  methods: {
    setUser(account, app) {
      this.setActivePage("users-by-account");
      this.setActiveAccount(account);
      this.setActiveApp(app);
    }
  }
};
</script>

