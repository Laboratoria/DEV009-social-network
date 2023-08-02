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
<<<<<<< HEAD
        // Email verification sent!
        // ...
        console.log("email verificate")
=======
      // Email verification sent!
      // ...
        console.log('email verificate');
>>>>>>> b519ccdec823f1d9642d6d8c950d2b3c27197c10
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
<<<<<<< HEAD
        console.log("24 error", errorCode, errorMessage)
        // ...
      });

=======
        console.log('24 error', errorCode, errorMessage);
        // ...
      });
>>>>>>> b519ccdec823f1d9642d6d8c950d2b3c27197c10

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
<<<<<<< HEAD

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
=======
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
>>>>>>> b519ccdec823f1d9642d6d8c950d2b3c27197c10
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
<<<<<<< HEAD
      return user
    }).catch((error) => {
      // Handle Errors here.
=======
      return user;
    }).catch((error) => {
    // Handle Errors here.
>>>>>>> b519ccdec823f1d9642d6d8c950d2b3c27197c10
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
<<<<<<< HEAD
    })
};

/*if(userAuth){
userAuth.sendEmailVerification(auth.currentUser) 
  .then(() => {
    // Email verification sent!
    // ...
  })
};*/
=======
    });
}

>>>>>>> b519ccdec823f1d9642d6d8c950d2b3c27197c10
export const signInEP = async (userEmail, userPassword) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
    const user = userCredential.user;
    // Aquí puedes realizar acciones adicionales después de la autenticación si es necesario
    return user; // Devuelve el objeto 'user' si deseas utilizarlo en el futuro
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error al iniciar sesión: ${errorCode} - ${errorMessage}`);
  }
};
<<<<<<< HEAD
//onAuthStateChanged // testigo/observador de estado de autenticación del usuario, permite obtener datos del usuario
//signInWithEmailAndPassword // Acceso de usuarios existentes
=======
// nAuthStateChanged // testigo/oobservador de estado de autenticación del usuario, permite obtener datos del usuario
  // signInWithEmailAndPassword // Acceso de usuarios existentes
>>>>>>> b519ccdec823f1d9642d6d8c950d2b3c27197c10
// signOut //  Para salir de la sesión de un usuario, llama a signout

export function logoutUser() {
  signOut(auth).then(() => {
<<<<<<< HEAD
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  })
};
=======
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
}
>>>>>>> b519ccdec823f1d9642d6d8c950d2b3c27197c10
