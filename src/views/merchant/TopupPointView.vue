<script setup>
import BaseLayout from "../../layouts/BaseLayout.vue";
import TextField from "../../components/TextField.vue";
import { reactive } from "vue";

const customer = {
  name: "Agus",
  img: "https://via.placeholder.com/36",
  tier: {
    name: "Gold",
  },
  point: {
    current: 100,
    claimable: 12,
    ttl: 365,
  },
};

const form = reactive({
  customerId: 1,
  transaction: 0,
});

const topup = () => {
  console.log({ ...form });
};
</script>

<template>
  <BaseLayout :use-app-bar="true" app-bar-icon="arrow_back" title="Tambah Poin">
    <div class="px-7.5">
      <TextField
        label="Nominal Transaksi"
        placeholder="Nominal Transaksi"
        type-input="number"
        name-input="nominal"
        id="nominal"
        v-model="form.transaction"
      />
      <div
        class="p-3 rounded-lg bg-white border border-lightGray shadow-cardShadow flex flex-col gap-3 mt-4"
      >
        <div>
          <p class="text-sm">Nama Pelanggan:</p>
          <div class="flex items-center gap-2 mt-1">
            <img class="w-6 h-6" :src="customer.img" :alt="customer.name" />
            <p class="font-medium">{{ customer.name }}</p>
          </div>
        </div>

        <div>
          <p class="text-sm">Tier Pelanggan:</p>
          <p class="font-medium mt-1">{{ customer.tier.name }}</p>
        </div>

        <div>
          <p class="text-sm">Poin Saat Ini:</p>
          <p class="font-medium mt-1">{{ customer.point.current }} Poin</p>
        </div>

        <div>
          <p class="text-sm">Poin Yang Akan Didapat:</p>
          <p class="font-medium mt-1">{{ customer.point.claimable }}</p>
        </div>

        <div>
          <p class="text-sm">Masa Aktif Poin:</p>
          <p class="font-medium mt-1">{{ customer.point.ttl }} Hari</p>
        </div>
      </div>

      <button
        class="btn btn-primary btn-rounded btn-lg w-full mt-12"
        @click="topup"
      >
        Tambah Poin
      </button>
      <button
        class="btn btn-secondary btn-rounded btn-lg w-full mt-3"
        @click="$router.push({ name: 'merchant-scanner' })"
      >
        Kembali Ke Pemindai
      </button>
    </div>
  </BaseLayout>
</template>
