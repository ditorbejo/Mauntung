<script setup>
import { computed, onMounted, ref } from "vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import CustomerPointHistoryGroup from "../../components/CustomerPointHistoryGroup.vue";
import BaseLayout from "../../layouts/BaseLayout.vue";
import { useLoadingStore } from "@/stores/loading";
import { useTransactionsStore } from "@/stores/transactions";

const loadingStore = useLoadingStore();
const transactionsStore = useTransactionsStore();

const mapTransactionToProps = ({ id, membership, createdAt }) => ({
  id,
  programName: membership.name,
  programImg: membership.img,
  type: membership.type,
  amount: membership[membership.type],
  date: new Date(createdAt),
});

const groupByDate = (transactions) => {
  return transactions.reduce((group, transaction) => {
    const createdAt = transaction.createdAt.split("T")[0];
    group[createdAt] = group[createdAt] ?? [];
    group[createdAt].push(mapTransactionToProps(transaction));
    return group;
  }, {});
};

const claimedPoints = computed(() =>
  groupByDate(transactionsStore.debitTransactions)
);

const redemeedPoints = computed(() =>
  groupByDate(transactionsStore.creditTransactions)
);

const active = ref("left");

onMounted(async () => {
  loadingStore.showLoading();
  await Promise.all([
    transactionsStore.fetchDebitTransactions(),
    transactionsStore.fetchCreditTransactions(),
  ]);
  loadingStore.hideLoading();
});
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Daftar Riwayat"
  >
    <div>
      <ButtonGroup
        @left-click="() => (active = 'left')"
        @right-click="() => (active = 'right')"
        class="mb-3 px-7.5"
        :active="active"
        left-text="Perolehan"
        right-text="Penukaran"
      />
      <div v-show="active == 'left'" class="flex flex-col gap-6">
        <CustomerPointHistoryGroup
          v-for="(histories, date) in claimedPoints"
          :histories="histories"
          :date="new Date(date)"
          :key="date"
        />
      </div>
      <div v-show="active == 'right'" class="flex flex-col gap-6">
        <CustomerPointHistoryGroup
          v-for="(histories, date) in redemeedPoints"
          :histories="histories"
          :date="new Date(date)"
          :key="date"
        />
      </div>
    </div>
  </BaseLayout>
</template>
