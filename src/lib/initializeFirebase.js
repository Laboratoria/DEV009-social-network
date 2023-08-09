// Embudo - importa las funciones necesarias de los módulos de Firebase
// Embudo - exporta variables para que puedan ser utilizadas en otros archivos
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig.js';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth, createUserWithEmailAndPassword, updateProfile, db, collection, addDoc,
};
