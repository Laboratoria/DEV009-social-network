/* eslint-disable max-len */
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase';
import {signInWithEmailAndPassword} from "firebase/auth";


export const addUser =(email, password)=>createUserWithEmailAndPassword(auth, email, password);

export function signinUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
