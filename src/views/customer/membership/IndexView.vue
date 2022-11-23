<script setup>
import AppBar from "@/components/AppBar.vue";
import TextField from "@/components/TextField.vue";
import MembershipProgramCard from "@/components/MembershipProgramCard.vue";
</script>

<template>
  <main class="pb-20">
    <AppBar icon="arrow_back" title="Daftar Membership" />
    <div class="px-7.5 pt-6">
      <TextField placeholder="Cari merchant/brand..." type-input="text" />
      <div class="flex flex-col gap-3 mt-8">
        <MembershipProgramCard
          v-for="index in 10"
          :key="index"
          :is-merchant="false"
          program-name="Laundree Membership"
          program-type="point"
          program-img="https://via.placeholder.com/48"
          :total-point="10"
        />
      </div>
    </div>
  </main>
</template>
