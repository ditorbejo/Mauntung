import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useRewardsStore = defineStore("rewards", () => {
  const rewardDetail = ref([]);

  const fetchRewardDetail = async (id) => {
    const { data } = await client.detailReward(id);
    rewardDetail.value = data;
  };

  return { rewardDetail, fetchRewardDetail };
});
