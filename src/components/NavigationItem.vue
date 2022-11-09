<script setup>
const props = defineProps(["isActive", "icon", "label"]);
</script>

<template>
  <div
    class="flex flex-col items-center justify-between w-12 h-12"
    :class="[props.isActive ? 'text-biru2 font-semibold' : 'text-biru1']"
  >
    <div
      class="py-1 w-full flex flex-col items-center rounded-full"
      :class="[props.isActive ? 'bg-biru2' : '']"
    >
      <span
        class="material-symbols-rounded text-center"
        :class="[props.isActive ? 'text-white' : '']"
        >{{ props.icon }}</span
      >
    </div>
    <span class="text-xs font-medium">{{ props.label }}</span>
  </div>
</template>
