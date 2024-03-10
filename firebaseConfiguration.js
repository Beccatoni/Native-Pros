// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQFtMaYdxy5fWCDL1-S94lECaiyapCwCM",
  authDomain: "muvi-4fcb7.firebaseapp.com",
  projectId: "muvi-4fcb7",
  storageBucket: "muvi-4fcb7.appspot.com",
  messagingSenderId: "513973396555",
  appId: "1:513973396555:web:7865045f02b46cae3699ce"
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_App)