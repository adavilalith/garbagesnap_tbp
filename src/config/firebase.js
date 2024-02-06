// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1O_N6dQkxT4Eu__nbWNcwn2ITpEyX198",
  authDomain: "garbage-snap.firebaseapp.com",
  projectId: "garbage-snap",
  storageBucket: "garbage-snap.appspot.com",
  messagingSenderId: "803614394820",
  appId: "1:803614394820:web:25015e5a0b9ea01b02bc91",
  measurementId: "G-497RZGWF2S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()
     