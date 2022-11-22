<script setup>
import { ref } from "vue";
import PlanCard from "../components/PlanCard.vue";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import headlineImg from "@/assets/headline.png";

const navIsOpen = ref(false);
const features = [
  {
    headline: "Membership",
    description: `Beri penawaran eksklusif kepada pelanggan setia Anda melalui <span class="font-semibold">Mauntung App</span>`,
    startCol: "md:col-start-1",
    endCol: "md:col-end-2",
  },
  {
    headline: "Customizeable",
    description: `Pilih jenis dan atur peraturan program loyalti Anda sesuai dengan kebutuhan bisnis Anda`,
    startCol: "md:col-start-3",
    endCol: "md:col-end-4",
  },
  {
    headline: "Self-Service",
    description: `Anda memiliki kontrol penuh atas semua fitur yang tersedia langsung melalui aplikasi`,
    startCol: "md:col-start-1",
    endCol: "md:col-end-2",
  },
  {
    headline: "Insights",
    description: `Dapatkan wawasan terkait kinerja program loyalti Anda sebagai bahan untuk mengembangkan bisnis Anda`,
    startCol: "md:col-start-3",
    endCol: "md:col-end-4",
  },
];

const plans = [
  {
    title: "Starter",
    price: "Gratis",
    features: [
      `Pilih program loyalti berbasis <span class="font-semibold">stempel</span> maupun <span class="font-semibold">poin</span>`,
      `Sistem member bertingkat hingga <span class="font-semibold">2 tingkat</span>`,
      `Hingga <span class="font-semibold">2000</span> member aktif dalam setahun`,
      `Statistik kinerja program loyalti <span class="font-semibold">(basic)</span>`,
    ],
    cta: "Coba Sekarang",
  },
  {
    title: "Premium",
    price: "Rp30.000 / bulan",
    features: [
      `Dapatkan <span class="font-semibold">semua fitur starter</span>`,
      `Sistem member bertingkat hingga <span class="font-semibold">5 tingkat</span>`,
      `Member aktif <span class="font-semibold">lebih dari 2000</span> dalam setahun`,
      `Statistik kinerja program loyalti <span class="font-semibold">(advance)</span>`,
    ],
    cta: "Mulai Berlangganan",
    extras: {
      monthly: {
        original: "Rp30.000 / bulan",
      },
      yearly: {
        original: "Rp360.000",
        discounted: "Rp288.000 / tahun",
      },
      discount: "Hemat 20%",
    },
  },
];

const socials = [
  {
    name: "instagram",
    url: "https://www.instagram.com/mauntungapps/",
    icon: instagramIcon,
  },
  {
    name: "twitter",
    url: "#",
    icon: twitterIcon,
  },
  {
    name: "facebook",
    url: "#",
    icon: facebookIcon,
  },
];

const informations = [
  {
    title: "Tentang Kami",
    url: "#",
  },
  {
    title: "Kontak",
    url: "#",
  },
  {
    title: "FAQ",
    url: "#",
  },
  {
    title: "Syarat & Ketentuan",
    url: "#",
  },
];
</script>

