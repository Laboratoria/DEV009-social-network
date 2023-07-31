import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const app = initializeApp(firebaseConfig);

export {
  auth,
  app,
  createUserWithEmailAndPassword,
};
