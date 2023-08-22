import { exitUser, createPostFn } from '../lib/index.js';

function wall(navigateTo) {
  const mainContainer = document.createElement('section');
  const section = document.createElement('section');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const profilePic = document.createElement('img');
  const createPost = document.createElement('textarea');

  const post = document.createElement('div');
  const userName = document.createElement('h3');
  const postContent = document.createElement('p');
  const like = document.createElement('img');
  const countLikes = document.createElement('p');

  const menu = document.createElement('nav');
  const home = document.createElement('img');
  const profile = document.createElement('img');
  const exit = document.createElement('img');

  logo.src = './img/logo.png';
  profilePic.src = './img/perfil.png';
  createPost.placeholder = '¿Cuál fue el último lugar que visitaste?';

  const formPost = document.createElement('form');
  const postBtn = document.createElement('button');
  postBtn.textContent = 'Publicar';

  like.src = './icons/plane.svg';
  countLikes.textContent = '0';
  home.src = './icons/home.svg';
  profilePic.width = 50;
  exit.src = './icons/exit.svg';

  exit.classList.add('exit');

  mainContainer.append(section, post, header, menu, formPost);
  menu.append(home, profile, exit);
  section.append(header, profilePic, formPost, menu);
  formPost.append(createPost, postBtn);
  post.append(userName, postContent, like, countLikes);
  header.appendChild(logo);

  home.addEventListener('click', () => {
    navigateTo('/wall');
  });

  profilePic.addEventListener('click', () => {
    navigateTo('/profile');
  });

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    const alertlogOut = (boolean) => {
      if (boolean) {
        navigateTo('/');
      }
    };
    exitUser(alertlogOut);
  });

  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = createPost.value;

    await createPostFn(content);
    console.log(content);
    formPost.reset();
    navigateTo('/wall');
  })
  return mainContainer;
}

export default wall;
