<script setup>
import BaseLayout from "../../layouts/BaseLayout.vue";
import TextField from "@/components/TextField.vue";
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    app-bar-icon="arrow_back"
    title="Edit Profil"
    @app-bar-button-click="
      $router.push({
        name: 'merchant-profile',
      })
    "
  >
    <div class="px-7.5">
      <div class="flex flex-col gap-4 items-center mb-8">
        <p class="font-medium">Foto Profil</p>
        <img
          class="border border-biru1 rounded-lg shadow-cardShadow"
          width="120"
          height="120"
          src="https://via.placeholder.com/200"
          alt=""
        />
        <button class="btn btn-primary btn-sm btn-rounded font-medium">
          Browse
        </button>
      </div>
      <div class="flex flex-col gap-3 mb-12">
        <TextField
          label="Nama Merchant"
          placeholder="Name Merchant"
          typeInput="text"
          nameInput="nameMerchant"
          id="nameMerchant"
          value=""
        ></TextField>
        <TextField
          label="No Hp"
          placeholder="No Hp"
          typeInput="text"
          nameInput="phone"
          id="phone"
          value=""
        ></TextField>
        <TextField
          label="Email"
          placeholder="Email"
          typeInput="email"
          nameInput="email"
          id="email"
          value=""
        ></TextField>
      </div>
      <button class="w-full btn btn-primary btn-lg btn-rounded">Simpan</button>
    </div>
  </BaseLayout>
</template>
