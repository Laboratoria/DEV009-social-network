import { logInWithGoogle } from '../lib/firebaseAuth.js';

export const home = (navigateTo) => {
  const section = document.createElement('section');
  section.classList.add('bienvenida');
  const logo = document.createElement('img');
  logo.src = './recursos/LogoSinLetras.png';
  const title = document.createElement('h2');
  const slogan = document.createElement('h4');
  slogan.className = 'slogan';
  const description = document.createElement('p');
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
  googleIcon.src = './recursos/google.svg';
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

  googleButton.append(googleIcon);
  buttonContainer.append(googleButton, logInButton, registerButton);
  section.append(logo, title, slogan, description, buttonContainer);
  return section;
};
