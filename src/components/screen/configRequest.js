import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrs_pw-XZb8eJJEp2G0R4VBGdk7oie-Rw",
  authDomain: "shahmeer-f26af.firebaseapp.com",
  projectId: "shahmeer-f26af",
  storageBucket: "shahmeer-f26af.appspot.com",
  messagingSenderId: "674839444619",
  appId: "1:674839444619:web:c4470f89d47f6d4c59e88e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
