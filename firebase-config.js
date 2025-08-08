// Import from Firebase CDN (version must match your HTML)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwrxpMDHbRSuOpdapdXdvabIUj7ysIhOI",
  authDomain: "horizon-key-9f054.firebaseapp.com",
  projectId: "horizon-key-9f054",
  storageBucket: "horizon-key-9f054.firebasestorage.app",
  messagingSenderId: "675446115778",
  appId: "1:675446115778:web:23cdb1134f59af98ad9a5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export both app and auth
export { app, auth };
