import { initializeApp } from 'firebase/app';
import {
  getAuth, onAuthStateChanged,
  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getRedirectResult,
  signInWithRedirect, signOut, signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore, doc, setDoc, updateDoc, getDoc, addDoc, deleteDoc,
} from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig.js';

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export {
  deleteDoc,
  addDoc,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithEmailAndPassword,
  doc, setDoc, updateDoc, getDoc,
};
