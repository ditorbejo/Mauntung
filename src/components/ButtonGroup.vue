<script setup>
defineProps({
  active: {
    validator: (value) => ["left", "right"].includes(value),
  },
  leftText: String,
  rightText: String,
});

defineEmits(["leftClick", "rightClick"]);
</script>

<template>
  <div class="flex w-full">
    <button
      @click="$emit('leftClick')"
      class="basis-1/2 rounded-l-full border-2 border-solid border-biru2 text-center py-1 text-white font-medium"
      :class="[active == 'left' ? 'bg-biru2' : 'bg-white text-biru2']"
    >
      {{ leftText }}
    </button>
    <button
      @click="$emit('rightClick')"
      class="basis-1/2 rounded-r-full border-2 border-solid border-biru2 text-center py-1 text-white font-medium"
      :class="[active == 'right' ? 'bg-biru2' : 'bg-white text-biru2']"
    >
      {{ rightText }}
    </button>
  </div>
</template>
