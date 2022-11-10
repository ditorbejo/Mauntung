<script setup>
const props = defineProps(["label", "placeholder", "typeInput", "nameInput"]);
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="font-medium" for="">{{ props.label }}</label>
    <input
      class="flex items-center px-3 py-3 border border-solid rounded-lg bg-biru6 border-biru1 text-biru1"
      :type="props.typeInput"
      :name="props.nameInput"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style scoped>
input::placeholder {
  @apply text-gray;
}
</style>
