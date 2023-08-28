import { signOutSession, displayUserPosts } from '../lib/index.js';
import { auth } from '../lib/initializeFirebase.js';

import iconoReceta from '../imagenes/receta.png';
import iconoSingOut from '../imagenes/cerrar-sesion.png';
import iconoHome from '../imagenes/home.png';

function usuarioPost(navigateTo) {
  const user = auth.currentUser;
  displayUserPosts(user);

  const divPrincipal = document.createElement('div');

  const headerPrincipal = document.createElement('header');
  headerPrincipal.className = 'headerPrincipal';

  const divSloganUser = document.createElement('div');
  divSloganUser.className = 'divSloganUser';

  const sloganBon = document.createElement('h1');
  sloganBon.className = 'sloganBon';
  sloganBon.textContent = 'Consiente a tu familia';

  const userName = user.displayName;

  const nameUser = document.createElement('h2');
  nameUser.className = 'nameUser';
  nameUser.textContent = userName;

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBonPrincipal';

  const mainPrincipal = document.createElement('main');
  mainPrincipal.className = 'mainPrincipal';

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

  divPrincipal.append(headerPrincipal, mainPrincipal, menu);
  mainPrincipal.append(textAllPostUsers, sectionRecetaUser);
  headerPrincipal.append(logoBon, divSloganUser);
  divSloganUser.append(sloganBon, nameUser);
  menu.appendChild(divMenu);
  divMenu.append(homeIcono, recetaIcono, singOutIcono);

  homeIcono.addEventListener('click', () => {
    navigateTo('/principal');
  });

  return divPrincipal;
}

export default usuarioPost;
