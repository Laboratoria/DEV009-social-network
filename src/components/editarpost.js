import { auth, serverTimestamp } from '../lib/initializeFirebase';
import { signOutSession, createPost } from '../lib/index.js';
import iconoReceta from '../imagenes/receta.png';
import iconoSingOut from '../imagenes/cerrar-sesion.png';

function editarpost(navigateTo) {
  const divPrincipal = document.createElement('div');

  const divHead = document.createElement('div');
  divHead.className = 'divHead';

  const divSloganUser = document.createElement('div');
  divSloganUser.className = 'divSloganUser';

  const sloganBon = document.createElement('p');
  sloganBon.className = 'sloganBon';
  sloganBon.textContent = 'Consiente a tu familia';

  const user = auth.currentUser;
  const username = user.displayName;
  const nameUser = document.createElement('p');
  nameUser.className = 'nameUser';
  nameUser.textContent = username;

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBonPrincipal';

  const sectionRecetaUser = document.createElement('section');
  sectionRecetaUser.className = 'sectionRecetaUser';
  const sectionRecetaTitle = document.createElement('p');
  sectionRecetaTitle.textContent = '¿Que receta quieres escribir hoy?';

  const formPost = document.createElement('form');

  const recetaTitle = document.createElement('input');
  recetaTitle.className = 'recetaTitle';
  recetaTitle.setAttribute('type', 'text');
  recetaTitle.setAttribute('placeholder', 'Escribe el título ');
  recetaTitle.setAttribute('required', '');

  const receta = document.createElement('input');
  receta.className = 'recetaUser';
  receta.setAttribute('placeholder', 'Escribe tu receta');
  receta.setAttribute('rows', '5');
  receta.setAttribute('cols', '50');
  receta.setAttribute('maxlength', '1500');
  receta.setAttribute('required', '');
  const btnPost = document.createElement('button');
  btnPost.className = 'btn-post';
  btnPost.textContent = 'Publicar';

  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = recetaTitle.value;
    const content = receta.value;
    const date = serverTimestamp();

    await createPost(username, title, content, date);
    formPost.reset();
    navigateTo('/principal');
  });

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
  formPost.append(recetaTitle, receta, btnPost);
  sectionRecetaUser.append(sectionRecetaTitle, formPost);
  divPrincipal.append(divHead, sectionRecetaUser, menu);
  menu.appendChild(divMenu);
  divMenu.append(recetaIcono, singOutIcono);

  return divPrincipal;
}
export default editarpost;
