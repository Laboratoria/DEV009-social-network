import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD335_BNtnen0moX7cM4Up0QMUGJKa19XQ',
  authDomain: 'cocinarte-7d524.firebaseapp.com',
  projectId: 'cocinarte-7d524',
  storageBucket: 'cocinarte-7d524.appspot.com',
  messagingSenderId: '444526288585',
  appId: '1:444526288585:web:679289f2b632d40627f718',
  measurementId: 'G-67T989TRPH',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
