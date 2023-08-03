// Import the functions you need from the SDKs you need

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export const registerUser = (email, password) => {
    try{
      createUserWithEmailAndPassword (auth, email, password)
    } catch (error){
      throw error.message;
    }
  };