// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGd0a9ihOqCKxDd7HuHd9BCwabykpL21A",
  authDomain: "contacts-app-96a7b.firebaseapp.com",
  projectId: "contacts-app-96a7b",
  storageBucket: "contacts-app-96a7b.appspot.com",
  messagingSenderId: "122533460422",
  appId: "1:122533460422:web:3a09ed96515fb8e3319ac7",
  measurementId: "G-MKT7ELYVTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);