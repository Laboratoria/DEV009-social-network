/* eslint-disable no-alert */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import { GoogleAuthProvider } from 'firebase/auth';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from './initializeFirebase.js';

export const registerWithEmail = (email, password, username) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(userCredential.user, {
        displayName: username,
      });
      sendEmailVerification(userCredential.user);
      return user;
    });
};
export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return (token, user);
  });

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return (user);
    });
};

export const outSession = () => signOut(auth);