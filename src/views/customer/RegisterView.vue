<script setup>
import BaseLayout from "../../layouts/BaseLayout.vue";
import TextField from "../../components/TextField.vue";
import { reactive } from "vue";

const form = reactive({
  fullName: "",
  email: "",
  password: "",
});

const register = () => {
  console.log({ ...form });
};
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    app-bar-icon="arrow_back"
    title="Daftar Sebagai Pelanggan"
    @app-bar-button-click="
      $router.push({
        name: 'customer-home',
      })
    "
  >
    <div class="px-7.5">
      <div class="flex flex-col gap-3">
        <TextField
          label="Nama Lengkap"
          placeholder="Nama Lengkap"
          type-input="text"
          name-input="name"
          id="name"
          v-model="form.name"
        />
        <TextField
          label="Email"
          placeholder="Email"
          type-input="email"
          name-input="email"
          id="email"
          v-model="form.email"
        />
        <TextField
          label="Password"
          placeholder="Password"
          type-input="password"
          name-input="password"
          id="password"
          v-model="form.password"
        />
      </div>
      <button
        class="btn btn-primary btn-rounded btn-lg w-full mt-12"
        @click="register"
      >
        Daftar
      </button>
    </div>
  </BaseLayout>
</template>
