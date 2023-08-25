import {
  exitUser,
  readPostProfileUser,
} from '../lib/index.js';

function profile(navigateTo) {
  const mainConteiner = document.createElement('section');
  const section = document.createElement('section');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const profilePic = document.createElement('img');

  const profileSectionPost = document.createElement('div');
  const editPost = document.createElement('img');
  const deletePost = document.createElement('img');

  const menu = document.createElement('nav');
  const home = document.createElement('img');
  const profileMenu = document.createElement('img');
  const exit = document.createElement('img');

  profileSectionPost.classList.add('.profileSectionPost');

  logo.src = './img/logo.png';
  logo.width = 80;
  logo.height = 80;
  profilePic.src = './img/perfil.png';
  profilePic.width = 50;
  profilePic.height = 50;

  editPost.src = './icons/edit.svg';
  deletePost.src = './icons/delete.svg';
  home.src = './icons/home.svg';
  exit.src = './icons/exit.svg';

  profileMenu.src = './img/perfil.png';
  profileMenu.width = 50;
  profileMenu.height = 50;

  readPostProfileUser();

  home.addEventListener('click', () => {
    navigateTo('/wall');
  });
  profilePic.addEventListener('click', () => {
    navigateTo('/profile');
  });

  exit.addEventListener('click', () => {
    navigateTo('/');
  });

  editPost.addEventListener('click', () => {
    // editar post

  });

  deletePost.addEventListener('click', () => {
    // eliminar post

  });

  mainConteiner.append(header, section, profileSectionPost, menu);
  section.append(profilePic);
  profileSectionPost.append(editPost, deletePost);
  header.appendChild(logo);
  menu.append(home, profileMenu, exit);

  return mainConteiner;
}
export default profile;
