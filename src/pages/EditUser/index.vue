<template>
  <div class="s1-loc__container">
    <div class="s1-U__mg--bt32">
      <h1 class="md-display-1 s1-U__text-color--dark-2 s1-U__align-children--center">
        <md-button
          class="md-dense md-icon-button s1-U__mg--rt16"
          @click="setActivePage('users-overview')"
        >
          <md-icon>arrow_back</md-icon>
        </md-button>
        <span>Editando usuário</span>
      </h1>
    </div>

    <md-card class="s1-loc__width--900px">
      <md-card-content>
        <!-- <div class="s1-U__pd16">
          <span class="s1-U__text-color--dark-2">Icatu MV / Vendas</span>
          <h2 class="s1-U__fw--300 s1-U__mg--bt4">
            <span>renanzozimo</span>
            <span class="s1-U__text-color--dark-2">@empresademais</span>
          </h2>
          <h4 class="s1-U__text-color--dark-2 s1-U__fw--300">
            <div class="s1-U__align-children--center">
              <md-icon class="md-accent" style="margin-left: -2px">account_box</md-icon>
              <span class="md-body-2 s1-U__mg--lt4">Operador</span>
            </div>
          </h4>
        </div>
        <md-divider class="s1-U__mg--tp16 s1-U__mg--bt16"/>-->
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
          <h3 class="md-title s1-U__pd--tp32 s1-U__text-color--primary">Perfis de acesso</h3>
          <div class="s1-U__pd--lt16 s1-U__pd--tp16">
            <div class="s1-U__align-children--center s1-U__mg--tp8 s1-U__mg--bt16">
              <img
                src="https://s1-cdn-brazilsouth.azureedge.net/accounts.svg"
                style="width: 24px; height: 24px;"
                alt
              >
              <p class="md-body-2 s1-U__mg--lt8">Accounts</p>
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
          <div class="s1-U__pd--lt16 s1-U__pd--tp16">
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
            <md-button
              class="md-primary s1-md-bordered s1-U__mg--bt24 s1-U__mg--tp32"
              @click="setActivePage('manage-user-profile')"
            >editar perfis de acesso</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions class="s1-U__pd16">
        <md-button class="md-raised md-primary" @click="setActivePage('users-overview')">Salvar</md-button>
      </md-card-actions>
    </md-card>

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
import PersonData from "../../data/_person.js";
import Countries from "../../data/_countryCodes.js";
import Languages from "../../data/_languages.js";

export default {
  name: "EditUser",
  props: {
    setActivePage: Function
  },
  data: () => ({
    person: PersonData,
    countries: Countries,
    languages: Languages,
    workspaceSugestion: null,
    showSugestion: true,
    showPasswordDialog: false,
    showDialogProfileOption: false,
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
    }
  }
};
</script>

