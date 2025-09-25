// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3pXaX51ZPKqipcwbTE5OEa8o0cXw1f2M",
  authDomain: "shopnstore-69413.firebaseapp.com",
  projectId: "shopnstore-69413",
  storageBucket: "shopnstore-69413.firebasestorage.app",
  messagingSenderId: "845830477348",
  appId: "1:845830477348:web:0004633685e9fd8bbf6ab1",
  measurementId: "G-T40V6KL8XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);