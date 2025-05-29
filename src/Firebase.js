// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";      // <-- Add this
import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDiNfZbbFCuX_VBvRXmjyVkMTuUxSyR1A",
  authDomain: "grading-system-project-cb8ac.firebaseapp.com",
  projectId: "grading-system-project-cb8ac",
  storageBucket: "grading-system-project-cb8ac.firebasestorage.app",
  messagingSenderId: "469921719876",
  appId: "1:469921719876:web:a11b9209cba63ebe407e11",
  measurementId: "G-SNNEVMLKJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);           // <-- Add this
const storage = getStorage(app);  

export { app, analytics, auth, db, storage }; 