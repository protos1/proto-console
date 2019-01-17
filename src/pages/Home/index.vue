<template>
  <div class="s1-loc__container">
    <div class="s1-U__mg--bt32">
      <h1 class="md-display-1">Cockpit</h1>
    </div>
  </div>
</template>

<script>
import PersonData from "../../data/_person.js";

export default {
  name: "Home",
  props: {
    setActivePage: Function,
    setActiveAccount: Function
  },
  data: () => ({
    person: PersonData
  })
};
</script>
