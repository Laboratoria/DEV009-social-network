import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: 'AIzaSyDms2fEf6f5nzD5qf5KdIJR84O8dE1qv8c',
    authDomain: 'guide-mapa.firebaseapp.com',
    projectId: 'guide-mapa',
    storageBucket: 'guide-mapa.appspot.com',
    messagingSenderId: '240177782618',
    appId: '1:240177782618:web:545f39b9d6c7707c245d63',
};

export const app = initializeApp(firebaseConfig);