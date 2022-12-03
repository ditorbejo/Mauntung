<script setup>
import BaseLayout from "../../layouts/BaseLayout.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import TextField from "../../components/TextField.vue";
import { reactive, ref } from "vue";

const active = ref("left");
const selectedMethod = ref("email");
const form = reactive({
  email: {
    name: "",
    email: "",
    password: "",
  },
  phone: {
    name: "",
    phone: "",
    password: "",
  },
});

const register = () => {
  console.log({ ...form[selectedMethod.value] });
};
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    app-bar-icon="arrow_back"
    title="Daftar Sebagai Merchant"
  >
    <div class="px-7.5">
      <div class="flex flex-col gap-3">
        <!-- <ButtonGroup
          left-text="Email"
          right-text="No. HP"
          :active="active"
          @left-click="
            () => {
              active = 'left';
              selectedMethod = 'email';
            }
          "
          @right-click="
            () => {
              active = 'right';
              selectedMethod = 'phone';
            }
          "
        /> -->
        <template v-if="selectedMethod === 'email'">
          <TextField
            label="Nama Merchant"
            placeholder="Nama Merchant"
            type-input="text"
            name-input="name"
            id="name"
            v-model="form.email.name"
          />
          <TextField
            label="Email"
            placeholder="Email"
            type-input="email"
            name-input="email"
            id="email"
            v-model="form.email.email"
          />
          <TextField
            label="Password"
            placeholder="Password"
            type-input="password"
            name-input="password"
            id="password"
            v-model="form.email.password"
          />
        </template>
        <template v-else-if="selectedMethod === 'phone'">
          <TextField
            label="Nama Merchant"
            placeholder="Nama Merchant"
            type-input="text"
            name-input="name"
            id="name"
            v-model="form.phone.name"
          />
          <TextField
            label="Phone"
            placeholder="Phone"
            type-input="text"
            name-input="phone"
            id="phone"
            v-model="form.phone.phone"
          />
          <TextField
            label="Password"
            placeholder="Password"
            type-input="password"
            name-input="password"
            id="password"
            v-model="form.phone.password"
          />
        </template>
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
