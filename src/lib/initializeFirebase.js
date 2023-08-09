import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig.js';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth, createUserWithEmailAndPassword, updateProfile, db, collection, addDoc,
};
export const saveUser = (user) => addDoc(collection(db, 'Users'), user);
