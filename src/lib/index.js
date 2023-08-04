// aqui exportaras las funciones que necesites

import { auth,createUserWithEmailAndPassword,updateProfile,db,collection,addDoc } from './initializeFirebase.js';



export const registerWithEmail = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then ((userCredential) => {
  const uId = userCredential.user.uid;
  saveUser({ userId:uId, Email:email, name:displayName })
  updateProfile(userCredential.user, { displayName })
      .then (() => userCredential)

    })
    .catch ((error) => {
      console.log(error.message);
    });
};

export const loginUsuario = (email, pass) => {
  try {
    createUserWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    throw error.message;
  }
};

export const saveUser = (user) => addDoc(collection(db, 'Users'), user);
