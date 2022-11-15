<script setup>
import CodeGenerator from "@/components/CodeGenerator.vue";
import InfoCard from "@/components/InfoCard.vue";
import MembershipProgramCard from "@/components/MembershipProgramCard.vue";
</script>

<template>
  <main class="px-7.5 pb-20">
    <h1 class="mt-3 mb-5 font-semibold">Halo, Joomla</h1>
    <div class="flex flex-col gap-3">
      <CodeGenerator :use-nominal="true" top-label="Nominal Transaksi" />
      <MembershipProgramCard
        :is-merchant="true"
        program-name="Laundree Membership"
        program-type="Berbasis Poin"
      />
    </div>
    <h1 class="font-semibold mb-5 mt-8">Aktivitas Hari ini</h1>
    <div class="flex gap-3 flex-col">
      <InfoCard
        icon="assignment"
        value="Rp.500.000"
        info="Nominal Transaksi Hari ini"
        color-icon="bg-pastelBiru"
      />
      <div class="flex gap-4.5">
        <InfoCard
          class="basis-1/2"
          icon="favorite"
          value="10"
          info="Poin Diberikan"
          color-icon="bg-pastelRed"
        />
        <InfoCard
          class="basis-1/2"
          icon="confirmation_number"
          value="10"
          info="Rewards Ditukarkan"
          color-icon="bg-pastelHijau"
        />
      </div>
    </div>
  </main>
</template>
