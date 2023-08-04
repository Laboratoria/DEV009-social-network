import { resetPasswordEmail } from '../lib/firebaseAuth.js';

export const resetPassword = () => {
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
    resetPasswordEmail();
  });

  section.append(logo, title, emailInput, sendButton);

  return section;
};
