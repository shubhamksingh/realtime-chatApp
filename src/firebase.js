// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_dJquT0xe3pt-Gj0fghp0dhIP69FDCpU",
  authDomain: "chatters-805c6.firebaseapp.com",
  projectId: "chatters-805c6",
  storageBucket: "chatters-805c6.appspot.com",
  messagingSenderId: "964715150898",
  appId: "1:964715150898:web:99f426a073ad170888c62b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
export const storage = getStorage();
export const db  = getFirestore();