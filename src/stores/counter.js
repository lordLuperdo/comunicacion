import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useQuizStore = defineStore('Quiz', () => {
  const count_correctas = ref(0)
  const count_global = ref (0)

  function increment_global() {
    count.value++
  }

  function increment_correct() {
    count.value++
  }
  
  return { count, doubleCount, increment }
})
