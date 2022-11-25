<script setup>
import { computed } from "vue";

const props = defineProps({ tier: Object });
const gridCols = computed(() => {
  return props.tier.tiers.length * 2 - 1;
});
</script>

<template>
  <div
    class="bg-white border border-lightGray shadow-cardShadow rounded-lg p-4 flex flex-col gap-2.5"
  >
    <p class="text-lg font-semibold">Level Anda</p>
    <div
      class="grid"
      :style="{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }"
    >
      <template v-for="(t, index) in tier.tiers" :key="'tier-' + t.id">
        <div class="flex flex-col items-center z-30">
          <div class="relative">
            <img class="w-7.5 h-7.5" :src="t.img" :alt="t.name" />
            <span
              v-if="t.id === tier.currentTier.id"
              class="material-symbols-rounded rounded-full text-white bg-biru1 absolute bottom-0 right-0 translate-x-2 translate-y-2 text-base leading-none"
            >
              done
            </span>
          </div>
          <p class="mt-1 font-medium text-sm">{{ t.name }}</p>
        </div>
        <div
          v-if="index !== tier.tiers.length - 1"
          class="bg-biru1 mt-4"
          style="height: 1px"
        ></div>
      </template>
    </div>
    <div class="w-full bg-lightGray rounded-full">
      <div
        class="h-2 bg-biru1 rounded-full"
        :style="{ width: tier.currentTier.progress * 100 + '%' }"
      ></div>
    </div>
    <p>
      Dapatkan
      <span class="font-semibold"
        >{{ tier.currentTier.requiredPoints }} poin</span
      >
      lagi sebelum <span class="font-semibold">31 Des 2022</span> untuk mencapai
      <span class="font-semibold">Platinum</span>.
    </p>
  </div>
</template>
