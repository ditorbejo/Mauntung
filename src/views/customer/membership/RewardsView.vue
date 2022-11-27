<script setup>
import TextField from "@/components/TextField.vue";
import { computed, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import RewardCard from "../../../components/RewardCard.vue";
import BaseLayout from "../../../layouts/BaseLayout.vue";
import { useLoadingStore } from "../../../stores/loading";
import { useMembershipsStore } from "../../../stores/memberships";

const route = useRoute();
const loadingStore = useLoadingStore();
const membershipsStore = useMembershipsStore();

const rewards = computed(() => {
  if (
    membershipsStore.membershipRewards === null ||
    membershipsStore.membershipRewards === undefined
  ) {
    return null;
  }

  return membershipsStore.membershipRewards.map(
    ({ id, name, point, stamp, img }) => ({ id, name, point, stamp, img })
  );
});

const membershipNotFound = computed(
  () =>
    membershipsStore.membershipRewards === null ||
    membershipsStore.membershipRewards === undefined
);

onMounted(async () => {
  loadingStore.showLoading();
  await membershipsStore.fetchMembershipRewards(route.params.membership);
  loadingStore.hideLoading();
});
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Penukaran"
  >
    <div class="px-7.5" v-if="!loadingStore.isLoading && !membershipNotFound">
      <template v-if="rewards?.length > 0">
        <TextField placeholder="Cari reward..." type-input="text" />
        <div class="grid grid-cols-2 items-center gap-4 mt-8">
          <RouterLink
            v-for="reward in rewards"
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
      </template>
      <p v-else>Belum Ada Reward Yang Dapat Ditukarkan</p>
    </div>

    <h2
      v-else-if="!loadingStore.isLoading && membershipNotFound"
      class="text-center text-xl font-semibold"
    >
      Not Found
    </h2>
  </BaseLayout>
</template>
