import {ref} from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase/supabaseconfig'


import { querybycollection } from '@/firebase/fireStore'
import { supabase } from '@/supabase/supabaseconfig'




export const useQuizStore = defineStore('Quiz', () => {
  const count_correctas = ref(0)
  const count_global = ref (0)
  const quiz_data = ref([]);

  function increment_global() {
    count_global.value++
  }

  function increment_correct() {
    count_correctas.value++
  }

  async function getData() {
    const { data : quiz_data }= await supabase.from('preguntas').select()
  }
  
  return { increment_correct,increment_global,getData }
})
