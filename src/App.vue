<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <RouterView />
  <NavigationBar />
  <button>
    <span class="material-symbols-rounded fixed bottom-20 right-4 p-4 rounded-full shadow-floatingButtonShadow text-white bg-biru1"> qr_code_scanner </span>
  </button>
</template>

<style scoped></style>
