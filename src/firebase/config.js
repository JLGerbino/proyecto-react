// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrQtryfaFSN2rpNVg7eMvjOCkmQeHZAWw",
  authDomain: "totalsport-822a5.firebaseapp.com",
  projectId: "totalsport-822a5",
  storageBucket: "totalsport-822a5.appspot.com",
  messagingSenderId: "1093367824580",
  appId: "1:1093367824580:web:ff0bd39112832878b24991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
