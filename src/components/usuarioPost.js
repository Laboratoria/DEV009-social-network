import { signOutSession, displayUserPosts } from '../lib/index.js';
import { auth } from '../lib/initializeFirebase.js';

import iconoReceta from '../imagenes/receta.png';
import iconoSingOut from '../imagenes/cerrar-sesion.png';
import iconoHome from '../imagenes/home.png';

function usuarioPost(navigateTo) {
  const user = auth.currentUser;
  displayUserPosts(user);

  const divPrincipal = document.createElement('div');

  const divHead = document.createElement('header');
  divHead.className = 'divHead';

  const sectionSloganUser = document.createElement('section');
  sectionSloganUser.className = 'sectionSloganUser';

  const sloganBon = document.createElement('p');
  sloganBon.className = 'sloganBon';
  sloganBon.textContent = 'Consiente a tu familia';

  const userName = user.displayName;

  const nameUser = document.createElement('p');
  nameUser.className = 'nameUser';
  nameUser.textContent = userName;

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBonPrincipal';

  const textAllPostUsers = document.createElement('p');
  textAllPostUsers.textContent = ('MIS PUBLICACIONES:');
  textAllPostUsers.className = 'misPublicaciones';

  const sectionRecetaUser = document.createElement('section');
  sectionRecetaUser.className = 'sectionRecetasUser';

  const menu = document.createElement('nav');
  menu.className = 'menuNav';
  const divMenu = document.createElement('div');
  divMenu.className = 'divMenu';
  const homeIcono = document.createElement('img');
  homeIcono.className = 'recetaIcono';
  homeIcono.src = iconoHome;
  homeIcono.setAttribute('width', '30');
  homeIcono.setAttribute('hide', '30');
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

  divHead.append(logoBon, sectionSloganUser);
  sectionSloganUser.append(sloganBon, nameUser);
  sectionRecetaUser.append();
  divPrincipal.append(divHead, textAllPostUsers, sectionRecetaUser, menu);
  menu.appendChild(divMenu);
  divMenu.append(homeIcono, recetaIcono, singOutIcono);

  homeIcono.addEventListener('click', () => {
    navigateTo('/principal');
  });

  return divPrincipal;
}

export default usuarioPost;
