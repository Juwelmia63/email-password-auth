// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_HebRpF-n8wcKAYikgZmFM-TGzmAAAz4",
  authDomain: "user-email-password-auuth.firebaseapp.com",
  projectId: "user-email-password-auuth",
  storageBucket: "user-email-password-auuth.appspot.com",
  messagingSenderId: "725585842380",
  appId: "1:725585842380:web:1b5de1cfcea4a4f463f269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
