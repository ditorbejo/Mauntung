<script setup>
import { ref } from "vue";
import AppBar from "../../components/AppBar.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import CustomerPointHistoryGroup from "../../components/CustomerPointHistoryGroup.vue";

const claimedPoints = [
  {
    programName: "Laundree",
    programImg: "https://via.placeholder.com/30",
    type: "stamp",
    amount: 1,
    date: new Date(2022, 10, 1),
    isGain: true,
  },
  {
    programName: "KopiQue",
    programImg: "https://via.placeholder.com/30",
    type: "point",
    amount: 10,
    date: new Date(2022, 10, 1),
    isGain: true,
  },
  {
    programName: "Laundree",
    programImg: "https://via.placeholder.com/30",
    type: "stamp",
    amount: 1,
    date: new Date(2022, 10, 1),
    isGain: true,
  },
];

const redeemedPoints = [
  {
    programName: "Laundree",
    programImg: "https://via.placeholder.com/30",
    type: "stamp",
    amount: 1,
    date: new Date(2022, 10, 1),
    isGain: false,
  },
  {
    programName: "KopiQue",
    programImg: "https://via.placeholder.com/30",
    type: "point",
    amount: 10,
    date: new Date(2022, 10, 1),
    isGain: false,
  },
  {
    programName: "Laundree",
    programImg: "https://via.placeholder.com/30",
    type: "stamp",
    amount: 1,
    date: new Date(2022, 10, 1),
    isGain: false,
  },
];

const active = ref("left");
</script>

<template>
  <main>
    <AppBar icon="arrow_back" title="Daftar Riwayat" />
    <div class="pb-20">
      <ButtonGroup
        @left-click="() => (active = 'left')"
        @right-click="() => (active = 'right')"
        class="mt-5 mb-3 px-7.5"
        :active="active"
        left-text="Perolehan"
        right-text="Penukaran"
      />
      <div v-show="active == 'left'" class="flex flex-col gap-6">
        <CustomerPointHistoryGroup :histories="claimedPoints" />
        <CustomerPointHistoryGroup :histories="claimedPoints" />
      </div>
      <div v-show="active == 'right'" class="flex flex-col gap-6">
        <CustomerPointHistoryGroup :histories="redeemedPoints" />
        <CustomerPointHistoryGroup :histories="redeemedPoints" />
      </div>
    </div>
  </main>
</template>
