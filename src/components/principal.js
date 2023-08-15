function principal() {
  const divPrincipal = document.createElement('div');

  const divHead = document.createElement('div');
  divHead.className = 'divHead';

  const sloganBon = document.createElement('p');
  sloganBon.className = 'sloganBon';
  sloganBon.textContent = 'Consiente a tu familia';

  const nameUser = document.createElement('p');
  nameUser.className = 'nameUser';
  nameUser.textContent = 'Usuaria ';

  const logoBon = document.createElement('img');
  logoBon.className = 'logoBonMuro';

  const divReceta = document.createElement('div');
  divReceta.className = 'divReceta';

  const recetaUser = document.createElement('input');
  recetaUser.className = 'recetaUser';

  const divRecetasUsers = document.createElement('div');
  divRecetasUsers.className = 'divRecetasUsers';


  const prueba = document.createElement('h2');
  
  divHead.append(logoBon,sloganBon,nameUser);
  divReceta.append(recetaUser);
  divPrincipal.append(divHead,divReceta,divRecetasUsers);
  return divPrincipal;
}

export default principal;
