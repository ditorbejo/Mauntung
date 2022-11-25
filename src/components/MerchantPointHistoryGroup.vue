<script setup>
import PointHistoryItem from "./MerchantPointHistoryItem.vue";

const props = defineProps({ histories: Array });
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const { date } = props.histories[0];
const day = date.getDate();
const fullMonth = monthNames[date.getMonth()];
const nickMonth = fullMonth.substring(0, 3);
const year = date.getFullYear();
const formatedDate = `${day} ${nickMonth} ${year}`;
</script>

<template>
  <div>
    <div class="py-3 px-5 bg-lightGray">
      <p class="font-medium">{{ formatedDate }}</p>
    </div>
    <div class="flex flex-col gap-3 mt-3 px-7.5">
      <PointHistoryItem
        v-for="(history, index) in histories"
        :base-point="history.basePoint"
        :nominal="history.nominal"
        :date="history.date"
        :key="index"
      >
      </PointHistoryItem>
    </div>
  </div>
</template>
