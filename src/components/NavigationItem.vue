<script setup>
import { onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const props = defineProps(["icon", "label", "routeName"]);
const isActive = ref(false);
const route = useRoute();

watch(
  () => route.name,
  (toName) => {
    isActive.value = toName === props.routeName;
  }
);

onMounted(() => {
  isActive.value = route.name === props.routeName;
});
</script>

<template>
  <RouterLink :to="{ name: props.routeName }">
    <div
      class="flex flex-col items-center justify-between w-12 h-12"
      :class="[isActive ? 'text-biru2 font-semibold' : 'text-biru1']"
    >
      <div
        class="py-1 w-full flex flex-col items-center rounded-full"
        :class="[isActive ? 'bg-biru2' : '']"
      >
        <span
          class="material-symbols-rounded text-center"
          :class="[isActive ? 'text-white' : '']"
          >{{ props.icon }}</span
        >
      </div>
      <span class="text-xs font-medium">{{ props.label }}</span>
    </div>
  </RouterLink>
</template>
