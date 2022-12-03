<script setup>
import PopupModal from "../../components/PopupModal.vue";
import { computed, onMounted, ref } from "vue";
import BaseLayout from "../../layouts/BaseLayout.vue";
import { useLoadingStore } from "../../stores/loading";
import { useRewardsStore } from "../../stores/rewards";
import { useRoute } from "vue-router";

const route = useRoute();
const loadingStore = useLoadingStore();
const rewardsStore = useRewardsStore();

const reward = computed(() => {
  if (
    rewardsStore.rewardDetail === null ||
    rewardsStore.rewardDetail === undefined
  ) {
    return null;
  }

  return {
    name: rewardsStore.rewardDetail.name,
    point: rewardsStore.rewardDetail.point,
    stamp: rewardsStore.rewardDetail.stamp,
    img: rewardsStore.rewardDetail.img,
    description: rewardsStore.rewardDetail.description,
    termsCondition: rewardsStore.rewardDetail.termsCondition,
  };
});

const qty = ref(1);
const increaseQty = () => {
  qty.value++;
};

const decreaseQty = () => {
  if (qty.value > 1) {
    qty.value--;
  }
};

const requiredPoints = computed(() =>
  reward.value.point ? qty.value * reward.value.point : null
);

const requiredStamps = computed(() =>
  reward.value.stamp ? qty.value * reward.value.stamp : null
);

const modalIsOpen = ref(false);

onMounted(async () => {
  loadingStore.showLoading();
  await rewardsStore.fetchRewardDetail(route.params.reward);
  loadingStore.hideLoading();
});
</script>

<template>
  <BaseLayout
    v-if="rewardsStore.rewardDetail"
    :use-bottom-action-bar="true"
    @bottom-action-bar-button-click="() => (modalIsOpen = true)"
    bottom-action-bar-action-name="Tukarkan"
  >
    <div class="relative shadow-cardShadow -mt-5">
      <button
        class="absolute flex items-center bg-biru2 rounded-full py-2.5 px-2.5 top-4 left-4 z-30"
        @click="$router.back()"
      >
        <span
          class="material-symbols-rounded text-white text-base leading-none"
        >
          arrow_back
        </span>
      </button>
      <img
        class="w-full aspect-square rounded-bl-lg rounded-br-lg"
        :src="reward.img"
        :alt="reward.name"
      />
      <div class="px-5 py-2.5">
        <h2 class="font-semibold text-lg">{{ reward.name }}</h2>
        <h4 v-if="reward.point">{{ reward.point }} Poin</h4>
        <h4 v-if="reward.stamp">{{ reward.stamp }} Stempel</h4>
      </div>
    </div>

    <div
      class="shadow-cardShadow px-5 py-2.5 flex justify-between items-center mt-2"
    >
      <p class="font-medium">Jumlah</p>
      <div class="flex gap-2.5 items-center">
        <button
          class="flex items-center bg-biru2 rounded-full py-2.5 px-2.5"
          @click="decreaseQty"
        >
          <span
            class="material-symbols-rounded text-white text-base leading-none"
          >
            remove
          </span>
        </button>
        <div
          class="font-semibold text-lg w-12 h-12 text-center border border-biru1 rounded-lg flex items-center justify-center"
        >
          {{ qty }}
        </div>
        <button
          class="flex items-center bg-biru2 rounded-full py-2.5 px-2.5"
          @click="increaseQty"
        >
          <span
            class="material-symbols-rounded text-white text-base leading-none"
          >
            add
          </span>
        </button>
      </div>
    </div>

    <div class="shadow-cardShadow px-5 py-2.5 mt-2">
      <h2 class="font-medium">Deskripsi</h2>
      <p>{{ reward.description }}</p>
    </div>

    <div class="shadow-cardShadow px-5 py-2.5 mt-2">
      <h2 class="font-medium">Syarat & Ketentuan</h2>
      <p>{{ reward.termsCondition }}</p>
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
          <p class="font-semibold">Konfirmasi</p>
          <span
            class="p-2 bg-biru2 text-white rounded-full material-symbols-rounded"
            data-dismiss="modal"
          >
            close
          </span>
        </div>
      </template>
      <template #body>
        <p class="p-4">
          Apakah Anda yakin akan menukarkan
          <span v-if="requiredPoints" class="font-semibold"
            >{{ requiredPoints }} poin</span
          >
          <span v-if="requiredStamps" class="font-semibold"
            >{{ requiredStamps }} stempel</span
          >
          Anda dengan reward
          <span class="font-semibold">{{ reward.name }} (x{{ qty }})</span> ?
        </p>
      </template>
      <template #footer>
        <div class="flex gap-2.5 p-4">
          <button
            class="btn btn-primary btn-rounded btn-sm flex-1"
            data-dismiss="modal"
          >
            Tukarkan
          </button>
          <button
            class="btn btn-secondary btn-rounded btn-sm flex-1"
            data-dismiss="modal"
          >
            Batal
          </button>
        </div>
      </template>
    </PopupModal>

    <template #bottom-action-bar>
      <p v-if="requiredPoints">{{ qty }} Pcs ({{ requiredPoints }} Poin)</p>
      <p v-if="requiredStamps">{{ qty }} Pcs ({{ requiredStamps }} Stempel)</p>
    </template>
  </BaseLayout>
</template>
