<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

//importación de imagenes
import tv from '../assets/img/tele.png'
import maquina from '../assets/img/maquina_e.png'
import microfono from '../assets/img/microfono.png'
import radio from '../assets/img/radio.png'
import telefono from '../assets/img/telefono.png'


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
  <main class="bg-[url('../assets/img/fondo.png')] h-[70vh] flex flex-col items-center ">
    
    <div class="mt-10 mb-6 flex flex-col items-center gap-8">
      <div>
      <img src="../assets/img/titulo.png" alt="titulo" class="max-w-[35vh]">
    </div>
    <div class="w-[20vh] h-[20vh] flex items-center justify-center">
      <img class="max-w-full max-h-full" :src="imagen" alt="imagen">
    </div>

    </div>
    
      
   <p class="text-white">
     Demuestra lo que aprendiste
   </p>
  </main>
  <RouterLink to="/examen">comenzar</RouterLink>
  {{ imagen }}
  {{ indice_imagen }}
</template>
