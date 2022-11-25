<script setup>
const props = defineProps({
  name: String,
  type: {
    validator: (value) => ["stamp", "point"].includes(value),
  },
  value: Number,
  date: Date,
  programImg: String,
});

const types = {
  point: "Poin",
  stamp: "Stempel",
};

const day = props.date.getDate();
const month = props.date.getMonth() + 1;
const year = props.date.getFullYear();
const formattedDate = `${year}-${month}-${day}`;
</script>

<template>
  <div
    class="flex p-3 items-center border-lightGray rounded-md shadow-cardShadow"
  >
    <img class="w-10 h-10 object cover" :src="programImg" alt="point-card" />
    <div class="ml-3">
      <p class="text-lg font-semibold mb-1">{{ name }}</p>
      <p>
        {{ value }} {{ types[type] }} •
        <span class="text-sm text-gray">{{ formattedDate }}</span>
      </p>
    </div>
  </div>
</template>
