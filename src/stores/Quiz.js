import { ref} from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/firebase/firebaseConfig'




export const useQuizStore = defineStore('Quiz', () => {
  const count_correctas = ref(0)
  const count_global = ref (0)

  function increment_global() {
    count_global.value++
  }

  function increment_correct() {
    count_correctas.value++
  }

  function getData(){
    db.collection('quiz').get()
    .then(res=>{
      res.forEach(doc => {
        console.log(doc.data())
      })
    })

  }
  
  return { increment_correct,increment_global,getData }
})
