<script setup>
import { ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
const showQRScannerButton = ref(false);
const route = useRoute();
watch(
  () => route.meta,
  (toMeta) => {
    showQRScannerButton.value = toMeta.showQRScannerButton;
  }
);
</script>

<template>
  <RouterView />
  <NavigationBar />
  <button v-if="showQRScannerButton">
    <span
      class="material-symbols-rounded fixed bottom-20 right-4 p-4 rounded-full shadow-floatingButtonShadow text-white bg-biru2"
    >
      qr_code_scanner
    </span>
  </button>
</template>

<style scoped></style>
