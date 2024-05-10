// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5BDRobSkLlRUW-ZM3xIsxpIynBEtpDyg",
  authDomain: "jobguru-900fb.firebaseapp.com",
  projectId: "jobguru-900fb",
  storageBucket: "jobguru-900fb.appspot.com",
  messagingSenderId: "497626190201",
  appId: "1:497626190201:web:62239764ef6552f17e1fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;