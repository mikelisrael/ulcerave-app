// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDejeLwpWlUSn8vXSCIHERz8Bo6m-RpMqo",
  authDomain: "ulcerave-1d907.firebaseapp.com",
  projectId: "ulcerave-1d907",
  storageBucket: "ulcerave-1d907.appspot.com",
  messagingSenderId: "664783899872",
  appId: "1:664783899872:web:9f1630be2ecd33bae89485",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig); // so hot reload won't re-initialize the app
const appAuth = getAuth(app);
const db = getFirestore(app);

export { app, appAuth, db };
