import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  updateProfile,
} from '../firebase/initializeFirebase';

export const loginUser = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        alert('You are logged!');
        console.log(user);
        console.log(userCredential);

        console.log(userCredential);
        console.log(userCredential.user);
        // updateProfile(userCredential.user, {
        //   displayName: name,
        // });

        resolve(user);
      } else {
        alert('Please verify your email address');
      }
    })
    .catch((err) => reject(err));
});

export const createAccountWithEmail = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result);
      console.log(result.user);
      updateProfile(result.user, {
        displayName: name,
      }).then(() => {
        // profile yupdate
      });
      sendEmailVerification(result.user)
        .catch((error) => {
          console.error(error);
          alert('Error sending email');
        });

      signOut(auth);
      alert(`Hola ${name}, please complete verification process`);
    })
    .catch((error) => {
      console.error(error);
      alert('Error creating account');
    });
};

export const signOutUser = () => {
  auth.signOut()
    .then(() => {
      console.log('Usuario ha cerrado sesión.');
    })
    .catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
};

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
