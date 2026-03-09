import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "ACA_VA_TU_API_KEY",  
  authDomain: "bodega-isa.firebaseapp.com",
  projectId: "bodega-isa",
  storageBucket: "bodega-isa.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);