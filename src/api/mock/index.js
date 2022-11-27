import nearbyBrands from "./data/nearbyBrands.json";
import debitTransactions from "./data/debitTransactions.json";
import creditTransactions from "./data/creditTransactions.json";
import redeems from "./data/redeems.json";
import memberships from "./data/memberships.json";
import membershipDetails from "./data/membershipDetails";
import membershipRewards from "./data/membershipRewards";

const fetch = (mockData, time = 0) => {
  if (import.meta.env.VITE_MOCK_SIMULATE_LOADING?.toLowerCase() === "true") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, time);
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 0);
  });
};

const listNearbyBrands = () => {
  return fetch(nearbyBrands, 1000);
};

const listDebitTransactions = () => {
  return fetch(debitTransactions, 2000);
};

const listRecentDebitTransactions = () => {
  const recentTransactions = { data: debitTransactions.data.slice(0, 3) };
  return fetch(recentTransactions, 1500);
};

const listCreditTransactions = () => {
  return fetch(creditTransactions, 2000);
};

const listRedeems = () => {
  return fetch(redeems, 2000);
};

const listRecentRedeems = () => {
  const recentRedeems = { data: redeems.data.slice(0, 3) };
  return fetch(recentRedeems, 2000);
};

const listRecentMemberships = () => {
  const recentMemberships = { data: memberships.data.slice(0, 3) };
  return fetch(recentMemberships, 2000);
};

const listMemberships = () => {
  return fetch(memberships, 2000);
};

const detailMembership = (id) => {
  const target = membershipDetails.find((membership) => membership.id == id);
  return fetch({ data: target }, 2000);
};

const listMembershipRewards = (id) => {
  const target = membershipRewards.find((membership) => membership.id == id);
  return fetch({ data: target ? target.rewards : null }, 2000);
};

export default {
  listNearbyBrands,
  listDebitTransactions,
  listRecentDebitTransactions,
  listCreditTransactions,
  listRedeems,
  listRecentRedeems,
  listRecentMemberships,
  listMemberships,
  detailMembership,
  listMembershipRewards,
};
