// aqui exportaras las funciones que necesites

import { GoogleAuthProvider } from 'firebase/auth';
import {
  auth, createUserWithEmailAndPassword, updateProfile, saveUser, provider, signInWithPopup, signInWithEmailAndPassword,
} from './initializeFirebase.js';
// eslint-disable-next-line max-len
export const registerWithEmail = (email, password, displayName) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const uId = userCredential.user.uid;
    updateProfile(userCredential.user, { displayName })
      .then(() => userCredential);
    console.log(userCredential);
    return saveUser({ userId: uId, Email: email, name: displayName });
  });

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
  // nos da acceso al Google Access Token. lo podemos usar para acceder al google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  // agregamos el signed-in en la informacion del usuario
  const user = result.user;
};

export const signInWithPassword = (email, password) =>
{
  return signInWithEmailAndPassword(auth, email, password);
};
