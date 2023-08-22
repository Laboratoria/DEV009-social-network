// aqui exportaras las funciones que necesites
import {
  createUserWithEmailAndPassword,
  auth,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  collection, 
  addDoc,
} from '../firebase/initializeFirebase.js';

// ----                   signin with new email                    --- //
export const registerUser = async (email, pass, callback) => {
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    callback(true);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Este email ya está registrado');
    } else if (error.code === 'auth/invalid-email') {
      alert('Este email es inválido');
    }
    callback(false);
  }
};

// ----                   signin with google                    --- //
export const registerWithGoogle = async (callback) => {
  try {
    const result = await signInWithPopup(auth, provider);

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
    //const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    callback(false);
  }
};

// ----                   login                   --- //
export const loginUser = async (email, pass, callback) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    callback(true);
  } catch (error) {
    const errorCode = error.code;
    errorCode = alert('Usuario o contraseña incorrecta');
    callback(false);
  }
};

// ---           logOut            --- //
export const exitUser = async (callback) => {
  try {
    await signOut(auth);
    // alert('Vuelve pronto!');
    callback(true);
  } catch (error) {
    console.log(error);
    callback(false);
  }
};

// ---           crear post            --- //
export const createPostFn = async (content) => {
  try {
    const allPosts = {
      content,
    };
    const docRef = await addDoc(collection(db, "post"), allPosts);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  } 
}
