<script setup>
import TextField from "../../components/TextField.vue";
import RedeemCard from "../../components/RedeemCard.vue";
import BaseLayout from "../../layouts/BaseLayout.vue";

const redeemCards = [
  {
    rewardName: "1 Kali Cuci Gratis",
    isUsed: false,
    date: new Date(2022, 11, 1),
    programImg: "https://via.placeholder.com/36",
    programName: "Laundree",
  },
  {
    rewardName: "1 Kali Cuci Gratis",
    isUsed: true,
    date: new Date(2022, 11, 1),
    programImg: "https://via.placeholder.com/36",
    programName: "Laundree",
  },
  {
    rewardName: "1 Kali Cuci Gratis",
    isUsed: false,
    date: new Date(2022, 10, 1),
    programImg: "https://via.placeholder.com/36",
    programName: "Laundree",
  },
  {
    rewardName: "1 Kali Cuci Gratis",
    isUsed: false,
    date: new Date(2022, 10, 1),
    programImg: "https://via.placeholder.com/36",
    programName: "Laundree",
  },
  {
    rewardName: "1 Kali Cuci Gratis",
    isUsed: false,
    date: new Date(2022, 10, 1),
    programImg: "https://via.placeholder.com/36",
    programName: "Laundree",
  },
  {
    rewardName: "1 Kali Cuci Gratis",
    isUsed: false,
    date: new Date(2022, 10, 1),
    programImg: "https://via.placeholder.com/36",
    programName: "Laundree",
  },
  {
    rewardName: "1 Kali Cuci Gratis",
    isUsed: false,
    date: new Date(2022, 10, 1),
    programImg: "https://via.placeholder.com/36",
    programName: "Laundree",
  },
];
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Daftar Reward"
  >
    <div class="px-7.5">
      <TextField placeholder="Cari merchant/brand..." type-input="text" />

      <div class="flex flex-col gap-3 mt-8 items-center">
        <RedeemCard
          v-for="(card, index) in redeemCards"
          :key="index"
          v-bind="card"
        />
      </div>
    </div>
  </BaseLayout>
</template>
