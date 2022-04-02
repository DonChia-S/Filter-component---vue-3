<template>
  <pm-header></pm-header>
  <pm-item></pm-item>
</template>

<script>
import PmHeader from "./components/PmHeader.vue";
import PmItem from "./components/PmItem.vue";

export default {
  name: "App",
  components: {
    PmHeader,
    PmItem,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
#app {
  background-color: #282930;
  height: 100vh;
}

p {
  color: #ffff !important;
}
</style>
