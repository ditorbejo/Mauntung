import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useRedeemsStore = defineStore("redeems", () => {
  const redeems = ref([]);
  const recentRedeems = ref([]);

  const fetchRedeems = async () => {
    const { data } = await client.listRedeems();
    redeems.value = data;
  };

  const fetchRecentRedeems = async () => {
    const { data } = await client.listRecentRedeems();
    recentRedeems.value = data;
  };

  return { redeems, recentRedeems, fetchRedeems, fetchRecentRedeems };
});
