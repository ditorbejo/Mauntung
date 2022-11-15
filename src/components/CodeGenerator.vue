<script setup>
import { ref } from "vue";
import TextField from "./TextField.vue";

const props = defineProps(["useNominal", "topLabel"]);
const emit = defineEmits(["generateCodeClick"]);
const basePoint = ref(0);
const calculateBasePoint = (event) => {
  const nominal = event.target.value;
  const calculated = nominal / 10000;
  basePoint.value = calculated < 1 ? 0 : calculated;
};
</script>

<template>
  <div class="border rounded-lg px-4 py-4 border-lightGray shadow-cardShadow">
    <h2 class="font-semibold mb-4">Buat Kode Poin</h2>
    <div class="flex flex-col gap-2.5">
      <TextField
        @change="calculateBasePoint"
        v-if="props.useNominal"
        :label="topLabel"
        type-input="number"
        name-input="nominal"
        id="nominal"
      ></TextField>
      <TextField
        label="Poin Dasar"
        type-input="number"
        name-input="poin"
        id="poin"
        :value="basePoint"
        :disabled="true"
      ></TextField>
    </div>
    <button
      @click="$emit('generateCodeClick')"
      class="w-full mt-4 btn btn-primary btn-rounded btn-base"
    >
      Buat Kode
    </button>
  </div>
</template>
