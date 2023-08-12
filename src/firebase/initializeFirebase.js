import {
  initializeApp,
} from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';

import {
  getFirestore, orderBy, doc, updateDoc, collection, addDoc, serverTimestamp, query, where, getDocs, deleteDoc,
} from 'firebase/firestore';

import { firebaseConfig } from './credentialFirebase';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  app,
  db,
  doc,
  orderBy,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  updateDoc,
  addDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  getFirestore,
  provider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  serverTimestamp,
};
