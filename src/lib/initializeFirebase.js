// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection,addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyBfP2-ChIx9Gk5O1j8j4L0WVqongsASPfI',
  authDomain: 'social-network-bon.firebaseapp.com',
  projectId: 'social-network-bon',
  storageBucket: 'social-network-bon.appspot.com',
  messagingSenderId: '927615227762',
  appId: '1:927615227762:web:f1d0fb00d0a05d16a82feb',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
export const saveUser = (user) => addDoc(collection(getFirestore(), 'Users'), user);