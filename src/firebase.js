// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYB8uNgJaOH7TiWW4us0MlPDxun0vT3qQ",
  authDomain: "chat-app-codepth.firebaseapp.com",
  projectId: "chat-app-codepth",
  storageBucket: "chat-app-codepth.appspot.com",
  messagingSenderId: "639155790916",
  appId: "1:639155790916:web:c134f6a181e669d0a34811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)