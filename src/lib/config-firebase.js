// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAN8tAuK0QMaUOxSSF4aHnAHPonr8IZq_8',
  authDomain: 'bd-socialnetwork.firebaseapp.com',
  projectId: 'bd-socialnetwork',
  storageBucket: 'bd-socialnetwork.appspot.com',
  messagingSenderId: '474611692628',
  appId: '1:474611692628:web:aa7b4b75ebc56fb31e29c1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app);
