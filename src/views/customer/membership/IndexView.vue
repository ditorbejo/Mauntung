<script setup>
import TextField from "@/components/TextField.vue";
import MembershipProgramCard from "@/components/MembershipProgramCard.vue";
import { RouterLink } from "vue-router";
import BaseLayout from "../../../layouts/BaseLayout.vue";
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
          v-for="index in 10"
          :key="index"
          :to="{
            name: 'customer-membership-detail',
            params: { membership: index },
          }"
        >
          <MembershipProgramCard
            :is-merchant="false"
            program-name="Laundree Membership"
            program-type="point"
            program-img="https://via.placeholder.com/48"
            :total-point="10"
            :claimable-rewards="2"
          />
        </RouterLink>
      </div>
    </div>
  </BaseLayout>
</template>
