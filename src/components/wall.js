import { exitUser, createPostFn } from '../lib/index.js';

function wall(navigateTo) {
  const mainContainer = document.createElement('div');
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
  const profileMenu = document.createElement('img');
  const exit = document.createElement('img');

  const divPost = document.createElement('div');
  const divUserName = document.createElement('div');
  const divPostContent = document.createElement('div');
  const divLikeEditDelete = document.createElement('div');
  const edit = document.createElement('img');
  const deleteIcon = document.createElement('img');


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
  profileMenu.src = './img/perfil.png';
  exit.src = './icons/exit.svg';

  mainContainer.classList.add('allContent');
  section.classList.add('sectionWall');
  header.classList.add('header');
  logo.classList.add('logoWall');
  profilePic.classList.add('profilePic');
  createPost.classList.add('createPost');
  createPost.setAttribute('required', '');
  createPost.setAttribute('autocapitalize', 'sentences');
  post.classList.add('post');
  userName.classList.add('userName');
  postContent.classList.add('postContent');
  like.classList.add('like');
  countLikes.classList.add('countLikes');
  menu.classList.add('menu');
  home.classList.add('home');
  profileMenu.classList.add('profileMenu');
  exit.classList.add('exit');

  mainContainer.append(section, header, post, menu);
  section.append(header, profilePic, formPost);
  header.appendChild(logo);
  post.append(userName, postContent, like, countLikes);
  formPost.append(createPost, postBtn);
  menu.append(home, profileMenu, exit);

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
  });
  return mainContainer;
}

export default wall;
