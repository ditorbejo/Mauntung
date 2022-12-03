<script setup>
import { ref } from "vue";
import BaseLayout from "../../layouts/BaseLayout.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import PointHistoryList from "../../components/MerchantPointHistoryGroup.vue";
import RewardHistoryList from "../../components/MerchantRewardHistoryGroup.vue";

const pointHistories = [
  {
    basePoint: 10,
    nominal: 100000,
    date: new Date(2022, 10, 1, 9, 50),
  },
  {
    basePoint: 20,
    nominal: 200000,
    date: new Date(2022, 10, 1, 9, 52),
  },
  {
    basePoint: 40,
    nominal: 300000,
    date: new Date(2022, 10, 1, 9, 55),
  },
];

const rewardHistories = [
  {
    customerImg: "https://via.placeholder.com/24",
    rewardName: "1x Cuci Baju",
    customerName: "Budi",
    date: new Date(2022, 10, 1, 9, 55),
  },
  {
    customerImg: "https://via.placeholder.com/24",
    rewardName: "1x Cuci Baju",
    customerName: "Joni",
    date: new Date(2022, 10, 1, 9, 55),
  },
  {
    customerImg: "https://via.placeholder.com/24",
    rewardName: "1x Cuci Baju",
    customerName: "Adu",
    date: new Date(2022, 10, 1, 9, 55),
  },
  {
    customerImg: "https://via.placeholder.com/24",
    rewardName: "1x Cuci Baju",
    customerName: "Popo",
    date: new Date(2022, 10, 1, 9, 55),
  },
];

const active = ref("left");
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Daftar Riwayat"
    @app-bar-button-click="
      $router.push({
        name: 'merchant-home',
      })
    "
  >
    <ButtonGroup
      @left-click="() => (active = 'left')"
      @right-click="() => (active = 'right')"
      class="mb-3 px-7.5"
      :active="active"
      left-text="Poin"
      right-text="Reward"
    ></ButtonGroup>
    <div v-show="active == 'left'" class="flex flex-col gap-6">
      <PointHistoryList :histories="pointHistories"> </PointHistoryList>
      <PointHistoryList :histories="pointHistories"> </PointHistoryList>
    </div>
    <div v-show="active == 'right'" class="flex flex-col gap-6">
      <RewardHistoryList :histories="rewardHistories"></RewardHistoryList>
      <RewardHistoryList :histories="rewardHistories"></RewardHistoryList>
    </div>
  </BaseLayout>
</template>
