// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxyG3X_cQ5nM4fupscHWOxrwkMj6TlgZo",
  authDomain: "lingo-bingo-27ebf.firebaseapp.com",
  projectId: "lingo-bingo-27ebf",
  storageBucket: "lingo-bingo-27ebf.firebasestorage.app",
  messagingSenderId: "540157373781",
  appId: "1:540157373781:web:7386e4b1e4e3cb4efe53dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)