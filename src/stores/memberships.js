import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useMembershipsStore = defineStore("memberships", () => {
  const recentMemberships = ref([]);
  const memberships = ref([]);

  const fetchRecentMemberships = async () => {
    const { data } = await client.listRecentMemberships();
    recentMemberships.value = data;
  };

  const fetchMemberships = async () => {
    const { data } = await client.listMemberships();
    memberships.value = data;
  };

  return {
    memberships,
    recentMemberships,
    fetchRecentMemberships,
    fetchMemberships,
  };
});
