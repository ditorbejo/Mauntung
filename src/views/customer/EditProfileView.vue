<script setup>
import AppBar from "../../components/AppBar.vue";
import TextField from "@/components/TextField.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
</script>

<template>
  <main>
    <AppBar icon="arrow_back" title="Edit Profil"></AppBar>
    <div class="px-7.5 pb-20">
      <div class="flex flex-col gap-4 items-center mb-8 mt-5">
        <p class="font-medium">Foto Profil</p>
        <img
          class="border border-biru1 rounded-lg shadow-cardShadow"
          width="120"
          height="120"
          src="https://via.placeholder.com/200"
          alt=""
        />
        <button class="btn btn-primary btn-sm btn-rounded font-medium">
          Browse
        </button>
      </div>
      <div class="flex flex-col gap-3 mb-12">
        <TextField
          label="Nama Lengkap"
          placeholder="Nama Lengkap"
          typeInput="text"
          nameInput="customerName"
          id="customerName"
          value=""
        ></TextField>
        <TextField
          label="No. Hp"
          placeholder="No. Hp"
          typeInput="text"
          nameInput="phone"
          id="phone"
          value=""
        ></TextField>
        <TextField
          label="Email"
          placeholder="Email"
          typeInput="email"
          nameInput="email"
          id="email"
          value=""
        ></TextField>
        <div class="flex flex-col gap-2">
          <label class="font-medium" for="">Tanggal Lahir</label>
          <Datepicker range :enableTimePicker="false" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium">Jenis Kelamin:</p>
          <div class="flex gap-2">
            <input type="radio" name="gender" value="0" id="male" />
            <label for="male">Laki-laki</label>
            <input type="radio" name="gender" value="1" id="female" />
            <label for="female">Perempuan</label>
          </div>
        </div>
      </div>
      <button class="w-full btn btn-primary btn-lg btn-rounded">Simpan</button>
    </div>
  </main>
</template>
