// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASECONFIG ,
  authDomain: "ecg-alumni.firebaseapp.com",
  databaseURL: "https://ecg-alumni-default-rtdb.firebaseio.com",
  projectId: "ecg-alumni",
  storageBucket: "ecg-alumni.appspot.com",
  messagingSenderId: "661831041449",
  appId: "1:661831041449:web:e36a3b2f958483ebb784b8",
  measurementId: "G-2F447KP779"
});
const analytics = getAnalytics(app); 

export const db = getFirestore(app)