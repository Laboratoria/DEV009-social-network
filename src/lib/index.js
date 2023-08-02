// aqui exportaras las funciones que necesites

import { auth, createUserWithEmailAndPassword } from '../firebase/initializeFirebase';

export const registrarUsuario = (email, pass) => {
  try {
    createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.message;
  }
};
