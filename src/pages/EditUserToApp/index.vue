<template>
  <div class="s1-loc__container">
    <div class="s1-U__mg--bt32">
      <h1 class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
        <md-button
          class="md-dense md-icon-button s1-U__mg--rt16"
          @click="setActivePage('users-by-account')"
        >
          <md-icon>arrow_back</md-icon>
        </md-button>
        <span>Editando usuário</span>
      </h1>
    </div>

    <md-card class="s1-loc__width--900px">
      <md-card-content>
        <div class="s1-U__pd16">
          <span class="s1-U__text-color--dark-2">Icatu MV / Vendas</span>
          <h2 class="s1-U__fw--300 s1-U__mg--bt4">
            <span>renanzozimo</span>
            <span class="s1-U__text-color--dark-2">@empresademais</span>
          </h2>
          <h4 class="s1-U__text-color--dark-2 s1-U__fw--300">
            <div class="s1-U__align-children--center">
              <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
              <span class="md-body-2 s1-U__mg--lt4">Administrador</span>
            </div>
          </h4>
        </div>
        <md-divider class="s1-U__mg--tp16 s1-U__mg--bt32"/>
        <div>
          <h3 class="md-title s1-U__text-color--primary s1-U__mg--tp16">Dados cadastrais</h3>
          <div class="s1-U__pd--lt16 s1-U__pd--tp16">
            <div class="s1-loc__md-field-wrapper s1-U__width--300px">
              <md-field>
                <label>Primeiro Nome</label>
                <md-input v-model="form.FirstName" required/>
              </md-field>
            </div>

            <div class="s1-loc__md-field-wrapper s1-U__width--300px">
              <md-field>
                <label>Sobrenome</label>
                <md-input v-model="form.LastName" required/>
              </md-field>
            </div>

            <div class="s1-loc__md-field-wrapper s1-U__width--300px">
              <md-field>
                <label>Username (login)</label>
                <md-input v-model="form.Username" required/>
                <span class="md-suffix">@empresademais</span>
              </md-field>
            </div>

            <div class="s1-loc__md-field-wrapper s1-U__width--300px">
              <md-field>
                <label>Email</label>
                <md-input v-model="form.Email"/>
              </md-field>
            </div>

            <md-button
              class="md-primary s1-md-bordered s1-U__mg--bt24 s1-U__mg--tp16"
              @click="setShowPasswordDialog"
            >alterar senha</md-button>
          </div>
          <div class="s1-U__pd--lt16 s1-U__pd--tp16">
            <p class="s1-U__text-color--dark-2">
              Perfil de acesso a
              <b>Icatu MV / Vendas</b>
            </p>
            <div class="s1-U__align-children--center">
              <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
              <span class="md-body-2 s1-U__mg--lt4">Administrador</span>
            </div>
            <md-button
              class="md-primary s1-md-bordered s1-U__mg--bt24 s1-U__mg--tp8"
              @click="showEditUserProfileShortcutDialog()"
            >editar perfil de acesso</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions class="s1-U__pd16">
        <md-button class="md-raised md-primary" @click="setActivePage('users-by-account')">Salvar</md-button>
      </md-card-actions>
    </md-card>

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
          <md-radio class="s1-U__mg0" v-model="selectedProfile" :value="profile.Id">{{profile.Name}}</md-radio>
        </div>
      </md-content>
      <md-divider/>
      <md-dialog-actions class="s1-U__pd16 s1-U__pd--tp0 s1-U__text-align--right">
        <md-button class="md-raised md-primary">salvar</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog :md-active.sync="showPasswordDialog">
      <md-content>
        <h2 class="s1-U__fw--300 s1-U__mg--bt32 s1-U__mg--tp16">Alteração de senha</h2>
        <p class="s1-U__mg--bt16 s1-U__width--300px">Nova senha para usuário</p>
        <p class="md-subheading s1-U__mg--bt16">
          <b>@cromat</b>
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
import PersonData from "../../data/_person.js";
import Countries from "../../data/_countryCodes.js";
import Languages from "../../data/_languages.js";
import Profiles from "../../data/_profiles.js";

export default {
  name: "EditUserToApp",
  props: {
    setActivePage: Function
  },
  data: () => ({
    person: PersonData,
    countries: Countries,
    languages: Languages,
    profiles: Profiles,
    allProfiles: Profiles,
    selectedProfile: "profile-1",
    workspaceSugestion: null,
    showSugestion: true,
    showPasswordDialog: false,
    showDialogProfileOption: false,
    editUserProfileShortcutDialog: false,
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
    },
    settings: {
      DNS: null,
      Workspace: null,
      EnabledForgotPassword: true,
      EnabledTwoFactorAuthentication: false
    },
    logoUrl: null,
    showPasswordFeedback: false
  }),
  methods: {
    setShowPasswordDialog() {
      this.showPasswordDialog = true;
      setTimeout(() => {
        document.getElementById("current-password").focus();
      }, 500);
    },
    unsetShowPasswordDialog() {
      this.showPasswordDialog = false;
      this.showPasswordFeedback = true;
    },
    unsetCancelingShowPasswordDialog() {
      this.showPasswordDialog = false;
    },
    logoChanged(files) {
      this.logo = files[0];
      const current = this.logoUrl;

      if (!this.logo) {
        this.logoUrl = current;
        return;
      }

      this.logoUrl = URL.createObjectURL(this.logo);
    },
    uploadImage() {
      document.getElementById("input-upload-image").click();
    },
    getWorkspaceSugestion() {
      this.showSugestion = true;
      this.workspaceSugestion = this.form.NameFantasy
        ? this.form.NameFantasy.toLowerCase()
            .replace(/[|&;$%@"<>()+,\s]/g, "")
            .replace(/[áàâã]/g, "a")
            .replace(/[éèê]/g, "e")
            .replace(/[íï]/g, "i")
            .replace(/[óôõö]/g, "o")
            .replace(/[ú]/g, "u")
            .replace(/[ç]/g, "c")
            .replace(/[ñ]/g, "n")
        : "dominio";
    },
    setWorkspaceSugestion() {
      this.settings.Workspace = this.workspaceSugestion;
    },
    showEditUserProfileShortcutDialog() {
      this.editUserProfileShortcutDialog = true;
    },
    closeEditUserProfileShortcutDialog() {
      this.editUserProfileShortcutDialog = false;
    }
  }
};
</script>

