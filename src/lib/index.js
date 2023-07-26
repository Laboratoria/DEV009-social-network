import { getAuth, createUserWithEmailAndPassword, signInWithRedirect, signInWithEmailAndPassword, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import {app} from './firebase.js';

const auth = getAuth(app);

/*export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};*/

const createUser = createUserWithEmailAndPassword(auth, userEmail, userPassword).then((userCredential) =>{

  const user = userCredential.user;
  successMessage.textContent = 'Usuario registrado con exito';
  errorMessage.textcontent = '';
}).catch((error) => {
  const errorCode = error.code;
  const errorMessageText = error.message;
  errorMessage.textContent = `Error al registrar usuario: ${errorCode} - ${errorMessageText}`;
  successMessage.textContent = '';
});

signInWithRedirect(auth, provider);

getRedirectResult(auth).then((result) =>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken
    //const userG = result.user
});

