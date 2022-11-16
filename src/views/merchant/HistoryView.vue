<script setup>
import { ref } from "vue";
import AppBar from "../../components/AppBar.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import PointHistoryList from "../../components/PointHistoryList.vue";
import RewardHistoryList from "../../components/RewardHistoryList.vue";

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
    urlImage : 'https://via.placeholder.com/24',
    nameReward : '1x Cuci Baju',
    customerName: 'Budi',
    date : new Date(2022, 10, 1, 9, 55),
  },
  {
    urlImage : 'https://via.placeholder.com/24',
    nameReward : '1x Cuci Baju',
    customerName: 'Joni',
    date : new Date(2022, 10, 1, 9, 55),
  },
  {
    urlImage : 'https://via.placeholder.com/24',
    nameReward : '1x Cuci Baju',
    customerName: 'Adu',
    date : new Date(2022, 10, 1, 9, 55),
  },
  {
    urlImage : 'https://via.placeholder.com/24',
    nameReward : '1x Cuci Baju',
    customerName: 'Popo',
    date : new Date(2022, 10, 1, 9, 55),
  }
];

const active = ref("left");
</script>

<template>
  <main>
    <AppBar icon="arrow_back" title="Daftar Riwayat"></AppBar>
    <ButtonGroup
      @left-click="() => (active = 'left')"
      @right-click="() => (active = 'right')"
      class="mt-5 mb-3 px-7.5"
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
  </main>
</template>
