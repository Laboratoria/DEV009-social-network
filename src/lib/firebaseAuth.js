// Import the func tions you need from the SDKs you need
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import { app } from './configfirebase.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

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

// export const logInWithGoogle = (callback) => {
//   signInWithRedirect(auth, new GoogleAuthProvider())
//     .then(() => {
//       getRedirectResult(auth)
//         .then((result) => {
//           // This gives you a Google Access Token. You can use it to access Google APIs.
//           const credential = GoogleAuthProvider.credentialFromResult(result);
//           const token = credential.accessToken;

//           // The signed-in user info.
//           const user = result.user;
//           // IdP data available using getAdditionalUserInfo(result)
//           // ...

//           // If successful, invoke the callback with user information
//           callback(true, user);
//         })
//         .catch((error) => {
//           // Handle Errors here.
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           // The email of the user's account used.
//           // const email = error.customData?.email;
//           // The AuthCredential type that was used.
//           const credential = GoogleAuthProvider.credentialFromError(error);
//           // ...

//           // If there was an error, invoke the callback with the error information
//           callback(false, null, error);
//         });
//     })
//     .catch((error) => {
//       // Handle Errors here if the signInWithRedirect fails.
//       // ...

//       // If there was an error, invoke the callback with the error information
//       callback(false, null, error);
//     });
// };

// export const redirectResultGoogle = () => {
//   getRedirectResult(auth)
//     .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;

//       // The signed-in user info.
//       const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     });
// };

export const logInWithGoogle = (callback) => {
  signInWithRedirect(auth, new GoogleAuthProvider());
  getRedirectResult(auth)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
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
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      callback(false);
    });
};

// export const redirectResultGoogle = () => {
//   getRedirectResult(auth)
//     .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;

//       // The signed-in user info.
//       const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     }).catch((error) => {
//     // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     });
// };

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
    .catch((error) => {
      callback(false);
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
};

/*export const authStateChangeListener = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};*/
