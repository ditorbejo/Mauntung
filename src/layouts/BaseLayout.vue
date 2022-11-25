<script setup>
import AppBar from "../components/AppBar.vue";
import NavigationBar from "../components/NavigationBar.vue";
import BottomActionBar from "../components/BottomActionBar.vue";

defineProps({
  useAppBar: Boolean,
  useNavBar: Boolean,
  useFab: Boolean,
  useBottomActionBar: Boolean,
  title: String,
  appBarIcon: String,
  fabIcon: String,
  bottomActionBarActionName: String,
});

defineEmits(["appBarButtonClick", "fabClick", "bottomActionBarButtonClick"]);
</script>

<template>
  <AppBar
    v-if="useAppBar"
    :icon="appBarIcon"
    :title="title"
    @button-click="$emit('appBarButtonClick')"
  />

  <main class="pt-5 pb-20 max-w-xl mx-auto">
    <slot></slot>
  </main>

  <button v-if="useFab" @click="$emit('fabClick')">
    <span
      class="material-symbols-rounded fixed bottom-20 right-4 p-4 rounded-full shadow-floatingButtonShadow text-white bg-biru2"
    >
      {{ fabIcon }}
    </span>
  </button>

  <NavigationBar v-if="useNavBar" />
  <BottomActionBar
    v-else-if="useBottomActionBar"
    @button-click="$emit('bottomActionBarButtonClick')"
    :action-name="bottomActionBarActionName"
  >
    <slot name="bottom-action-bar"></slot>
  </BottomActionBar>
</template>
