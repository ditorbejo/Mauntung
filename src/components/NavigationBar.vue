<script setup>
import { RouterLink } from "vue-router";
import NavigationItem from "./NavigationItem.vue";

const navItems = [
  {
    to: "home",
    isActive: true,
    icon: "home",
    label: "Beranda",
  },
  {
    to: "history",
    isActive: false,
    icon: "history",
    label: "Riwayat",
  },
  {
    to: "report",
    isActive: false,
    icon: "assignment",
    label: "Laporan",
  },
  {
    to: "profile",
    isActive: false,
    icon: "person",
    label: "Profil",
  },
];
</script>

<template>
  <nav
    class="flex justify-between px-6 py-2.5 fixed bottom-0 left-0 right-0 shadow-bottomBarShadow"
  >
    <RouterLink
      v-for="(navItem, index) in navItems"
      :to="{ name: navItem.to }"
      :key="'link-' + index"
    >
      <NavigationItem
        :isActive="navItem.isActive"
        :icon="navItem.icon"
        :label="navItem.label"
      />
    </RouterLink>
  </nav>
</template>
