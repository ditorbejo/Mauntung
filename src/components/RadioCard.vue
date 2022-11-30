<script setup>
import { useSlots } from "vue";
defineProps(["name", "selected", "id", "value", "label", "description"]);
defineEmits(["update:selected"]);

const slots = useSlots();
</script>

<template>
  <label
    :for="id"
    class="border rounded-lg shadow-cardShadow bg-white"
    :class="[value === selected ? 'border-biru2' : 'border-lightGray']"
  >
    <div class="pl-3 py-3 pr-4 flex gap-3 items-center">
      <input
        type="radio"
        :name="name"
        :id="id"
        :value="value"
        :checked="value === selected"
        @change="$emit('update:selected', $event.target.value)"
        class="opacity-0 fixed w-0"
      />
      <span
        v-if="value === selected"
        class="material-symbols-rounded text-biru2"
      >
        radio_button_checked
      </span>
      <span v-else class="material-symbols-rounded text-biru2">
        radio_button_unchecked
      </span>
      <div>
        <p class="text-lg font-semibold">{{ label }}</p>
        <p class="text-sm mt-1 text-justify">{{ description }}</p>
      </div>
    </div>
    <div
      v-if="slots.footer && value === selected"
      class="border-t border-biru1 p-3"
    >
      <slot name="footer"></slot>
    </div>
  </label>
</template>
