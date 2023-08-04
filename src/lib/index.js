/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from '../firebase/initializeFirebase.js';

export const createAccount = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      sendEmailVerification(userCredential.user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert('Ya existe una cuenta para ese correo electrónico o el correo es inválido.');
    });
};

export const logInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      throw error;
    });
};

export const signOutSession = () => {
  return signOut(auth)
    .then(() => {
      console.log('Sesión cerrada con éxito.');
    }).catch(() => {
      console.log('Error al cerrar sesión.');
    });
};

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('Email sent.');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
