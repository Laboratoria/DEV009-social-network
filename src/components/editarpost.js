import { auth, serverTimestamp } from '../lib/initializeFirebase';
import { signOutSession, createPost } from '../lib/index.js';
import iconoReceta from '../imagenes/receta.png';
import iconoSingOut from '../imagenes/cerrar-sesion.png';
import iconoHome from '../imagenes/home.png';

function editarpost(navigateTo) {
  const divPrincipal = document.createElement('div');

  const divHead = document.createElement('header');
  divHead.className = 'divHead';

  const sectionSloganUser = document.createElement('section');
  sectionSloganUser.className = 'sectionSloganUser';

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
  sectionRecetaTitle.className = 'sectionRecetaTitle';

  const formPost = document.createElement('form');
  formPost.className = 'formPost';

  const titleReceta = document.createElement('strong');
  titleReceta.textContent = 'TITULO';
  titleReceta.className = 'escritosfijos';

  const recetaTitle = document.createElement('textarea');
  recetaTitle.className = 'recetaTitle';
  recetaTitle.setAttribute('type', 'text');
  recetaTitle.setAttribute('placeholder', 'Escribe el título ');
  recetaTitle.setAttribute('required', '');

  const titleIngredientes = document.createElement('strong');
  titleIngredientes.textContent = 'INGREDIENTES';
  titleIngredientes.className = 'escritosfijos';

  const ingredientesTextarea = document.createElement('textarea');
  ingredientesTextarea.className = 'ingredientesUser';
  ingredientesTextarea.setAttribute('placeholder', 'Ingresa los ingredientes');
  ingredientesTextarea.setAttribute('maxlength', '500');
  ingredientesTextarea.setAttribute('required', '');

  const titlePreparacion = document.createElement('strong');
  titlePreparacion.textContent = 'PREPARACION';
  titlePreparacion.className = 'escritosfijos';

  const preparacionTextarea = document.createElement('textarea');
  preparacionTextarea.className = 'preparacionUser';
  preparacionTextarea.setAttribute('placeholder', 'Describe la preparación');
  preparacionTextarea.setAttribute('maxlength', '1500');
  preparacionTextarea.setAttribute('required', '');

  const btnPost = document.createElement('button');
  btnPost.className = 'btn-post';
  btnPost.textContent = 'Publicar';

  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = recetaTitle.value;
    const ingredient = ingredientesTextarea.value;
    const preparation = preparacionTextarea.value;
    const date = serverTimestamp();

    await createPost(username, title, ingredient, preparation, date);
    formPost.reset();
    navigateTo('/principal');
  });

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
  sectionRecetaUser.append(sectionRecetaTitle, formPost);
  formPost.append(
    titleReceta,
    recetaTitle,
    titleIngredientes,
    ingredientesTextarea,
    titlePreparacion,
    preparacionTextarea,
    btnPost,
  );
  divPrincipal.append(divHead, sectionRecetaUser, menu);
  menu.appendChild(divMenu);
  divMenu.append(homeIcono, recetaIcono, singOutIcono);

  homeIcono.addEventListener('click', () => {
    navigateTo('/principal');
  });

  return divPrincipal;
}
export default editarpost;
