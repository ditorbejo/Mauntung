<script setup>
import TextField from './TextField.vue';


const props = defineProps(['useNominal', 'topLabel']);
</script>

<template>
<div class=" border rounded-lg px-4 py-4 border-lightGray shadow-cardShadow">
    <h2 class="font-semibold mb-4">Buat Kode Poin</h2>
    <div class="flex flex-col gap-2.5">
        <TextField v-if="props.useNominal" :label="topLabel" type="number" name="nominal" id="nominal"></TextField>
        <TextField label="Poin Dasar" type="number" name="poin" id="poin"></TextField>
    </div>
    <button class="w-full mt-4 btn btn-primary btn-rounded btn-base"> Buat Kode</button>
</div>
</template>