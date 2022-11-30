<script setup>
defineProps({
  id: String,
  name: String,
  label: String,
  description: String,
  isChecked: Boolean,
  checked: Boolean,
});
defineEmits(["update:checked"]);
</script>

<template>
  <label
    :for="id"
    class="pl-3 py-3 pr-4 border rounded-lg shadow-cardShadow bg-white flex gap-3 items-center"
    :class="[checked ? 'border-biru2' : 'border-lightGray']"
  >
    <input
      type="checkbox"
      :name="name"
      :id="id"
      :checked="checked"
      @change="(event) => $emit('update:checked', event.target.checked)"
      class="opacity-0 fixed w-0"
    />
    <div
      v-if="checked"
      class="flex items-center justify-center w-6 h-6 bg-biru2 rounded-[0.25rem]"
    >
      <span class="material-symbols-rounded text-white text-sm leading-none">
        done
      </span>
    </div>
    <div
      v-else
      class="flex items-center justify-center w-6 h-6 bg-white border-2 border-biru2 rounded-[0.25rem]"
    ></div>
    <div class="flex-1">
      <p class="text-lg font-semibold">{{ label }}</p>
      <p class="text-sm mt-1 text-justify">{{ description }}</p>
    </div>
  </label>
</template>
