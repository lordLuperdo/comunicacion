<script setup>
import { ref } from 'vue';
import logo from '../assets/img/poli_logo.png';
import pyr from '../stores/pyr'

import img1c from '../assets/img/collage/cortadas/imagen1.png'

const active = ref(false)

const cerrar= ()=>{
  active.value=false
}
const abrir = ()=> {
  active.value = true
}
const num_p = ref(15);
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
  <section v-if="active===true" @click="cerrar" class="pop-up bg-black bg-opacity-90 flex flex-col items-center absolute z-50 top-0 h-[100vh] justify-center ">
   <ul class="flex flex-col max-h-[58vh] max-w-[90%] gap-10 items-center  overflow-scroll px-5 border-white border-4">
    <li class="flex flex-col gap-3 mt-5" v-for="card in pyr" key="card">
      <div class="flex">
        <img :src="card.imagen" alt="" class="max-w-full max-h-full text-50">
      </div>
       <div class="">
        <h1 class="text-white"><b>{{ card.pregunta }}</b></h1>
       </div>
       <div class="">
        <p class="text-white">{{ card.respuesta }}</p>
       </div>
    </li>
   </ul>
   <div class="volver">
    <button @click="cerrar">salir</button>
   </div>
  </section>
  <section @click="abrir" class="flex items-center justify-center mt-7">
    <div class="collage relative overflow-hidden w-[40vh] min-h-[60vh] bg-black border-white border-4 rounded-sm bg-opacity-70">
        <img :src="img1c" alt="infocracia" class="absolute bottom-0 max-w-[30vh] right-0 z-40 ">
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
