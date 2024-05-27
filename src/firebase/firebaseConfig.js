
import { getFirestore } from 'firebase/firestore';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmwIsXRvUrHIIPuvWM9ZLiTCYxIvFrcSc",
  authDomain: "investigacion-creacion2.firebaseapp.com",
  projectId: "investigacion-creacion2",
  storageBucket: "investigacion-creacion2.appspot.com",
  messagingSenderId: "570458280429",
  appId: "1:570458280429:web:ae3a02cdbc26b6db8257e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = getFirestore(app);

export { db };
