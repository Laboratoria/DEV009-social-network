import { signOutSession } from '../lib/index.js';

function timeline(navigateTo) {
  const main = document.createElement('main');

  const title = document.createElement('h2');
  title.textContent = 'SpookyVerse';

  const menu = document.createElement('nav');

  const profile = document.createElement('a');
  profile.setAttribute('href', '');
  profile.textContent = 'Mi Perfil';

  const userPosts = document.createElement('a');
  userPosts.setAttribute('href', '');
  userPosts.textContent = 'Mis Posts';

  const signOutBtn = document.createElement('button');
  signOutBtn.className = 'btn-sign-out';
  signOutBtn.textContent = 'Cerrar sesión';
  signOutBtn.addEventListener('click', () => {
    signOutSession()
      .then(() => {
        navigateTo('/');
      })
      .catch((error) => {
        throw error;
      });
  });

  const section = document.createElement('section');
  section.className = 'main-section';

  const postTitle = document.createElement('input');
  postTitle.setAttribute('type', 'text');
  postTitle.setAttribute('placeholder', 'Ingrese un titulo');

  const postBody = document.createElement('input');
  postBody.setAttribute('type', 'textarea');
  postBody.setAttribute('placeholder', 'Escribe tu historia aqui...');

  const btnReturn = document.createElement('button');
  btnReturn.className = 'btn-return';
  btnReturn.textContent = 'Volver';
  btnReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  const btnPost = document.createElement('button');
  btnPost.className = 'btn-post';
  btnPost.textContent = 'Post';

  section.append(postTitle, postBody, btnReturn, btnPost);
  main.append(title, menu, section);
  menu.append(profile, userPosts, signOutBtn);

  return main;
}

export default timeline;
