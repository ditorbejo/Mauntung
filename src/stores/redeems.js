import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useRedeemsStore = defineStore("redeems", () => {
  const redeems = ref([]);
  const recentRedeems = ref([]);
  const redeemDetail = ref(null);

  const fetchRedeems = async () => {
    redeems.value = [];
    const { data } = await client.listRedeems();
    redeems.value = data;
  };

  const fetchRecentRedeems = async () => {
    const { data } = await client.listRecentRedeems();
    recentRedeems.value = data;
  };

  const fetchMembershipRedeems = async (id) => {
    redeems.value = [];
    const { data } = await client.listMembershipRedeems(id);
    redeems.value = data;
  };

  const fetchRedeemDetail = async (id) => {
    redeemDetail.value = null;
    const { data } = await client.detailRedeem(id);
    redeemDetail.value = data;
  };

  return {
    redeems,
    recentRedeems,
    redeemDetail,
    fetchRedeems,
    fetchRecentRedeems,
    fetchMembershipRedeems,
    fetchRedeemDetail,
  };
});
