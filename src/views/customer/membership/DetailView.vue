<script setup>
import AppBar from "@/components/AppBar.vue";
import RedeemCard from "@/components/RedeemCard.vue";
import RewardCard from "../../../components/RewardCard.vue";
import TierCard from "@/components/TierCard.vue";
import { RouterLink } from "vue-router";

const tier = {
  tiers: [
    {
      id: 1,
      name: "Bronze",
      img: "https://via.placeholder.com/30",
      minPoints: 0,
    },
    {
      id: 2,
      name: "Silver",
      img: "https://via.placeholder.com/30",
      minPoints: 100,
    },
    {
      id: 3,
      name: "Gold",
      img: "https://via.placeholder.com/30",
      minPoints: 300,
    },
    {
      id: 4,
      name: "Platinum",
      img: "https://via.placeholder.com/30",
      minPoints: 500,
    },
  ],
  currentTier: {
    id: 2,
    name: "Silver",
    requiredPoints: 100,
    progress: 2 / 3,
    deadline: new Date(2022, 11, 31),
  },
};

const point = {
  balance: 100,
  willVoidSoon: {
    amount: 10,
    voidAt: new Date(2022, 11, 20),
  },
};

const featuredRewards = [
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
];

const featuredRedeems = [
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
];
</script>

<template>
  <main>
    <AppBar icon="arrow_back" title="Detail Membership" />

    <div class="pt-6 pb-20">
      <section class="mx-7.5">
        <TierCard :tier="tier" />
        <div
          class="flex items-center justify-between mt-3 p-4 border border-lightGray shadow-cardShadow bg-white rounded-lg"
        >
          <div class="flex flex-col gap-1">
            <p class="text-lg font-semibold">Poin Anda</p>
            <p class="text-sm">
              <span class="font-semibold"
                >{{ point.willVoidSoon.amount }} poin</span
              >
              akan hangus pada
              <span class="font-semibold">20 Des 2022</span>
            </p>
          </div>
          <p class="text-lg font-semibold">{{ point.balance }}</p>
        </div>
      </section>

      <section class="mt-8">
        <div class="flex justify-between items-center mb-5 mx-7.5">
          <h2 class="text-lg font-semibold">Tukarkan Poin Anda</h2>
          <RouterLink :to="{ name: 'customer-membership-index' }">
            <button class="flex items-center">
              <span class="text-xs text-biru2 font-semibold mr-2">Semua</span>
              <span
                class="p-1 rounded-full bg-biru2 text-white material-symbols-rounded arrow-button text-xs leading-none"
              >
                arrow_right_alt
              </span>
            </button>
          </RouterLink>
        </div>

        <div class="flex gap-3 overflow-x-auto px-7.5 py-1">
          <RewardCard
            v-for="reward in featuredRewards"
            class="flex-none max-w-[9rem]"
            v-bind="reward"
            :key="reward.id"
          />
        </div>
      </section>

      <section class="mt-8">
        <div class="flex justify-between items-center mb-5 mx-7.5">
          <h2 class="text-lg font-semibold">Reward Anda</h2>
          <RouterLink :to="{ name: 'customer-membership-index' }">
            <button class="flex items-center">
              <span class="text-xs text-biru2 font-semibold mr-2">Semua</span>
              <span
                class="p-1 rounded-full bg-biru2 text-white material-symbols-rounded arrow-button text-xs leading-none"
              >
                arrow_right_alt
              </span>
            </button>
          </RouterLink>
        </div>

        <div class="flex flex-col gap-3 mt-3 items-center">
          <RedeemCard
            v-for="(card, index) in featuredRedeems"
            :key="index"
            v-bind="card"
          />
        </div>
      </section>
    </div>
  </main>
</template>
