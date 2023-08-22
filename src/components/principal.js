import { signOutSession } from '../lib/index.js';
import iconoReceta from '../imagenes/receta.png';
import iconoSingOut from '../imagenes/cerrar-sesion.png';
import logoBonPrincipal from '../imagenes/logoBon.png';

function principal() {
  const divPrincipal = document.createElement('div');

  const divHead = document.createElement('div');
  divHead.className = 'divHead';

  const divSloganUser = document.createElement('div');
  divSloganUser.className = 'divSloganUser';

  const sloganBon = document.createElement('p');
  sloganBon.className = 'sloganBon';
  sloganBon.textContent = 'Consiente a tu familia';

  const nameUser = document.createElement('p');
  nameUser.className = 'nameUser';
  nameUser.textContent = 'Usuari@';

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBon';
  logoBon.src = logoBonPrincipal;

  const divReceta = document.createElement('div');
  divReceta.className = 'divReceta';

  const recetaUser = document.createElement('input');
  recetaUser.className = 'recetaUser';
  recetaUser.setAttribute('placeholder', 'Cual es tu receta?');

  const divRecetasUsers = document.createElement('div');
  divRecetasUsers.className = 'divRecetasUsers';

  const menu = document.createElement('nav');
  menu.className = 'menuNav';
  const recetaIcono = document.createElement('img');
  recetaIcono.className = 'recetaIcono';
  recetaIcono.src = iconoReceta;
  recetaIcono. setAttribute ('width', '30');
  recetaIcono. setAttribute ('hide', '30');
  const singOutIcono = document.createElement('img');
  singOutIcono.className = 'singOut';
  singOutIcono.src = iconoSingOut;
  singOutIcono. setAttribute ('width', '40');
  singOutIcono. setAttribute ('hide', '40');
  
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
  divReceta.append(recetaUser);
  divPrincipal.append(divHead, divReceta, divRecetasUsers,menu);
  menu.append(recetaIcono, singOutIcono);
  return divPrincipal;
}

export default principal;
