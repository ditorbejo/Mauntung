<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import NearbyCarousel from "@/components/NearbyCarousel.vue";
import ButtonGroup from "@/components/ButtonGroup.vue";
import PointCard from "@/components/PointCard.vue";
import RedeemCard from "@/components/RedeemCard.vue";
import MembershipProgramCard from "@/components/MembershipProgramCard.vue";

const pointCards = [
  {
    name: "Laundree",
    value: 1,
    type: "point",
    date: new Date(),
    programImg: "https://via.placeholder.com/40",
  },
  {
    name: "Laundree",
    value: 1,
    type: "point",
    date: new Date(),
    programImg: "https://via.placeholder.com/40",
  },
  {
    name: "Laundree",
    value: 1,
    type: "point",
    date: new Date(),
    programImg: "https://via.placeholder.com/40",
  },
];

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
];

const active = ref("left");
</script>

<template>
  <main class="px-7.5 pt-4 pb-20">
    <h1 class="mb-5 text-lg font-semibold">Halo, Joomla</h1>

    <section id="nearby-brands">
      <h2 class="text-lg font-semibold mb-2">Brand di sekitarmu</h2>
      <NearbyCarousel />
    </section>

    <section class="mt-8" id="recent-activites">
      <h2 class="mb-5 text-lg font-semibold">Aktivitas Terkini</h2>
      <ButtonGroup
        :active="active"
        left-text="Perolehan"
        right-text="Penukaran"
        @left-click="() => (active = 'left')"
        @right-click="() => (active = 'right')"
      />
      <div v-show="active === 'left'" class="flex flex-col gap-3 mt-3">
        <PointCard
          v-for="(card, index) in pointCards"
          :key="index"
          v-bind="card"
        />
      </div>
      <div
        v-show="active === 'right'"
        class="flex flex-col gap-3 mt-3 items-center"
      >
        <RedeemCard
          v-for="(card, index) in redeemCards"
          :key="index"
          v-bind="card"
        />
      </div>
    </section>

    <section class="mt-8" id="featured-memberships">
      <div class="flex justify-between items-center mb-5">
        <h2 class="text-lg font-semibold">Membership Anda</h2>
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
      <div class="flex flex-col gap-3">
        <RouterLink
          v-for="index in 3"
          :key="index"
          :to="{ name: 'customer-membership-detail', params: { id: index } }"
        >
          <MembershipProgramCard
            :is-merchant="false"
            program-name="Laundree Membership"
            program-type="point"
            program-img="https://via.placeholder.com/48"
            :total-point="10"
          />
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
