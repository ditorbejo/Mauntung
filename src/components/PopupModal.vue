<script setup>
import { onMounted, ref } from "vue";

defineProps({ isOpen: Boolean });

const emit = defineEmits(["modalClose"]);

const popupModalBackground = ref(null);
const closeModal = (event) => {
  if (event.target.id === "popupModalBackground") {
    emit("modalClose");
  }
};

onMounted(() => {
  const dismissElements = popupModalBackground.value.querySelectorAll(
    '[data-dismiss="modal"]'
  );
  dismissElements.forEach((element) => {
    element.addEventListener("click", () => emit("modalClose"));
  });
});
</script>

<template>
  <div
    v-show="isOpen"
    @click="(event) => closeModal(event)"
    class="fixed inset-0 bg-black z-50 bg-opacity-60"
    id="popupModalBackground"
    ref="popupModalBackground"
  >
    <div
      class="bg-white border border-lightGray mx-auto mt-3 rounded-lg max-w-xs"
    >
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
