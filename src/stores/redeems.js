import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useRedeemsStore = defineStore("redeems", () => {
  const recentRedeems = ref([]);

  const fetchRecentRedeems = async () => {
    const { data } = await client.listRecentRedeems();
    recentRedeems.value = data;
  };

  return { recentRedeems, fetchRecentRedeems };
});
