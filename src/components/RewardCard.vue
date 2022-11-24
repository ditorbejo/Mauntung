<script setup>
const props = defineProps(["name", "img", "point"]);
</script>

<template>
  <div
    class="bg-white border border-lightGray shadow-cardShadow rounded-lg p-2"
  >
    <img
      class="w-full aspect-square rounded-md"
      :src="props.img"
      :alt="props.name"
    />
    <div class="mt-1">
      <p class="w-full truncate overflow-x-clip">
        {{ props.name }}
      </p>
      <p class="font-medium">{{ props.point }} Poin</p>
    </div>
  </div>
</template>
