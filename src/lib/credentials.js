// Import the functions you need from the SDKs you need
import {
  auth, provider, createUserWithEmailAndPassword, signInWithPopup, getRedirectResult,

  GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword, database, set, ref,

} from './initializerFirebase.js';
import {updateProfile} from 'firebase/auth';

function writeUserData(userId, Name, lastName, userName) {
  try {
    const db = database;
    set(ref(db, `users/${userId}`), {
      username: userName,
      name: Name,
      lastname: lastName,
    });
  } catch (error) {

  }
}

function registerUser(email, password, name, lastname, userName) {
  try {
    createUserWithEmailAndPassword(
      auth,
      email,
      password,
    ).then((userId) => {
      updateProfile(userId.user, {displayName : userName})
      writeUserData(userId.user.uid, name, lastname, userName);
    });
  } catch (error) {
    throw error.message;
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

export {
  registerUser,
  writeUserData,
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