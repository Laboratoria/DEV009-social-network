// import { navigateTo } from '../main.js'; // Importamos la función navigateTo

export const home = (navigateTo) => {
  const section = document.createElement('section');
  section.classList.add('bienvenida');
  const title = document.createElement('h2');
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
  description.textContent = 'Bienvenidas a esta comunidad Kawaii-Like inspirada y creada para nosotras. Conecta, comparte y sueña en nuestra red.';

  buttonContainer.append(logInButton, registerButton);
  section.append(title, description, buttonContainer);
  return section;
};
