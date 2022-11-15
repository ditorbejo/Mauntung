import { ref } from "vue";
import { defineStore } from "pinia";

export const useBasePointStore = defineStore("basePoint", () => {
  const basePoint = ref(0);
  function setBasePoint(poin) {
    basePoint.value = poin;
  }

  return { basePoint, setBasePoint };
});
