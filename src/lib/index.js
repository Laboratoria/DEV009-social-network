// aqui exportaras las funciones que necesites

import { createUserWithEmailAndPassword, auth, provider, signInWithPopup, GoogleAuthProvider } from '../firebase/initializeFirebase.js';

 // ----                   signin with new email                    --- //
export const registerUser = (email, pass, callback) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential)=>{
      const user = userCredential.user;
      callback(true);
    })
    .catch ((error) => {
    console.log (error.code);
    if (error.code === "auth/email-already-in-use"){
      alert("Este email ya está registrado");
    }else if (error.code === "auth/invalid-email"){
      alert("Este email es inválido");
    } 
    callback(false);
  })
};

// ----                   signin with google                    --- //
export const registerWithGoogle = (callback) =>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    callback(true);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    callback(false);
  });
};