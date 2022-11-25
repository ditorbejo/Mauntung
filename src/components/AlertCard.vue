<script setup>
defineProps({
  icon: String,
  title: String,
  content: String,
});
</script>

<template>
  <div class="border border-lightGray flex bg-biru6 rounded-lg p-3 text-biru1">
    <span class="material-symbols-rounded mt-1"> {{ icon }} </span>
    <div class="ml-2">
      <div class="text-lg font-semibold">{{ title }}</div>
      <p class="text-sm">{{ content }}</p>
    </div>
  </div>
</template>
