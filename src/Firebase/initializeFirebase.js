/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { firebaseConfig } from './configFirebase';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  app,
  createUserWithEmailAndPassword,
  sendEmailVerification,
};
