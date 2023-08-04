// aqui exportaras las funciones que necesites

import { createUserWithEmailAndPassword, auth } from '../firebase/initializeFirebase.js';

export const registrarUsuario = (email, pass) => {
  try {
    createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.message;
  }
};
