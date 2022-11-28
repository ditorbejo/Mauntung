import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useRewardsStore = defineStore("rewards", () => {
  const rewardDetail = ref(null);

  const fetchRewardDetail = async (id) => {
    rewardDetail.value = null;
    const { data } = await client.detailReward(id);
    rewardDetail.value = data;
  };

  return { rewardDetail, fetchRewardDetail };
});
