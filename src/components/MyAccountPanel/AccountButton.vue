<template>
  <div>
    <md-menu md-size="huge">
      <md-avatar md-menu-trigger class="md-avatar-icon md-primary">
        <img :src="person.Photo" alt="Avatar" v-if="person.Photo">
        <md-ripple
          class="s1-U__text-uppercase"
          v-else
        >{{person.FullUserName.charAt(0) || person.Email.charAt(0)}}</md-ripple>
        <md-tooltip class="md-xsmall-hide md-small-hide" md-direction="left">opções de conta</md-tooltip>
      </md-avatar>

      <md-menu-content>
        <md-menu-item
          class="s1-U__bg-color--body-bg s1-U__pd--tp16 s1-U__pd--bt16 s1-U__mg--bt8"
          style="margin-top: -8px;"
        >
          <person-summary :person="person"/>
        </md-menu-item>

        <md-menu-item>
          <span>Meus dados</span>
        </md-menu-item>

        <md-menu-item>
          <span>Sair</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
import PersonSummary from "./../PersonSummary/index";
import PersonData from "../../data/_person.js";

export default {
  name: "AccountButton",
  data: () => ({
    person: PersonData
  }),
  components: {
    PersonSummary
  }
};
</script>