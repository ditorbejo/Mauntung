<script setup>
defineProps({
  isGain: Boolean,
  type: {
    validator: (value) => ["stamp", "point"].includes(value),
  },
  amount: Number,
  date: Date,
  programName: String,
  programImg: String,
});
</script>
<template>
  <div
    class="flex items-center gap-2 p-3 border border-lightGray rounded-md shadow-cardShadow"
  >
    <img class="w-9 h-9" :src="programImg" :alt="programName" />
    <div>
      <p class="text-lg font-semibold">{{ programName }}</p>
      <p>
        <span class="font-medium">{{ isGain ? "+" : "-" }}{{ amount }}</span>
        {{ type === "stamp" ? "Stempel" : "Poin" }} •
        <span class="text-xs text-gray">{{ date.toDateString() }}</span>
      </p>
    </div>
  </div>
</template>
