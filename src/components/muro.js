import { logOut } from '../lib/firebaseAuth.js';

export const muro = (navigateTo) => {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Holi';

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

  section.append(title, logOutButton);

  return section;
};
