<script setup>
const props = defineProps([
  "label",
  "placeholder",
  "typeInput",
  "nameInput",
  "id",
  "value",
  "disabled",
]);

const emit = defineEmits(["change"]);

const formatInputOnFocus = (event) => {
  if (props.typeInput === "number") {
    const value = event.target.value;
    if (value == 0) {
      event.target.value = "";
    }
  }
};

const formatInputOnBlur = (event) => {
  if (props.typeInput === "number") {
    const value = event.target.value;
    if (value == "") {
      event.target.value = 0;
    }
  }
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="font-medium" for="">{{ props.label }}</label>
    <input
      @input="(event) => $emit('change', event)"
      class="flex items-center px-3 py-3 border border-solid rounded-lg border-lightGray"
      :type="props.typeInput"
      :name="props.nameInput"
      :placeholder="props.placeholder"
      :id="props.id"
      :value="props.value"
      :disabled="props.disabled"
      :class="[props.disabled ? 'bg-lightGray text-gray' : 'text-biru1']"
      @focus="(event) => formatInputOnFocus(event)"
      @blur="(event) => formatInputOnBlur(event)"
    />
  </div>
</template>

<style scoped>
input::placeholder {
  @apply text-gray;
}
</style>
