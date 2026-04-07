import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDKWTvbdzxKOpepGidSD3hEC6ku2UHiPwA",
  authDomain: "bodega-isa.firebaseapp.com",
  projectId: "bodega-isa",
  storageBucket: "bodega-isa.firebasestorage.app",
  messagingSenderId: "234299618298",
  appId: "1:234299618298:web:60b979c37a962ef377aa43"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);