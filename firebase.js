// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE4TzOPWcU2W8p7KDaqAOOaWxGrV8XM_I",
  authDomain: "bollywood-quiz-night.firebaseapp.com",
  databaseURL: "https://bollywood-quiz-night-default-rtdb.firebaseio.com",
  projectId: "bollywood-quiz-night",
  storageBucket: "bollywood-quiz-night.firebasestorage.app",
  messagingSenderId: "375407847156",
  appId: "1:375407847156:web:ac72c8a304ac639e1fa0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Export database so host/player pages can use it
export { database };
