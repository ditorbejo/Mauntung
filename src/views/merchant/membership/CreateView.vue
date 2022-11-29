<script setup>
import { computed, nextTick, reactive, ref } from "vue";
import RadioCardGroup from "../../../components/RadioCardGroup.vue";
import BaseLayout from "../../../layouts/BaseLayout.vue";
import TextField from "../../../components/TextField.vue";
import RewardCard from "../../../components/RewardCard.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const programTypes = [
  {
    id: "stampType",
    value: "stamp",
    label: "Pengumpulan Stempel",
    description:
      "Cocok untuk kasus sederhana. Pelanggan terdaftar hanya perlu menunjukkan kode unik pelanggan kepada Anda, untuk Anda beri stempel dengan cara dipindai.",
  },
  {
    id: "pointType",
    value: "point",
    label: "Pengumpulan Poin",
    description:
      "Cocok untuk kasus yang lebih kompleks. Terdapat beberapa pilihan dalam memberikan & membuat poin, menukarkan reward, dan tersedia sistem member bertingkat (tiering). ",
  },
];

const sections = {
  stamp: {
    create: "create",
    stampRules: "stamp-rules",
    rewardsList: "rewards-list",
    createReward: "create-reward",
    editReward: "edit-reward",
    stampReview: "stamp-review",
  },
  point: {
    create: "create",
    pointRules: "point-rules",
    rewardsList: "rewards-lsit",
    createReward: "create-reward",
    editReward: "edit-reward",
    tieringChoice: "tiering-choice",
    tiersList: "tiers-list",
    createTier: "create-tier",
    editTier: "edit-tier",
    tierRewards: "tier-rewards",
    pointReview: "point-review",
  },
};

const currentSection = ref(sections.stamp.create);

const form = reactive({
  name: null,
  type: "stamp",
  rules: {
    stampTtl: null,
    pointTtl: null,
    redeemTtl: null,
    cardCapacity: null,
    distributionMethod: null,
    rewardClaimsMethod: null,
    pointGeneration: null,
    tiers: null,
  },
  rewards: [],
  mediaId: null,
  img: "https://via.placeholder.com/36",
});

const backHandler = computed(() => {
  let handler = null;
  switch (currentSection.value) {
    case sections.stamp.create:
      break;
    case sections.stamp.stampRules:
      handler = () => (currentSection.value = sections.stamp.create);
      break;
    case sections.stamp.rewardsList:
      handler = () => (currentSection.value = sections.stamp.stampRules);
      break;
    case sections.stamp.createReward:
      handler = () => (currentSection.value = sections.stamp.rewardsList);
      break;
    case sections.stamp.editReward:
      handler = () => (currentSection.value = sections.stamp.rewardsList);
      break;
    case sections.stamp.stampReview:
      handler = () => (currentSection.value = sections.stamp.rewardsList);
      break;
  }
  return handler;
});

const currentReward = reactive({
  id: null,
  name: "",
  stamp: 0,
  description: "",
  termsCondition: "",
  useStock: false,
  stock: 0,
  usePeriod: false,
  period: [],
});

const clearCurrentReward = () => {
  currentReward.id = null;
  currentReward.name = "";
  currentReward.stamp = 0;
  currentReward.description = "";
  currentReward.termsCondition = "";
  currentReward.useStock = false;
  currentReward.stock = 0;
  currentReward.usePeriod = false;
  currentReward.period = [new Date(), new Date()];
};

const idCounter = ref(1);

const createReward = () => {
  const reward = {
    ...currentReward,
    img: "https://via.placeholder.com/64",
    id: idCounter.value,
  };
  reward.id = idCounter.value;
  reward.stock = currentReward.useStock ? currentReward.stock : null;
  reward.period = currentReward.usePeriod ? currentReward.period : null;
  form.rewards.push(reward);
  idCounter.value++;
};

const editReward = async (id) => {
  const reward = form.rewards.find((reward) => reward.id == id);
  currentReward.id = reward.id;
  currentReward.name = reward.name;
  currentReward.stamp = reward.stamp;
  currentReward.description = reward.description;
  currentReward.termsCondition = reward.termsCondition;
  currentReward.useStock = reward.useStock;
  currentReward.stock = reward.useStock ? reward.stock : 0;
  currentReward.usePeriod = reward.usePeriod;
  currentReward.period = reward.usePeriod
    ? reward.period
    : [new Date(), new Date()];
  await nextTick();
  currentSection.value = sections.stamp.editReward;
};