<template>
  <div>
    <header class="fixed top-0 left-0 right-0 z-30">
      <div
        class="flex items-center justify-between px-4 h-16 shadow-topBarShadow bg-white z-40"
      >
        <div class="flex items-end">
          <img
            src="@/assets/logo.svg"
            alt="mauntung-app"
            height="32"
            width="32"
          />
          <p class="font-semibold text-xl leading-none text-biru2">auntung</p>
        </div>
        <nav class="hidden sm:block flex-1">
          <ul class="p-4 flex">
            <li class="px-4 py-2">
              <a class="font-semibold" href="#features">Fitur</a>
            </li>
            <li class="px-4 py-2">
              <a class="font-semibold" href="#pricing">Harga</a>
            </li>
          </ul>
        </nav>
        <div class="hidden sm:block">
          <button
            class="text-center w-full sm:w-auto btn btn-secondary btn-base btn-rounded px-8 mr-3"
          >
            Masuk
          </button>
          <button
            class="text-center w-full sm:w-auto btn btn-primary btn-base btn-rounded px-8"
          >
            Daftar
          </button>
        </div>
        <button class="sm:hidden" @click="() => (navIsOpen = !navIsOpen)">
          <span class="material-symbols-rounded"> menu </span>
        </button>
      </div>
      <div
        class="h-screen bg-white fixed left-0 right-0 transition-all z-30 py-4 flex flex-col gap-16 sm:hidden"
        :class="[navIsOpen ? 'nav-open' : 'nav-close']"
      >
        <nav>
          <ul>
            <li class="py-4 px-4 w-full border-b border-t border-lightGray">
              <a class="font-semibold" href="#features">Fitur</a>
            </li>
            <li class="py-4 px-4 w-full border-b border-lightGray">
              <a class="font-semibold" href="#pricing">Harga</a>
            </li>
          </ul>
        </nav>
        <div class="px-4">
          <button
            class="text-center w-full btn btn-secondary btn-lg btn-rounded"
          >
            Masuk
          </button>
          <button
            class="text-center w-full btn btn-primary btn-lg btn-rounded mt-4"
          >
            Daftar
          </button>
        </div>
      </div>
    </header>

    <main class="pt-16 px-6 max-w-7xl mx-auto lg:pt-20">
      <section class="flex sm:gap-16 items-center">
        <div class="md:max-w-sm lg:max-w-xl">
          <h1 class="font-semibold text-2xl mt-8 sm:text-3xl lg:text-5xl">
            Bangun Program Loyalti <br />
            <span class="font-semibold text-biru2"
              >Mudah, Cepat, dan Praktis.</span
            >
          </h1>
          <p class="mt-4 lg:text-lg">
            <span class="font-semibold">Mauntung App</span> menyediakan platform
            untuk membangun dan menjalankan program loyalti bagi bisnis Anda
            secara mandiri dengan berbagai fitur yang bisa disesuaikan dengan
            ukuran dan kebutuhan bisnis Anda.
          </p>
          <button
            class="text-center w-full sm:w-auto btn btn-primary btn-lg btn-rounded mt-4"
          >
            Mulai Sekarang - Gratis
          </button>
        </div>
        <div class="hidden md:block flex-fill">
          <img class="w-full object-fill" :src="headlineImg" alt="headline" />
        </div>
      </section>

      <section id="features" class="md:mt-32">
        <img
          class="mx-auto my-9 md:hidden"
          src="@/assets/app-preview-1.png"
          alt="app-preview-1"
        />
        <div class="md:grid md:grid-cols-3 items-center">
          <div
            v-for="(feature, index) in features"
            class="text-center max-w-[280px] mx-auto mt-3 md:mt-0"
            :class="[feature.startCol, feature.endCol]"
            :key="'feature-' + index"
          >
            <h3 class="font-semibold text-2xl">{{ feature.headline }}</h3>
            <p v-html="feature.description" class="md:text-lg"></p>
          </div>
          <img
            class="hidden md:block mx-auto col-start-2 col-end-3 row-start-1 row-end-3"
            src="@/assets/app-preview-1.png"
            alt="app-preview-1"
          />
        </div>
      </section>

      <section id="pricing" class="my-20 md:my-32">
        <h2 class="font-semibold text-2xl mt-3 sm:text-3xl lg:text-4xl">
          <span class="text-biru2 font-semibold">Mulai gratis,</span> <br />
          lalu bayar sesuai kebutuhan
        </h2>
        <div
          class="flex flex-col gap-6 mt-9 items-center sm:items-stretch sm:flex-row sm:justify-center"
        >
          <PlanCard
            v-for="(plan, index) in plans"
            :key="'plan-' + index"
            v-bind="plan"
          />
        </div>
      </section>
    </main>

    <footer class="bg-biru2 p-6 mt-16">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end">
          <img
            src="@/assets/logo-alternate.svg"
            alt="mauntung-app"
            height="32"
            width="32"
          />
          <p class="font-semibold text-xl leading-none text-white">
            auntung <span>App</span>
          </p>
        </div>
        <div class="flex mt-6">
          <div class="flex-1">
            <h3 class="text-white font-semibold">Ikuti kami di:</h3>
            <div class="flex gap-2 mt-2">
              <a
                v-for="(social, index) in socials"
                :key="'social-' + index"
                :href="social.url"
                target="_blank"
              >
                <img
                  :src="social.icon"
                  :alt="social.name"
                  width="24"
                  height="24"
                />
              </a>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="text-white font-semibold">Informasi:</h3>
            <ul class="text-white">
              <li
                v-for="(information, index) in informations"
                :key="'information-' + index"
              >
                <a :href="information.url">{{ information.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-close {
  /* transform: translateY(100%); */
  top: -100%;
}

.nav-open {
  /* transform: translateY(64px); */
  top: 64px;
}
</style>
