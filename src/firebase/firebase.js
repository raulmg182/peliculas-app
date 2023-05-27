// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVASu-W0pplKSwkwCwG8rShWpnsjzyC1Q",
  authDomain: "peliculas-app-50bb6.firebaseapp.com",
  projectId: "peliculas-app-50bb6",
  storageBucket: "peliculas-app-50bb6.appspot.com",
  messagingSenderId: "683795508994",
  appId: "1:683795508994:web:de5360dacdf67a15425c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)