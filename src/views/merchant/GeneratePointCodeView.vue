<script setup>
import BaseLayout from "../../layouts/BaseLayout.vue";
import QrcodeVue from "qrcode.vue";
import GeneratedPoinCode from "../../components/GeneratedPoinCode.vue";
import { useBasePointStore } from "@/stores/basePoint";
const basePointStorage = useBasePointStore();
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    app-bar-icon="arrow_back"
    title="Buat Kode Poin"
  >
    <div
      class="flex flex-col gap-2.5 px-2.5 py-2.5 mx-7.5 items-center border border-lightGray rounded-lg"
    >
      <div class="px-2.5 py-2.5 border rounded-lg border-lightGray">
        <qrcode-vue
          class="w-full"
          render-as="svg"
          value="https://via.placeholder.com/36"
          :size="280"
          level="M"
        />
      </div>
      <GeneratedPoinCode
        class="w-full"
        :base-point="basePointStorage.basePoint"
        :expired-at="new Date()"
        :ttl="90"
      ></GeneratedPoinCode>
    </div>
    <div class="mt-12 flex flex-col gap-3">
      <button
        class="bg-biru2 text-white font-medium py-4 mx-7.5 border rounded-md"
      >
        Cetak
      </button>
      <button
        class="bg-white text-biru2 font-medium py-4 mx-7.5 border rounded-md"
      >
        Unduh
      </button>
    </div>
  </BaseLayout>
</template>
