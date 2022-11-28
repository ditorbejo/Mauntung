<script setup>
import { useRouter } from "vue-router";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

defineProps({
  slides: Array,
});

const router = useRouter();
</script>

<template>
  <VueperSlides :arrows="false" :bullets-outside="true" :slide-ratio="1 / 2">
    <VueperSlide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      @click="
        () =>
          router.push({
            name: 'customer-membership-join',
            params: { membership: slide.id },
          })
      "
    />
  </VueperSlides>
</template>
