import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCDoXbKvHeLtVNsq2L06HRemdDQwGsd8j4",
  authDomain: "investigacion-creacion.firebaseapp.com",
  projectId: "investigacion-creacion",
  storageBucket: "investigacion-creacion.appspot.com",
  messagingSenderId: "598392003730",
  appId: "1:598392003730:web:c870048d0aae8ecf735a4b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = getFirestore(app);
console.log(db)

export { db };
