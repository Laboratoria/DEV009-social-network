/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import { auth, createUserWithEmailAndPassword, sendEmailVerification } from '../firebase/initializeFirebase.js';

export const verifyEmail = () => {
  return new Promise((resolve, reject) => {
    if (!auth.currentUser.emailVerified) {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          resolve('Revisa tu correo electrónico para verificar tu cuenta e iniciar sesión.');
        })
        .catch((error) => {
          console.error('Error al enviar el correo electrónico de verificación:', error.message);
          reject(error);
        });
    }
  });
};

export const createAccount = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      return verifyEmail();
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      throw new Error('Ya existe una cuenta para ese correo electrónico.');
    });
};
