// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const {initializeApp, applicationDefault, cert} = require('firebase-admin/app');
const {getFirestore, Timestamp, FieldValue, Filter} = require('firebase-admin/firestore');

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

initializeApp();

const db = getFirestore();