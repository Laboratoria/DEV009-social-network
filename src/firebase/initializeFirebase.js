import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './configFirebase.js';

const auth = getAuth();
const app = initializeApp(firebaseConfig);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
};
