<script setup>
import { ref } from 'vue';
import logo from '../assets/img/poli_logo.png';

import img1c from '../assets/img/collage/cortadas/imagen1.png'

const num_p = ref(100);
</script>

<template>
  <nav class="navegacion flex items-center justify-center z-10 mt-9">
    <div class="flex max-w-20">
      <img :src="logo" alt="" class="max_h_full max_w_full">
    </div>
  </nav>

  <div class="porcentaje flex flex-col items-center gap-1">
    <p class="parrafo_porcentaje text-white text-2xl">porcentaje del Collage</p>
    <div class="barra_porcentaje h-[3vh] w-[40vh] bg-black bg-opacity-70 border-4 rounded-full overflow-hidden flex items-start mt-4">
      <div 
        class="progreso_porcentaje h-full bg-white" 
        :style="{ width: num_p + '%' }">
      </div>
    </div>
    <p class="porcentaje_numero text-white text-lg">{{ num_p }}%</p>
  </div>

  <section class="flex items-center justify-center mt-7">
    <div class="collage relative overflow-hidden w-[40vh] min-h-[60vh] bg-black border-white border-4 rounded-sm bg-opacity-70">
        <img :src="img1c" alt="infocracia" class="absolute bottom-0 max-w-[30vh] right-0 z-50 ">
        <img src="" alt="" class="absolute">
        <img src="" alt="" class="absolute">
        <img src="" alt="" class="absolute">
        <img src="" alt="" class="absolute">
        <img src="" alt="" class="absolute">
        <img src="" alt="" class="absolute">
        <img src="" alt="" class="absolute">
        <img src="" alt="" class="absolute">
        <img src="" alt="" class="absolute">
    </div>
  </section>
</template>

<style scoped>
.barra_porcentaje {
  position: relative;
}

.progreso_porcentaje {
  transition: width 0.3s ease;
}
</style>
