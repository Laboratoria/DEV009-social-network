function error() {
  const title = document.createElement('h2');
  title.textContent = 'Error 404 page not found, please go home';
  return title;
}

export default error;
