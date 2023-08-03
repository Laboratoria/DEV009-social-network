import { logOut } from '../lib/firebaseAuth.js';

export const muro = (navigateTo) => {
  const section = document.createElement('section');
  const logoMuro = document.createElement('img');
  logoMuro.src = './recursos/LogoSinLetras.png';
  logoMuro.classList.add('logo-muro');
  const title = document.createElement('h3');
  title.textContent = 'SisterSphere';

  const logOutButton = document.createElement('button');
  logOutButton.textContent = 'Cerrar sesion';
  logOutButton.addEventListener('click', () => {
    const logOutAlert = (valid) => {
      if (valid === true) {
        navigateTo('/');
      }
    };

    logOut(logOutAlert);
  });

  section.append(logoMuro, logOutButton);

  return section;
};
