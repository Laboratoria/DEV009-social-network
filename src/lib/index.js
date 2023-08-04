// aqui exportaras las funciones que necesites

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './initializeFirebase.js';

const auth = getAuth(app);


export const registrarUsuario = (email, pass) => {
  try {
    createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.message;
  }
};
