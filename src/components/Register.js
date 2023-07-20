import { addUser } from '../lib/account';

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

  const button = document.createElement('button');

  const buttonBack = document.createElement('button');

  const buttonGoogle = document.createElement('button');

  const registerUser = document.createElement('button');
  registerUser.textContent = 'Create account';
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
  button.textContent = 'Sign Up';
  buttonGoogle.textContent = 'Continue with Google';
  inputEmail.placeholder = 'Email address';
  inputPassword.placeholder = 'Password';

  buttonBack.addEventListener('click', () => {
    navigateTo('/');
  });

  button.addEventListener('click', () => {
    navigateTo('/start');
  });

  homeDiv.append(title, note, inputEmail, password, button, buttonGoogle);
  homeDiv.append(inputPassword, registerUser, buttonBack, loginError);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  buttonContainer.append(button);
  buttonContainer.append(buttonGoogle);
  buttonContainer.append(buttonBack);

  homeDiv.append(buttonContainer);

  return homeDiv;
};
