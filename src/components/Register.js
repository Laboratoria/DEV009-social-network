import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { addUser, enterGoogle } from '../lib/account';

export const Register = (navigateTo) => {
  const homeDiv = document.createElement('div');

  const title = document.createElement('h3');

  const inputEmail = document.createElement('input');
  inputEmail.id = 'enterEmail';
  const note = document.createElement('p');
  note.innerHTML = 'Enter your email address';
  const loginError = document.createElement('h5');
  loginError.innerText = '';
  console.log(loginError);

  const inputPassword = document.createElement('input');
  inputPassword.id = 'enterPassword';
  const password = document.createElement('p');
  password.innerHTML = 'Enter your password';

  const buttonBack = document.createElement('button');

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continue with Google';
  buttonGoogle.addEventListener('click', () => {
    enterGoogle()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        navigateTo('/start');
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        const errorMessage = error.message;
        loginError.innerText = 'Accound invalid';
        console.log(errorMessage + credential);
      });
  });

  const registerUser = document.createElement('button');
  registerUser.textContent = 'Sign Up';
  registerUser.addEventListener('click', () => {
    addUser(inputEmail.value, inputPassword.value)
      .then((userCredential) => {
        const { user } = userCredential;
        alert('Welcome', user);
        navigateTo('/start');
      })
      .catch((error) => {
        const errorMessage = error.message;
        loginError.innerText = 'Password or Email invalid';
        console.log(errorMessage);
      });
  });
  title.textContent = 'Sign Up';
  buttonBack.textContent = 'Go back';
  inputEmail.placeholder = 'Email address';
  inputPassword.placeholder = 'Password';

  buttonBack.addEventListener('click', () => {
    navigateTo('/');
  });

  homeDiv.append(title, note, inputEmail, password, buttonGoogle);
  homeDiv.append(inputPassword, buttonBack, loginError);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  buttonContainer.append(registerUser);
  buttonContainer.append(buttonGoogle);
  buttonContainer.append(buttonBack);

  homeDiv.append(buttonContainer);

  return homeDiv;
};
