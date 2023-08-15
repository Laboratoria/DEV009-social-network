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

  const prueba = document.createElement('h2');
  prueba.textContent = ('Hola');
  divPrincipal.appendChild(prueba);
  return divPrincipal;
}

export default principal;
