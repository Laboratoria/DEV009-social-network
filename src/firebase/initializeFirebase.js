// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseConfig } from './credentialFirebase';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//const redirectGoogle = signInWithRedirect(auth, provider); ////esta línea de código se ejecutará tan pronto como se cargue el archivo en el navegador, lo que causará la redirección inmediata al acceder a la página.

export {
    auth,
    app,
    createUserWithEmailAndPassword,
    provider,
    signInWithPopup,
    GoogleAuthProvider,
}