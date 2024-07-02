// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuQHFt-VBBSRfsMX2ajPapmzF9xf_7jiY",
  authDomain: "netflixgpt-8c284.firebaseapp.com",
  projectId: "netflixgpt-8c284",
  storageBucket: "netflixgpt-8c284.appspot.com",
  messagingSenderId: "594088524552",
  appId: "1:594088524552:web:285834d03c96b902878abd",
  measurementId: "G-2B98CNF7QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();