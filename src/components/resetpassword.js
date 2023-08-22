/* eslint-disable no-console */
import { resetPasswordEmail } from '../lib/firebaseAuth.js';

import logoSinLetras from '../recursos/LogoSinLetras.png';
import backButtonIcon from '../recursos/arrow-left-solid.svg';

export const resetPassword = (navigateTo) => {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  logo.src = logoSinLetras;
  const title = document.createElement('h2');
  title.textContent = 'Recupera tu contraseña!';

  const emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.setAttribute('placeholder', 'Email');

  const sendButton = document.createElement('button');
  sendButton.textContent = 'Enviar';
  sendButton.addEventListener('click', () => {
    const email = emailInput.value;
    const sendemail = (valid) => {
      if (valid === true) {
        navigateTo('/login');
      }
    };
    console.log(sendemail);
    resetPasswordEmail(email, sendemail);
  });

  const backButton = document.createElement('img');
  backButton.classList.add('back-button');
  backButton.src = backButtonIcon;
  backButton.alt = 'back button';
  backButton.addEventListener('click', () => {
    navigateTo('/');
  });
  section.append(backButton, logo, title, emailInput, sendButton);

  return section;
};
