// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "book-store-6551b.firebaseapp.com",
  projectId: "book-store-6551b",
  storageBucket: "book-store-6551b.appspot.com",
  messagingSenderId: "462977479520",
  appId: "1:462977479520:web:35c6301408a94aa312e405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);