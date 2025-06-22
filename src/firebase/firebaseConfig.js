import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDil4Vcfm8fxwh9uq6IZmMmzup2cygrrQg",
    authDomain: "larpovacka.firebaseapp.com",
    projectId: "larpovacka",
    storageBucket: "larpovacka.firebasestorage.app",
    messagingSenderId: "562447165554",
    appId: "1:562447165554:web:bbf177e4100f38ec017aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)