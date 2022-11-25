<script setup>
import NavigationItem from "./NavigationItem.vue";
import { useRoute } from "vue-router";
import { onMounted, reactive, ref, watch } from "vue";
const route = useRoute();
const state = reactive({ navItems: [] });
const showNavbar = ref(false);
const navItems = {
  merchant: [
    {
      routeName: "merchant-home",
      icon: "home",
      label: "Beranda",
    },
    {
      routeName: "merchant-history",
      icon: "history",
      label: "Riwayat",
    },
    {
      routeName: "merchant-report",
      icon: "assignment",
      label: "Laporan",
    },
    {
      routeName: "merchant-profile",
      icon: "account_circle",
      label: "Profil",
    },
  ],
  customer: [
    {
      routeName: "customer-home",
      icon: "home",
      label: "Beranda",
    },
    {
      routeName: "customer-history",
      icon: "history",
      label: "Riwayat",
    },
    {
      routeName: "customer-rewards",
      icon: "confirmation_number",
      label: "Reward",
    },
    {
      routeName: "customer-profile",
      icon: "account_circle",
      label: "Profil",
    },
  ],
};

// watch(
//   () => route.meta,
//   (toMeta, beforeMeta) => {
//     if (toMeta.role !== beforeMeta.role) {
//       state.navItems = navItems[toMeta.role];
//     }
//     showNavbar.value = toMeta.showNavbar;
//   }
// );

onMounted(() => {
  state.navItems = navItems[route.meta.role];
});
</script>

<template>
  <nav
    class="flex justify-between px-6 py-2.5 fixed bottom-0 left-0 right-0 shadow-bottomBarShadow bg-white"
  >
    <NavigationItem
      v-for="navItem in state.navItems"
      v-bind="navItem"
      :key="navItem.routeName"
    />
  </nav>
</template>
