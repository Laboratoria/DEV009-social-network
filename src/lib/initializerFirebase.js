import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getRedirectResult,
  signInWithRedirect, signOut, signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig.js';

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export {
  createUserWithEmailAndPassword,
  signInWithPopup,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  signInWithEmailAndPassword,
  collection,
  addDoc,
  getFirestore,

};
