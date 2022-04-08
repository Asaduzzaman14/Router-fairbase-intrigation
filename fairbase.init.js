// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXIwYkzPGZ07Mm2wDJzhOOAjFvzubEm1M",
    authDomain: "fairbase-practis-1.firebaseapp.com",
    projectId: "fairbase-practis-1",
    storageBucket: "fairbase-practis-1.appspot.com",
    messagingSenderId: "59509354914",
    appId: "1:59509354914:web:ab5f33c2103bf700a6c2fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app