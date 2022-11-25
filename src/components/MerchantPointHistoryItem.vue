<script setup>
const props = defineProps({
  basePoint: Number,
  nominal: Number,
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
    <div class="font-semibold">{{ basePoint }} Poin</div>
    <div>
      {{ nominal }} • <span class="text-gray">{{ formatedTime }}</span>
    </div>
  </div>
</template>
