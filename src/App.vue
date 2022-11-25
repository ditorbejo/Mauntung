<script setup>
import { RouterView } from "vue-router";
import LoadingPopup from "./components/LoadingPopup.vue";
import { useLoadingStore } from "@/stores/loading";

const loadingStore = useLoadingStore();
</script>

<template>
  <RouterView />
  <LoadingPopup v-if="loadingStore.isLoading" />
</template>

<style scoped></style>
