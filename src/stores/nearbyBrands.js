import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useNearbyBrandsStore = defineStore("nearbyBrands", () => {
  const nearbyBrands = ref([]);

  const fetchNearbyBrands = async () => {
    const { data } = await client.listNearbyBrands();
    nearbyBrands.value = data;
  };

  return { nearbyBrands, fetchNearbyBrands };
});
