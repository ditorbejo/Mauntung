<script setup>

const props = defineProps(["active"]);
</script>

<template>
<div class="flex w-full">
    <button class="basis-1/2 rounded-l-full border border-solid border-biru2 border-2 text-center py-1 text-white font-medium" :class="[props.active == 'left' ? 'bg-biru2' : 'bg-biru4']" >Email</button>
    <button class="basis-1/2 rounded-r-full border border-solid border-biru2 border-2 text-center py-1 text-white font-medium" :class="[props.active == 'right' ? 'bg-biru2' : 'bg-biru4']" >No. Hp</button>
</div>
</template>