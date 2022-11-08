<script setup>
import { RouterLink } from "vue-router";
import NavigationItem from "./NavigationItem.vue";
</script>

<template>
  <nav
    class="flex justify-between px-6 py-2.5 fixed bottom-0 left-0 right-0 shadow-bottomBarShadow"
  >
    <RouterLink :to="{ name: 'home' }">
      <NavigationItem :isActive="true" :icon="'home'" :label="'Beranda'" />
    </RouterLink>
    <RouterLink :to="{ name: 'history' }">
      <NavigationItem :isActive="false" :icon="'history'" :label="'Riwayat'" />
    </RouterLink>
    <RouterLink :to="{ name: 'report' }">
      <NavigationItem
        :isActive="false"
        :icon="'assignment'"
        :label="'Laporan'"
      />
    </RouterLink>
    <RouterLink :to="{ name: 'profile' }">
      <NavigationItem :isActive="false" :icon="'person'" :label="'Profil'" />
    </RouterLink>
  </nav>
</template>
