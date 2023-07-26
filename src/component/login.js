export function loginView() {
  const content = document.createElement('section');
  content.classList.add('content-principal');
  const title = document.createElement('h1');
  title.id = 'titulo';
  title.innerHTML = 'Bienvenido Login';
  content.appendChild(title);
  return content;
}
