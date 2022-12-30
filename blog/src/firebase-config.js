// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjvZ4-DlbWAI7s_7o_IjhbYEMTnkCv7tc",
  authDomain: "dev-blog-38179.firebaseapp.com",
  projectId: "dev-blog-38179",
  storageBucket: "dev-blog-38179.appspot.com",
  messagingSenderId: "327711111625",
  appId: "1:327711111625:web:b75daf0e4285fc16e31018",
  measurementId: "G-5QHX6XWYHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
