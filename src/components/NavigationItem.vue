<script setup>
const props = defineProps(["isActive", "icon", "label"]);
</script>

<template>
  <div
    class="flex flex-col items-center"
    :class="[props.isActive ? 'text-biru2 font-semibold' : 'text-biru1']"
  >
    <span class="material-symbols-rounded"> {{ props.icon }}</span>
    {{ props.label }}
  </div>
</template>
