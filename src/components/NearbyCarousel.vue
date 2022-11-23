<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

const slides = [
  {
    image: "https://via.placeholder.com/300x150",
  },
  {
    image: "https://via.placeholder.com/300x150",
  },
  {
    image: "https://via.placeholder.com/300x150",
  },
  {
    image: "https://via.placeholder.com/300x150",
  },
  {
    image: "https://via.placeholder.com/300x150",
  },
];
</script>

<template>
  <VueperSlides :arrows="false" :bullets-outside="true" :slide-ratio="1 / 2">
    <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
  </VueperSlides>
</template>
