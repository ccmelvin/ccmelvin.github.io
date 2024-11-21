// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZdCP8MC-awUf_ZpmRaJ1zCRXXc0lyYyo",
  authDomain: "flybyspotter-website.firebaseapp.com",
  projectId: "flybyspotter-website",
  storageBucket: "flybyspotter-website.firebasestorage.app",
  messagingSenderId: "1067058624578",
  appId: "1:1067058624578:web:2acc808f22d126fddd15db",
  measurementId: "G-VJCMBS8JGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);