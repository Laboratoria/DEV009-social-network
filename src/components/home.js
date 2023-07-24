// import { navigateTo } from '../main.js'; // Importamos la función navigateTo

export const home = (navigateTo) => {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const description = document.createElement('p');

  const logInButton = document.createElement('button');
  logInButton.textContent = 'Crear cuenta';
  logInButton.addEventListener('click', () => {
    navigateTo('/login'); // Utilizamos la función de redirección navigateTo
  });

  const registerButton = document.createElement('button');
  registerButton.textContent = 'Registro de cuenta';
  registerButton.addEventListener('click', () => {
    navigateTo('/register'); // Utilizamos la función de redirección navigateTo
  });

  title.textContent = 'SisterPhere';
  description.textContent = 'Bienvenidas a esta comunidad Kawaii-Like inspirada y creada para nosotras. Conecta, comparte y sueña en nuestra red.';

  section.append(title, description, logInButton, registerButton);
  return section;
};
