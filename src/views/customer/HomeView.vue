<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import NearbyCarousel from "@/components/NearbyCarousel.vue";
import ButtonGroup from "@/components/ButtonGroup.vue";
import PointCard from "@/components/PointCard.vue";
import RedeemCard from "@/components/RedeemCard.vue";
import MembershipProgramCard from "@/components/MembershipProgramCard.vue";
import BaseLayout from "../../layouts/BaseLayout.vue";
import { useLoadingStore } from "../../stores/loading";
import { useNearbyBrandsStore } from "../../stores/nearbyBrands";
import { useTransactionsStore } from "../../stores/transactions";
import { useRedeemsStore } from "../../stores/redeems";
import { useMembershipsStore } from "../../stores/memberships";

const router = useRouter();

const active = ref("left");

const stores = {
  loading: useLoadingStore(),
  nearbyBrands: useNearbyBrandsStore(),
  transactions: useTransactionsStore(),
  redeems: useRedeemsStore(),
  memberships: useMembershipsStore(),
};

const nearbyBrandSlides = computed(() =>
  stores.nearbyBrands.nearbyBrands.map((brand) => ({ image: brand.img }))
);

const pointCards = computed(() =>
  stores.transactions.recentDebitTransactions.map(
    ({ membership, createdAt }) => ({
      name: membership.name,
      value: membership[membership.type],
      type: membership.type,
      date: new Date(createdAt),
      programImg: membership.img,
    })
  )
);

const redeemCards = computed(() =>
  stores.redeems.recentRedeems.map(
    ({ id, name, membership, isRedeemed, expiredAt }) => ({
      id,
      rewardName: name,
      isUsed: isRedeemed,
      date: new Date(expiredAt),
      programImg: membership.img,
      programName: membership.name,
    })
  )
);

const membershipCards = computed(() =>
  stores.memberships.recentMemberships.map((membership) => ({
    id: membership.id,
    programName: membership.name,
    programType: membership.type,
    programImg: membership.img,
    totalPoint: membership[membership.type],
    claimableRewards: membership.redeemableRewards,
  }))
);

onMounted(async () => {
  stores.loading.showLoading();
  await Promise.all([
    stores.nearbyBrands.fetchNearbyBrands(),
    stores.transactions.fetchRecentDebitTransactions(),
    stores.redeems.fetchRecentRedeems(),
    stores.memberships.fetchRecentMemberships(),
  ]);
  stores.loading.hideLoading();
});
</script>

<template>
  <BaseLayout
    :use-nav-bar="true"
    :use-fab="true"
    fab-icon="qr_code_scanner"
    @fab-click="() => router.push({ name: 'customer-scanner' })"
  >
    <div class="px-7.5">
      <h1 class="mb-5 text-lg font-semibold">Halo, Joomla</h1>

      <section id="nearby-brands">
        <h2 class="text-lg font-semibold mb-2">Brand di sekitarmu</h2>
        <NearbyCarousel :slides="nearbyBrandSlides" />
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
          <RouterLink
            v-for="(card, index) in redeemCards"
            :key="index"
            :to="{
              name: 'customer-redeems-detail',
              params: { redeem: card.id },
            }"
          >
            <RedeemCard v-bind="card" />
          </RouterLink>
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
            v-for="card in membershipCards"
            :key="card.id"
            :to="{
              name: 'customer-membership-detail',
              params: { membership: card.id },
            }"
          >
            <MembershipProgramCard :is-merchant="false" v-bind="card" />
          </RouterLink>
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<style scoped></style>
