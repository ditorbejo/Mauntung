<script setup>
defineProps({ stampCard: Object });
</script>

<template>
  <div
    class="bg-white border border-lightGray shadow-cardShadow rounded-lg p-4 flex flex-col gap-3"
  >
    <div>
      <p class="text-lg font-semibold">Kartu Stempel</p>
      <p class="text-sm">
        Anda telah mengumpulkan
        <span class="text-sm font-semibold"
          >{{ stampCard.balance }} stempel</span
        >
      </p>
    </div>
    <div class="grid grid-cols-5 place-items-center gap-2">
      <template v-for="i in stampCard.capacity" :key="i">
        <div
          v-if="i <= stampCard.balance"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-biru2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3605 0.0460138C10.803 0.112479 10.2403 0.276088 9.72365 0.521499C9.10471 0.812922 8.68527 1.09923 8.21467 1.54916L7.83103 1.91727L7.16605 1.94795C5.74403 2.0093 4.57265 2.50523 3.57007 3.48687C2.54192 4.48386 1.99971 5.71602 1.93833 7.17315L1.91275 7.8378L1.57003 8.19569C0.976671 8.80922 0.674874 9.27448 0.373078 10.0414C-0.169133 11.4065 -0.117981 12.9556 0.511188 14.2849C0.812985 14.924 1.0534 15.2717 1.51888 15.7625L1.90764 16.1715L1.93833 16.8362C1.99971 18.3035 2.55215 19.5459 3.5803 20.5327C4.60846 21.5194 5.74403 22 7.16605 22.0614L7.83103 22.0921L8.21467 22.4602C9.76969 23.948 11.9999 24.403 13.9693 23.6259C14.7212 23.3293 15.1969 23.0226 15.8107 22.4295L16.1688 22.087L16.8338 22.0614C18.3121 22 19.5397 21.453 20.5423 20.41C21.5142 19.3926 22.0001 18.2524 22.0615 16.8362L22.0922 16.1715L22.4605 15.7881C24.036 14.1418 24.4452 11.7439 23.4886 9.7244C23.1868 9.08531 22.9464 8.73764 22.4809 8.24682L22.0922 7.8378L22.0615 7.17315C22.0001 5.75692 21.5142 4.61679 20.5423 3.59935C19.5397 2.55636 18.3121 2.0093 16.8338 1.94795L16.1688 1.91727L15.7596 1.5287C14.8644 0.674878 13.8056 0.178945 12.5984 0.0460138C12.0511 -0.0153379 11.8823 -0.0153379 11.3605 0.0460138ZM13.7995 10.5503C15.7075 8.64327 16.2957 8.08598 16.4338 8.05019C17.2932 7.80478 18.0605 8.495 17.861 9.34371C17.8047 9.58912 17.7126 9.68626 14.9044 12.5085C12.9401 14.4769 11.9427 15.4432 11.8046 15.5097C11.5539 15.6272 11.1754 15.6324 10.9196 15.5301C10.6792 15.4278 7.2674 12.0432 7.10883 11.7467C6.89911 11.3479 7.00141 10.7702 7.33901 10.4583C7.63058 10.1822 8.19325 10.1055 8.5462 10.2845C8.6485 10.3407 9.32371 10.9747 10.0398 11.6904L11.3442 12.9993L13.7995 10.5503Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          v-else
          class="w-9 h-9 flex items-center justify-center rounded-full bg-lightGray text-gray font-medium"
        >
          {{ i }}
        </div>
      </template>
    </div>

    <p class="text-sm">
      <span class="font-semibold"
        >{{ stampCard.willVoidSoon.stamps }} stempel</span
      >
      akan hangus pada
      <span class="font-semibold">{{
        stampCard.willVoidSoon.voidAt.toDateString()
      }}</span>
    </p>
  </div>
</template>
