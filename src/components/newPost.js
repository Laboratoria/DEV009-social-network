function newPost(navigateTo) {
  const section = document.createElement('section');
  section.classList.add('newPostSection');

  const title = document.createElement('h2');
  title.textContent = 'Crear nueva publicación';
  title.classList.add('titlenewPost');
  const newPostText = document.createElement('textarea');
  newPostText.placeholder = 'Escribe aquí tu mensaje ...';
  newPostText.classList.add('newPostText');

  const buttonShare = document.createElement('button');
  buttonShare.textContent = 'Publicar';
  buttonShare.classList.add('share');
  buttonShare.addEventListener('click', () => {
    console.log(newPostText.value);
    navigateTo('/timeline');
  });

  const buttonCancel = document.createElement('button');
  buttonCancel.textContent = 'Cancelar';
  buttonCancel.classList.add('share');
  buttonCancel.addEventListener('click', () => {
    navigateTo('/timeline');
  });
  section.append(title, newPostText, buttonShare, buttonCancel);

  return section;
}
export default newPost;
