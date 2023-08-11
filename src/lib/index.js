// aqui exportaras las funciones que necesites

import {
  auth, createUserWithEmailAndPassword, updateProfile, saveUser, provider, signInWithPopup,
} from './initializeFirebase.js';
// eslint-disable-next-line max-len
export const registerWithEmail = (email, password, displayName) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const uId = userCredential.user.uid;
    updateProfile(userCredential.user, { displayName })
      .then(() => userCredential);
    console.log(userCredential);
    return saveUser({ userId: uId, Email: email, name: displayName });
  });

  export const signInWithGoogle = () => {
    result = signInWithPopup(auth, provider)
    /*.then((result) => {
      // nos da acceso al Google Access Token. lo podemos usar para acceder al google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // agregamos el signed-in en la informacion del usuario
      const user = result.user;
      navigateTo('/principal');
    })
    /*.catch ((error)=> {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // el correo de la cuenta del usuario.
      const email = error.customData.email;
      // la credencial Auth que fue usada.
      const credential_1 = GoogleAuthProvider.credentialFromError(error);
      navigateTo('/'); // si nos marca error nos manda al home
    });*/
  };



export const loginUsuario = (email, pass) => {
  try {
    createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.message;
  }
};
