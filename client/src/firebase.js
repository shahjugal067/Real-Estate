// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiJJi7Nz-9k0KGc0KjHV_OHXIOF5Uc11k",
  authDomain: "real-estate-29e34.firebaseapp.com",
  projectId: "real-estate-29e34",
  storageBucket: "real-estate-29e34.firebasestorage.app",
  messagingSenderId: "206472610885",
  appId: "1:206472610885:web:b701f2ccfefc136256cf2c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);