<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

//importación de imagenes
import tv from '../assets/img/tele.png'
import maquina from '../assets/img/maquina_e.png'
import microfono from '../assets/img/microfono.png'
import radio from '../assets/img/radio.png'
import telefono from '../assets/img/telefono.png'
import logo from '../assets/img/poli_logo.png'


const indice_imagen = ref(0)
const imagenes = [tv, maquina, microfono, radio, telefono]
const imagen = ref(imagenes[indice_imagen.value])


//método para poder cambiar de imagen
function cambiar_imagen(){
indice_imagen.value = (indice_imagen.value + 1) % imagenes.length
imagen.value = imagenes[indice_imagen.value];
}

setInterval(cambiar_imagen,400)
</script>

<template>
   
   
    
   <main class="principal   bg-[url('../assets/img/fondo.png')] h-[80vh] flex flex-col items-center relative">

  <div class="imagen_izquierda     absolute left-0 max-w-[13vh] flex items-start mt-12 ml-5 z-0">
    <img src="../assets/img/marco.png" alt="" class="max-h-full object-contain flex">
  </div>

  <div class="imagen_derecha     absolute right-0 max-w-[13vh] flex items-start mt-12 mr-5 z-0 espejo-x">
    <img src="../assets/img/marco.png" alt="" class="max-h-full object-contain flex">
  </div>
    
    <nav class="navegacion     flex justify-between mt-12 z-10">
      <div class="flex justify-center items-center max-w-20">
        <img :src="logo" alt="" class="max_h_full max_w_full">
      </div>
      <div class="">
        
      </div>
    </nav>

    <div class="mt-10 mb-6 flex flex-col items-center gap-8 z-10">
      <div>
      <img src="../assets/img/titulo.png" alt="titulo" class="max-w-[30vh]">
    </div>
    <div class="w-[15vh] h-[15vh] flex items-center justify-center">
      <img class="max-w-full max-h-full" :src="imagen" alt="imagen">
    </div>
      
    </div>
    
      
   <p class="text-white playfair-display">
     Demuestra lo que aprendiste
   </p>
  </main>
  <div class="h-[20vh] bg-[url(../assets/img/colagge.png)] bg-cover flex items-center justify-center ">
    <RouterLink to="/examen" class="text-4xl">comenzar</RouterLink></div>
  
</template>

