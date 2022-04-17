// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuHGMq0JF3a_FfvlvZx_Nqeosq4xYfJ1Q",
  authDomain: "wedding-photography-bebc7.firebaseapp.com",
  projectId: "wedding-photography-bebc7",
  storageBucket: "wedding-photography-bebc7.appspot.com",
  messagingSenderId: "300793126875",
  appId: "1:300793126875:web:03d8b41629eebff9e4d1fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;