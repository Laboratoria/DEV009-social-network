// aqui exportaras las funciones que necesites

import { auth,createUserWithEmailAndPassword,updateProfile,db,collection,addDoc } from './initializeFirebase.js';

export const registerWithEmail = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then ((userCredential) => {
    const uId = userCredential.user.uid;
    saveUser({ userId:uId, Email:email, name:displayName })
    updateProfile(userCredential.user, { displayName })
      .then (() => userCredential)
      navigateTo('/principal');
      
    })
    .catch ((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/network-request-failed.'){ /*Revisar codigo cuando los campos estan vacios*/
      errorRegister.style.display = 'block';
      errorRegister.textContent = 'Los campos no pueden estar vacios' 
      } else if (errorCode === 'auth/weak-password'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'La contraseña debe tener al menos 6 caracteres' 
      } else if (errorCode === 'auth/invalid-email'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Email invalido' 
      } else if (errorCode === 'auth/missing-email'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Falta colocar correo' 
      } else if (errorCode === 'auth/email-already-in-use'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'El correo electrónico ya se encuentra registrado' 
      } else if (errorCode === 'auth/internal-error'){
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Falta colocar contraseña' 
      } else if (displayName === 'auth/invalid-display-name'){/*Falta mandar mensaje cuando el campo de usuario se encuentra vacio*/
        errorRegister.style.display = 'block';
        errorRegister.textContent = 'Falta colocar usuario' 
      } 
      console.log(error.code);
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