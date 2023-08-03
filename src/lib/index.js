import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from '../firebase/initializeFirebase';

export const registerUser = (name, userName, email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      sendEmailVerification(user)
        .then(() => {
          console.log('Email verification sent to...:');
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

export const loginUser = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve(user);
    })
    .cath((err) => reject(err));
});

// export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     alert('ingreso');
//     return user;
//   })
//   .catch((err) => {
//     throw err; // Lanza el objeto de error completo, no solo el mensaje
//   });

export const resetPass = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
    })
    .catch((err) => {
      const errorMessage = err.message;
      console.log(errorMessage);
      alert(err);
    });
};

// export const emailVerification = (auth) => {
//   sendEmailVerification(auth.currentUser)
//     .then(() => {
//       console.log('email');
//     });
// };
