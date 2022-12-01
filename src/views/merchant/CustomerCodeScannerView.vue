<script setup>
import { QrcodeStream } from "vue3-qrcode-reader";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useLoadingStore } from "@/stores/loading";
import BaseLayout from "../../layouts/BaseLayout.vue";

const router = useRouter();
const result = ref("");
const error = ref("");
const loadingStore = useLoadingStore();

const onDecode = (res) => {
  loadingStore.showLoading();
  setTimeout(() => {
    loadingStore.hideLoading();
    try {
      console.log(res);
      router.push({ name: "merchant-topup-point", query: { code: res } });
    } catch (err) {
      console.log(err);
    }
  }, 2000);
};

const onInit = async (promise) => {
  try {
    await promise;
  } catch (err) {
    if (err.name === "NotAllowedError") {
      error.value = "ERROR: you need to grant camera access permission";
    } else if (err.name === "NotFoundError") {
      error.value = "ERROR: no camera on this device";
    } else if (err.name === "NotSupportedError") {
      error.value = "ERROR: secure context required (HTTPS, localhost)";
    } else if (err.name === "NotReadableError") {
      error.value = "ERROR: is the camera already in use?";
    } else if (err.name === "OverconstrainedError") {
      error.value = "ERROR: installed cameras are not suitable";
    } else if (err.name === "StreamApiNotSupportedError") {
      error.value = "ERROR: Stream API is not supported in this browser";
    } else if (err.name === "InsecureContextError") {
      error.value =
        "ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
    } else {
      error.value = `ERROR: Camera error (${err.name})`;
    }
  }
};
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    app-bar-icon="arrow_back"
    title="Pindai Kode Pelanggan"
  >
    <div class="relative w-full aspect-square -mt-5">
      <QrcodeStream @decode="onDecode" @init="onInit" />
      <div
        class="aspect-square border-2 border-red-700 absolute inset-14"
      ></div>
      <div class="absolute top-0 h-14 w-full bg-black bg-opacity-70"></div>
      <div
        class="absolute top-14 bottom-14 left-0 w-14 bg-black bg-opacity-70"
      ></div>
      <div
        class="absolute top-14 bottom-14 right-0 w-14 bg-black bg-opacity-70"
      ></div>
      <div class="absolute bottom-0 h-14 w-full bg-black bg-opacity-70"></div>
    </div>

    <p>{{ result }}</p>
    <p>{{ error }}</p>
    <div class="flex flex-col items-center px-7.5 mt-12">
      <p class="font-medium">Ingin Memindai Kode Reward?</p>

      <button class="btn btn-primary btn-rounded btn-lg w-full mt-3">
        Pindai Kode Reward
      </button>
    </div>
  </BaseLayout>
</template>
