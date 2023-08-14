import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {
  getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword
} from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig.js';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {
// eslint-disable-next-line max-len
  auth, createUserWithEmailAndPassword, updateProfile, db, collection, addDoc, provider, signInWithPopup, signInWithEmailAndPassword
};
export const saveUser = (user) => addDoc(collection(db, 'Users'), user);
