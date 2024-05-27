<script setup>
import { onMounted, ref } from 'vue';
import logo from '../assets/img/poli_logo.png';
import { useQuizStore } from '@/stores/Quiz';
import { useRouter } from 'vue-router';
import router from '@/router';

const QuizStore = useQuizStore();
const quiz_data = ref([]);
const preguntas = QuizStore.preguntas

console.log(QuizStore.preguntas);

function end_quiz() {
  router.push('/resultado')
}

onMounted(async () => {
  await QuizStore.getData(); // Llamamos a getData para obtener los datos
  quiz_data.value = QuizStore.quiz_data; // Asignamos los datos obtenidos a quiz_data
  console.log(quiz_data.value);
});
</script>

<template>
  
  <nav class="navegacion flex justify-center mt-12 z-10">
    <div class="flex justify-center items-center max-w-20">
      <img :src="logo" alt="" class="max_h_full max_w_full">
    </div>
  </nav>
  <div class="audio flex justify-center">
    <audio controls 
    src=""
    class="max-w-[80vh]"
    ></audio>
  </div>
  <main class="flex px-6 flex-col max-w-[100vh] mt-10 gap-6">
    <h2 class="text-white text-center text-3xl">{{ QuizStore.preguntas[QuizStore.count_global].pregunta }}</h2>
    
    
    <ul class="opciones flex flex-col w-full gap-6">
      
      <li v-for="pregunta in QuizStore.preguntas[QuizStore.count_global].opciones" 
      :key="pregunta"
      @click="QuizStore.increment_global"
 
      > <!-- Usamos quiz_data aquí -->
        
      <div class="bg-[url('../assets/img/papel_arrugado.jpg')] bg-cover flex max-w-[100vh] w-full p-3 rounded-3xl ">
          <p class="text-black">{{ pregunta }}</p>
        </div>
       
      </li>
    </ul>

    <div class="progreso">
      <p class="texto_progreso"></p>
    </div>
  </main>
  
  <div class="flex items-center justify-center gap-5">
    <div class="w-24 h-0.5 bg-white"></div>
    <p class="text-white">pregunta {{ QuizStore.count_global+1}}/5</p>
    <div class="w-24 h-0.5 bg-white"></div>
  </div>

  <section class="regresar mt-10  h-52 bg-cover flex flex-col gap-6 items-center">
    <div 
    class="bg-[url('../assets/img/papel_arrugado.jpg')] bg-cover flex  h-12 w-80 p-3 rounded-3xl items-center justify-center"
    @click="QuizStore.decrement_global">
       <button 
       class="text-black text-2xl"
       ><b>Regresar</b></button>
    </div>

    <div 
    class="bg-[url('../assets/img/papel_arrugado.jpg')] bg-cover flex  h-12 w-80 p-3 rounded-3xl items-center justify-center"
    @click="end_quiz">
       <button class="text-black text-2xl"><b>Finalizar</b></button>
      </div>
   
    
  </section>
</template>
<style>
/* Añade estilos opcionales si es necesario */
</style>
