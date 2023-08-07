// aqui exportaras las funciones que necesites

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { app } from './initializeFirebase.js';

const auth = getAuth(app);


export const registerWithEmail = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then ((userCredential) =>  updateProfile(userCredential.user, { displayName })
      .then (() => userCredential))
    .then ((userCredential) => {
      const uid = userCredential.user.uid;
      return saveUser({ userId:uid, email, name:displayName });
    });
};
 
export const loginUsuario = (email, pass) => {
  try {
    createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.message;
  }
};
