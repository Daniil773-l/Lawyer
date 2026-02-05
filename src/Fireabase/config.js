// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSDhXd0NRPv-QZpscIXMvoGhLf86B-A2o",
    authDomain: "lawyer-portal-bd689.firebaseapp.com",
    projectId: "lawyer-portal-bd689",
    storageBucket: "lawyer-portal-bd689.firebasestorage.app",
    messagingSenderId: "856377967510",
    appId: "1:856377967510:web:529857f452bfefa4f4d3b7",
    measurementId: "G-XH61VVZY4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(app);
export  const db = getFirestore(app);