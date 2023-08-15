// aqui exportaras las funciones que necesites

import {
  auth,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from './initializeFirebase.js';
// eslint-disable-next-line max-len
export const registerWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    sendEmailVerification(userCredential.user);
    return user;
  });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
// eslint-disable-next-line max-len
export const signInWithPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);
