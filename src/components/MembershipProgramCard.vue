<script setup>
const props = defineProps([
  "isMerchant",
  "programName",
  "programType",
  "programImg",
  "totalPoint",
  "claimableReward",
]);
</script>

<template>
  <div
    v-if="props.isMerchant"
    class="flex flex-col gap-4.5 py-3 px-4 border border-lightGray border-solid shadow-cardShadow rounded-lg items-start"
  >
    <div class="flex items-center gap-2.5">
      <img
        class="w-9 h-9 object-cover"
        :src="props.programImg"
        :alt="props.programName"
      />
      <div>
        <h3 class="text-lg font-semibold">{{ props.programName }}</h3>
        <h4 class="text-sm">{{ props.programType }}</h4>
      </div>
    </div>
    <button class="bg-biru2 border rounded-xl px-3 py-2 ml-12 text-white">
      Edit Program
    </button>
  </div>
  <div
    v-else
    class="flex gap-3 py-4 px-5 6 border border-lightGray border-solid shadow-cardShadow rounded-md"
  >
    <div class="flex items-center">
      <img
        class="w-12 h-12 object-cover"
        :src="props.programImg"
        :alt="props.programName"
      />
    </div>
    <div class="flex flex-col gap-2.5">
      <div>
        <h3 class="text-lg font-semibold">{{ props.programName }}</h3>
        <h4 class="text-sm">{{ props.totalPoint }} Point</h4>
      </div>
      <button
        v-if="props.claimableReward"
        class="flex items-center gap-1 justify-center bg-biru2 border rounded-full px-4 py-1.5 text-white"
      >
        <span class="material-symbols-rounded"> confirmation_number </span>
        <span class="font-medium text-xs"
          >Dapat menukar {{ props.claimableReward }} reward</span
        >
      </button>
    </div>
  </div>
</template>
