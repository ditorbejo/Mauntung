<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import AppBar from "@/components/AppBar.vue";
import MembershipProgramCard from "@/components/MembershipProgramCard.vue";
import { useLoadingStore } from "@/stores/loading";

const loadingStore = useLoadingStore();

const detail = {
  programName: "KopiQue Membership",
  programImg: "https://via.placeholder.com/30",
  balance: 18,
  claimablePoint: 12,
  redeemBefore: new Date(2022, 12, 10, 23, 59),
  ttl: 365,
};
const isClaimed = ref(false);

const membership = {
  programName: "KopiQue Membership",
  programImg: "https://via.placeholder.com/36",
  programType: "point",
  totalPoint: 30,
  claimableReward: 3,
};

const claimPoint = () => {
  loadingStore.showLoading();
  setTimeout(() => {
    loadingStore.hideLoading();
    isClaimed.value = true;
  }, 2000);
};
</script>

<template>
  <main>
    <AppBar icon="arrow_back" title="Claim Poin" />
    <div v-if="!isClaimed" class="px-7.5 pt-4 pb-20">
      <div
        class="p-3 rounded-lg bg-white border border-lightGray shadow-cardShadow flex flex-col gap-3"
      >
        <div>
          <p class="text-sm">Membership:</p>
          <div class="flex items-center gap-2 mt-1">
            <img :src="detail.programImg" :alt="detail.programName" />
            <p class="font-medium">{{ detail.programName }}</p>
          </div>
        </div>

        <div>
          <p class="text-sm">Poin Anda Saat Ini:</p>
          <p class="font-medium mt-1">{{ detail.balance }} Poin</p>
        </div>

        <div>
          <p class="text-sm">Poin Yang Akan Didapat:</p>
          <p class="font-medium mt-1">{{ detail.claimablePoint }} Poin</p>
        </div>

        <div>
          <p class="text-sm">Claim Sebelum:</p>
          <p class="font-medium mt-1">
            {{ detail.redeemBefore.toDateString() }}
          </p>
        </div>

        <div>
          <p class="text-sm">Masa Aktif Poin Setelah Claim:</p>
          <p class="font-medium mt-1">{{ detail.ttl }} Hari</p>
        </div>
      </div>

      <button
        class="btn btn-primary btn-rounded btn-lg w-full mt-12"
        @click="claimPoint"
      >
        Claim
      </button>

      <RouterLink :to="{ name: 'customer-scanner', replace: true }">
        <button class="btn btn-secondary btn-rounded btn-lg w-full mt-3">
          Kembali ke Pemindai
        </button>
      </RouterLink>
    </div>
    <div v-else class="px-7.5 pt-4 pb-20">
      <div class="flex flex-col gap-12 items-center">
        <h2 class="text-lg font-semibold text-center">
          Selamat <br />
          Anda Mendapatkan
        </h2>
        <h3 class="text-4xl font-semibold">{{ detail.claimablePoint }} Poin</h3>
        <MembershipProgramCard
          class="w-full"
          :is-merchant="false"
          v-bind="membership"
        />
      </div>

      <RouterLink :to="{ name: 'customer-scanner', replace: true }">
        <button class="btn btn-primary btn-rounded btn-lg w-full mt-12">
          Kembali ke Pemindai
        </button>
      </RouterLink>
    </div>
  </main>
</template>
