import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useNearbyBrandsStore = defineStore("nearbyBrands", () => {
  const nearbyBrands = ref([]);
  const nearbyBrandDetail = ref(null);

  const fetchNearbyBrands = async () => {
    nearbyBrands.value = [];
    const { data } = await client.listNearbyBrands();
    nearbyBrands.value = data;
  };

  const fetchNearbyBrandDetail = async (id) => {
    nearbyBrandDetail.value = null;
    const { data } = await client.detailNearbyBrand(id);
    nearbyBrandDetail.value = data;
  };

  return {
    nearbyBrands,
    nearbyBrandDetail,
    fetchNearbyBrands,
    fetchNearbyBrandDetail,
  };
});
