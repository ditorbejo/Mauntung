import { ref } from "vue";
import { defineStore } from "pinia";
import client from "api-client";

export const useTransactionsStore = defineStore("transactions", () => {
  const debitTransactions = ref([]);
  const recentDebitTransactions = ref([]);
  const creditTransactions = ref([]);

  const fetchDebitTransactions = async () => {
    const { data } = await client.listDebitTransactions();
    debitTransactions.value = data;
  };

  const fetchRecentDebitTransactions = async () => {
    const { data } = await client.listRecentDebitTransactions();
    recentDebitTransactions.value = data;
  };

  const fetchCreditTransactions = async () => {
    const { data } = await client.listCreditTransactions();
    creditTransactions.value = data;
  };

  return {
    debitTransactions,
    recentDebitTransactions,
    creditTransactions,
    fetchDebitTransactions,
    fetchRecentDebitTransactions,
    fetchCreditTransactions,
  };
});
