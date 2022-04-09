// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUB92OjSWc7Fk6hTvOs39_PU475Zi35kg",
    authDomain: "router-firebase-integrate.firebaseapp.com",
    projectId: "router-firebase-integrate",
    storageBucket: "router-firebase-integrate.appspot.com",
    messagingSenderId: "961842073545",
    appId: "1:961842073545:web:86da35f505f293dacee218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app