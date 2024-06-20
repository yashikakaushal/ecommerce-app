// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtq9y7cu3LU5Za5IC3McWe634Twh3rl7s",
  authDomain: "ecommerce-app-5f12f.firebaseapp.com",
  projectId: "ecommerce-app-5f12f",
  storageBucket: "ecommerce-app-5f12f.appspot.com",
  messagingSenderId: "248420881187",
  appId: "1:248420881187:web:4ef4a575eec76578fc7296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;