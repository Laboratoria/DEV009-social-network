import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from '../firebase/initializeFirebase';

export const registerUser = (name1, userName, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      sendEmailVerification(userCredential.user)
        .then(() => {
          console.log('Email verification sent to...:');
        })
        .catch((err) => {
          console.log('Error sending verification email:', err.message);
        });
    })
    .catch((err) => {
      const errorMessage = err.message;
      console.log(errorMessage);
      alert(err);
    });
};

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('ingreso');
    return user;
  })
  .catch((err) => {
    throw err; // Lanza el objeto de error completo, no solo el mensaje
  });

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
