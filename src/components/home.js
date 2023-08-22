import logoSinLetras from '../recursos/LogoSinLetras.png';
import googleIconImage from '../recursos/google.svg';


import { logInWithGoogle } from '../lib/firebaseAuth.js';

export const home = (navigateTo) => {
  const section = document.createElement('section');
  section.classList.add('bienvenida');
  const leftContainer = document.createElement('div');
  leftContainer.classList.add('left-grid');
  const bienvenidaContainer = document.createElement('div');
  bienvenidaContainer.classList.add('bienvenida-container');
  const logo = document.createElement('img');
  logo.src = logoSinLetras;
  const title = document.createElement('h2');
  const slogan = document.createElement('h4');
  slogan.className = 'slogan';
  const description = document.createElement('p');
  const rigthContainer = document.createElement('div');
  rigthContainer.className = 'right-grid';
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('botones-home');

  const logInButton = document.createElement('button');
  logInButton.textContent = 'Inicio de sesión';
  logInButton.classList.add('boton-login');
  logInButton.addEventListener('click', () => {
    navigateTo('/login'); // Utilizamos la función de redirección navigateTo
  });

  const registerButton = document.createElement('button');
  registerButton.textContent = 'Crear cuenta';
  registerButton.classList.add('boton-registro');
  registerButton.addEventListener('click', () => {
    navigateTo('/register'); // Utilizamos la función de redirección navigateTo
  });

  title.textContent = 'SisterSphere';
  slogan.textContent = 'Kawaii Lovers';
  description.textContent = 'Bienvenidas a esta comunidad Kawaii-Like inspirada y creada para nosotras. Conecta, comparte y sueña en nuestra red.';

  const googleButton = document.createElement('button');
  const googleIcon = document.createElement('img');
  googleIcon.src = googleIconImage;
  googleIcon.classList.add('icon-google');
  googleButton.textContent = '';
  googleButton.classList.add('boton-google');
  googleButton.addEventListener('click', () => {
    const googleAlert = (valid) => {
      if (valid === true) {
        navigateTo('/muro');
      } else {
        // eslint-disable-next-line no-alert
        alert('Error al iniciar sesión con Google');
      }
    };
    logInWithGoogle(googleAlert);
  });

  leftContainer.appendChild(bienvenidaContainer);
  bienvenidaContainer.append(logo, title, slogan, description);
  rigthContainer.appendChild(buttonContainer);
  googleButton.append(googleIcon);
  buttonContainer.append(googleButton, logInButton, registerButton);
  section.append(leftContainer, rigthContainer);
  return section;
};
