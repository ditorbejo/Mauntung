<script setup>
const props = defineProps(["actionName"]);
const emits = defineEmits(["buttonClick"]);
</script>

<template>
  <div
    class="flex w-full gap-2.5 py-2.5 px-4 items-center justify-between fixed bottom-0 shadow-bottomBarShadow bg-white"
  >
    <slot></slot>
    <button
      class="btn btn-primary btn-rounded btn-base"
      @click="$emit('buttonClick')"
    >
      {{ props.actionName }}
    </button>
  </div>
</template>
