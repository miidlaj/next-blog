// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "millionwings-60055.firebaseapp.com",
  projectId: "millionwings-60055",
  storageBucket: "millionwings-60055.appspot.com",
  messagingSenderId: "768307137500",
  appId: "1:768307137500:web:a62a776774216e49a29d19",
  measurementId: "G-S0YGC327X1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
