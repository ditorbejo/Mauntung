<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import BaseLayout from "../../../layouts/BaseLayout.vue";
import { useLoadingStore } from "../../../stores/loading";
import { useNearbyBrandsStore } from "../../../stores/nearbyBrands";

const route = useRoute();
const loadingStore = useLoadingStore();
const nearbyBrandsStore = useNearbyBrandsStore();

const nearbyBrand = computed(() => {
  if (
    nearbyBrandsStore.nearbyBrandDetail === null ||
    nearbyBrandsStore.nearbyBrandDetail === undefined
  ) {
    return null;
  }

  return {
    id: nearbyBrandsStore.nearbyBrandDetail.id,
    img: nearbyBrandsStore.nearbyBrandDetail.img,
    name: nearbyBrandsStore.nearbyBrandDetail.name,
    description: nearbyBrandsStore.nearbyBrandDetail.description,
    membershipId: nearbyBrandsStore.nearbyBrandDetail.membership.id,
    membershipName: nearbyBrandsStore.nearbyBrandDetail.membership.name,
    membershipImg: nearbyBrandsStore.nearbyBrandDetail.membership.img,
    isMember: nearbyBrandsStore.nearbyBrandDetail.isMember,
  };
});

onMounted(async () => {
  loadingStore.showLoading();
  await nearbyBrandsStore.fetchNearbyBrandDetail(route.params.membership);
  loadingStore.hideLoading();
});
</script>

<template>
  <BaseLayout v-if="nearbyBrandsStore.nearbyBrandDetail">
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
        class="w-full aspect-square rounded-bl-lg rounded-br-lg object-cover"
        :src="nearbyBrand.img"
        :alt="nearbyBrand.name"
      />
      <div class="flex gap-3 px-5 py-2.5 items-center">
        <img
          class="w-16 h-16"
          :src="nearbyBrand.membershipImg"
          :alt="nearbyBrand.membershipName"
        />
        <div>
          <h2 class="font-semibold text-lg">
            {{ nearbyBrand.membershipName }}
          </h2>
          <h3 class="text">{{ nearbyBrand.name }}</h3>
        </div>
      </div>
    </div>

    <div class="shadow-cardShadow px-5 py-2.5 mt-2">
      <h2 class="font-medium">Deskripsi</h2>
      <p>{{ nearbyBrand.description }}</p>
    </div>

    <div
      class="fixed bottom-0 left-0 right-0 bg-white z-30 p-4 border-t border-lightGray shadow-bottomBarShadow"
    >
      <button
        v-if="!nearbyBrand.isMember"
        class="btn btn-primary btn-rounded btn-lg w-full"
      >
        Jadi Member
      </button>
      <button
        v-else
        class="btn btn-secondary btn-rounded btn-lg w-full"
        disabled
      >
        Sudah Menjadi Member
      </button>
    </div>
  </BaseLayout>
</template>
