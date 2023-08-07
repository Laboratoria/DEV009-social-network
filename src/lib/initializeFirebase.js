
import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, collection,addDoc } from "firebase/firestore"



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,createUserWithEmailAndPassword,updateProfile,db,collection,addDoc}