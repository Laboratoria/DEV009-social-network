import logoSinLetras from '../recursos/LogoSinLetras.png';
import backButtonIcon from '../recursos/arrow-left-solid.svg';

import { registerUser } from '../lib/firebaseAuth.js';

export const register2 = (navigateTo) => {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  logo.src = logoSinLetras;
  const title = document.createElement('h2');
  title.textContent = 'Registrate!';

  const userNameInput = document.createElement('input');
  userNameInput.type = 'text';
  userNameInput.setAttribute('placeholder', 'Username');
  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.setAttribute('placeholder', 'Email');

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.setAttribute('placeholder', 'Password');

  const registerInvalidPassMessage = document.createElement('span');
  registerInvalidPassMessage.classList.add('register-error');

  const backButton = document.createElement('img');
  backButton.classList.add('back-button');
  backButton.src = backButtonIcon;
  backButton.alt = 'back button';
  backButton.addEventListener('click', () => {
    navigateTo('/register');
  });

  const regsiterButton = document.createElement('button');
  regsiterButton.textContent = 'Enviar';

  regsiterButton.addEventListener('click', () => {
    const userName = userNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const registerAlert = (valid) => {
      if (valid === true) {
        navigateTo('/muro');
      }
    };

    registerUser(userName, email, password, registerAlert);
  });

  section.append(
    backButton,
    logo,
    title,
    userNameInput,
    emailInput,
    passwordInput,
    registerInvalidPassMessage,
    regsiterButton,
  );

  return section;
};
