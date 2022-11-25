<script setup>
import { ref } from "vue";

defineProps({
  title: String,
  price: String,
  features: String,
  cta: String,
  extras: Object,
});

const isMonthly = ref(false);
</script>

<template>
  <div
    class="border border-lightGray shadow-cardShadow p-6 rounded-lg flex flex-col items-start justify-between max-w-[320px]"
  >
    <div class="flex flex-col items-start">
      <h3 class="font-semibold text-2xl">{{ title }}</h3>
      <div v-if="extras" class="flex bg-lightGray p-1 rounded-full mt-3">
        <button
          class="px-3 py-1 font-medium"
          :class="[isMonthly ? 'active' : 'inactive']"
          @click="() => (isMonthly = true)"
        >
          Monthly
        </button>
        <button
          class="px-3 py-1 font-medium"
          :class="[isMonthly ? 'inactive' : 'active']"
          @click="() => (isMonthly = false)"
        >
          Yearly
        </button>
      </div>
      <h4 v-if="!extras" class="font-semibold text-lg mt-3">
        {{ price }}
      </h4>
      <h4 v-if="extras && isMonthly" class="font-semibold text-lg mt-3">
        {{ extras.monthly.original }}
      </h4>
      <h4 v-if="extras && !isMonthly" class="font-semibold text-lg mt-3">
        <span
          class="line-through decoration-red-700 decoration-2 font-semibold"
          >{{ extras.yearly.original }}</span
        >
        {{ extras.yearly.discounted }}
      </h4>
      <h4
        v-if="extras && !isMonthly"
        class="font-semibold text-lg mt-3 bg-pastelHijau rounded-full px-5 py-2"
      >
        {{ extras.discount }}
      </h4>
      <ul class="mt-3 ml-4">
        <li
          v-for="(feature, index) in features"
          :key="'feature-' + index"
          v-html="feature"
          class="list-disc"
        ></li>
      </ul>
    </div>
    <button class="text-center w-full btn btn-primary btn-lg btn-rounded mt-9">
      {{ cta }}
    </button>
  </div>
</template>

<style scoped>
.active {
  @apply text-white rounded-full bg-biru2;
}
.inactive {
  @apply text-gray;
}
</style>
