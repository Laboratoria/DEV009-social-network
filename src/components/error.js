function error(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Error 404 página no encontrada';
  const btnError = document.createElement('button');
  btnError.classList.add('btnError');
  title.classList.add('error');
  section.classList.add('errorSection');

  btnError.textContent = 'Regresar a inicio';

  btnError.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(title, btnError);

  return section;
}

export default error;
