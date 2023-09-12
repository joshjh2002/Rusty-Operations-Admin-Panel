// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL232wrrUbVhPBk1itwac-F2KQgN4KGus",
  authDomain: "rusty-operations-admin-panel.firebaseapp.com",
  databaseURL:
    "https://rusty-operations-admin-panel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rusty-operations-admin-panel",
  storageBucket: "rusty-operations-admin-panel.appspot.com",
  messagingSenderId: "904461471400",
  appId: "1:904461471400:web:75183976bd03c8a7a6bc9d",
  measurementId: "G-5CJ068K0FY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
