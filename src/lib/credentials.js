// Import the functions you need from the SDKs you need

import {
  auth, provider, createUserWithEmailAndPassword, signInWithPopup, getRedirectResult,
  GoogleAuthProvider, signInWithRedirect,
} from './initializerFirebase.js';

export const registerUser = (email, password) => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};

export const signWithGoogle = () => {
  try {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  } catch (error) {
    throw error.message;
  }
};

export const signIn = () => {
  try {
    signInWithRedirect(auth, provider);
  } catch (error) {
    throw error.message;
  }
};
// export const redirectGoogle = () => {
//   try {
//     getRedirectResult(auth)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;

//         // The signed-in user info.
//         const user = result.user;
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   } catch (error) {
//     throw error.message;
//   }
// };
