<script setup>
const props = defineProps({
  rewardName: String,
  customerImg: String,
  customerName: String,
  date: Date,
});

const hours = props.date.getHours();
const minutes = props.date.getMinutes().toString();
let formatedTime;
if (hours < 13) {
  formatedTime = `${hours}:${minutes} AM`;
} else {
  formatedTime = `${hours - 12}:${minutes} PM`;
}
</script>

<template>
  <div
    class="flex flex-col gap-1 p-3 border border-lightGray rounded-md shadow-cardShadow"
  >
    <div>
      <p class="font-semibold">{{ rewardName }}</p>
    </div>
    <div class="flex gap-1">
      <img class="w-6 h-6" :src="customerImg" :alt="customerName" />
      <p>{{ customerName }}</p>
      •
      <span class="text-gray">{{ formatedTime }}</span>
    </div>
  </div>
</template>
