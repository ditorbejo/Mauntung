<script setup>
import RewardHistoryItem from "./RewardHistoryItem.vue";

const props = defineProps(["histories"]);
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
      <RewardHistoryItem
        v-for="(history, index) in histories"
        :name-reward="history.nameReward"
        :url-image="history.urlImage"
        :customer-name="history.customerName"
        :date="history.date"
        :key="index"
      >
      </RewardHistoryItem>
    </div>
  </div>
</template>
