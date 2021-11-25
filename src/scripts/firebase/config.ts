import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvsodHsopMmaVtvpXxlDtW9gX-JT9yI1E",
  authDomain: "symbiote-project.firebaseapp.com",
  projectId: "symbiote-project",
  storageBucket: "symbiote-project.appspot.com",
  messagingSenderId: "939051817023",
  appId: "1:939051817023:web:a63c114e9b9ba6110b808a",
  measurementId: "G-LNNPYZ7QSX"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth()