<script setup>
import logo from '../assets/img/poli_logo.png'
import {ref} from 'vue'

import db from '../firebase/firebaseConfig.js'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const quizdata = ref()

const traerData = async () => {
const snapshot = await (collection(db,'quiz'))
}

</script>
<template>
    <nav class="navegacion     flex justify-between mt-12 z-10">
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
          <li class="opcion"></li>
        </ul>
       
        <div class="progreso">
          <p class="texto_progreso"></p>
        </div>
    </main>
    <section class="regresar">
      <button class="">regresar</button>
      <RouterLink to="/resultado" class="">Terminar</RouterLink>
    </section>
</template>

