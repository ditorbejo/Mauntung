<script setup>
import { RouterLink } from "vue-router";
import BaseLayout from "../../layouts/BaseLayout.vue";

const customer = {
  name: "Joomla",
  phone: "+6232312323232",
  img: "https://via.placeholder.com/80",
};
const menus = [
  {
    title: "Syarat dan Ketentuan",
    icon: "chevron_right",
    link: "#",
  },
  {
    title: "Bantuan",
    icon: "chevron_right",
    link: "#",
  },
  {
    title: "Beri Kami Feedback",
    icon: "chevron_right",
    link: "#",
  },
  {
    title: "Daftar Sebagai Merchant",
    icon: "chevron_right",
    link: "#",
  },
  {
    title: "Keluar Akun",
    icon: "logout",
    link: "#",
  },
];
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Profil"
  >
    <div class="flex gap-2 py-4 items-center shadow-cardShadow">
      <div class="px-4 py-5.5">
        <img class="w-20 h-20" :src="customer.img" :alt="customer.name" />
      </div>
      <div class="flex flex-col gap-2.5">
        <div>
          <p class="font-semibold">{{ customer.name }}</p>
          <p>{{ customer.phone }}</p>
        </div>
        <RouterLink :to="{ name: 'customer-profile-edit' }">
          <button class="btn btn-primary btn-rounded btn-sm">
            Edit Profile
          </button>
        </RouterLink>
      </div>
    </div>
    <a
      class="flex p-4 justify-between border-b border-lightGray"
      v-for="(menu, index) in menus"
      :key="index"
      :href="menu.link"
    >
      <p class="font-medium">{{ menu.title }}</p>
      <span class="material-symbols-rounded">
        {{ menu.icon }}
      </span>
    </a>
  </BaseLayout>
</template>
