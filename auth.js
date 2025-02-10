import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// 🔹 Register User
export function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert("✅ Konto loodud!"))
        .catch(error => alert(`❌ Viga: ${error.message}`));
}

// 🔹 Log In User
export function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => alert("✅ Sisselogimine õnnestus!"))
        .catch(error => alert(`❌ Viga: ${error.message}`));
}

// 🔹 Log Out User
export function logout() {
    signOut(auth)
        .then(() => alert("👋 Olete välja logitud!"))
        .catch(error => alert(`❌ Viga: ${error.message}`));
}

// 🔹 Track User Authentication State
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("logoutBtn").classList.remove("hidden");
        console.log(`✅ Kasutaja sisse logitud: ${user.email}`);
    } else {
        document.getElementById("logoutBtn").classList.add("hidden");
        console.log("❌ Kasutaja välja logitud.");
    }
});

// ✅ Attach functions to `window` so `onclick` works in `index.html`
window.register = register;
window.login = login;
window.logout = logout;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginBtn")?.addEventListener("click", login);
    document.getElementById("registerBtn")?.addEventListener("click", register);
    document.getElementById("logoutBtn")?.addEventListener("click", logout);
});