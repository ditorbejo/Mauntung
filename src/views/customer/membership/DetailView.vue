<script setup>
import RedeemCard from "@/components/RedeemCard.vue";
import RewardCard from "../../../components/RewardCard.vue";
import TierCard from "@/components/TierCard.vue";
import StampCard from "@/components/StampCard.vue";
import { RouterLink, useRoute } from "vue-router";
import BaseLayout from "../../../layouts/BaseLayout.vue";

const route = useRoute();

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

const stampCard = {
  balance: 5,
  willVoidSoon: {
    stamps: 1,
    voidAt: new Date(2022, 11, 20),
  },
  capacity: 10,
};
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Detail Membership"
  >
    <div>
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
        <StampCard class="mt-3" :stamp-card="stampCard" />
      </section>

      <section class="mt-8">
        <div class="flex justify-between items-center mb-5 mx-7.5">
          <h2 class="text-lg font-semibold">Tukarkan Poin Anda</h2>
          <RouterLink :to="{ name: 'customer-membership-rewards' }">
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
          <RouterLink
            v-for="reward in featuredRewards"
            class="flex-none max-w-[9rem]"
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
      </section>

      <section class="mt-8">
        <div class="flex justify-between items-center mb-5 mx-7.5">
          <h2 class="text-lg font-semibold">Reward Anda</h2>
          <RouterLink :to="{ name: 'customer-membership-redeems' }">
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
  </BaseLayout>
</template>
