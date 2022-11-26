<script setup>
import TextField from "../../components/TextField.vue";
import RedeemCard from "../../components/RedeemCard.vue";
import BaseLayout from "../../layouts/BaseLayout.vue";
import { useLoadingStore } from "../../stores/loading";
import { useRedeemsStore } from "../../stores/redeems";
import { computed, onMounted } from "vue";

const loadingStore = useLoadingStore();
const redeemsStore = useRedeemsStore();

const redeemCards = computed(() =>
  redeemsStore.redeems.map(({ name, membership, isRedeemed, expiredAt }) => ({
    rewardName: name,
    isUsed: isRedeemed,
    date: new Date(expiredAt),
    programImg: membership.img,
    programName: membership.name,
  }))
);

onMounted(async () => {
  loadingStore.showLoading();
  await redeemsStore.fetchRedeems();
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
        <RedeemCard
          v-for="(card, index) in redeemCards"
          :key="index"
          v-bind="card"
        />
      </div>
    </div>
  </BaseLayout>
</template>
