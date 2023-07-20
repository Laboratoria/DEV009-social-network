/* eslint-disable import/no-duplicates */
/* eslint-disable max-len */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export const addUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export function signinUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
