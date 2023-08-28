import { signOutSession, displayAllPosts } from '../lib/index.js';
import { auth } from '../lib/initializeFirebase.js';

import iconoReceta from '../imagenes/receta.png';
import iconoSingOut from '../imagenes/cerrar-sesion.png';

function principal(navigateTo) {
  displayAllPosts();
  const divPrincipal = document.createElement('div');

  const headerPrincipal = document.createElement('header');
  headerPrincipal.className = 'headerPrincipal';

  const divSloganUser = document.createElement('div');
  divSloganUser.className = 'divSloganUser';

  const sloganBon = document.createElement('h1');
  sloganBon.className = 'sloganBon';
  sloganBon.textContent = 'Consiente a tu familia';

  const user = auth.currentUser;
  const userName = user.displayName;

  const nameUser = document.createElement('h2');
  nameUser.className = 'nameUser';
  nameUser.textContent = userName;

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBonPrincipal';

  const mainPrincipal = document.createElement('main');
  mainPrincipal.className = 'mainPrincipal';

  const recetaUser = document.createElement('input');
  recetaUser.className = 'recetaUser';
  recetaUser.setAttribute('placeholder', `¿Cuál es tu receta, ${userName}?`);

  const textAllPostUsers = document.createElement('p');
  textAllPostUsers.textContent = ('Lo que otros han compartido:');
  textAllPostUsers.className = 'textAllPostUsers';

  const sectionAllPostUsers = document.createElement('section');
  sectionAllPostUsers.className = 'sectionAllPostUsers';

  const menu = document.createElement('nav');
  menu.className = 'menuNav';
  const divMenu = document.createElement('div');
  divMenu.className = 'divMenu';
  const recetaIcono = document.createElement('img');
  recetaIcono.className = 'recetaIcono';
  recetaIcono.src = iconoReceta;
  recetaIcono.setAttribute('width', '40');
  recetaIcono.setAttribute('hide', '40');
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

  divPrincipal.append(headerPrincipal, menu, mainPrincipal);
  mainPrincipal.append(recetaUser, textAllPostUsers, sectionAllPostUsers);
  headerPrincipal.append(logoBon, divSloganUser);
  divSloganUser.append(sloganBon, nameUser);
  menu.appendChild(divMenu);
  divMenu.append(recetaIcono, singOutIcono);

  recetaUser.addEventListener('click', () => {
    navigateTo('/editarpost');
  });

  recetaIcono.addEventListener('click', () => {
    navigateTo('/usuarioPost');
  });

  return divPrincipal;
}

export default principal;
