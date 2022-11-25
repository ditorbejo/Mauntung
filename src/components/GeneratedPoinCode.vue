<script setup>
const props = defineProps({
  basePoint: Number,
  expiredAt: Date,
  ttl: Number,
});

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
const day = props.expiredAt.getDate();
const fullMonth = monthNames[props.expiredAt.getMonth()];
const nickMonth = fullMonth.substring(0, 3);
const year = props.expiredAt.getFullYear();
const hours = props.expiredAt.getHours();
const minutes = props.expiredAt.getMinutes().toString();
const formatedDate = `${day} ${nickMonth} ${year}, ${hours}:${minutes.padStart(
  2,
  "0"
)}`;
</script>

<template>
  <div class="flex flex-col gap-3 py-3 px-4 border border-lightGray rounded-lg">
    <div>
      <p>Poin Dasar</p>
      <p class="font-medium">{{ basePoint }}</p>
    </div>
    <div>
      <p>Reedem Sebelum</p>
      <p class="font-medium">{{ formatedDate }}</p>
    </div>
    <div>
      <p>Masa Berlaku Setelah Reedem</p>
      <p class="font-medium">{{ ttl }} Hari</p>
    </div>
  </div>
</template>
