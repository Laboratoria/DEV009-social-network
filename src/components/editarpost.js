import { auth, serverTimestamp } from '../lib/initializeFirebase';
import { signOutSession, createPost } from '../lib/index.js';
import iconoReceta from '../imagenes/receta.png';
import iconoSingOut from '../imagenes/cerrar-sesion.png';
import iconoHome from '../imagenes/home.png';

function editarpost(navigateTo) {
  const divPrincipal = document.createElement('div');

  const headerPrincipal = document.createElement('header');
  headerPrincipal.className = 'headerPrincipal';

  const divSloganUser = document.createElement('div');
  divSloganUser.className = 'divSloganUser';

  const sloganBon = document.createElement('h1');
  sloganBon.className = 'sloganBon';
  sloganBon.textContent = 'Consiente a tu familia';

  const user = auth.currentUser;
  const username = user.displayName;

  const nameUser = document.createElement('h2');
  nameUser.className = 'nameUser';
  nameUser.textContent = username;

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBonPrincipal';

  const mainEditar = document.createElement('main');
  mainEditar.className = 'mainEditar';

  const formPost = document.createElement('form');
  formPost.className = 'formPostUser';

  const textTitleUser = document.createElement('h2');
  textTitleUser.textContent = '¿Que receta quieres escribir hoy?';
  textTitleUser.className = 'textTitleUser';

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

  const sectionHomeIcon = document.createElement('section');
  sectionHomeIcon.className = 'sectionHomeIcon';
  const homeIcono = document.createElement('img');
  homeIcono.className = 'homeIcono';
  homeIcono.src = iconoHome;
  homeIcono.setAttribute('width', '30');
  homeIcono.setAttribute('hide', '30');
  const homeText = document.createElement('p');
  homeText.textContent = 'Inicio';
  homeText.className = 'homeText';

  const sectionRecetaIcon = document.createElement('section');
  sectionRecetaIcon.className = 'sectionRecetaIcon';
  const recetaIcono = document.createElement('img');
  recetaIcono.className = 'recetaIcono';
  recetaIcono.src = iconoReceta;
  recetaIcono.setAttribute('width', '30');
  recetaIcono.setAttribute('hide', '30');
  const misRecetasText = document.createElement('p');
  misRecetasText.textContent = 'Mis recetas';
  misRecetasText.className = 'misRecetasText';

  const sectionSingOutIcon = document.createElement('section');
  sectionSingOutIcon.className = 'sectionSingOutIcon';
  const singOutIcono = document.createElement('img');
  singOutIcono.className = 'singOut';
  singOutIcono.src = iconoSingOut;
  singOutIcono.setAttribute('width', '30');
  singOutIcono.setAttribute('hide', '30');
  const singOutText = document.createElement('p');
  singOutText.textContent = 'Cerrar sesión';
  singOutText.className = 'singOutText';

  singOutIcono.addEventListener('click', () => {
    signOutSession()
      .then(() => {
        navigateTo('/');
      })
      .catch((error) => {
        throw error;
      });
  });

  divPrincipal.append(headerPrincipal, mainEditar, menu);
  headerPrincipal.append(logoBon, divSloganUser);
  divSloganUser.append(sloganBon, nameUser);
  mainEditar.append(formPost);
  formPost.append(
    textTitleUser,
    titleReceta,
    recetaTitle,
    titleIngredientes,
    ingredientesTextarea,
    titlePreparacion,
    preparacionTextarea,
    btnPost,
  );
  menu.appendChild(divMenu);
  divMenu.append(sectionHomeIcon, sectionRecetaIcon, sectionSingOutIcon);
  sectionHomeIcon.append(homeIcono, homeText);
  sectionRecetaIcon.append(recetaIcono, misRecetasText);
  sectionSingOutIcon.append(singOutIcono, singOutText);

  homeIcono.addEventListener('click', () => {
    navigateTo('/principal');
  });

  recetaIcono.addEventListener('click', () => {
    navigateTo('/usuarioPost');
  });
  return divPrincipal;
}
export default editarpost;
