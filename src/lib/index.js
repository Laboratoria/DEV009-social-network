/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import { auth, createUserWithEmailAndPassword, sendEmailVerification } from '../firebase/initializeFirebase.js';

export const verifyEmail = () => {
  if (!auth.currentUser.emailVerified) {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        alert('Revisa tu correo electrónico para verificar tu cuenta e iniciar sesión.');
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico de verificación:', error.message);
      });
  } else {
    console.log('Correo electrónico ya verificado.');
  }
};

export const createAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log('Verify your email.');
      verifyEmail();
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
