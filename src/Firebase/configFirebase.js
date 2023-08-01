

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./initializeFirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();
const app = initializeApp(firebaseConfig);

export{
    app,
    auth,
    createUserWithEmailAndPassword,
}

