// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA78hQM_5CKAXo3FZGZaM4LyW8xQSSh-tQ",
    authDomain: "mumt-eqa-certificates.firebaseapp.com",
    projectId: "mumt-eqa-certificates",
    storageBucket: "mumt-eqa-certificates.appspot.com",
    messagingSenderId: "229630575854",
    appId: "1:229630575854:web:674331fb6eb84dc8349fff",
    measurementId: "G-JQCNK7T13J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db,
}