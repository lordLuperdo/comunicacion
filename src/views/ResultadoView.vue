<script setup>
import { ref, computed } from 'vue';
import logo from '../assets/img/poli_logo.png';
import pyr from '../stores/pyr';
import { useQuizStore } from '@/stores/Quiz';

import img1c from '../assets/img/collage/cortadas/imagen1.png';
import img2c from '../assets/img/collage/cortadas/imagen2.png';
import img3c from '../assets/img/collage/cortadas/imagen3.png';
import img4c from '../assets/img/collage/cortadas/imagen4.png';
import img5c from '../assets/img/collage/cortadas/imagen5.png';
import img6c from '../assets/img/collage/cortadas/imagen6.png';

const QuizStore = useQuizStore();

const active = ref(false);

const cerrar = () => {
  active.value = false;
};
const abrir = () => {
  active.value = true;
};

console.log('bazilon'+QuizStore.porcentaje);
const num_p = computed(() => QuizStore.porcentaje);

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

  <section v-if="active" @click="cerrar" class="pop-up bg-black bg-opacity-90 flex flex-col items-center absolute z-50 top-0 h-[100vh] justify-center">
    <ul class="flex flex-col max-h-[58vh] max-w-[90%] gap-5 items-center overflow-scroll px-5 border-white border-4 pt-5">
      <li class="flex flex-col" v-for="card in pyr" :key="card.pregunta">
        <div class="flex">
          <img :src="card.imagen" alt="" class="max-w-full max-h-full text-50">
        </div>
      </li>
    </ul>

    <div class="volver">
      <button @click="cerrar">salir</button>
    </div>
  </section>
  
  <section @click="abrir" class="flex items-center justify-center mt-7">
    <div class="collage relative overflow-hidden w-[40vh] min-h-[60vh] bg-black border-white border-4 rounded-sm bg-opacity-70">
      <img v-if="num_p >= 5" :src="img1c" alt="infocracia" class="absolute bottom-0 max-w-[30vh] right-0 z-40">
      <img v-if="num_p >= 10" :src="img2c" alt="rtvc" class="absolute z-30 right-7 bottom-92">
      <img v-if="num_p >= 20" :src="img3c" alt="hallin" class="absolute">
      <img v-if="num_p >= 30" :src="img4c" alt="castellano" class="absolute">
      <img v-if="num_p >= 40" :src="img5c" alt="escultura" class="absolute top-28 right-20 z-20">
      <img v-if="num_p >= 50" :src="img6c" alt="medios" class="absolute right-40 z-10">
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
