<script setup>
defineProps({
  icon: String,
  title: String,
});

defineEmits(["buttonClick"]);
</script>

<template>
  <header
    class="flex w-full py-2.5 px-4 gap-6 items-center sticky top-0 z-40 shadow-topBarShadow bg-white"
  >
    <button
      class="flex items-center bg-biru2 rounded-full py-2.5 px-2.5"
      @click="$emit('buttonClick')"
    >
      <span class="material-symbols-rounded text-white text-base leading-none">
        {{ icon }}
      </span>
    </button>

    <h1 class="font-medium">{{ title }}</h1>
  </header>
</template>
