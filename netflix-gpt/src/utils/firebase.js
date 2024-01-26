// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBszzz0rK_v1iM1MiCuFMOC-NK1BpFUV-c",
  authDomain: "netflixgpt-68f90.firebaseapp.com",
  projectId: "netflixgpt-68f90",
  storageBucket: "netflixgpt-68f90.appspot.com",
  messagingSenderId: "1007478358916",
  appId: "1:1007478358916:web:9c5ba472c2a799062413d1",
  measurementId: "G-FT54GN7FZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
