<script setup>
import { onMounted, ref } from 'vue';
import logo from '../assets/img/poli_logo.png';

import { useQuizStore } from '@/stores/Quiz'
import { db } from '@/firebase/firebaseConfig'


const QuizStore = useQuizStore()
const quiz_data = ref([])

onMounted(()=>{
  QuizStore.getData().then(data => {
    quiz_data.value = data
  }).catch(error => {
    console.error('Error fetching quiz data:', error);
  })
})

</script>
<template>
  <nav class="navegacion flex justify-between mt-12 z-10">
    <div class="flex justify-center items-center max-w-20">
      <img :src="logo" alt="" class="max_h_full max_w_full">
    </div>
  </nav>
  <div class="audio">
    <audio controls src=""></audio>
  </div>
  <main>
    <p></p>
    <ul class="opciones">
      <li v-for="(item, id) in quizdata" :key="id">
        <div>{{ item.pregunta }}</div>
        <div>{{ item.estudiantes }}</div>
        <!-- Agrega aquí más campos según sea necesario -->
      </li>
    </ul>
    <div class="progreso">
      <p class="texto_progreso"></p>
    </div>
  </main>
  <section class="regresar mt-6">
    <button class="">regresar</button>
    <RouterLink to="/resultado" class="text-white">Terminar</RouterLink>
  </section>
</template>



<style>
/* Añade estilos opcionales si es necesario */
</style>
