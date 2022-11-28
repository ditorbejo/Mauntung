<script setup>
import TextField from "../../components/TextField.vue";
import RedeemCard from "../../components/RedeemCard.vue";
import BaseLayout from "../../layouts/BaseLayout.vue";
import { useLoadingStore } from "../../stores/loading";
import { useRedeemsStore } from "../../stores/redeems";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const loadingStore = useLoadingStore();
const redeemsStore = useRedeemsStore();

const redeemCards = computed(() =>
  redeemsStore.redeems.map(
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

onMounted(async () => {
  loadingStore.showLoading();
  if (route.params.membership) {
    await redeemsStore.fetchMembershipRedeems(route.params.membership);
  } else {
    await redeemsStore.fetchRedeems();
  }
  loadingStore.hideLoading();
});
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
        <RouterLink
          v-for="(card, index) in redeemCards"
          :key="index"
          :to="{ name: 'customer-redeems-detail', params: { redeem: card.id } }"
        >
          <RedeemCard v-bind="card" />
        </RouterLink>
      </div>
    </div>
  </BaseLayout>
</template>
