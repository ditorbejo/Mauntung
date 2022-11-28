<script setup>
import QrcodeVue from "qrcode.vue";
import PopupModal from "../../components/PopupModal.vue";
import { computed, onMounted, ref } from "vue";
import BaseLayout from "../../layouts/BaseLayout.vue";
import { useLoadingStore } from "../../stores/loading";
import { useRoute } from "vue-router";
import { useRedeemsStore } from "../../stores/redeems";

const route = useRoute();
const loadingStore = useLoadingStore();
const redeemsStore = useRedeemsStore();

const redeem = computed(() => {
  if (
    redeemsStore.redeemDetail === null ||
    redeemsStore.redeemDetail === undefined
  ) {
    return null;
  }

  const { reward } = redeemsStore.redeemDetail;

  return {
    name: reward.name,
    point: reward.point,
    stamp: reward.stamp,
    img: reward.img,
    description: reward.description,
    termsCondition: reward.termsCondition,
    isRedeemed: redeemsStore.redeemDetail.isRedeemed,
    expiredAt: new Date(redeemsStore.redeemDetail.expiredAt),
    redeemCode: redeemsStore.redeemDetail.redeemCode,
    redeemedAt: new Date(redeemsStore.redeemDetail.redeemedAt),
    isExpired: new Date() > new Date(redeemsStore.redeemDetail.expiredAt),
  };
});

const modalIsOpen = ref(false);

onMounted(async () => {
  loadingStore.showLoading();
  await redeemsStore.fetchRedeemDetail(route.params.redeem);
  loadingStore.hideLoading();
});
</script>

<template>
  <BaseLayout v-if="redeem">
    <div class="relative shadow-cardShadow -mt-5">
      <button
        class="absolute flex items-center bg-biru2 rounded-full py-2.5 px-2.5 top-4 left-4 z-30"
      >
        <span
          class="material-symbols-rounded text-white text-base leading-none"
        >
          arrow_back
        </span>
      </button>
      <img
        class="w-full aspect-square rounded-bl-lg rounded-br-lg"
        :src="redeem.img"
        :alt="redeem.name"
      />
      <div class="px-5 py-2.5">
        <h2 class="font-semibold text-lg">{{ redeem.name }}</h2>
        <h4 v-if="redeem.point">{{ redeem.point }} Poin</h4>
        <h4 v-if="redeem.stamp">{{ redeem.stamp }} Stempel</h4>
      </div>
    </div>

    <div
      class="shadow-cardShadow px-5 py-2.5 flex justify-between items-center mt-2"
    >
      <template v-if="!redeem.isRedeemed">
        <div>
          <p class="text-sm">Gunakan sebelum:</p>
          <p class="font-medium">{{ redeem.expiredAt.toDateString() }}</p>
        </div>
        <div v-if="!redeem.isExpired" class="flex gap-2.5 items-center">
          <button
            class="btn btn-primary btn-rounded btn-base"
            @click="() => (modalIsOpen = true)"
          >
            Gunakan
          </button>
        </div>
        <div v-else class="flex gap-2.5 items-center">
          <button class="btn btn-disabled btn-rounded btn-base" disabled>
            Kadaluarsa
          </button>
        </div>
      </template>
      <template v-else>
        <div>
          <p class="text-sm">Terpakai pada:</p>
          <p class="font-medium">{{ redeem.redeemedAt.toDateString() }}</p>
        </div>
        <div class="flex gap-2.5 items-center">
          <button class="btn btn-disabled btn-rounded btn-base" disabled>
            Terpakai
          </button>
        </div>
      </template>
    </div>

    <div class="shadow-cardShadow px-5 py-2.5 mt-2">
      <h2 class="font-medium">Deskripsi</h2>
      <p>{{ redeem.description }}</p>
    </div>

    <div class="shadow-cardShadow px-5 py-2.5 mt-2">
      <h2 class="font-medium">Syarat & Ketentuan</h2>
      <p>{{ redeem.termsCondition }}</p>
    </div>

    <PopupModal
      :isOpen="modalIsOpen"
      @modal-close="
        () => {
          modalIsOpen = false;
        }
      "
    >
      <template #header>
        <div class="flex justify-between p-4 items-center">
          <p class="font-semibold">Kode Reward</p>
          <span
            class="p-2 bg-biru2 text-white rounded-full material-symbols-rounded"
            data-dismiss="modal"
          >
            close
          </span>
        </div>
      </template>
      <template #body>
        <div class="flex flex-col w-full items-center">
          <QrcodeVue
            class="px-3 py-3 border rounded-lg border-lightGray shadow-cardShadow"
            render-as="svg"
            :value="redeem.redeemCode"
            :size="300"
            level="M"
          />
        </div>
        <p class="p-4">
          Tunjukkan kode reward ini ke
          <span class="font-semibold">Merchant</span> untuk divalidasi.
        </p>
      </template>
    </PopupModal>
  </BaseLayout>
</template>
