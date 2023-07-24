function error() {
  const title = document.createElement('h2');
  title.textContent = 'Error 404 pagina no encontrada. Regresa a Home';
  return title;
}

export default error;
