<script setup>
import AppBar from "@/components/AppBar.vue";
import TextField from "@/components/TextField.vue";
import { RouterLink, useRoute } from "vue-router";
import RewardCard from "../../../components/RewardCard.vue";

const route = useRoute();

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
        <RouterLink
          v-for="reward in rewards"
          :key="reward.id"
          :to="{
            name: 'customer-membership-rewards-detail',
            params: {
              membership: route.params.membership,
              reward: reward.id,
            },
          }"
        >
          <RewardCard v-bind="reward" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>
