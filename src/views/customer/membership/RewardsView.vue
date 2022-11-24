<script setup>
import AppBar from "@/components/AppBar.vue";
import TextField from "@/components/TextField.vue";
import RewardCard from "../../../components/RewardCard.vue";

const rewards = [
  {
    id: 1,
    name: "1 Kali Cuci Motor Gratis",
    point: 10,
    img: "https://via.placeholder.com/64",
  },
  {
    id: 2,
    name: "1 Kali Cuci Motor Gratis",
    point: 10,
    img: "https://via.placeholder.com/64",
  },
  {
    id: 3,
    name: "1 Kali Cuci Motor Gratis",
    point: 10,
    img: "https://via.placeholder.com/64",
  },
  {
    id: 4,
    name: "1 Kali Cuci Motor Gratis",
    point: 10,
    img: "https://via.placeholder.com/64",
  },
  {
    id: 5,
    name: "1 Kali Cuci Motor Gratis",
    point: 10,
    img: "https://via.placeholder.com/64",
  },
  {
    id: 6,
    name: "1 Kali Cuci Motor Gratis",
    point: 10,
    img: "https://via.placeholder.com/64",
  },
  {
    id: 6,
    name: "1 Kali Cuci Motor Gratis",
    point: 10,
    img: "https://via.placeholder.com/64",
  },
  {
    id: 8,
    name: "1 Kali Cuci Motor Gratis",
    point: 10,
    img: "https://via.placeholder.com/64",
  },
];
</script>

<template>
  <main class="pb-20">
    <AppBar icon="arrow_back" title="Daftar Membership" />
    <div class="pt-5 px-7.5">
      <TextField placeholder="Cari reward..." type-input="text" />
      <div class="grid grid-cols-2 items-center gap-4 mt-8">
        <RewardCard
          v-for="reward in rewards"
          v-bind="reward"
          :key="reward.id"
        />
      </div>
    </div>
  </main>
</template>
