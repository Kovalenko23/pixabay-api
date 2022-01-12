<template>
  <CatsList />
</template>

<script>
import CatsList from "./components/CatsList.vue";

export default {
  name: "App",
  components: {
    CatsList,
  },
  created() {
    this.$store.dispatch(`loadJson`);
  },
};
</script>

