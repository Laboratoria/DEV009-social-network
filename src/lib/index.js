// aqui exportaras las funciones que necesites
import {createUserWithEmailAndPassword} from './firebase/initializeFirebase'

export const registerUser = () => {
  try{
    createUserWithEmailAndPassword (auth, email, password)
  } catch (error){
    throw error.message;
  }
};
