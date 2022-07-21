// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const API_KEY = process.env.REACT_APP_FIREBASE_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "nonton-apa-ya.firebaseapp.com",
    projectId: "nonton-apa-ya",
    storageBucket: "nonton-apa-ya.appspot.com",
    messagingSenderId: "712758983517",
    appId: "1:712758983517:web:3e772672c1a96482ad86b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };