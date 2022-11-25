<script setup>
import PopupModal from "../../components/PopupModal.vue";
import { computed, ref } from "vue";
import BaseLayout from "../../layouts/BaseLayout.vue";

const reward = {
  name: "1 Kali Cuci Gratis",
  points: 10,
  img: "https://via.placeholder.com/300",
  description:
    "convallis. non, ullamcorper viverra efficitur. lacus tincidunt hendrerit enim. sollicitudin. sollicitudin. ex. enim. non, orci tempor ex nisi at, vitae Sed Ut Nam elit. tincidunt cursus lacus, dolor Ut cursus dolor Nunc nibh vel ipsum placerat. in massa ac convallis. leo. maximus vitae quis non vitae consectetur sit tincidunt sapien Nam placerat faucibus commodo urna. ex. non, eget faucibus Ut nisi faucibus faucibus in commodo tincidunt In dignissim, Vestibulum dolor Nam",
  termsCondition:
    "convallis. non, ullamcorper viverra efficitur. lacus tincidunt hendrerit enim. sollicitudin. sollicitudin. ex. enim. non, orci tempor ex nisi at, vitae Sed Ut Nam elit. tincidunt cursus lacus, dolor Ut cursus dolor Nunc nibh vel ipsum placerat. in massa ac convallis. leo. maximus vitae quis non vitae consectetur sit tincidunt sapien Nam placerat faucibus commodo urna. ex. non, eget faucibus Ut nisi faucibus faucibus in commodo tincidunt In dignissim, Vestibulum dolor Nam",
};

const qty = ref(1);
const increaseQty = () => {
  qty.value++;
};

const decreaseQty = () => {
  if (qty.value > 1) {
    qty.value--;
  }
};

const requiredPoints = computed(() => qty.value * reward.points);

const modalIsOpen = ref(false);
</script>

<template>
  <BaseLayout
    :use-bottom-action-bar="true"
    @bottom-action-bar-button-click="() => (modalIsOpen = true)"
    bottom-action-bar-action-name="Tukarkan"
  >
    <div class="relative shadow-cardShadow -mt-5">
      <button
        class="absolute flex items-center bg-biru2 rounded-full py-2.5 px-2.5 top-4 left-4 z-30"
      >
        <span
          class="material-symbols-rounded text-white text-base leading-none"
        >
          arrow_back
        </span>
      </button>
      <img
        class="w-full aspect-square rounded-bl-lg rounded-br-lg"
        :src="reward.img"
        :alt="reward.name"
      />
      <div class="px-5 py-2.5">
        <h2 class="font-semibold text-lg">{{ reward.name }}</h2>
        <h4>{{ reward.points }} Poin</h4>
      </div>
    </div>

    <div
      class="shadow-cardShadow px-5 py-2.5 flex justify-between items-center mt-2"
    >
      <p class="font-medium">Jumlah</p>
      <div class="flex gap-2.5 items-center">
        <button
          class="flex items-center bg-biru2 rounded-full py-2.5 px-2.5"
          @click="decreaseQty"
        >
          <span
            class="material-symbols-rounded text-white text-base leading-none"
          >
            remove
          </span>
        </button>
        <div
          class="font-semibold text-lg w-12 h-12 text-center border border-biru1 rounded-lg flex items-center justify-center"
        >
          {{ qty }}
        </div>
        <button
          class="flex items-center bg-biru2 rounded-full py-2.5 px-2.5"
          @click="increaseQty"
        >
          <span
            class="material-symbols-rounded text-white text-base leading-none"
          >
            add
          </span>
        </button>
      </div>
    </div>

    <div class="shadow-cardShadow px-5 py-2.5 mt-2">
      <h2 class="font-medium">Deskripsi</h2>
      <p>{{ reward.description }}</p>
    </div>

    <div class="shadow-cardShadow px-5 py-2.5 mt-2">
      <h2 class="font-medium">Syarat & Ketentuan</h2>
      <p>{{ reward.termsCondition }}</p>
    </div>

    <PopupModal
      :isOpen="modalIsOpen"
      @modal-close="
        () => {
          modalIsOpen = false;
        }
      "
    >
      <template #header>
        <div class="flex justify-between p-4 items-center">
          <p class="font-semibold">Konfirmasi</p>
          <span
            class="p-2 bg-biru2 text-white rounded-full material-symbols-rounded"
            data-dismiss="modal"
          >
            close
          </span>
        </div>
      </template>
      <template #body>
        <p class="p-4">
          Apakah Anda yakin akan menukarkan
          <span class="font-semibold">{{ requiredPoints }} poin</span> Anda
          dengan reward
          <span class="font-semibold">{{ reward.name }} (x{{ qty }})</span> ?
        </p>
      </template>
      <template #footer>
        <div class="flex gap-2.5 p-4">
          <button
            class="btn btn-primary btn-rounded btn-sm flex-1"
            data-dismiss="modal"
          >
            Tukarkan
          </button>
          <button
            class="btn btn-secondary btn-rounded btn-sm flex-1"
            data-dismiss="modal"
          >
            Batal
          </button>
        </div>
      </template>
    </PopupModal>

    <template #bottom-action-bar>
      <p>{{ qty }} Pcs ({{ requiredPoints }} Poin)</p>
    </template>
  </BaseLayout>
</template>
