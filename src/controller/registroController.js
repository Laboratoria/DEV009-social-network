import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { showError } from '../utils/showError.js';
import { app } from '../lib/config-firebase.js';

/* ---------------------Registro de Usuarios Nuevos----------------------------- */
export const newUser = (email, password) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};// newUser

/* ---------------------Funcion para Registrar Usuarios Nuevos----------------------------- */
// Inicializar Cloud Firestore y obtener una referencia al servicio de Base de datos
// Perfil del la vista post, usando la cuenta de google
const conexioBD = getFirestore(app);

export const addUser = (nombre, email) => {
  addDoc(collection(conexioBD, 'usuarios'), {
    name: nombre,
    email,
  });
  console.log(addUser);
};

// Registro de usuarios usando el formulario de registro

export const conexionUser = (nombre, email, password) => {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      addUser(nombre, email);
      // Signed in
      const user = userCredential.user;
      window.history.pushState({}, '', `${window.location.origin}/`);
      window.dispatchEvent(new PopStateEvent('popstate'));
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        showError('El correo se encuentra registrado', 'repeat-email');
      } else if (errorCode === 'auth/weak-password') {
        showError('La contraseña debe contener al menos 6 caracteres', '6-letters');
      } else {
        showError('Correo o contraseña inválidos', '7-letters');
      }
    });
};// conexionUser
