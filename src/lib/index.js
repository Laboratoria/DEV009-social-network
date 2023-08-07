// aqui exportaras las funciones que necesites

import { createUserWithEmailAndPassword, auth } from '../firebase/initializeFirebase.js';

export const registerUser = (email, pass) => {
  
  createUserWithEmailAndPassword(auth, email, pass)
    .then(()=>{
      navigateTo("/wall");
    })
    .catch ((error) => {
    console.log (error.code);
    if (error.code === "auth/email-already-in-use"){
      alert("Este email ya está registrado");
    }else if (error.code === "auth/invalid-email"){
      alert("Este email es inválido");
    } 
  })
};

// function success (email, password){
//   const validPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
//   if (validPattern.test(passUser)){
//     navigateTo("/wall");
//   } else {
//     navigateTo("/signup");
//   }
// }
