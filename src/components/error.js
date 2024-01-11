function error(navigateTo) {
  const section = document.createElement('div');
  const title = document.createElement('h2');
  const btnError = document.createElement('button');

  btnError.classList.add('btnError');
  title.classList.add('error');
  section.classList.add('errorSection');

  title.textContent = 'Error 404: página no encontrada';
  btnError.textContent = 'Regresar a inicio';

  btnError.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(title, btnError);

  return section;
}

export default error;
