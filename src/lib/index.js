// aqui exportaras las funciones que necesites

import { auth,createUserWithEmailAndPassword,updateProfile,db,collection,addDoc } from './initializeFirebase.js';



const auth = getAuth(app);


export const registrarUsuario = (email, pass) => {
  try {
    createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.message;
  }
};

export const saveUser = (user) => addDoc(collection(db, 'Users'), user);