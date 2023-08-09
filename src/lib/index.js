/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendEmailVerification, signOut,
} from 'firebase/auth';
import { app } from './firebase.js';

export const auth = getAuth(app);

export const createUser = async (userEmail, userPassword) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    sendEmailVerification(auth.currentUser)
      .then(() => {
      // Email verification sent!
      // ...
<<<<<<< HEAD
        console.log('email verificate');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("24 error", errorCode, errorMessage)
        // ...
      });


=======
      })
      .catch(() => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ...
      });

>>>>>>> f80d6024a125044fba9268e5e472a768ac49592e
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessageText = error.message;
    throw new Error(`Error al registrar usuario: ${errorCode} - ${errorMessageText}`);
  }
};
const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      return user;
    }).catch((error) => {
    // Handle Errors here.
<<<<<<< HEAD
      const errorCode = error.code;
      const errorMessage = error.message;
=======
      // const errorCode = error.code;
      // const errorMessage = error.message;
>>>>>>> f80d6024a125044fba9268e5e472a768ac49592e
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
<<<<<<< HEAD
=======
      console.log(credential);
>>>>>>> f80d6024a125044fba9268e5e472a768ac49592e
    });
}

export const signInEP = async (userEmail, userPassword) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error al iniciar sesión: ${errorCode} - ${errorMessage}`);
  }
};
<<<<<<< HEAD
// nAuthStateChanged // testigo/oobservador de estado de autenticación del usuario, permite obtener datos del usuario
  // signInWithEmailAndPassword // Acceso de usuarios existentes
// signOut //  Para salir de la sesión de un usuario, llama a signout

export function logoutUser() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  })
};
=======

export function logoutUser() {
  signOut(auth).then(() => {
  // Sign-out successful.
  }).catch(() => {
  // An error happened.
  });
}
>>>>>>> f80d6024a125044fba9268e5e472a768ac49592e
