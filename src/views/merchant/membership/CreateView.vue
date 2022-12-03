<script setup>
import { computed, nextTick, reactive, ref, watch } from "vue";
import RadioCardGroup from "../../../components/RadioCardGroup.vue";
import RadioCard from "../../../components/RadioCard.vue";
import CheckboxCard from "../../../components/CheckboxCard.vue";
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
    rewardsList: "stamp-rewards-list",
    createReward: "stamp-create-reward",
    editReward: "stamp-edit-reward",
    stampReview: "stamp-review",
  },
  point: {
    create: "create",
    pointRules: "point-rules",
    rewardsList: "point-rewards-list",
    createReward: "point-create-reward",
    editReward: "point-edit-reward",
    tieringChoice: "tiering-choice",
    tiersList: "tiers-list",
    createTier: "create-tier",
    editTier: "edit-tier",
    createTierRewards: "create-tier-rewards",
    editTierRewards: "edit-tier-rewards",
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
    distributionMethod: "scan",
    rewardClaimsMethod: {
      app: true,
      scan: false,
    },
    pointGeneration: {
      type: "nominal",
      points: 10,
      divider: 10000,
    },
    tiers: null,
  },
  rewards: [],
  mediaId: null,
  img: "https://via.placeholder.com/36",
});

const navigateToSection = (section) => {
  currentSection.value = section;
  window.scrollTo({ top: 0 });
};

const isUseTiering = ref("false");

const backHandler = computed(() => {
  let handler = null;
  switch (currentSection.value) {
    case sections.stamp.create:
      break;
    case sections.stamp.stampRules:
      handler = () => navigateToSection(sections.stamp.create);
      break;
    case sections.stamp.rewardsList:
      handler = () => navigateToSection(sections.stamp.stampRules);
      break;
    case sections.stamp.createReward:
      handler = () => navigateToSection(sections.stamp.rewardsList);
      break;
    case sections.stamp.editReward:
      handler = () => navigateToSection(sections.stamp.rewardsList);
      break;
    case sections.stamp.stampReview:
      handler = () => navigateToSection(sections.stamp.rewardsList);
      break;
    case sections.point.pointRules:
      handler = () => navigateToSection(sections.point.create);
      break;
    case sections.point.rewardsList:
      handler = () => navigateToSection(sections.point.pointRules);
      break;
    case sections.point.createReward:
      handler = () => navigateToSection(sections.point.rewardsList);
      break;
    case sections.point.editReward:
      handler = () => navigateToSection(sections.point.rewardsList);
      break;
    case sections.point.tieringChoice:
      handler = () => navigateToSection(sections.point.rewardsList);
      break;
    case sections.point.tiersList:
      handler = () => navigateToSection(sections.point.tieringChoice);
      break;
    case sections.point.createTier:
      handler = () => navigateToSection(sections.point.tiersList);
      break;
    case sections.point.editTier:
      handler = () => navigateToSection(sections.point.tiersList);
      break;
    case sections.point.createTierRewards:
      handler = () => navigateToSection(sections.point.createTier);
      break;
    case sections.point.editTierRewards:
      handler = () => navigateToSection(sections.point.editTier);
      break;
    case sections.point.pointReview:
      handler = () => {
        if (isUseTiering.value === "true") {
          navigateToSection(sections.point.tiersList);
        } else {
          navigateToSection(sections.point.tieringChoice);
        }
      };
      break;
  }
  return handler;
});

