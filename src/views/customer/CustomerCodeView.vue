<script setup>
import AppBar from "../../components/AppBar.vue";
import QrcodeVue from "qrcode.vue";
import { RouterLink } from "vue-router";

const customerCode = "abc-123-abc-123";
</script>

<template>
  <main>
    <AppBar icon="arrow_back" title="Kode Pelanggan" />
    <div class="px-7.5 pt-5 pb-20">
      <h2 class="font-medium text-center">
        Tunjukkan kode pelanggan Anda ke Merchant untuk dipindai
      </h2>

      <div class="flex flex-col w-full items-center">
        <QrcodeVue
          class="px-3 py-3 border rounded-lg border-lightGray mt-8 shadow-cardShadow"
          render-as="svg"
          :value="customerCode"
          :size="300"
          level="M"
        />
      </div>

      <RouterLink :to="{ name: 'customer-scanner', replace: true }">
        <button class="btn btn-primary btn-rounded btn-lg w-full mt-12">
          Kembali ke Pemindai
        </button>
      </RouterLink>
    </div>
  </main>
</template>
