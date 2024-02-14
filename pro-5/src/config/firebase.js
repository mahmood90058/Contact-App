// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA03LYD4hO7sVO7wTpnchjcVDA5DbB57W8",
  authDomain: "vite-con.firebaseapp.com",
  projectId: "vite-con",
  storageBucket: "vite-con.appspot.com",
  messagingSenderId: "927786609233",
  appId: "1:927786609233:web:9246e585f068bf49eaa670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db=  getFirestore(app); 