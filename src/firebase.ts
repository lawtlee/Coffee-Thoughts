// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore }  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2g1cAZ-vQDM-a7s6n2_3LLJr_hG4hf0A",
  authDomain: "coffee-thoughts.firebaseapp.com",
  projectId: "coffee-thoughts",
  storageBucket: "coffee-thoughts.appspot.com",
  messagingSenderId: "380109263853",
  appId: "1:380109263853:web:8914ef85e83508c44e0de4",
  measurementId: "G-N0X51C5696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth()
const database = getFirestore();

export { storage, auth, database };