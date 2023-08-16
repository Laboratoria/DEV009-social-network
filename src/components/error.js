function error(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = 'Error 404 página no encotrada';
  const btnError = document.createElement('button');

  btnError.textContent = 'Regresar a inicio';

  btnError.addEventListener('click', () => {
    navigateTo('/');
  });

  section.append(title, btnError);

  return section;
}

export default error;
