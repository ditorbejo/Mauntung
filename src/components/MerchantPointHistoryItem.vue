<script setup>
const props = defineProps(["basePoint", "nominal", "date"]);

const date = props.date;
const hours = date.getHours();
const minutes = date.getMinutes().toString();
let formatedTime;
if (hours < 13) {
  formatedTime = `${hours}:${minutes} AM`;
} else {
    formatedTime = `${hours-12}:${minutes} PM`
}
</script>

<template>
  <div
    class="flex flex-col gap-1 p-3 border border-lightGray rounded-md shadow-cardShadow"
  >
    <div class="font-semibold">{{ props.basePoint }} Poin</div>
    <div>
      {{ props.nominal }} • <span class="text-gray">{{ formatedTime }}</span>
    </div>
  </div>
</template>
