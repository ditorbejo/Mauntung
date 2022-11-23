<script setup>
import { useRouter } from "vue-router";

const props = defineProps(["icon", "title"]);
const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <header
    class="flex w-full py-2.5 px-4 gap-6 items-center sticky top-0 z-40 shadow-topBarShadow bg-white"
  >
    <button
      class="flex items-center bg-biru2 rounded-full py-1 px-1"
      @click="goBack"
    >
      <span class="material-symbols-rounded text-white">
        {{ props.icon }}
      </span>
    </button>

    <h1 class="font-medium">{{ props.title }}</h1>
  </header>
</template>
