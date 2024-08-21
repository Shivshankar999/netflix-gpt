// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzFM6EWdrlfQP4vla8_pOUm-vOphWrpEQ",
  authDomain: "netflixgpt-b2609.firebaseapp.com",
  projectId: "netflixgpt-b2609",
  storageBucket: "netflixgpt-b2609.appspot.com",
  messagingSenderId: "565068591572",
  appId: "1:565068591572:web:63b57cbcbebbc315d2a641",
  measurementId: "G-DY095Z5S4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
