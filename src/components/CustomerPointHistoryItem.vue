<script setup>
const props = defineProps([
  "isGain",
  "type",
  "amount",
  "date",
  "programName",
  "programImg",
]);
</script>
<template>
  <div
    class="flex items-center gap-2 p-3 border border-lightGray rounded-md shadow-cardShadow"
  >
    <img class="w-9 h-9" :src="props.programImg" :alt="props.programName" />
    <div>
      <p class="text-lg font-semibold">{{ props.programName }}</p>
      <p>
        <span class="font-medium"
          >{{ props.isGain ? "+" : "-" }}{{ props.amount }}</span
        >
        {{ props.type === "stamp" ? "Stempel" : "Poin" }} •
        <span class="text-xs text-gray">{{ props.date.toDateString() }}</span>
      </p>
    </div>
  </div>
</template>
