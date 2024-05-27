import { ref } from 'vue';
import { defineStore } from 'pinia';
import { queryByCollection } from '@/supabase/supabase';
import pyr from './pyr';

export const useQuizStore = defineStore('Quiz', () => {
  
  const count_correctas = ref(0);
  const count_global = ref(0);
  const quiz_data = ref([]);
  const preguntas = pyr


  function increment_global() {
    count_global.value++;
  }

  function increment_correct() {
    count_global.value++;
    console.log(count_global);
  }
  function decrement_global() {
    count_global.value--;
    console.log(count_global);
  }


  function porcentaje(total,){

  }
  function sumar_correctas(params) {
    
  }

  async function getData() {
    quiz_data.value = await queryByCollection('total'); 
  }

  return {count_correctas,count_global, increment_correct,decrement_global, increment_global, getData, quiz_data, preguntas };
});