<script setup>
import AppBar from "../../components/AppBar.vue";
import TextField from "../../components/TextField.vue";
import RedeemCard from "../../components/RedeemCard.vue";

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
  <main>
    <AppBar icon="arrow_back" title="Daftar Reward" />
    <div class="px-7.5 pt-5 pb-20">
      <TextField placeholder="Cari merchant/brand..." type-input="text" />

      <div class="flex flex-col gap-3 mt-8 items-center">
        <RedeemCard
          v-for="(card, index) in redeemCards"
          :key="index"
          v-bind="card"
        />
      </div>
    </div>
  </main>
</template>
