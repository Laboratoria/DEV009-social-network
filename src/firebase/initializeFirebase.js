// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { firebaseConfig } from './credentialFirebase';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);
const redirectGoogle = signInWithRedirect(auth, provider);

export {
    auth,
    app,
    createUserWithEmailAndPassword,
    provider,
    redirectGoogle,
    getRedirectResult
}