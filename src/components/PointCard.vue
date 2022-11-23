<script setup>
const props = defineProps(["name", "type", "value", "date", "programImg"]);
const type = {
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
    class="flex p-3 items-center border-lightGray rounded-lg shadow-cardShadow"
  >
    <img
      class="w-10 h-10 object cover"
      :src="props.programImg"
      alt="point-card"
    />
    <div class="ml-3">
      <p class="text-lg font-semibold mb-1">{{ props.name }}</p>
      <p>
        {{ props.value }} {{ type[props.type] }} •
        <span class="text-sm text-gray">{{ formattedDate }}</span>
      </p>
    </div>
  </div>
</template>
