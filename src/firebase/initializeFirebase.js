// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore, collection, addDoc } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from './credentialFirebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  app,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  collection, 
  addDoc,
  db,
};
