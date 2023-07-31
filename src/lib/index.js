// // aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
import { auth, createUserWithEmailAndPassword } from '../firebase/initializeFirebase';

export const registerUser = (email, password) => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};
