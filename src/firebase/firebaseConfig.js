
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "investigacion-creacion.firebaseapp.com",
  projectId: "investigacion-creacion",
  storageBucket: "investigacion-creacion.appspot.com",
  messagingSenderId: "598392003730",
  appId: "1:598392003730:web:c870048d0aae8ecf735a4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);