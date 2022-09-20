// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJWk8ZQfegv9L-cFeFGVrcgI1uVMsQ39w",
  authDomain: "blogging-webv2.firebaseapp.com",
  projectId: "blogging-webv2",
  storageBucket: "blogging-webv2.appspot.com",
  messagingSenderId: "840182398620",
  appId: "1:840182398620:web:cf7c1a2e84e6ca642cf759"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);