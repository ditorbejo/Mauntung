<script setup>
import RedeemCard from "@/components/RedeemCard.vue";
import RewardCard from "../../../components/RewardCard.vue";
import TierCard from "@/components/TierCard.vue";
import StampCard from "@/components/StampCard.vue";
import { RouterLink, useRoute } from "vue-router";
import BaseLayout from "../../../layouts/BaseLayout.vue";
import { useLoadingStore } from "../../../stores/loading";
import { useMembershipsStore } from "../../../stores/memberships";
import { computed, onMounted } from "vue";

const route = useRoute();
const loadingStore = useLoadingStore();
const membershipsStore = useMembershipsStore();

const tier = computed(() => {
  if (
    membershipsStore.membershipDetail === null ||
    membershipsStore.membershipDetail === undefined ||
    membershipsStore.membershipDetail?.type !== "point"
  ) {
    return null;
  }

  const { point } = membershipsStore.membershipDetail;

  return {
    tiers: point.tiers.map(({ id, name, pointsRequired }) => ({
      id,
      name,
      img: "https://via.placeholder.com/30",
      minPoints: pointsRequired,
    })),
    currentTier: {
      id: point.currentTier.id,
      name: point.currentTier.name,
      requiredPoints: point.currentTier.pointsToUpclass,
      progress: point.currentTier.progress,
      deadline: new Date(point.currentTier.upclassDeadline),
    },
  };
});

const point = computed(() => {
  if (
    membershipsStore.membershipDetail === null ||
    membershipsStore.membershipDetail === undefined ||
    membershipsStore.membershipDetail?.type !== "point"
  ) {
    return null;
  }

  const { point } = membershipsStore.membershipDetail;
  return {
    balance: point.balance,
    willVoidSoon: {
      amount: point.willVoidSoon.amount,
      voidAt: new Date(point.willVoidSoon.voidAt),
    },
  };
});

const featuredRewards = computed(() => {
  if (
    membershipsStore.membershipDetail === null ||
    membershipsStore.membershipDetail === undefined
  ) {
    return [];
  }

  return membershipsStore.membershipDetail.featuredRewards.map(
    ({ id, name, point, stamp, img }) => ({
      id,
      name,
      point,
      stamp,
      img,
    })
  );
});

const featuredRedeems = computed(() => {
  if (
    membershipsStore.membershipDetail === null ||
    membershipsStore.membershipDetail === undefined
  ) {
    return [];
  }

  return membershipsStore.membershipDetail.featuredRedeems.map(
    ({ id, name, expiredAt, isRedeemed }) => ({
      id,
      rewardName: name,
      isUsed: isRedeemed,
      date: new Date(expiredAt),
      programImg: membershipsStore.membershipDetail.img,
      programName: membershipsStore.membershipDetail.name,
    })
  );
});

const stampCard = computed(() => {
  if (
    membershipsStore.membershipDetail === null ||
    membershipsStore.membershipDetail === undefined ||
    membershipsStore.membershipDetail?.type !== "stamp"
  ) {
    return null;
  }

  const { stamp } = membershipsStore.membershipDetail;

  return {
    balance: stamp.balance,
    willVoidSoon: {
      stamps: stamp.willVoidSoon.amount,
      voidAt: new Date(stamp.willVoidSoon.voidAt),
    },
    capacity: stamp.capacity,
  };
});

const membershipNotFound = computed(
  () =>
    membershipsStore.membershipDetail === null ||
    membershipsStore.membershipDetail === undefined
);

onMounted(async () => {
  loadingStore.showLoading();
  await membershipsStore.fetchMembershipDetail(route.params.membership);
  loadingStore.hideLoading();
});
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Detail Membership"
  >
    <div v-if="!loadingStore.isLoading && !membershipNotFound">
      <section class="mx-7.5">
        <TierCard v-if="tier" :tier="tier" />
        <div
          v-if="point"
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
        <StampCard v-if="stampCard" :stamp-card="stampCard" />
      </section>

      <section class="mt-8">
        <div class="flex justify-between items-center mb-5 mx-7.5">
          <h2 class="text-lg font-semibold">
            Tukarkan
            {{
              membershipsStore?.membershipDetail?.type === "stamp"
                ? "Stempel"
                : "Poin"
            }}
            Anda
          </h2>
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
            <RewardCard v-bind="reward" class="w-36" />
          </RouterLink>
          <p v-if="featuredRewards.length === 0">
            Belum Ada Reward Yang Dapat Ditukarkan
          </p>
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
          <p v-if="featuredRedeems.length === 0">Anda Belum Memiliki Reward</p>
        </div>
      </section>
    </div>

    <h2
      v-else-if="!loadingStore.isLoading && membershipNotFound"
      class="text-center text-xl font-semibold"
    >
      Not Found
    </h2>
  </BaseLayout>
</template>
