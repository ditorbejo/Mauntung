<script setup>
import BaseLayout from "../../layouts/BaseLayout.vue";
import TextField from "../../components/TextField.vue";
import { reactive } from "vue";

const form = reactive({
  phone: "",
  password: "",
});

const login = () => {
  console.log({ ...form });
};
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    app-bar-icon="arrow_back"
    title="Masuk Sebagai Pelanggan"
  >
    <div class="px-7.5">
      <div class="flex flex-col gap-3">
        <TextField
          label="No. HP"
          placeholder="No. HP"
          type-input="text"
          name-input="phone"
          id="phone"
          v-model="form.phone"
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
        @click="login"
      >
        Masuk
      </button>
    </div>
  </BaseLayout>
</template>
