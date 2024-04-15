import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCdv8qX4uL3s8fR0JD0qkBqjimJe_XrxQw",
    authDomain: "portfolio-r1.firebaseapp.com",
    projectId: "portfolio-r1",
    storageBucket: "portfolio-r1.appspot.com",
    messagingSenderId: "40619229778",
    appId: "1:40619229778:web:edb37276dd2c20a4edd58b",
    measurementId: "G-1HCB85GKFG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
