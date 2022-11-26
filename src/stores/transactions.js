import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useTransactionsStore = defineStore("transactions", () => {
  const recentDebitTransactions = ref([]);

  const fetchRecentDebitTransactions = async () => {
    const { data } = await client.listRecentDebitTransactions();
    recentDebitTransactions.value = data;
  };

  return { recentDebitTransactions, fetchRecentDebitTransactions };
});
