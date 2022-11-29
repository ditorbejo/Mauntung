<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  typeInput: {
    validator: (value) =>
      ["text", "number", "email", "password"].includes(value),
  },
  nameInput: String,
  id: String,
  value: [String, Number],
  disabled: Boolean,
  modelValue: [Object, Number, String],
});

defineEmits(["change", "update:modelValue"]);

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
    <label class="font-medium" :for="id">{{ label }}</label>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      class="flex items-center px-3 py-3 border border-solid rounded-lg border-lightGray"
      :type="typeInput"
      :name="nameInput"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      :disabled="disabled"
      :class="[disabled ? 'bg-lightGray text-gray' : 'text-biru1']"
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
