import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { queryByCollection } from '@/supabase/supabase';
import pyr from './pyr';

export const useQuizStore = defineStore('Quiz', () => {
  
  const count_correctas = ref(0);
  const count_global = ref(0);
  const quiz_data = ref([]);
  const preguntas = pyr
  const terminado =ref(false)
  const bloquear_atras =ref(true)

  

  function increment_global() {
    count_global.value++;

    if (count_global.value > 0) {
      bloquear_atras.value = false;
    }
  }
 
  function increment_correct() {
    count_correctas.value++;
    console.log('correctas'+ count_global);
  }
  
  function check_answer(selected_option) {
    const current_question = preguntas[count_global.value];
    if (selected_option === current_question.respuesta) {
      increment_correct();
    }
    increment_global();
  }

  function decrement_global() {
    count_global.value--;
    console.log(count_global);
    
    if (count_global.value <= 0) {
      bloquear_atras.value = true;
    } else {
      bloquear_atras.value = false;
    }
    
    console.log(bloquear_atras.value);
  }


  const porcentaje = computed(() =>{
    if (preguntas.length === 0) return 0; // Evitar división por cero
    return Math.round((count_correctas.value / preguntas.length) * 100);
  })


  function sumar_correctas(params) {
    
  }

  async function getData(fina) {
    fina = await queryByCollection(); 
  }

  return {
    count_correctas,
    count_global,
    increment_correct,
    decrement_global, 
    increment_global,
    getData, 
    quiz_data,
    preguntas,
    bloquear_atras,
    check_answer,
    porcentaje,
    terminado
  };
});