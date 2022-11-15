<script setup>
import NavigationItem from "./NavigationItem.vue";

const navItems = [
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
];
</script>

<template>
  <nav
    class="flex justify-between px-6 py-2.5 fixed bottom-0 left-0 right-0 shadow-bottomBarShadow bg-white"
  >
    <NavigationItem
      v-for="navItem in navItems"
      v-bind="navItem"
      :key="navItem.routeName"
    />
  </nav>
</template>
