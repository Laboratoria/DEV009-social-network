import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './lib/config-firebase.js';

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const email = user.email;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
