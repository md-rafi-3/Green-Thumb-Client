// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD-GB_NUjXK5izB5DZMu6o62to6dV-88I",
  authDomain: "green-thumb-auth.firebaseapp.com",
  projectId: "green-thumb-auth",
  storageBucket: "green-thumb-auth.firebasestorage.app",
  messagingSenderId: "627232594469",
  appId: "1:627232594469:web:1fc2a28486030f16177dcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);