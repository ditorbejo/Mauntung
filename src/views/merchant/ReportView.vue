<script setup>
import { onMounted, ref } from "vue";
import AppBar from "../../components/AppBar.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import InfoCard from "../../components/InfoCard.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const active = ref("left");

const date = ref();
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
});

const generalInfoCards = [
  {
    icon: "assignment",
    value: "Rp 500,000",
    info: "Nominal Transaksi",
    colorIcon: "bg-pastelBiru",
    width: "col-span-2",
  },
  {
    icon: "favorite",
    value: "10",
    info: "Poin Diberikan",
    colorIcon: "bg-pastelRed",
    width: "",
  },
  {
    icon: "confirmation_number",
    value: "10",
    info: "Rewards Ditukarkan",
    colorIcon: "bg-pastelHijau",
    width: "",
  },
];

const loyaltyInfoCards = [
  {
    icon: "favorite",
    value: "15%",
    info: "Redemption Rate",
    colorIcon: "bg-pastelBiru",
    width: "",
  },
  {
    icon: "favorite",
    value: "5%",
    info: "Point Brakeage",
    colorIcon: "bg-pastelKuning",
    width: "",
  },
  {
    icon: "favorite",
    value: "20% ",
    info: "Customer Retention Rate",
    colorIcon: "bg-pastelHijau",
    width: "",
  },
  {
    icon: "favorite",
    value: "20%",
    info: "Participation Rate",
    colorIcon: "bg-lightGray",
    width: "",
  },
  {
    icon: "favorite",
    value: "5%",
    info: "Customer Churn Rate",
    colorIcon: "bg-pastelRed",
    width: "",
  },
];
</script>

<template>
  <main>
    <AppBar icon="arrow_back" title="Laporan"></AppBar>
    <div class="flex flex-col gap-3 px-7.5">
      <div class="mt-5">
        <p class="font-medium mb-2">Periode</p>
        <Datepicker v-model="date" range :enableTimePicker="false" />
      </div>
      <ButtonGroup
        @left-click="() => (active = 'left')"
        @right-click="() => (active = 'right')"
        left-text="Umum"
        right-text="Loyalitas"
        :active="active"
      ></ButtonGroup>
      <div v-show="active == 'left'" class="grid grid-cols-2 gap-3">
        <InfoCard
          v-for="(infoCard, index) in generalInfoCards"
          :icon="infoCard.icon"
          :value="infoCard.value"
          :info="infoCard.info"
          :color-icon="infoCard.colorIcon"
          :key="index"
          :class="[infoCard.width]"
        >
        </InfoCard>
      </div>
      <div v-show="active == 'right'" class="grid grid-cols-2 gap-3">
        <InfoCard
          v-for="(infoCard, index) in loyaltyInfoCards"
          :icon="infoCard.icon"
          :value="infoCard.value"
          :info="infoCard.info"
          :color-icon="infoCard.colorIcon"
          :key="index"
          :class="[infoCard.width]"
        >
        </InfoCard>
      </div>
    </div>
  </main>
</template>
