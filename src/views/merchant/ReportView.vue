<script setup>
import { onMounted, reactive, ref } from "vue";
import BaseLayout from "../../layouts/BaseLayout.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import InfoCard from "../../components/InfoCard.vue";
import PopupModal from "../../components/PopupModal.vue";
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
    details: {
      title: "Nominal Transaksi",
      bigValue: "Rp 500,000",
      smallValue: "",
      description: "",
    },
  },
  {
    icon: "favorite",
    value: "10",
    info: "Poin Diberikan",
    colorIcon: "bg-pastelRed",
    width: "",
    details: {
      title: "Poin Diberikan",
      bigValue: "10",
      smallValue: "",
      description: "",
    },
  },
  {
    icon: "confirmation_number",
    value: "10",
    info: "Rewards Ditukarkan",
    colorIcon: "bg-pastelHijau",
    width: "",
    details: {
      title: "Rewards Ditukarkan",
      bigValue: "10",
      smallValue: "",
      description: "",
    },
  },
];

const loyaltyInfoCards = [
  {
    icon: "favorite",
    value: "15%",
    info: "Redemption Rate",
    colorIcon: "bg-pastelBiru",
    width: "",
    details: {
      title: "Nominal Transaksi",
      bigValue: "1500",
      smallValue: "10000",
      description: "Point telah ditukarkan dengan reward",
    },
  },
  {
    icon: "favorite",
    value: "5%",
    info: "Point Brakeage",
    colorIcon: "bg-pastelKuning",
    width: "",
    details: {
      title: "Nominal Transaksi",
      bigValue: "500",
      smallValue: "10000",
      description: "Point telah ditukarkan dengan reward",
    },
  },
  {
    icon: "favorite",
    value: "20% ",
    info: "Customer Retention Rate",
    colorIcon: "bg-pastelHijau",
    width: "",
    details: {
      title: "Customer Retention Rate",
      bigValue: "2000",
      smallValue: "10000",
      description: "Point telah ditukarkan dengan reward",
    },
  },
  {
    icon: "favorite",
    value: "20%",
    info: "Participation Rate",
    colorIcon: "bg-lightGray",
    width: "",
    details: {
      title: "Participation Rate",
      bigValue: "2000",
      smallValue: "10000",
      description: "Point telah ditukarkan dengan reward",
    },
  },
  {
    icon: "favorite",
    value: "5%",
    info: "Customer Churn Rate",
    colorIcon: "bg-pastelRed",
    width: "",
    details: {
      title: "Customer Churn Ratei",
      bigValue: "500",
      smallValue: "10000",
      description: "Point telah ditukarkan dengan reward",
    },
  },
];

const currentDetails = reactive({
  details: {
    title: "",
    bigValue: "",
    smallValue: "",
    description: "",
  },
});
const isOpen = ref(false);
const infoCardOnClick = (details) => {
  currentDetails.details = details;
  isOpen.value = true;
};
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    :use-nav-bar="true"
    app-bar-icon="arrow_back"
    title="Laporan"
  >
    <PopupModal
      :isOpen="isOpen"
      @modal-close="
        () => {
          isOpen = false;
        }
      "
    >
      <template v-slot:header>
        <div class="flex justify-between p-4 items-center">
          <p class="font-semibold">{{ currentDetails.details.title }}</p>
          <span
            class="p-2 bg-biru2 text-white rounded-full material-symbols-rounded"
            data-dismiss="modal"
          >
            close
          </span>
        </div>
      </template>
      <template v-slot:body>
        <div class="flex flex-col px-4 gap-4.5 pb-7.5">
          <p class="text-3xl font-semibold">
            {{ currentDetails.details.bigValue }}
            <span class="text-xs font-normal">{{
              currentDetails.details.smallValue
                ? `/${currentDetails.details.smallValue}`
                : ""
            }}</span>
          </p>
          <p class="font-medium">{{ currentDetails.details.description }}</p>
        </div>
      </template>
    </PopupModal>
    <div class="flex flex-col gap-3 px-7.5">
      <div>
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
          @click="() => infoCardOnClick(infoCard.details)"
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
          @click="() => infoCardOnClick(infoCard.details)"
        >
        </InfoCard>
      </div>
    </div>
  </BaseLayout>
</template>
