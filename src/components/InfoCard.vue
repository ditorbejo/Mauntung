<script setup>
const props = defineProps(['icon', 'value', 'info', 'colorIcon'])
</script>

<template>
<div class=" flex flex-col gap-2.5 border shadow-cardShadow border-lightGray rounded-xl px-4 py-3.5">
    <div class="flex gap-5 items-center">
        <span class="material-symbols-rounded rounded-full p-1.5" :class="[colorIcon]">{{props.icon}}</span>
        <p class="font-semibold">{{props.value}}</p>
    </div>
    <p>{{props.info}}</p>
</div>
</template>