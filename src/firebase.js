import{initializeApp}  from 'firebase/app';
//import  getAuth  from 'firebase/auth';
import{getFirestore}from 'firebase/firebase-firestore'; // de aca sale la base de datos

const firebaseConfig = {
    apiKey: "AIzaSyBSJVQlrNAir7rcWJgfHol8tpgxJCFHf3Y",
    authDomain: "aerobic-acronym-302005.firebaseapp.com",
    projectId: "aerobic-acronym-302005",
    storageBucket: "aerobic-acronym-302005.appspot.com",
    messagingSenderId: "1072407567152",
    appId: "1:1072407567152:web:bd1bb53ddc7b372a9ec6f5",
    measurementId: "G-25JK4W1Q2K"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig); // inicia la app
export const auth = getAuth(app);
export const database = getFirestore(app);//Sacamos la base de datos de firestore