const updateReward = () => {
  const reward = form.rewards.find((reward) => reward.id == currentReward.id);
  reward.name = currentReward.name;
  reward.stamp = currentReward.stamp;
  reward.description = currentReward.description;
  reward.termsCondition = currentReward.termsCondition;
  reward.useStock = currentReward.useStock;
  reward.stock = currentReward.useStock ? currentReward.stock : null;
  reward.usePeriod = currentReward.usePeriod;
  reward.period = currentReward.usePeriod ? currentReward.period : null;
};

const deleteReward = () => {
  const rewards = form.rewards.filter(
    (reward) => reward.id != currentReward.id
  );
  form.rewards = rewards;
};
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    app-bar-icon="arrow_back"
    title="Buat Program"
    @app-bar-button-click="backHandler"
  >
    <div class="px-7.5">
      <section v-if="currentSection === sections.stamp.create">
        <div class="flex flex-col gap-4 items-center mb-8">
          <p class="font-medium">Logo Program</p>
          <img
            class="border border-biru1 rounded-lg shadow-cardShadow"
            width="120"
            height="120"
            src="https://via.placeholder.com/200"
            alt=""
          />
          <button class="btn btn-primary btn-sm btn-rounded font-medium">
            Browse
          </button>
        </div>

        <TextField
          label="Nama Program"
          placeholder="Nama Program"
          type-input="text"
          name-input="programName"
          id="programName"
          v-model="form.name"
        />

        <p class="mt-8 font-medium">Pilih Tipe Program</p>
        <div class="flex flex-col gap-2.5 mt-4">
          <RadioCardGroup
            :radio-items="programTypes"
            v-model:selected="form.type"
          />
        </div>

        <button
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="currentSection = sections.stamp.stampRules"
        >
          Selanjutnya
        </button>
      </section>

      <section v-if="currentSection === sections.stamp.stampRules">
        <div class="flex flex-col gap-3">
          <TextField
            label="Masa Berlaku Stamp (tahun)"
            placeholder="Masa Berlaku Stamp (tahun)"
            type-input="number"
            name-input="stampTtl"
            id="stampTtl"
            v-model.number="form.rules.stampTtl"
          />

          <TextField
            label="Masa Berlaku Reward (hari)"
            placeholder="Masa Berlaku Reward (hari)"
            type-input="number"
            name-input="redeemTtl"
            id="redeemTtl"
            v-model.number="form.rules.redeemTtl"
          />

          <TextField
            label="Kapasitas Stempel"
            placeholder="Kapasitas Stempel"
            type-input="number"
            name-input="stampCardCapacity"
            id="stampCardCapacity"
            v-model.number="form.rules.cardCapacity"
          />
        </div>

        <button
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="currentSection = sections.stamp.rewardsList"
        >
          Selanjutnya
        </button>
      </section>

      <section v-if="currentSection === sections.stamp.rewardsList">
        <div class="grid grid-cols-2 gap-4">
          <RewardCard
            v-for="(reward, index) in form.rewards"
            v-bind="reward"
            :key="index"
            @click="editReward(reward.id)"
          />
          <div
            class="bg-white border border-lightGray shadow-cardShadow rounded-lg p-2 min-h-[210px] flex flex-col items-center justify-center"
            @click="
              () => {
                clearCurrentReward();
                currentSection = sections.stamp.createReward;
              }
            "
          >
            <span
              class="material-symbols-rounded bg-biru2 text-white p-2.5 rounded-full"
              >add</span
            >
            <p class="mt-5 text-sm font-medium">Tambah Reward</p>
          </div>
        </div>

        <button
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="currentSection = sections.stamp.stampReview"
        >
          Selanjutnya
        </button>
      </section>

      <section
        v-if="
          [sections.stamp.createReward, sections.stamp.editReward].includes(
            currentSection
          )
        "
      >
        <div class="flex flex-col gap-4 items-center mb-8">
          <p class="font-medium">Gambar Reward</p>
          <img
            class="border border-biru1 rounded-lg shadow-cardShadow"
            width="120"
            height="120"
            src="https://via.placeholder.com/200"
            alt=""
          />
          <button class="btn btn-primary btn-sm btn-rounded font-medium">
            Browse
          </button>
        </div>

        <div class="flex flex-col gap-3">
          <TextField
            label="Nama Reward"
            placeholder="Nama Reward"
            type-input="text"
            name-input="rewardName"
            id="rewardName"
            v-model="currentReward.name"
          />

          <TextField
            label="Stempel yang Diperlukan"
            placeholder="Stempel yang Diperlukan"
            type-input="number"
            name-input="stamp"
            id="stamp"
            v-model.number="currentReward.stamp"
          />

          <div class="flex flex-col gap-2">
            <label for="description" class="font-medium">Deskripsi</label>
            <textarea
              id="description"
              class="flex items-center px-3 py-3 border border-solid rounded-lg border-lightGray"
              placeholder="Deskripsi reward"
              rows="4"
              v-model.trim="currentReward.description"
            ></textarea>
          </div>

          <div class="flex flex-col gap-2">
            <label for="termsCondition" class="font-medium"
              >Syarat & Ketentuan</label
            >
            <textarea
              id="termsCondition"
              class="flex items-center px-3 py-3 border border-solid rounded-lg border-lightGray"
              placeholder="Syarat & Ketentuan"
              rows="4"
              v-model.trim="currentReward.termsCondition"
            ></textarea>
          </div>

          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              name="useStock"
              id="useStock"
              v-model="currentReward.useStock"
            />
            <label class="font-medium" for="useStock">Atur Stock Reward</label>
          </div>
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              name="usePeriod"
              id="usePeriod"
              v-model="currentReward.usePeriod"
            />
            <label class="font-medium" for="usePeriod"
              >Atur Periode Reward</label
            >
          </div>

          <TextField
            v-if="currentReward.useStock"
            label="Stok"
            placeholder="Stok"
            type-input="number"
            name-input="stock"
            id="stock"
            v-model.number="currentReward.stock"
          />

          <div v-if="currentReward.usePeriod">
            <label for="period" class="font-medium">Periode</label>
            <Datepicker
              v-model="currentReward.period"
              range
              :enable-time-picker="false"
              id="period"
              class="mt-2"
            />
          </div>
        </div>

        <button
          v-if="currentSection === sections.stamp.createReward"
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="
            () => {
              createReward();
              currentSection = sections.stamp.rewardsList;
            }
          "
        >
          Simpan
        </button>

        <template v-else-if="currentSection === sections.stamp.editReward">
          <button
            class="btn btn-primary btn-rounded btn-lg w-full mt-12"
            @click="
              () => {
                updateReward();
                currentSection = sections.stamp.rewardsList;
              }
            "
          >
            Simpan
          </button>
          <button
            class="btn btn-secondary btn-rounded btn-lg w-full mt-3"
            @click="
              () => {
                deleteReward();
                currentSection = sections.stamp.rewardsList;
              }
            "
          >
            Hapus
          </button>
        </template>
      </section>

      <section v-if="currentSection === sections.stamp.stampReview">
        <div
          class="bg-white border border-lightGray card-cardShadow p-4 rounded-lg flex flex-col gap-3"
        >
          <div>
            <p class="text-sm">Nama Program</p>
            <div class="flex gap-2 items-center mt-1">
              <img class="w-6 h-6" :src="form.img" :alt="form.name" />
              <p class="font-medium">{{ form.name }}</p>
            </div>
          </div>

          <div>
            <p class="text-sm">Tipe Program</p>
            <p class="font-medium mt-1">Pengumpulan Stempel</p>
          </div>

          <div>
            <p class="text-sm">Masa Berlaku Stamp</p>
            <p class="font-medium mt-1">{{ form.rules.stampTtl }} Tahun</p>
          </div>

          <div>
            <p class="text-sm">Masa Berlaku Reward</p>
            <p class="font-medium mt-1">{{ form.rules.redeemTtl }} Hari</p>
          </div>

          <div>
            <p class="text-sm">Jumlah Reward yang Dibuat</p>
            <p class="font-medium mt-1">{{ form.rewards.length }} Rewards</p>
          </div>
        </div>

        <button class="btn btn-primary btn-rounded btn-lg w-full mt-12">
          Buat Program
        </button>
      </section>
    </div>
  </BaseLayout>
</template>
