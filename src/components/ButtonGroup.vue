<script setup>
const props = defineProps(["active", "leftText", "rightText"]);
const emits = defineEmits(["leftClick", "rightClick"]);
</script>

<template>
  <div class="flex w-full">
    <button
      @click="$emit('leftClick')"
      class="basis-1/2 rounded-l-full border border-solid border-biru2 border-2 text-center py-1 text-white font-medium"
      :class="[props.active == 'left' ? 'bg-biru2' : 'bg-white text-biru2']"
    >
      {{ props.leftText }}
    </button>
    <button
      @click="$emit('rightClick')"
      class="basis-1/2 rounded-r-full border border-solid border-biru2 border-2 text-center py-1 text-white font-medium"
      :class="[props.active == 'right' ? 'bg-biru2' : 'bg-white text-biru2']"
    >
      {{ props.rightText }}
    </button>
  </div>
</template>
