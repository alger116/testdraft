// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnjmvUZ8T8rjd69YlvrwpMFwpAkONWm4E",
    authDomain: "Riigihankeproject.firebaseapp.com",
    projectId: "Riigihankeproject",
    storageBucket: "Riigihankeproject.firebasestorage.app",
    messagingSenderId: "649897121077",
    appId: "1:649897121077:web:2ff628090dc51e4df8287c",
    measurementId: "G-CGK6YHSDQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
