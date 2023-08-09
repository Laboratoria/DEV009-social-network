import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from '../firebase/initializeFirebase';

export const loginUser = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        alert('You are logged!');
        console.log(user);
        console.log(userCredential);
        resolve(user);
      } else {
        alert('Please verify your email address');
      }
    })
    .catch((err) => reject(err));
});

export const registerUser = (name, userName, email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      sendEmailVerification(user)
        .then(() => {
          console.log('Email verification sent to...:');
          user.updateProfile({
            displayName: name,
          });
          // userCredential.user.displayName = name;
          console.log(user);
          resolve(); // Resolve the promise on success
        })
        .catch((err) => {
          console.log('Error sending verification email:', err.message);
          reject(err); // Reject the promise with the error
        });
    })
    .catch((err) => {
      const errorMessage = err.message;
      console.log(errorMessage);
      reject(err); // Reject the promise with the error
    });
});

export const resetPass = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
    })
    .catch((err) => {
      const errorMessage = err.message;
      console.log(errorMessage);
      alert(err);
    });
};
