<script setup>
const props = defineProps(["urlImage", "nameReward", "customerName", "date"]);

const date = props.date;
const hours = date.getHours();
const minutes = date.getMinutes().toString();
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
      <p class="font-semibold">{{ props.nameReward }}</p>
    </div>
    <div class="flex gap-1">
      <img :src="props.urlImage" alt="" />
      <p>{{ props.customerName }}</p>
      •
      <span class="text-gray">{{ formatedTime }}</span>
    </div>
  </div>
</template>
