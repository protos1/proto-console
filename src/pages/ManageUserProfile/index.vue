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
        <span>Perfis de usuário</span>
      </h1>
    </div>
    <md-card class="s1-loc__width--900px">
      <md-card-content>
        <div class="s1-U__mg--tp4">
          <p class="md-caption">USUÁRIO</p>
          <p class="md-title s1-U__text-color--primary">Clotilde Matilde</p>
          <p class="md-caption">cromat@empresademais</p>
          <md-divider class="s1-U__mg--bt16 s1-U__mg--tp16"></md-divider>
        </div>
        <div class="s1-U__pd--lt16 s1-U__mg--bt32 s1-U__mg--tp20">
          <div class="s1-U__align-children--center s1-U__mg--tp8 s1-U__mg--bt16">
            <img
              src="https://s1-cdn-brazilsouth.azureedge.net/accounts.svg"
              style="width: 24px; height: 24px;"
              alt
            >
            <p class="md-body-2 s1-U__mg--lt8">Accounts</p>
          </div>
          <div class="s1-U__width--540px">
            <table class="s1-U__full-width" style="border-spacing: 0">
              <tr>
                <td class="s1-U__text-color--dark-2">
                  <div class="s1-loc__md-field-wrapper">
                    <md-field class="s1-U__mg0">
                      <label for>Conta</label>
                      <md-select v-model="form.Account1">
                        <md-option value="Icatu MV">Icatu MV</md-option>
                        <md-option value="Icatu BV">Icatu BV</md-option>
                        <md-option value="Icatu Nova">Icatu Nova</md-option>
                        <md-option value="Icatu Nova 2">Icatu Nova 2</md-option>
                        <md-option value="Icatu Nova 3">Icatu Nova 3</md-option>
                        <md-option value="Icatu Dum Dum">Icatu Dum Dum</md-option>
                        <md-option value="Icatu Macaquinho Gordo">Icatu Macaquinho Gordo</md-option>
                        <md-option value="Icatu">Icatu</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </td>
                <td class="s1-U__pd--lt8 s1-U__pd--rt8 s1-U__text-align--center">
                  <div class="s1-U__vertical-divider" style="display: inline-block"/>
                </td>
                <td class="s1-U__pd--tp4 s1-U__pd--bt4">
                  <div class="s1-loc__md-field-wrapper">
                    <md-field class="s1-U__mg0">
                      <label for>Perfil</label>
                      <md-select v-model="form.AccountsProfile1">
                        <md-option value="Admin">Administrador</md-option>
                        <md-option value="Normal">Normal</md-option>
                        <md-option value="Mui loko">Mui loko</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </td>
              </tr>
            </table>
            <md-button class="s1-U__border-dashed--2 s1-U__full-width s1-U__mg--tp8">
              <div class="s1-U__align-children--center">
                <md-icon>add</md-icon>
                <span class="s1-U__mg--lt4">adicionar</span>
              </div>
            </md-button>
          </div>
        </div>
        <div class="s1-U__pd--lt16 s1-U__mg--bt32">
          <div class="s1-U__align-children--center s1-U__mg--tp8 s1-U__mg--bt16">
            <img
              src="https://s1-cdn-brazilsouth.azureedge.net/sales.svg"
              style="width: 24px; height: 24px;"
              alt
            >
            <p class="md-body-2 s1-U__mg--lt8">Vendas</p>
          </div>
          <div class="s1-U__width--540px">
            <table class="s1-U__full-width" style="border-spacing: 0">
              <tr>
                <td class="s1-U__text-color--dark-2">
                  <div class="s1-loc__md-field-wrapper">
                    <md-field class="s1-U__mg0">
                      <label for>Conta</label>
                      <md-select v-model="form.Account2">
                        <md-option value="Icatu MV">Icatu MV</md-option>
                        <md-option value="Icatu BV">Icatu BV</md-option>
                        <md-option value="Icatu Nova">Icatu Nova</md-option>
                        <md-option value="Icatu Nova 2">Icatu Nova 2</md-option>
                        <md-option value="Icatu Nova 3">Icatu Nova 3</md-option>
                        <md-option value="Icatu Dum Dum">Icatu Dum Dum</md-option>
                        <md-option value="Icatu Macaquinho Gordo">Icatu Macaquinho Gordo</md-option>
                        <md-option value="Icatu">Icatu</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </td>
                <td class="s1-U__pd--lt8 s1-U__pd--rt8 s1-U__text-align--center">
                  <div class="s1-U__vertical-divider" style="display: inline-block"/>
                </td>
                <td class="s1-U__pd--tp4 s1-U__pd--bt4">
                  <div class="s1-loc__md-field-wrapper">
                    <md-field class="s1-U__mg0">
                      <label for>Perfil</label>
                      <md-select v-model="form.AccountsProfile2">
                        <md-option value="Admin">Administrador</md-option>
                        <md-option value="Normal">Normal</md-option>
                        <md-option value="Mui loko">Mui loko</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </td>
              </tr>
            </table>
            <md-button class="s1-U__border-dashed--2 s1-U__full-width s1-U__mg--tp8">
              <div class="s1-U__align-children--center">
                <md-icon>add</md-icon>
                <span class="s1-U__mg--lt4">adicionar</span>
              </div>
            </md-button>
          </div>
        </div>
        <div class="s1-U__pd--lt16 s1-U__mg--bt32">
          <div class="s1-U__align-children--center s1-U__mg--tp8 s1-U__mg--bt16">
            <img
              src="https://s1-cdn-brazilsouth.azureedge.net/console.svg"
              style="width: 24px; height: 24px;"
              alt
            >
            <p class="md-body-2 s1-U__mg--lt8">Console</p>
          </div>
          <div class="s1-U__width--540px">
            <table class="s1-U__full-width" style="border-spacing: 0">
              <tr>
                <td class="s1-U__text-color--dark-2">
                  <div class="s1-loc__md-field-wrapper">
                    <md-field class="s1-U__mg0">
                      <label for>Conta</label>
                      <md-select v-model="form.Account3">
                        <md-option value="Icatu MV">Icatu MV</md-option>
                        <md-option value="Icatu BV">Icatu BV</md-option>
                        <md-option value="Icatu Nova">Icatu Nova</md-option>
                        <md-option value="Icatu Nova 2">Icatu Nova 2</md-option>
                        <md-option value="Icatu Nova 3">Icatu Nova 3</md-option>
                        <md-option value="Icatu Dum Dum">Icatu Dum Dum</md-option>
                        <md-option value="Icatu Macaquinho Gordo">Icatu Macaquinho Gordo</md-option>
                        <md-option value="Icatu">Icatu</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </td>
                <td class="s1-U__pd--lt8 s1-U__pd--rt8 s1-U__text-align--center">
                  <div class="s1-U__vertical-divider" style="display: inline-block"/>
                </td>
                <td class="s1-U__pd--tp4 s1-U__pd--bt4">
                  <div class="s1-loc__md-field-wrapper">
                    <md-field class="s1-U__mg0">
                      <label for>Perfil</label>
                      <md-select v-model="form.AccountsProfile3">
                        <md-option value="Admin">Administrador</md-option>
                        <md-option value="Normal">Normal</md-option>
                        <md-option value="Mui loko">Mui loko</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </td>
              </tr>
            </table>
            <md-button class="s1-U__border-dashed--2 s1-U__full-width s1-U__mg--tp8">
              <div class="s1-U__align-children--center">
                <md-icon>add</md-icon>
                <span class="s1-U__mg--lt4">adicionar</span>
              </div>
            </md-button>
          </div>
        </div>
        <div class="s1-U__pd--lt16 s1-U__mg--bt32">
          <h3 class="s1-U__mg--bt16">Sem acesso às aplicações:</h3>
          <div class="s1-U__align-children--center s1-U__mg--bt8">
            <img
              src="https://s1-cdn-brazilsouth.azureedge.net/customer-service.svg"
              style="width: 24px; height: 24px;"
              alt
            >
            <p class="md-body-2 s1-U__mg--lt8">Pós vendas</p>
          </div>
          <div class="s1-U__align-children--center s1-U__mg--bt8">
            <img
              src="https://s1-cdn-brazilsouth.azureedge.net/analytics.svg"
              style="width: 24px; height: 24px;"
              alt
            >
            <p class="md-body-2 s1-U__mg--lt8">Analytics</p>
          </div>
        </div>
      </md-card-content>
      <md-card-actions class="s1-U__pd16">
        <md-button class="md-primary md-raised">Salvar</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "ManageUserProfile",
  props: {
    setActivePage: Function
  },
  data: () => ({
    form: {
      Account1: "Icatu MV",
      Account2: "Icatu BV",
      Account3: "Icatu Nova",
      AccountsProfile1: "Admin",
      AccountsProfile2: "Normal",
      AccountsProfile3: "Mui loko"
    }
  })
};
</script>

