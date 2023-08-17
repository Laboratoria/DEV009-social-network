import { resetPasswordEmail } from '../lib/firebaseAuth.js';

export const resetPassword = (navigateTo) => {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  logo.src = './recursos/LogoSinLetras.png';
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
  backButton.src = './recursos/arrow-left-solid.svg';
  backButton.alt = 'back button';
  backButton.addEventListener('click', () => {
    navigateTo('/');
  });
  section.append(backButton, logo, title, emailInput, sendButton);

  return section;
};
