import { auth, provider } from './firebase.js';
import { register2 } from '../components/register2.js';

// register2.registerButton.addEventListener('click', async () => {
//   const email = register2.emailInput.value;
//   const password = register2.passwordInput.value;

//   try {
//     const userCredential = await auth.createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;
//     const userId = user.uid;

//     // eslint-disable-next-line no-console
//     console.log('Registro exitoso, bienvenida a SisterSphere!!!');
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.error('Error al registrar al usuario:', error.message);
//   }
// });

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
