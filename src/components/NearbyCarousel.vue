<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

defineProps({
  slides: Array,
});
</script>

<template>
  <VueperSlides :arrows="false" :bullets-outside="true" :slide-ratio="1 / 2">
    <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
  </VueperSlides>
</template>
