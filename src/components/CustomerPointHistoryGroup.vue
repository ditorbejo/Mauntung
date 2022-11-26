<script setup>
import CustomerPointHistoryItem from "./CustomerPointHistoryItem.vue";

defineProps({
  histories: Array,
  date: Date,
});
</script>

<template>
  <div>
    <div class="py-3 px-5 bg-lightGray">
      <p class="font-medium">{{ date.toDateString() }}</p>
    </div>
    <div class="flex flex-col gap-3 mt-3 px-7.5">
      <CustomerPointHistoryItem
        v-for="(history, index) in histories"
        :key="index"
        v-bind="history"
      />
    </div>
  </div>
</template>
