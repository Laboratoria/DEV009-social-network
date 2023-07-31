function error() {
  const main = document.createElement('main');

  const errorMessage = document.createElement('h1');
  errorMessage.textContent = '404: Página no encontrada';

  main.append(errorMessage);

  return main;
}

export default error;
