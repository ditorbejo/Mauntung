import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useMembershipsStore = defineStore("memberships", () => {
  const recentMemberships = ref([]);
  const memberships = ref([]);
  const membershipDetail = ref(null);
  const membershipRewards = ref(null);

  const fetchRecentMemberships = async () => {
    const { data } = await client.listRecentMemberships();
    recentMemberships.value = data;
  };

  const fetchMemberships = async () => {
    const { data } = await client.listMemberships();
    memberships.value = data;
  };

  const fetchMembershipDetail = async (id) => {
    membershipDetail.value = null;
    const { data } = await client.detailMembership(id);
    membershipDetail.value = data;
  };

  const fetchMembershipRewards = async (id) => {
    membershipRewards.value = null;
    const { data } = await client.listMembershipRewards(id);
    membershipRewards.value = data;
  };

  return {
    memberships,
    recentMemberships,
    membershipDetail,
    membershipRewards,
    fetchRecentMemberships,
    fetchMemberships,
    fetchMembershipDetail,
    fetchMembershipRewards,
  };
});
