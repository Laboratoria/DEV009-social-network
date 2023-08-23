// Import the functions you need from the SDKs you need
import { updateProfile } from 'firebase/auth';
import {
  app, auth, provider, createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword, db,
  collection, addDoc, getFirestore,
} from './initializerFirebase.js';

async function saveNewUser(Name, lastName, userName) {
  await addDoc(collection(getFirestore(app), '/users'), {
    username: userName,
    name: Name,
    lastname: lastName,
  });
}
async function registerUser(email, password, name, lastname, userName) {
  try {
    const userId = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    saveNewUser(userId, name, lastname, userName);
    updateProfile(userId.user, { displayName: userName });
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('El correo electronico ingresado esta asociado con un usuario existente');
    }else {
      alert(error.message);
    }
  }
}

// iniciar Sesion
async function startSession(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      alert('El correo electronico ingresado no existe');
    } else if (error.code === 'auth/wrong-password') {
      alert('La contraseña es incorrecta');
    } else if (error.code === 'auth/invalid-email') {
      alert('Ingresa un correo');
    } else { alert('Escribe la contraseña'); }
  }
}

export const signInWithGoogle = () => {
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

export {
  registerUser,
  startSession,
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
