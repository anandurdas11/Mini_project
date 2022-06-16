// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxArwUZPm22h8eftE-llWA6sxYicT0on8",
  authDomain: "blogging-webapp-64e7d.firebaseapp.com",
  projectId: "blogging-webapp-64e7d",
  storageBucket: "blogging-webapp-64e7d.appspot.com",
  messagingSenderId: "341340062329",
  appId: "1:341340062329:web:5c6d9b42a76720c2f88aa8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
