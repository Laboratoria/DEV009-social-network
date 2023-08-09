// aqui exportaras las funciones que necesites

import { auth,createUserWithEmailAndPassword,updateProfile,saveUser } from './initializeFirebase.js';

export const registerWithEmail = (email, password, displayName) => {
 return createUserWithEmailAndPassword(auth, email, password)
  .then ((userCredential) => {
  const uId = userCredential.user.uid;
  updateProfile(userCredential.user, { displayName })
  .then (() => userCredential)
  console.log(userCredential)
  return saveUser({userId:uId, Email:email, name:displayName })       
  })
   
};
 
export const loginUsuario = (email, pass) => {
  try {
    createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.message;
  }
};

