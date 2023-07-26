export function registroView() {
  const content = document.createElement('section');
  content.classList.add('content-principal');
  const title = document.createElement('h1');
  title.id = 'titulo';
  title.innerHTML = 'Registrate';
  content.appendChild(title);
  return content;
}
