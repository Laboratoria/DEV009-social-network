import { logOut } from '../lib/firebaseAuth.js';

export const muro = (navigateTo) => {
  const section = document.createElement('section');
  const logoMuro = document.createElement('img');
  logoMuro.src = './recursos/LogoSinLetras.png';
  logoMuro.classList.add('logo-muro');
  // Publicacion
  const publicacion = document.createElement('div');
  publicacion.classList.add('publicacion');
  const areaText = document.createElement('textarea');
  areaText.textContent = 'Comparte aquí...';
  const botonCompartir = document.createElement('button');
  botonCompartir.classList.add('boton-compartir');
  botonCompartir.textContent = 'Compartir';

  const logOutButton = document.createElement('button');
  logOutButton.classList.add('logOut-button');
  logOutButton.textContent = 'Cerrar sesion';
  logOutButton.addEventListener('click', () => {
    const logOutAlert = (valid) => {
      if (valid === true) {
        navigateTo('/');
      }
    };

    logOut(logOutAlert);
  });
  publicacion.append(areaText, botonCompartir);

  section.append(logoMuro, publicacion, logOutButton);

  return section;
};
