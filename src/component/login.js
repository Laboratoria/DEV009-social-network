export function loginView() {
  const content = document.createElement('section');
  content.classList.add('content-principal');
  const title = document.createElement('h1');
  title.id = 'titulo';
  title.innerHTML = 'Bienvenido Login';
  content.appendChild(title);

  /* -------------------------------Navegacion vista registro--------------------------------- */
  title.addEventListener('click', () => {
    window.history.pushState({}, '', `${window.location.origin}/registro`);
    /* ----- Dispara manualmente el evento popstate para actualizar la ruta ----- */
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.location.reload();
  });

  return content;
}
