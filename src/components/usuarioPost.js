import { signOutSession, displayUserPosts } from '../lib/index.js';
import { auth } from '../lib/initializeFirebase.js';

import iconoReceta from '../imagenes/receta.png';
import iconoSingOut from '../imagenes/cerrar-sesion.png';

function usuarioPost(navigateTo) {
  const user = auth.currentUser;
  displayUserPosts(user);

  const divPrincipal = document.createElement('div');

  const divHead = document.createElement('div');
  divHead.className = 'divHead';

  const divSloganUser = document.createElement('div');
  divSloganUser.className = 'divSloganUser';

  const sloganBon = document.createElement('p');
  sloganBon.className = 'sloganBon';
  sloganBon.textContent = 'Consiente a tu familia';

  const userName = user.displayName;

  const nameUser = document.createElement('p');
  nameUser.className = 'nameUser';
  nameUser.textContent = userName;

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBonPrincipal';

  const divRecetasUser = document.createElement('div');
  divSloganUser.className = 'divRecetasUser';

  const menu = document.createElement('nav');
  menu.className = 'menuNav';
  const divMenu = document.createElement('div');
  divMenu.className = 'divMenu';
  const recetaIcono = document.createElement('img');
  recetaIcono.className = 'recetaIcono';
  recetaIcono.src = iconoReceta;
  recetaIcono.setAttribute('width', '30');
  recetaIcono.setAttribute('hide', '30');
  const singOutIcono = document.createElement('img');
  singOutIcono.className = 'singOut';
  singOutIcono.src = iconoSingOut;
  singOutIcono.setAttribute('width', '40');
  singOutIcono.setAttribute('hide', '40');

  singOutIcono.addEventListener('click', () => {
    signOutSession()
      .then(() => {
        navigateTo('/');
      })
      .catch((error) => {
        throw error;
      });
  });

  divHead.append(logoBon, divSloganUser);
  divSloganUser.append(sloganBon, nameUser);
  divPrincipal.append(divHead, divRecetasUser, menu);
  menu.appendChild(divMenu);
  divMenu.append(recetaIcono, singOutIcono);

  return divPrincipal;
}

export default usuarioPost;
