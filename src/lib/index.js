import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendEmailVerification, signOut, onAuthStateChanged
} from 'firebase/auth';
import { app } from './firebase.js';

export const auth = getAuth(app);
//const currentUser = auth.currentUser.email;

export const createUser = async (userEmail, userPassword) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    sendEmailVerification(auth.currentUser)
      .then(() => {
      // ...
      })
      .catch(() => {
        console.log('not verification mail send');
      });

    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessageText = error.message;
    throw new Error(`Error al registrar usuario: ${errorCode} - ${errorMessageText}`);
  }
};

export function currentChange (){
  auth.onAuthStateChanged((user) => {
  if (user) {
    const currentUserEmail = user.email;
    console.log("Current user email:", currentUserEmail);
    console.log(user, 'inicio sesion')
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    console.log('cerro sesion')
    // User is signed out
    // ...
  }
});
}

const provider = new GoogleAuthProvider();

export function signInWithGoogle() {
  return signInWithPopup(auth, provider);
   /* .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      return user;
    }).catch((error) => {
    // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    });*/
}

export const signInEP = async (userEmail, userPassword) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
    const user = userCredential.user;
    console.log(user)
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`Error al iniciar sesión: ${errorCode} - ${errorMessage}`);
  }
};

export function logoutUser() {
  signOut(auth).then(() => {
  // Sign-out successful.
  }).catch(() => {
  // An error happened.
  });
}

