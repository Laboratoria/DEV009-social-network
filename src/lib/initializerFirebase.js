import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getRedirectResult,
  signInWithRedirect, signOut, signInWithEmailAndPassword,
} from 'firebase/auth';

import { getDatabase, ref, set } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig.js';

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export {
  createUserWithEmailAndPassword,
  signInWithPopup,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  signInWithEmailAndPassword,
  ref,
  set,
  getDatabase,
};
