// aqui exportaras las funciones que necesites

import { async } from 'regenerator-runtime';
import {
  createUserWithEmailAndPassword, auth, provider, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut,
} from '../firebase/initializeFirebase.js';

// ----                   signin with new email                    --- //
export const registerUser = async (email, pass, callback) => {
  
  try {
    await createUserWithEmailAndPassword(auth, email, pass)
    callback(true);

  } catch (error) {
   console.log (error.code);
  if (error.code === "auth/email-already-in-use"){
    alert("Este email ya está registrado");
  }else if (error.code === "auth/invalid-email"){
    alert("Este email es inválido");
  } 
  callback(false); 
  }
};

// ----                   signin with google                    --- //
export const registerWithGoogle = async (callback) =>{
try {
  const result = await signInWithPopup(auth, provider)

  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // IdP data available using getAdditionalUserInfo(result)
  // ...
  callback(true);
} catch (error) {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.email;
   // The AuthCredential type that was used.
   const credential = GoogleAuthProvider.credentialFromError(error);
   // ...
   callback(false);
}
};

// ----                   login                   --- //
export const loginUser = async (email, pass, callback) => {
  await signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    callback(true);
  })
  .catch((error) => {
    const errorCode = error.code;
    errorCode = alert("Usuario o contraseña incorrecta");
    callback(false);
  });
}

export const exitUser = async (navigateTo) => {
  await signOut(auth).then(() => {
    navigateTo('/');
    // Sign-out successful.
  }).catch((error) => {
    console.log ("error")
    // An error happened.
  });
}