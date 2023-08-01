<<<<<<< HEAD
import { getAuth, createUserWithEmailAndPassword, /*signInWithEmailAndPassword,*/ signInWithPopup, GoogleAuthProvider } from "firebase/auth";
=======
import { getAuth, createUserWithEmailAndPassword, /*signInWithEmailAndPassword,*/ signInWithPopup, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
>>>>>>> 6f994278bd2ee5f32c6a284418a65507dd8d6c6b
import { app } from './firebase.js';

export const auth = getAuth(app);

export const createUser = async (userEmail, userPassword) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
      console.log("email verificate")
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("24 error", errorCode, errorMessage)
    // ...
  });


    const user = userCredential.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessageText = error.message;
    throw new Error(`Error al registrar usuario: ${errorCode} - ${errorMessageText}`);
  }
};
const provider = new GoogleAuthProvider();

export function signInWithGoogle(){

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
  })  
};

/*if(userAuth){
userAuth.sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  })
};

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/

 //onAuthStateChanged // testigo/observador de estado de autenticación del usuario, permite obtener datos del usuario
  //signInWithEmailAndPassword // Acceso de usuarios existentes
 // signOut //  Para salir de la sesión de un usuario, llama a signout

export function signOut() {

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
})
};