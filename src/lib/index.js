import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  updateProfile,
  provider,
  signInWithPopup,
} from '../firebase/initializeFirebase';

export const loginUser = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        alert('You are logged!');
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
        .catch((err) => {
          console.error(err);
          alert('Error sending email');
        });

      signOut(auth);
      alert(`Hola ${name}, please complete verification process`);
    })
    .catch((err) => {
      console.error(err);
      alert('Error creating account');
    });
};

export const authWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      alert(`Hello ${result.user.displayName}! you're logged in with Google`);
    })
    .catch((err) => {
      console.error(err);
      alert(`Authentication error: ${err}`);
    });
};

export const signOutUser = () => {
  auth.signOut()
    .then(() => {
      console.log('Usuario ha cerrado sesión.');
    })
    .catch((err) => {
      console.error('Error al cerrar sesión:', err);
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
