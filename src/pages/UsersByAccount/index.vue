<template>
  <div class="s1-loc__container">
    <header class="s1-U__mg--bt32">
      <h1 class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
        <md-button
          class="md-dense md-icon-button s1-U__mg--rt16"
          @click="setActivePage('all-my-accounts')"
        >
          <md-icon>arrow_back</md-icon>
        </md-button>
        <span>{{activeAccount}} + {{activeApp}}</span>
      </h1>
    </header>
    <section>
      <md-tabs class="md-transparent" md-alignment="right">
        <md-tab class="s1-U__pd--tp32 s1-U__pd--bt64" id="tab-users" md-label="Usuários associados">
          <div>
            <div class="md-layout md-gutter s1-md-layout--mini">
              <div
                class="md-layout-item md-xsmall-size-100 md-small-size-100 md-medium-size-50 md-large-size-33 md-xlarge-size-25 s1-U__mg--bt16"
                v-for="user in users"
                v-bind:key="user.id"
              >
                <md-card class="s1-U__pd16">
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
                    <md-button class="md-icon-button s1-U__flex-shrink-0">
                      <md-icon>more_vert</md-icon>
                    </md-button>
                  </div>
                  <div class="s1-U__mg--tp8 s1-U__pd--lt48">
                    <p class="md-caption">PERFIL DE ACESSO</p>
                    <div class="s1-U__align-children--center">
                      <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                      <span class="md-body-2 s1-U__mg--lt4">{{user.Profile}}</span>
                      <md-button class="md-icon-button s1-U__mg--lt16 md-dense">
                        <md-icon class="s1-loc__md-icon--mini">edit</md-icon>
                      </md-button>
                    </div>
                  </div>
                </md-card>
              </div>
            </div>
          </div>
        </md-tab>
        <md-tab class="s1-U__pd--tp32 s1-U__pd--bt64" id="tab-profiles" md-label="Perfis"></md-tab>
        <md-tab class="s1-U__pd--tp32 s1-U__pd--bt64" id="tab-settings" md-label="Configurações"></md-tab>
      </md-tabs>
    </section>
  </div>
</template>

<script>
import users from "../../data/_users.js";

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
    users: users
  })
};
</script>

<style lang="scss">
.md-icon.s1-loc__md-icon--mini {
  width: 18px;
  min-width: 18px;
  height: 18px;
  font-size: 18px !important;
}
.md-tab {
  min-height: 50vh;
}

.md-content.md-tabs-content {
  padding: 0 !important;
}
</style>


