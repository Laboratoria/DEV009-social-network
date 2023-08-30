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

  // Modal confirmación borrar
  const modal = document.createElement('div');
  modal.className = 'modal';

  const sectionModal = document.createElement('section');
  sectionModal.className = 'sectionModal';

  const modalTitle = document.createElement('h4');
  modalTitle.textContent = 'BON-BON';
  modalTitle.className = 'modalTitle';

  const modalMessage = document.createElement('stronge');
  modalMessage.textContent = '¿Deseas borrar este post?';

  const modalCancelDiv = document.createElement('div');
  modalCancelDiv.className = 'modalCancel';

  const modalConfirmation = document.createElement('button');
  modalConfirmation.textContent = 'Borrar';
  modalConfirmation.className = 'modalConfirmation';
  modalConfirmation.setAttribute('type', 'button');

  const modalCancel = document.createElement('button');
  modalCancel.textContent = 'No';
  modalCancel.className = 'modalCancelbtn';

  modalCancelDiv.append(modalConfirmation, modalCancel);
  sectionModal.append(modalTitle, modalMessage, modalCancelDiv);
  modal.append(sectionModal);

  // Modal para editar post
  const editBox = document.createElement('div');
  editBox.className = 'editBox';

  const sectionBoxContent = document.createElement('section');
  sectionBoxContent.className = 'sectionBoxContent';

  const modalTitleEdit = document.createElement('h4');
  modalTitleEdit.textContent = 'Estas editando tu post BON-BON';
  modalTitleEdit.className = 'modalTitleEdit';

  const editForm = document.createElement('form');
  editForm.className = 'editForm';

  const editTitle = document.createElement('input');
  editTitle.className = 'editTitle';

  const editTextIngredients = document.createElement('textarea');
  editTextIngredients.className = 'editIngredients';

  const editTextPreparation = document.createElement('textarea');
  editTextPreparation.className = 'editPreparation';

  const footerButtomsModal = document.createElement('footer');
  footerButtomsModal.className = 'footerButtomsModal';

  const confirmEdit = document.createElement('button');
  confirmEdit.textContent = 'Guardar';
  confirmEdit.className = 'confirmEdit';

  const cancelEdit = document.createElement('button');
  cancelEdit.textContent = 'Cancelar';
  cancelEdit.className = 'cancelEdit';

  footerButtomsModal.append(cancelEdit, confirmEdit);
  editForm.append(
    modalTitleEdit,
    editTitle,
    editTextIngredients,
    editTextPreparation,
    footerButtomsModal,
  );
  sectionBoxContent.append(editForm);
  editBox.append(sectionBoxContent);

  divPrincipal.append(headerPrincipal, mainPrincipal, menu, modal, editBox);
  mainPrincipal.append(textAllPostUsers, sectionRecetaUser);
  headerPrincipal.append(logoBon, divSloganUser);
  divSloganUser.append(sloganBon, nameUser);
  menu.appendChild(divMenu);
  divMenu.append(sectionHomeIcon, sectionSingOutIcon);
  sectionHomeIcon.append(homeIcono, homeText);
  sectionSingOutIcon.append(singOutIcono, singOutText);

  homeIcono.addEventListener('click', () => {
    navigateTo('/principal');
  });

  return divPrincipal;
}

export default usuarioPost;
