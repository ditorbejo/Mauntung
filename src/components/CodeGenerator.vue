<script setup>
import { computed, ref } from "vue";
import TextField from "./TextField.vue";
import { useBasePointStore } from "@/stores/basePoint";

defineProps({
  useNominal: Boolean,
  topLabel: String,
});

defineEmits(["generateCodeClick"]);

const nominal = ref(0);
const basePointStorage = useBasePointStore();
const calculateBasePoint = computed(() => {
  const calculated = parseInt(nominal.value / 10000);
  const basePoint = calculated < 1 ? 0 : calculated;
  basePointStorage.setBasePoint(basePoint);
  return basePoint;
});
</script>

<template>
  <div class="border rounded-lg px-4 py-4 border-lightGray shadow-cardShadow">
    <h2 class="font-semibold mb-4">Buat Kode Poin</h2>
    <div class="flex flex-col gap-2.5">
      <TextField
        v-if="useNominal"
        :label="topLabel"
        type-input="number"
        name-input="nominal"
        id="nominal"
        v-model="nominal"
      ></TextField>
      <TextField
        label="Poin Dasar"
        type-input="number"
        name-input="poin"
        id="poin"
        :model-value="calculateBasePoint"
        :disabled="true"
      ></TextField>
    </div>
    <button
      @click="calculateBasePoint < 1 ? null : $emit('generateCodeClick')"
      class="w-full mt-4 btn btn-rounded btn-base"
      :class="[calculateBasePoint < 1 ? 'btn-disabled' : 'btn-primary']"
      :disabled="calculateBasePoint < 1"
    >
      Buat Kode
    </button>
  </div>
</template>
