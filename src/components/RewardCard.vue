<script setup>
defineProps({ name: String, img: String, point: Number });
</script>

<template>
  <div
    class="bg-white border border-lightGray shadow-cardShadow rounded-lg p-2"
  >
    <img class="w-full aspect-square rounded-md" :src="img" :alt="name" />
    <div class="mt-1">
      <p class="w-full truncate overflow-x-clip">
        {{ name }}
      </p>
      <p class="font-medium">{{ point }} Poin</p>
    </div>
  </div>
</template>
