import cerrar from '../imagenes/cerrar.jpg';

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
  logoBon.className = 'logoBonMuro';

  const divReceta = document.createElement('div');
  divReceta.className = 'divReceta';

  const recetaUser = document.createElement('input');
  recetaUser.className = 'recetaUser';
  recetaUser.setAttribute('placeholder', 'Cual es tu receta?');

  const divRecetasUsers = document.createElement('div');
  divRecetasUsers.className = 'divRecetasUsers';

  const cerrar = document.createElement('img');
  cerrar.src = cerrar.jpg;

  divHead.append(logoBon, divSloganUser);
  divSloganUser.append(sloganBon, nameUser);
  divReceta.append(recetaUser);
  divPrincipal.append(divHead, divReceta, divRecetasUsers, cerrar);
  return divPrincipal;
}

export default principal;
