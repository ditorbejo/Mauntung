<script setup>
const props = defineProps(["title", "content", "icon"]);
</script>

<template>
  <div class="border border-lightGray flex bg-biru6 rounded-lg p-3 text-biru1">
    <span class="material-symbols-rounded mt-1"> {{ props.icon }} </span>
    <div class="ml-2">
      <div class="text-lg font-semibold">{{ props.title }}</div>
      <p class="text-sm">{{ props.content }}</p>
    </div>
  </div>
</template>
