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
        <span>{{activeAccount}} / {{activeApp}}</span>
      </h1>
    </header>
    <section>
      <md-tabs class="md-transparent">
        <md-tab class="s1-U__pd--tp32 s1-U__pd--bt64" id="tab-users" md-label="Usuários">
          <div
            class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__mg--bt16"
          >
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
            <md-button class="md-raised md-primary" @click="setActivePage('create-user-to-app')">
              <div class="s1-U__align-children--center s1-U__pd--rt8">
                <md-icon class="s1-U__mg--rt4">add</md-icon>
                <span>usuário</span>
              </div>
            </md-button>
          </div>
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

                  <md-menu md-direction="bottom-end">
                    <md-button
                      class="md-dense squared md-icon-button s1-U__flex-shrink-0"
                      md-menu-trigger
                    >
                      <md-icon>more_vert</md-icon>
                    </md-button>

                    <md-menu-content>
                      <md-menu-item
                        @click="setActivePage('edit-user-to-app')"
                      >Editar dados do usuário</md-menu-item>
                      <md-menu-item @click="showPasswordDialog = true">Alterar senha</md-menu-item>
                      <md-divider class="s1-U__mg--tp8 s1-U__mg--bt8"></md-divider>
                      <md-menu-item
                        @click="showEditUserProfileShortcutDialog()"
                      >Editar perfil de acesso</md-menu-item>
                    </md-menu-content>
                  </md-menu>
                </div>
                <div class="s1-U__mg--tp8 s1-U__pd--lt48">
                  <p class="md-caption">PERFIL DE ACESSO</p>
                  <div class="s1-U__align-children--center">
                    <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
                    <span class="md-body-2 s1-U__mg--lt4">{{user.Profile}}</span>
                    <md-button
                      class="md-icon-button s1-U__mg--lt16 md-dense"
                      @click="showEditUserProfileShortcutDialog()"
                    >
                      <md-icon class="s1-loc__md-icon--mini">edit</md-icon>
                    </md-button>
                  </div>
                </div>
              </md-card>
            </div>
          </div>
        </md-tab>
        <md-tab class="s1-U__pd--tp32 s1-U__pd--bt64" id="tab-profiles" md-label="Perfis">
          <div
            class="s1-U__pd--tp16 s1-U__pd--bt16 s1-U__align-children--center s1-U__justify-content--space-between"
          >
            <div class="s1-loc__md-field-wrapper s1-U__width--180px">
              <md-field class="s1-U__mg0">
                <md-select v-model="profileVisualization" name="pv-code" id="pv-code">
                  <md-option
                    :value="pv.Id"
                    v-for="pv in [{ Id: 'actionsXprofiles', Name: 'Ações x Perfis'}, { Id: 'profileList', Name: 'Lista de perfis'}]"
                    v-bind:key="pv.Id"
                  >{{pv.Name}}</md-option>
                </md-select>
              </md-field>
            </div>
            <md-button class="md-raised md-primary" @click="setActivePage('create-profile')">
              <div class="s1-U__align-children--center s1-U__pd--rt8">
                <md-icon class="s1-U__mg--rt4">add</md-icon>
                <span>perfil</span>
              </div>
            </md-button>
          </div>
          <md-card
            class="md-table md-theme-default"
            v-show="profileVisualization == 'actionsXprofiles'"
          >
            <div class="s1-U__text-align--right s1-U__pd16">
              <div
                class="s1-loc__md-field-wrapper s1-U__width--240px"
                style="display: inline-block"
              >
                <md-field class="s1-U__mg0">
                  <md-input
                    class="s1-U__full-width"
                    v-model="search"
                    placeholder="Buscar ações ou perfis"
                  />
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
            <table class="s1-table-calc">
              <thead>
                <tr>
                  <th class="md-table-head">
                    <div class="md-table-head-container">
                      <div class="md-table-head-label">Ações</div>
                    </div>
                  </th>
                  <th class="md-table-head">
                    <div
                      class="md-table-head-container s1-U__height-auto"
                      style="overflow: visible"
                    >
                      <div
                        class="md-table-head-label s1-U__height-auto s1-U__pd0"
                        style="overflow: visible"
                      >
                        <md-badge
                          :md-content="`+${this.prevCountProfilePage}`"
                          md-dense
                          md-position="bottom"
                          :class="this.prevCountProfilePage <= 0 && 's1-invisible-badge'"
                        >
                          <md-button
                            class="s1-md-bordered squared md-icon-button md-dense"
                            @click="setPrevPage()"
                            :disabled="prevCountProfilePage <= 0"
                          >
                            <md-icon>keyboard_arrow_left</md-icon>
                          </md-button>
                        </md-badge>
                      </div>
                    </div>
                  </th>
                  <th
                    class="md-table-head"
                    v-for="profile in profiles"
                    v-bind:key="profile.Id + '-th'"
                  >
                    <div class="md-table-head-container">
                      <div class="md-table-head-label">
                        <p class="s1-U__text-ellipsis" style="max-width: 80px">{{profile.Name}}</p>
                      </div>
                    </div>
                  </th>
                  <th class="md-table-head">
                    <div
                      class="md-table-head-container s1-U__height-auto"
                      style="overflow: visible"
                    >
                      <div
                        class="md-table-head-label s1-U__height-auto s1-U__pd0"
                        style="overflow: visible"
                      >
                        <md-badge
                          :md-content="`+${this.nextCountProfilePage}`"
                          md-dense
                          md-position="bottom"
                          :class="this.nextCountProfilePage <= 0 && 's1-invisible-badge'"
                        >
                          <md-button
                            class="s1-md-bordered squared md-icon-button md-dense"
                            @click="setNextPage()"
                            :disabled="nextCountProfilePage <= 0"
                          >
                            <md-icon>keyboard_arrow_right</md-icon>
                          </md-button>
                        </md-badge>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="md-table-row" v-for="action in actions" v-bind:key="action.id">
                  <td class="md-table-cell">
                    <div class="md-table-cell-container s1-U__pd--rt0">
                      <p style="max-width: 20vw; word-break: break-word;">{{action.Name}}</p>
                    </div>
                  </td>
                  <td class="md-table-cell"></td>
                  <td
                    class="md-table-cell"
                    v-for="profile in profiles"
                    v-bind:key="profile.Id + '-td'"
                  >
                    <div class="md-table-cell-container">
                      <md-icon
                        :class="profile.Actions[action.Name].Active ? 'md-accent' : 's1-U__opacity--54'"
                      >{{profile.Actions[action.Name].Active ? 'check' : 'block'}}</md-icon>
                    </div>
                  </td>
                  <td class="md-table-cell"></td>
                </tr>
              </tbody>
            </table>
          </md-card>
          <div
            v-show="profileVisualization == 'profileList'"
            class="md-layout md-gutter s1-md-layout--mini"
          >
            <div
              class="md-layout-item md-xsmall-size-100 md-small-size-100 md-medium-size-50 md-large-size-33 md-xlarge-size-25 s1-U__mg--bt16"
              v-for="profile in allProfiles"
              v-bind:key="profile.Id + '-zuasdajsk'"
            >
              <md-card>
                <div class="s1-U__pd16">
                  <div class="s1-U__align-children--center s1-U__justify-content--space-between">
                    <div class="s1-U__align-children--center">
                      <md-icon class="s1-U__mg--rt8 md-primary">account_box</md-icon>
                      <p class="md-subheading">{{profile.Name}}</p>
                    </div>
                    <md-menu md-direction="bottom-end">
                      <md-button class="md-dense squared md-icon-button" md-menu-trigger>
                        <md-icon>more_vert</md-icon>
                      </md-button>

                      <md-menu-content>
                        <md-menu-item>Editar</md-menu-item>
                        <md-menu-item @click="openMezzanine()">Ver detalhes</md-menu-item>
                      </md-menu-content>
                    </md-menu>
                  </div>
                  <div class="s1-U__pd--lt32">
                    <p
                      class="md-caption"
                      v-if="profile.Users.length > 0"
                    >{{profile.Users.length}} Usuários</p>
                    <p class="md-caption" v-else>Nenhum usuário</p>
                  </div>
                </div>
              </md-card>
            </div>
          </div>
        </md-tab>
        <md-tab class="s1-U__pd--tp32 s1-U__pd--bt64" id="tab-settings" md-label="Configurações"></md-tab>
      </md-tabs>
      <md-dialog class="md-elevation-2" :md-active.sync="editUserProfileShortcutDialog">
        <div class="s1-U__pd16">
          <div class="s1-U__align-children--center">
            <md-icon class="md-accent s1-U__mg--rt8 s1-U__flex-shrink-0">account_box</md-icon>
            <div class="md-title s1-U__full-width">Renan Zózimo</div>
            <md-button
              class="md-icon-button s1-U__flex-shrink-0"
              @click="closeEditUserProfileShortcutDialog()"
            >
              <md-icon>close</md-icon>
            </md-button>
          </div>
          <p class="md-caption s1-U__mg--lt32 s1-U__full-width">Administrador</p>
        </div>
        <md-divider/>
        <md-content class="md-scrollbar s1-U__pd16" style="overflow: auto">
          <div
            class="s1-U__pd--tp8 s1-U__pd--bt8 s1-U__pd--lt32"
            v-for="profile in allProfiles"
            :key="profile.Id"
          >
            <md-radio
              class="s1-U__mg0"
              v-model="selectedProfile"
              :value="profile.Id"
            >{{profile.Name}}</md-radio>
          </div>
        </md-content>
        <md-divider/>
        <md-dialog-actions class="s1-U__pd16 s1-U__pd--tp0 s1-U__text-align--right">
          <md-button class="md-raised md-primary">salvar</md-button>
        </md-dialog-actions>
      </md-dialog>
    </section>
    <md-dialog :md-active.sync="showPasswordDialog">
      <md-content>
        <h2 class="s1-U__fw--300 s1-U__mg--bt32 s1-U__mg--tp16">Alteração de senha</h2>
        <p class="s1-U__mg--bt16 s1-U__width--300px">Nova senha para usuário</p>
        <p class="md-subheading s1-U__mg--bt16">
          <b>cromat</b>
          <b class="s1-U__text-color--dark-2">@empresademais</b>
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
      </md-content>
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
    profiles: Profiles,
    allProfiles: Profiles,
    actions: Actions,
    currentProfilePage: 0,
    prevCountProfilePage: 0,
    nextCountProfilePage: 0,
    profileVisualization: "profileList",
    editUserProfileShortcutDialog: false,
    selectedProfile: "profile-1",
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
  mounted: function() {
    this.$nextTick(function() {
      this.newColumns(0);
    });
  },
  methods: {
    calcTable() {
      const n = Math.floor(
        document.querySelector(".s1-table-calc").offsetWidth /
          (135 + 48 + 48 + 20)
      );
      return n;
    },
    newColumns(page) {
      const calc = this.calcTable();
      const newProfiles = Profiles.slice(page * calc, page * calc + calc);

      this.currentProfilePage = page;
      this.prevCountProfilePage = page > 0 ? page * calc : 0;
      this.nextCountProfilePage = Profiles.length - (page + 1) * calc;

      this.profiles = newProfiles;
    },
    setNextPage() {
      this.newColumns(this.currentProfilePage + 1);
    },
    setPrevPage() {
      this.newColumns(this.currentProfilePage - 1);
    },
    openMezzanine() {
      document.getElementById("s1-mezzanine-wrapper") &&
        document
          .getElementById("s1-mezzanine-wrapper")
          .classList.add("mezzanine-is-active");
    },
    showEditUserProfileShortcutDialog() {
      this.editUserProfileShortcutDialog = true;
    },
    closeEditUserProfileShortcutDialog() {
      this.editUserProfileShortcutDialog = false;
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


