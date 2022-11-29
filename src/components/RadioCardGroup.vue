<script setup>
defineProps(["radioItems", "name", "selected"]);
defineEmits(["update:selected"]);
</script>

<template>
  <label
    v-for="(item, index) in radioItems"
    :key="index"
    :for="item.id"
    class="pl-3 py-3 pr-4 border rounded-lg shadow-cardShadow bg-white flex gap-3 items-center"
    :class="[item.value === selected ? 'border-biru2' : 'border-lightGray']"
  >
    <input
      type="radio"
      :name="name"
      :id="item.id"
      :value="item.value"
      :checked="item.value === selected"
      @change="$emit('update:selected', $event.target.value)"
      class="opacity-0 fixed w-0"
    />
    <span
      v-if="item.value === selected"
      class="material-symbols-rounded text-biru2"
    >
      radio_button_checked
    </span>
    <span v-else class="material-symbols-rounded text-biru2">
      radio_button_unchecked
    </span>
    <div>
      <p class="text-lg font-semibold">{{ item.label }}</p>
      <p class="text-sm mt-1 text-justify">{{ item.description }}</p>
    </div>
  </label>
</template>
