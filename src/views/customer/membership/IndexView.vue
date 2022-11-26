<script setup>
import TextField from "@/components/TextField.vue";
import MembershipProgramCard from "@/components/MembershipProgramCard.vue";
import { RouterLink } from "vue-router";
import BaseLayout from "../../../layouts/BaseLayout.vue";
import { computed, onMounted } from "vue";
import { useLoadingStore } from "@/stores/loading";
import { useMembershipsStore } from "@/stores/memberships";

const loadingStore = useLoadingStore();
const membershipsStore = useMembershipsStore();

const membershipCards = computed(() =>
  membershipsStore.memberships.map((membership) => ({
    id: membership.id,
    programName: membership.name,
    programType: membership.type,
    programImg: membership.img,
    totalPoint: membership[membership.type],
    claimableRewards: membership.redeemableRewards,
  }))
);

onMounted(async () => {
  loadingStore.showLoading();
  await membershipsStore.fetchMemberships();
  loadingStore.hideLoading();
});
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Daftar Membership"
  >
    <div class="px-7.5">
      <TextField placeholder="Cari merchant/brand..." type-input="text" />
      <div class="flex flex-col gap-3 mt-8">
        <RouterLink
          v-for="membership in membershipCards"
          :key="membership.id"
          :to="{
            name: 'customer-membership-detail',
            params: { membership: membership.id },
          }"
        >
          <MembershipProgramCard :is-merchant="false" v-bind="membership" />
        </RouterLink>
      </div>
    </div>
  </BaseLayout>
</template>
