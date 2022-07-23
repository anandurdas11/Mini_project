// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbCgs7A3qUCqz5Q0qoKCYFXv8tz7xCqwY",
  authDomain: "blogging-webversion2-52351.firebaseapp.com",
  projectId: "blogging-webversion2-52351",
  storageBucket: "blogging-webversion2-52351.appspot.com",
  messagingSenderId: "668249554167",
  appId: "1:668249554167:web:0d6eb4bc9637d7d9e927f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);