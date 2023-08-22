import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import { app } from './configfirebase.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const registerUser = (email, password, callback) => {
  createUserWithEmailAndPassword(auth, email, password)
  // poner parametro a .then userCredential
    .then(() => {
    // Signed in
      // const user = userCredential.user;
      callback(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      const registerErrorMessageSpan = document.querySelector('.register-error');

      if (errorCode === 'auth/weak-password') {
        registerErrorMessageSpan.innerHTML = 'Oopsie ~La contraseña debe tener al menos 6 caracteres~ 🐾';
      } else if (errorCode === 'auth/invalid-email') {
        registerErrorMessageSpan.innerHTML = '¡Oopsie~! Parece que el correo no es válido~ 🐾';
      } else {
        registerErrorMessageSpan.innerHTML = 'Oh no ~Inténtalo de nuevo~';
      }
      // console.log(errorCode);
      // console.log(errorMessage);
      callback(false);
    });
};

export const logInWithGoogle = (callback) => {
  signInWithRedirect(auth, new GoogleAuthProvider());
  getRedirectResult(auth)
    .then(() => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      callback(true);
    }).catch(() => {
    // Handle Errors here.
    // The email of the user's account used.
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      callback(false);
    });
};

export const logInUser = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
  // poner el parametro userCredential
    .then(() => {
    // Signed in
      // const user = userCredential.user;
      callback(true);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const loginErrorMessageSpan = document.querySelector('.login-error');
      // console.log(errorCode);
      // const errorMessage = error.message;
      if (errorCode === 'auth/user-not-found') {
        loginErrorMessageSpan.innerHTML = '¡Oopsie~! Parece que el correo no es existe~🐾';
      } else if (errorCode === 'auth/wrong-password') {
        loginErrorMessageSpan.innerHTML = '¡Oopsie~! Parece que la contraseña no es válida~ 🐾';
      } else {
        loginErrorMessageSpan.innerHTML = 'Oh no ~Inténtalo de nuevo~';
      }
      // console.log(errorMessage);
      callback(false);
    });
};

export const logOut = (callback) => {
  signOut(auth).then(() => {
    callback(true);
    // Sign-out successful.
    // agregar parametro error al catch
  }).catch(() => {
    callback(false);
    // An error happened.
  });
};

export const resetPasswordEmail = (email, callback) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    // ..
    });
};
