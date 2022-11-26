import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useMembershipsStore = defineStore("memberships", () => {
  const recentMemberships = ref([]);

  const fetchRecentMemberships = async () => {
    const { data } = await client.listRecentMemberships();
    recentMemberships.value = data;
  };

  return { recentMemberships, fetchRecentMemberships };
});