const currentReward = reactive({
  id: null,
  name: "",
  stamp: null,
  point: null,
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
  currentReward.stamp = form.type === "stamp" ? 0 : null;
  currentReward.point = form.type === "point" ? 0 : null;
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
  currentReward.point = reward.point;
  currentReward.description = reward.description;
  currentReward.termsCondition = reward.termsCondition;
  currentReward.useStock = reward.useStock;
  currentReward.stock = reward.useStock ? reward.stock : 0;
  currentReward.usePeriod = reward.usePeriod;
  currentReward.period = reward.usePeriod
    ? reward.period
    : [new Date(), new Date()];
  await nextTick();
  if (form.type === "stamp") {
    navigateToSection(sections.stamp.editReward);
  } else if (form.type === "point") {
    navigateToSection(sections.point.editReward);
  }
};

const updateReward = () => {
  const reward = form.rewards.find((reward) => reward.id == currentReward.id);
  reward.name = currentReward.name;
  reward.stamp = currentReward.stamp;
  reward.point = currentReward.point;
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

const distributionMethods = [
  {
    id: "scanType",
    value: "scan",
    label: "Pindai Kode Pelanggan",
    description:
      "Anda memberikan poin kepada pelanggan dengan cara memindai kode unik yang ditunjukkan oleh pelanggan terdaftar.",
  },
  {
    id: "generateType",
    value: "generate",
    label: "Membuat Kode Poin",
    description:
      "Anda memberikan poin kepada pelanggan dengan cara membuat kode poin, kemudian dapat dicetak untuk diberikan kepada pelanggan.",
  },
];

const pointGenerations = [
  {
    id: "nominalType",
    value: "nominal",
    label: "Dari Nominal Transaksi",
    description:
      "Poin yang dibuat akan dihitung berdasarkan nominal transaksi sesuai aturan yang Anda tentukan.",
  },
  {
    id: "itemType",
    value: "item",
    label: "Dari Banyak Item",
    description:
      "Poin yang dibuat akan dihitung berdasarkan banyak item sesuai aturan yang Anda tentukan.",
  },
  {
    id: "fixedType",
    value: "fixed",
    label: "Konstan Setiap Transaksi",
    description:
      "Poin yang dibuat akan konstan setiap transaksi sesuai nilai yang Anda tentukan.",
  },
];

const pointGeneration = reactive({
  type: "nominal",
  nominal: {
    points: 1,
    divider: 1,
  },
  item: {
    points: 1,
    divider: 1,
  },
  fixed: {
    points: 1,
    divider: 1,
  },
});

const tieringChoices = [
  {
    id: "noTier",
    value: "false",
    label: "Tanpa Sistem Tiering",
    description:
      "Pilih jika Anda tidak memerlukan sistem member bertingkat untuk program membership Anda.",
  },
  {
    id: "useTier",
    value: "true",
    label: "Gunakan Sistem Tiering",
    description:
      "Anda dapat membuat tingkatan member berdasar perolehan poin pelanggan dalam satu tahun. Anda dapat mengatur daftar reward dan perolehan poin oleh pelanggan di setiap tingkatan yang Anda tentukan.",
  },
];

const currentTier = reactive({
  id: null,
  name: "",
  pointsRequired: 0,
  rewards: form.rewards,
  useMultiplierFactor: false,
  multiplierFactor: 1,
  isBase: false,
});

const tierIdCounter = ref(3);

const makeDefaultTiers = () => [
  {
    id: 1,
    name: "Bronze",
    pointsRequired: 0,
    rewards: form.rewards,
    useMultiplierFactor: false,
    multiplierFactor: 1,
    isBase: true,
  },
  {
    id: 2,
    name: "Silver",
    pointsRequired: 0,
    rewards: form.rewards,
    useMultiplierFactor: false,
    multiplierFactor: 1,
    isBase: true,
  },
];

const resetCurrentTier = () => {
  currentTier.id = null;
  currentTier.name = "";
  currentTier.pointsRequired = 0;
  currentTier.rewards = form.rewards;
  currentTier.useMultiplierFactor = false;
  currentTier.multiplierFactor = 1;
  currentTier.isBase = false;
};

const calculateAdditionalPoints = (multiplier, basePoint) => {
  const result = Math.round(multiplier * basePoint - basePoint);
  if (result >= 0) {
    return `+${result}`;
  } else {
    return `-${result}`;
  }
};

const createTier = () => {
  const tier = {
    ...currentTier,
    id: tierIdCounter.value,
  };
  tierIdCounter.value++;
  form.rules.tiers.push(tier);
};

const editTier = async (id) => {
  const tier = form.rules.tiers.find((tier) => tier.id == id);
  currentTier.id = tier.id;
  currentTier.name = tier.name;
  currentTier.pointsRequired = tier.pointsRequired;
  currentTier.rewards = tier.rewards;
  currentTier.useMultiplierFactor = tier.useMultiplierFactor;
  currentTier.multiplierFactor = tier.multiplierFactor;
  currentTier.isBase = tier.isBase;
  await nextTick();
  navigateToSection(sections.point.editTier);
};

const updateTier = () => {
  const tier = form.rules.tiers.find((tier) => tier.id == currentTier.id);
  tier.id = currentTier.id;
  tier.name = currentTier.name;
  tier.pointsRequired = currentTier.pointsRequired;
  tier.rewards = currentTier.rewards;
  tier.useMultiplierFactor = currentTier.useMultiplierFactor;
  tier.multiplierFactor = tier.useMultiplierFactor
    ? currentTier.multiplierFactor
    : 1;
};

const deleteTier = () => {
  const tiers = form.rules.tiers.filter((tier) => tier.id != currentTier.id);
  form.rules.tiers = tiers;
};

const selectedTierRewards = ref([]);

const tierRewards = computed(() => {
  const rewardIds = selectedTierRewards.value.map(({ id }) => id);
  const rewards = form.rewards.map((reward) => ({
    ...reward,
    isSelected: rewardIds.includes(reward.id),
  }));
  return rewards;
});

const selectedTierRewardsCount = computed(
  () => selectedTierRewards.value.length
);

const addToSelectedTierRewards = (id) => {
  const reward = form.rewards.find((reward) => reward.id == id);
  selectedTierRewards.value.push({ ...reward });
};

const removeFromSelectedTierRewards = (id) => {
  const rewards = selectedTierRewards.value
    .filter((reward) => reward.id != id)
    .map((reward) => ({ ...reward }));
  selectedTierRewards.value = [...rewards];
};

const saveTierRewards = () => {
  currentTier.rewards = selectedTierRewards.value;
};

const createStampProgram = () => {
  const body = {
    name: form.name,
    type: "stamp",
    rules: {
      stampTtl: form.rules.stampTtl * 365,
      redeemTtl: form.rules.redeemTtl,
      cardCapacity: form.rules.cardCapacity,
    },
    rewardIds: form.rewards.map(({ id }) => id),
    mediaId: form.mediaId,
  };
  console.log(body);
};

const createPointProgram = () => {
  const body = {
    name: form.name,
    type: "point",
    rules: {
      pointTtl: form.rules.pointTtl * 365,
      redeemTtl: form.rules.redeemTtl,
      distributionMethod: form.rules.distributionMethod,
      rewardClaimMethods:
        form.rules.distributionMethod === "generate"
          ? Object.entries(form.rules.rewardClaimsMethod)
              .filter(([, value]) => value)
              .map(([key]) => key)
          : ["app"],
      pointGeneration: { ...form.rules.pointGeneration },
      tierIds: form.rules.tiers ? form.rules.tiers.map(({ id }) => id) : null,
    },
    rewardIds: form.rewards.map(({ id }) => id),
    mediaId: form.mediaId,
  };
  console.log(body);
};

// Convert rewards' point / stamp on program type change
watch(
  () => form.type,
  (type) => {
    if (type === "stamp") {
      form.rewards = form.rewards.map((reward) => ({
        ...reward,
        stamp: reward.point,
        point: null,
      }));
    } else if (type === "point") {
      form.rewards = form.rewards.map((reward) => ({
        ...reward,
        point: reward.stamp,
        stamp: null,
      }));
    }
  }
);
</script>

<template>
  <BaseLayout
    :use-app-bar="true"
    app-bar-icon="arrow_back"
    title="Buat Program"
    @app-bar-button-click="backHandler"
    :use-bottom-action-bar="
      [
        sections.point.createTierRewards,
        sections.point.editTierRewards,
      ].includes(currentSection)
    "
    bottom-action-bar-action-name="Simpan"
    @bottom-action-bar-button-click="
      () => {
        if (
          [
            sections.point.createTierRewards,
            sections.point.editTierRewards,
          ].includes(currentSection)
        ) {
          saveTierRewards();
          if (currentSection === sections.point.createTierRewards) {
            navigateToSection(sections.point.createTier);
          } else if (currentSection === sections.point.editTierRewards) {
            navigateToSection(sections.point.editTier);
          }
        }
      }
    "
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
            name="programType"
          />
        </div>

        <button
          v-if="form.type === 'stamp'"
          :disabled="form.name == null || form.name == ''"
          class="btn btn-rounded btn-lg w-full mt-12"
          :class="{
            'btn-disabled': form.name == null || form.name == '',
            'btn-primary': !(form.name == null || form.name == ''),
          }"
          @click="() => navigateToSection(sections.stamp.stampRules)"
        >
          Selanjutnya
        </button>

        <button
          v-else-if="form.type === 'point'"
          :disabled="form.name == null || form.name == ''"
          class="btn btn-rounded btn-lg w-full mt-12"
          :class="{
            'btn-disabled': form.name == null || form.name == '',
            'btn-primary': !(form.name == null || form.name == ''),
          }"
          @click="() => navigateToSection(sections.point.pointRules)"
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
          class="btn btn-rounded btn-lg w-full mt-12"
          :disabled="
            form.rules.stampTtl == null ||
            form.rules.stampTtl == 0 ||
            form.rules.redeemTtl == null ||
            form.rules.redeemTtl == 0 ||
            form.rules.cardCapacity == null ||
            form.rules.cardCapacity == 0
          "
          @click="() => navigateToSection(sections.stamp.rewardsList)"
          :class="{
            'btn-disabled':
              form.rules.stampTtl == null ||
              form.rules.stampTtl == 0 ||
              form.rules.redeemTtl == null ||
              form.rules.redeemTtl == 0 ||
              form.rules.cardCapacity == null ||
              form.rules.cardCapacity == 0,
            'btn-primary': !(
              form.rules.stampTtl == null ||
              form.rules.stampTtl == 0 ||
              form.rules.redeemTtl == null ||
              form.rules.redeemTtl == 0 ||
              form.rules.cardCapacity == null ||
              form.rules.cardCapacity == 0
            ),
          }"
        >
          Selanjutnya
        </button>
      </section>

      <section v-if="currentSection === sections.point.pointRules">
        <div class="flex flex-col gap-3">
          <TextField
            label="Masa Berlaku Poin (tahun)"
            placeholder="Masa Berlaku Poin (tahun)"
            type-input="number"
            name-input="pointTtl"
            id="pointTtl"
            v-model.number="form.rules.pointTtl"
          />

          <TextField
            label="Masa Berlaku Reward (hari)"
            placeholder="Masa Berlaku Reward (hari)"
            type-input="number"
            name-input="redeemTtl"
            id="redeemTtl"
            v-model.number="form.rules.redeemTtl"
          />
        </div>

        <p class="mt-8 font-medium">Aturan Pemberian Poin</p>
        <div class="flex flex-col gap-2.5 mt-4">
          <RadioCardGroup
            :radio-items="distributionMethods"
            v-model:selected="form.rules.distributionMethod"
            name="distributionMethod"
          />
        </div>

        <template v-if="form.rules.distributionMethod === 'generate'">
          <p class="mt-8 font-medium">Aturan Penukaran Reward</p>
          <div class="flex flex-col gap-2.5 mt-4">
            <CheckboxCard
              v-bind="{
                id: 'viaApp',
                name: 'viaApp',
                label: 'Melalui Aplikasi',
                description:
                  'Pelanggan terdaftar dapat menukarkan poin yang dikumpulkan dengan kode reward yang disediakan oleh Anda melalui aplikasi. Minta pelanggan Anda untuk menunjukkannya saat akan menukarkan reward.',
                value: true,
                isChecked: form.rules.rewardClaimsMethod.app,
              }"
              v-model:checked="form.rules.rewardClaimsMethod.app"
            />

            <CheckboxCard
              v-bind="{
                id: 'viaScan',
                name: 'viaScan',
                label: 'Pindai Kode Poin',
                description:
                  'Anda dapat memindai kode poin yang dikumpulkan pelanggan untuk divalidasi, kemudian menukarkan poin tersebut dengan reward.',
                value: true,
                isChecked: form.rules.rewardClaimsMethod.scan,
              }"
              v-model:checked="form.rules.rewardClaimsMethod.scan"
            />
          </div>
        </template>

        <p class="mt-8 font-medium">Aturan Pembuatan Poin</p>
        <div class="flex flex-col gap-2.5 mt-4">
          <RadioCard
            v-for="(item, index) in pointGenerations"
            :key="index"
            v-bind="item"
            name="pointGeneration"
            v-model:selected="pointGeneration.type"
          >
            <template #footer>
              <div
                v-if="item.value === 'nominal'"
                class="grid grid-cols-3 gap-2"
              >
                <TextField
                  label="Poin"
                  placeholder="Poin"
                  type-input="number"
                  name-input="nominalPoint"
                  id="nominalPoint"
                  v-model.number="pointGeneration.nominal.points"
                />
                <TextField
                  label="Per Nominal"
                  placeholder="Per Nominal"
                  type-input="number"
                  name-input="nominalDivider"
                  id="nominalDivider"
                  v-model.number="pointGeneration.nominal.divider"
                  class="col-span-2"
                />
              </div>
              <div
                v-else-if="item.value === 'item'"
                class="grid grid-cols-2 gap-2"
              >
                <TextField
                  label="Poin"
                  placeholder="Poin"
                  type-input="number"
                  name-input="itemPoint"
                  id="itemPoint"
                  v-model.number="pointGeneration.item.points"
                />
                <TextField
                  label="Per Item"
                  placeholder="Per Item"
                  type-input="number"
                  name-input="nominalDivider"
                  id="nominalDivider"
                  v-model.number="pointGeneration.item.divider"
                />
              </div>
              <TextField
                v-else-if="item.value === 'fixed'"
                label="Poin"
                placeholder="Poin"
                type-input="number"
                name-input="fixedPoint"
                id="fixedPoint"
                v-model.number="pointGeneration.fixed.points"
              />
            </template>
          </RadioCard>
        </div>

        <button
          class="btn btn-rounded btn-lg w-full mt-12"
          :class="{
            'btn-disabled':
              form.rules.pointTtl == 0 ||
              form.rules.pointTtl == null ||
              form.rules.redeemTtl == 0 ||
              form.rules.redeemTtl == null ||
              pointGeneration.nominal.points == 0 ||
              pointGeneration.nominal.points == null ||
              pointGeneration.nominal.divider == 0 ||
              pointGeneration.nominal.divider == null ||
              pointGeneration.item.points == 0 ||
              pointGeneration.item.points == null ||
              pointGeneration.item.divider == 0 ||
              pointGeneration.item.divider == null ||
              pointGeneration.fixed.points == 0 ||
              pointGeneration.fixed.points == null ||
              (form.rules.distributionMethod == 'generate'
                ? form.rules.rewardClaimsMethod.app == false &&
                  form.rules.rewardClaimsMethod.scan == false
                : false),

            'btn-primary': !(
              form.rules.pointTtl == 0 ||
              form.rules.pointTtl == null ||
              form.rules.redeemTtl == 0 ||
              form.rules.redeemTtl == null ||
              pointGeneration.nominal.points == 0 ||
              pointGeneration.nominal.points == null ||
              pointGeneration.nominal.divider == 0 ||
              pointGeneration.nominal.divider == null ||
              pointGeneration.item.points == 0 ||
              pointGeneration.item.points == null ||
              pointGeneration.item.divider == 0 ||
              pointGeneration.item.divider == null ||
              pointGeneration.fixed.points == 0 ||
              pointGeneration.fixed.points == null ||
              (form.rules.distributionMethod == 'generate'
                ? form.rules.rewardClaimsMethod.app == false &&
                  form.rules.rewardClaimsMethod.scan == false
                : false)
            ),
          }"
          :disabled="
            form.rules.pointTtl == 0 ||
            form.rules.pointTtl == null ||
            form.rules.redeemTtl == 0 ||
            form.rules.redeemTtl == null ||
            pointGeneration.nominal.points == 0 ||
            pointGeneration.nominal.points == null ||
            pointGeneration.nominal.divider == 0 ||
            pointGeneration.nominal.divider == null ||
            pointGeneration.item.points == 0 ||
            pointGeneration.item.points == null ||
            pointGeneration.item.divider == 0 ||
            pointGeneration.item.divider == null ||
            pointGeneration.fixed.points == 0 ||
            pointGeneration.fixed.points == null ||
            (form.rules.distributionMethod == 'generate'
              ? form.rules.rewardClaimsMethod.app == false &&
                form.rules.rewardClaimsMethod.scan == false
              : false)
          "
          @click="
            () => {
              const { type } = pointGeneration;
              form.rules.pointGeneration.type = type;
              form.rules.pointGeneration.points = pointGeneration[type].points;
              form.rules.pointGeneration.divider =
                pointGeneration[type].divider;
              navigateToSection(sections.point.rewardsList);
            }
          "
        >
          Selanjutnya
        </button>
      </section>

      <section
        v-if="
          [sections.stamp.rewardsList, sections.point.rewardsList].includes(
            currentSection
          )
        "
      >
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
                if (currentSection === sections.stamp.rewardsList) {
                  navigateToSection(sections.stamp.createReward);
                } else if (currentSection === sections.point.rewardsList) {
                  navigateToSection(sections.point.createReward);
                }
              }
            "
          >
            <span
              class="material-symbols-rounded bg-biru2 text-white p-2.5 rounded-full text-base leading-none"
              >add</span
            >
            <p class="mt-5 text-sm font-medium">Tambah Reward</p>
          </div>
        </div>

        <button
          v-if="currentSection === sections.stamp.rewardsList"
          class="btn btn-rounded btn-lg w-full mt-12"
          @click="() => navigateToSection(sections.stamp.stampReview)"
          :disabled="form.rewards.length == 0"
          :class="{
            'btn-disabled': form.rewards.length == 0,
            'btn-primary': !(form.rewards.length == 0),
          }"
        >
          Selanjutnya
        </button>

        <button
          v-else-if="currentSection === sections.point.rewardsList"
          class="btn btn-rounded btn-lg w-full mt-12"
          @click="() => navigateToSection(sections.point.tieringChoice)"
          :disabled="form.rewards.length == 0"
          :class="{
            'btn-disabled': form.rewards.length == 0,
            'btn-primary': !(form.rewards.length == 0),
          }"
        >
          Selanjutnya
        </button>
      </section>

      <section
        v-if="
          [
            sections.stamp.createReward,
            sections.stamp.editReward,
            sections.point.createReward,
            sections.point.editReward,
          ].includes(currentSection)
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
            v-if="form.type === 'stamp'"
            label="Stempel yang Diperlukan"
            placeholder="Stempel yang Diperlukan"
            type-input="number"
            name-input="stamp"
            id="stamp"
            v-model.number="currentReward.stamp"
          />

          <TextField
            v-else-if="form.type === 'point'"
            label="Poin yang Diperlukan"
            placeholder="Poin yang Diperlukan"
            type-input="number"
            name-input="point"
            id="point"
            v-model.number="currentReward.point"
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
          v-if="
            [sections.stamp.createReward, sections.point.createReward].includes(
              currentSection
            )
          "
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="
            () => {
              createReward();
              if (currentSection === sections.stamp.createReward) {
                navigateToSection(sections.stamp.rewardsList);
              } else if (currentSection === sections.point.createReward) {
                navigateToSection(sections.point.rewardsList);
              }
            }
          "
        >
          Simpan
        </button>

        <template
          v-else-if="
            [sections.stamp.editReward, sections.point.editReward].includes(
              currentSection
            )
          "
        >
          <button
            class="btn btn-rounded btn-lg w-full mt-12"
            @click="
              () => {
                updateReward();
                if (currentSection === sections.stamp.editReward) {
                  navigateToSection(sections.stamp.rewardsList);
                } else if (currentSection === sections.point.editReward) {
                  navigateToSection(sections.point.rewardsList);
                }
              }
            "
            :disabled="
              currentReward.name == null ||
              currentReward.name == '' ||
              currentReward.stamp == null ||
              currentReward.stamp == 0 ||
              currentReward.point == null ||
              currentReward.point == 0 ||
              currentReward.description == null ||
              currentReward.description == '' ||
              currentReward.termsCondition == null ||
              currentReward.termsCondition == ''
            "
            :class="{
              'btn-disabled':
                currentReward.name == null ||
                currentReward.name == '' ||
                currentReward.stamp == null ||
                currentReward.stamp == 0 ||
                currentReward.point == null ||
                currentReward.point == 0 ||
                currentReward.description == null ||
                currentReward.description == '' ||
                currentReward.termsCondition == null ||
                currentReward.termsCondition == '',
              'btn-secondary': !(
                currentReward.name == null ||
                currentReward.name == '' ||
                currentReward.stamp == null ||
                currentReward.stamp == 0 ||
                currentReward.point == null ||
                currentReward.point == 0 ||
                currentReward.description == null ||
                currentReward.description == '' ||
                currentReward.termsCondition == null ||
                currentReward.termsCondition == ''
              ),
            }"
          >
            Simpan
          </button>
          <button
            class="btn btn-secondary btn-rounded btn-lg w-full mt-3"
            @click="
              () => {
                deleteReward();
                if (currentSection === sections.stamp.editReward) {
                  navigateToSection(sections.stamp.rewardsList);
                } else if (currentSection === sections.point.editReward) {
                  navigateToSection(sections.point.rewardsList);
                }
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

        <button
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="createStampProgram"
        >
          Buat Program
        </button>
      </section>

      <section v-if="currentSection === sections.point.tieringChoice">
        <p class="font-medium">Aktifkan Sistem Tiering?</p>
        <div class="flex flex-col gap-2.5 mt-4">
          <RadioCard
            v-for="(item, index) in tieringChoices"
            :key="index"
            v-bind="item"
            name="useTier"
            v-model:selected="isUseTiering"
          />
        </div>

        <button
          v-if="isUseTiering === 'true'"
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="
            () => {
              form.rules.tiers = form.rules.tiers
                ? form.rules.tiers
                : makeDefaultTiers();
              navigateToSection(sections.point.tiersList);
            }
          "
        >
          Selanjutnya
        </button>

        <button
          v-else
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="
            () => {
              form.rules.tiers = null;
              navigateToSection(sections.point.pointReview);
            }
          "
        >
          Selanjutnya
        </button>
      </section>

      <section v-if="currentSection === sections.point.tiersList">
        <div class="grid grid-flow-row auto-rows-fr gap-3">
          <div
            v-for="(tier, index) in form.rules.tiers"
            :key="index"
            class="flex items-start bg-white border border-lightGray rounded-lg p-4"
          >
            <div class="flex-1">
              <p class="text-lg font-semibold">{{ tier.name }}</p>
              <p>Min. {{ tier.pointsRequired }} Poin</p>
              <p>{{ tier.rewards.length }} Rewards</p>
            </div>
            <button
              class="btn btn-primary btn-rounded btn-sm"
              @click="() => editTier(tier.id)"
            >
              Edit
            </button>
          </div>

          <div
            class="flex flex-col items-center justify-center border border-lightGray rounded-lg"
            @click="
              () => {
                resetCurrentTier();
                navigateToSection(sections.point.createTier);
              }
            "
          >
            <span
              class="material-symbols-rounded bg-biru2 text-white p-2.5 rounded-full text-base leading-none"
              >add</span
            >
            <p class="mt-2 text-sm font-medium">Tambah Tier</p>
          </div>
        </div>

        <button
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="() => navigateToSection(sections.point.pointReview)"
        >
          Selanjutnya
        </button>
      </section>

      <section
        v-if="
          [sections.point.createTier, sections.point.editTier].includes(
            currentSection
          )
        "
      >
        <div class="flex flex-col gap-3">
          <TextField
            label="Nama Tier"
            placeholder="Nama Tier"
            type-input="text"
            name-input="tierName"
            id="tierName"
            v-model="currentTier.name"
          />

          <TextField
            label="Min. Perolehan Poin Dalam Setahun"
            placeholder="Min. Perolehan Poin Dalam Setahun"
            type-input="number"
            name-input="pointsRequired"
            id="pointsRequired"
            v-model.number="currentTier.pointsRequired"
          />
        </div>

        <div class="flex justify-between items-center mb-5 mt-8">
          <p class="font-medium">Rewards Yang Dapat Ditukarkan</p>
          <button
            class="flex items-center"
            @click="
              () => {
                selectedTierRewards = [...currentTier.rewards];
                if (currentSection === sections.point.createTier) {
                  navigateToSection(sections.point.createTierRewards);
                } else if (currentSection === sections.point.editTier) {
                  navigateToSection(sections.point.editTierRewards);
                }
              }
            "
          >
            <span class="text-xs text-biru2 font-semibold mr-2">Edit</span>
            <span
              class="p-1 rounded-full bg-biru2 text-white material-symbols-rounded arrow-button text-xs leading-none"
            >
              arrow_right_alt
            </span>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <RewardCard
            v-for="(reward, index) in currentTier.rewards.slice(0, 3)"
            v-bind="reward"
            :key="index"
          />
          <div
            v-if="currentTier.rewards.length > 3"
            class="bg-white border border-lightGray shadow-cardShadow rounded-lg p-4 min-h-[210px] flex flex-col items-center justify-center text-center text-gray"
          >
            +{{ currentTier.rewards.length - 3 }} Rewards Lainnya
          </div>
        </div>

        <p class="font-medium mt-8">Aturan Pembuatan Poin</p>
        <div class="flex flex-col gap-3 mt-3">
          <div class="grid grid-cols-2">
            <div>
              <p>Poin</p>
              <p class="text-lg font-semibold">
                {{ form.rules.pointGeneration.points }}
                {{
                  currentTier.useMultiplierFactor
                    ? `(${calculateAdditionalPoints(
                        currentTier.multiplierFactor,
                        form.rules.pointGeneration.points
                      )})`
                    : ""
                }}
              </p>
            </div>

            <div v-if="form.rules.pointGeneration.type === 'nominal'">
              <p>Per Nominal</p>
              <p class="text-lg font-semibold">
                {{ form.rules.pointGeneration.divider }}
              </p>
            </div>
            <div v-else-if="form.rules.pointGeneration.type === 'item'">
              <p>Per Item</p>
              <p class="text-lg font-semibold">
                {{ form.rules.pointGeneration.divider }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              v-model="currentTier.useMultiplierFactor"
              :true-value="true"
              :false-value="false"
              id="useMultiplierFactor"
            />
            <label class="font-medium" for="useMultiplierFactor"
              >Aktifkan Faktor Pengali</label
            >
          </div>

          <TextField
            v-if="currentTier.useMultiplierFactor"
            label="Faktor Pengali Poin"
            placeholder="Faktor Pengali Poin"
            type-input="number"
            name-input="multiplierFactor"
            id="multiplierFactor"
            v-model.number="currentTier.multiplierFactor"
          />
        </div>

        <button
          v-if="currentSection === sections.point.createTier"
          class="btn btn-rounded btn-lg w-full mt-12"
          @click="
            () => {
              createTier();
              navigateToSection(sections.point.tiersList);
            }
          "
          :disabled="
            currentTier.name == '' ||
            currentTier.name == null ||
            currentTier.pointsRequired == null ||
            currentTier.rewards.length == 0
          "
          :class="{
            'btn-disabled':
              currentTier.name == '' ||
              currentTier.name == null ||
              currentTier.pointsRequired == null ||
              currentTier.rewards.length == 0,
            'btn-primary': !(
              currentTier.name == '' ||
              currentTier.name == null ||
              currentTier.pointsRequired == null ||
              currentTier.rewards.length == 0
            ),
          }"
        >
          Simpan
        </button>

        <template v-if="currentSection === sections.point.editTier">
          <button
            class="btn btn-rounded btn-lg w-full mt-12"
            @click="
              () => {
                updateTier();
                navigateToSection(sections.point.tiersList);
              }
            "
            :disabled="
              currentTier.name == '' ||
              currentTier.name == null ||
              currentTier.pointsRequired == null ||
              currentTier.rewards.length == 0
            "
            :class="{
              'btn-disabled':
                currentTier.name == '' ||
                currentTier.name == null ||
                currentTier.pointsRequired == null ||
                currentTier.rewards.length == 0,
              'btn-primary': !(
                currentTier.name == '' ||
                currentTier.name == null ||
                currentTier.pointsRequired == null ||
                currentTier.rewards.length == 0
              ),
            }"
          >
            Simpan
          </button>
          <button
            v-if="!currentTier.isBase"
            class="btn btn-secondary btn-rounded btn-lg w-full mt-3"
            @click="
              () => {
                deleteTier();
                navigateToSection(sections.point.tiersList);
              }
            "
          >
            Hapus
          </button>
        </template>
      </section>

      <section
        v-if="
          [
            sections.point.createTierRewards,
            sections.point.editTierRewards,
          ].includes(currentSection)
        "
      >
        <div class="grid grid-cols-2 gap-4">
          <RewardCard
            v-for="(reward, index) in tierRewards"
            :key="'tier-reward-' + index"
            v-bind="reward"
          >
            <template #footer>
              <button
                v-if="!reward.isSelected"
                class="btn btn-primary btn-rounded btn-sm w-full mt-3"
                @click="() => addToSelectedTierRewards(reward.id)"
              >
                Pilih
              </button>
              <button
                v-else
                class="btn btn-secondary btn-rounded btn-sm w-full mt-3"
                @click="() => removeFromSelectedTierRewards(reward.id)"
              >
                Terpilih
              </button>
            </template>
          </RewardCard>
        </div>
      </section>

      <section v-if="currentSection === sections.point.pointReview">
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
            <p class="font-medium mt-1">
              Pengumpulan Poin
              {{
                form.rules.tiers
                  ? `Tier - ${form.rules.tiers.length} Tingkat`
                  : ""
              }}
            </p>
          </div>

          <div>
            <p class="text-sm">Masa Berlaku Poin</p>
            <p class="font-medium mt-1">{{ form.rules.pointTtl }} Tahun</p>
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

        <button
          class="btn btn-primary btn-rounded btn-lg w-full mt-12"
          @click="createPointProgram"
        >
          Buat Program
        </button>
      </section>
    </div>

    <template #bottom-action-bar>
      <p
        v-if="
          [
            sections.point.createTierRewards,
            sections.point.editTierRewards,
          ].includes(currentSection)
        "
        class="font-medium"
      >
        {{ selectedTierRewardsCount }} Rewards Terpilih
      </p>
    </template>
  </BaseLayout>
</template>
