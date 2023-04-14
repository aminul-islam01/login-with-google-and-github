// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS6THVQqAdAWNHlCwr5xRqXp6Whjefk7Y",
  authDomain: "fir-example-login-a7b04.firebaseapp.com",
  projectId: "fir-example-login-a7b04",
  storageBucket: "fir-example-login-a7b04.appspot.com",
  messagingSenderId: "604166755327",
  appId: "1:604166755327:web:267969e5ce95a4103bcdca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;